import { Marked, type Token, type Tokens, type TokensList } from 'marked'
import type { TableOfContent } from '@/types'

const baseMarkdown = new Marked({
  breaks: true,
  gfm: true,
})

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeAttribute(value: string): string {
  return escapeHtml(value).replace(/`/g, '&#96;')
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '')
}

function safeUrl(value: string): string {
  const url = value.trim()
  if (/^(javascript|vbscript|data):/i.test(url)) return '#'
  return url
}

function isExternalUrl(value: string): boolean {
  return /^(https?:)?\/\//i.test(value)
}

export function slugifyHeading(text: string): string {
  return text
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s_-]+/gu, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function createHeadingSlugger() {
  const seen = new Map<string, number>()

  return (text: string) => {
    const base = slugifyHeading(text) || 'section'
    const count = seen.get(base) ?? 0
    seen.set(base, count + 1)
    return count === 0 ? base : `${base}-${count}`
  }
}

function textFromInlineTokens(tokens: Token[] | undefined): string {
  if (!tokens) return ''

  return tokens
    .map((token) => {
      if ('tokens' in token && Array.isArray(token.tokens)) {
        return textFromInlineTokens(token.tokens)
      }

      if ('text' in token && typeof token.text === 'string') {
        return token.type === 'html' ? stripHtml(token.text) : token.text
      }

      return ''
    })
    .join('')
    .trim()
}

function walkTokens(tokens: Token[] | TokensList, visitor: (token: Token) => void) {
  for (const token of tokens) {
    visitor(token)

    if ('tokens' in token && Array.isArray(token.tokens)) {
      walkTokens(token.tokens, visitor)
    }

    if (token.type === 'list') {
      for (const item of token.items) {
        walkTokens(item.tokens, visitor)
      }
    }
  }
}

export function renderMarkdown(md: string): string {
  const slug = createHeadingSlugger()
  const parser = new Marked({
    breaks: true,
    gfm: true,
    renderer: {
      heading({ tokens, depth }: Tokens.Heading) {
        const text = textFromInlineTokens(tokens)
        const id = slug(text)
        const body = this.parser.parseInline(tokens)

        return `<h${depth} id="${escapeAttribute(id)}" class="md-heading md-heading-${depth}"><a class="md-heading-anchor" href="#${escapeAttribute(id)}" aria-label="定位到 ${escapeAttribute(text)}"></a>${body}</h${depth}>\n`
      },
      code({ text, lang }: Tokens.Code) {
        const language = lang?.trim().split(/\s+/)[0] ?? ''
        const langAttr = language ? ` data-lang="${escapeAttribute(language)}"` : ''
        const codeClass = language ? ` class="language-${escapeAttribute(language)}"` : ''

        return `<pre class="code-block"${langAttr}><code${codeClass}>${escapeHtml(text)}</code></pre>\n`
      },
      codespan({ text }: Tokens.Codespan) {
        return `<code class="inline-code">${escapeHtml(text)}</code>`
      },
      blockquote({ tokens }: Tokens.Blockquote) {
        return `<blockquote class="md-blockquote">\n${this.parser.parse(tokens)}</blockquote>\n`
      },
      table(token: Tokens.Table) {
        const header = token.header
          .map((cell, index) =>
            this.tablecell({
              ...cell,
              align: token.align[index] ?? null,
              header: true,
            }),
          )
          .join('')
        const rows = token.rows
          .map(
            (row) =>
              `<tr>\n${row
                .map((cell, index) =>
                  this.tablecell({
                    ...cell,
                    align: token.align[index] ?? null,
                    header: false,
                  }),
                )
                .join('')}</tr>\n`,
          )
          .join('')

        return `<div class="table-wrapper"><table>\n<thead>\n<tr>\n${header}</tr>\n</thead>\n${rows ? `<tbody>\n${rows}</tbody>\n` : ''}</table></div>\n`
      },
      tablecell(token: Tokens.TableCell) {
        const tag = token.header ? 'th' : 'td'
        const align = token.align ? ` style="text-align: ${token.align}"` : ''
        return `<${tag}${align}>${this.parser.parseInline(token.tokens)}</${tag}>\n`
      },
      link({ href, title, tokens }: Tokens.Link) {
        const url = safeUrl(href)
        const titleAttr = title ? ` title="${escapeAttribute(title)}"` : ''
        const externalAttrs = isExternalUrl(url) ? ' target="_blank" rel="noopener noreferrer"' : ''

        return `<a href="${escapeAttribute(url)}"${titleAttr}${externalAttrs}>${this.parser.parseInline(tokens)}</a>`
      },
      image({ href, title, text }: Tokens.Image) {
        const url = safeUrl(href)
        const titleAttr = title ? ` title="${escapeAttribute(title)}"` : ''

        return `<img src="${escapeAttribute(url)}" alt="${escapeAttribute(text)}"${titleAttr} loading="lazy" decoding="async">`
      },
    },
  })

  return parser.parse(md, { async: false }) as string
}

export function extractToc(md: string): TableOfContent[] {
  const toc: TableOfContent[] = []
  const slug = createHeadingSlugger()
  const tokens = baseMarkdown.lexer(md)

  walkTokens(tokens, (token) => {
    if (token.type === 'heading' && token.depth <= 4) {
      const text = textFromInlineTokens(token.tokens) || token.text
      toc.push({ id: slug(text), text, level: token.depth })
    }
  })

  return toc
}
