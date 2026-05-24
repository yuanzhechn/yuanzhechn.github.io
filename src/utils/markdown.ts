import type { TableOfContent } from '@/types'

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export function renderMarkdown(md: string): string {
  let html = md

  const codeBlocks: string[] = []
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_match, lang, code: string) => {
    const idx = codeBlocks.length
    codeBlocks.push(
      `<pre class="code-block"><code class="language-${escapeHtml(lang || 'text')}">${escapeHtml(code.trim())}</code></pre>`,
    )
    return `%%CODEBLOCK_${idx}%%`
  })

  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')

  html = html
    .split('\n')
    .map(line => {
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/)
      if (headingMatch && headingMatch[1] && headingMatch[2]) {
        const level = headingMatch[1].length
        const text = headingMatch[2]
        const id = slugifyHeading(text)
        return `<h${level} id="${id}">${text}</h${level}>`
      }
      if (/^>\s/.test(line)) {
        return `<blockquote>${line.replace(/^>\s?/, '')}</blockquote>`
      }
      if (/^[-*]\s/.test(line)) {
        return `<li>${line.replace(/^[-*]\s/, '')}</li>`
      }
      if (/^\d+\.\s/.test(line)) {
        return `<li>${line.replace(/^\d+\.\s/, '')}</li>`
      }
      if (/^\|.*\|$/.test(line) && !line.includes('---')) {
        const cells = line
          .split('|')
          .filter(Boolean)
          .map(cell => cell.trim())
        const isHeader = /^[-:]+$/.test(cells[0] || '')
        if (isHeader) return ''
        const tag = isHeader ? 'th' : 'td'
        return `<tr>${cells.map(c => `<${tag}>${c}</${tag}>`).join('')}</tr>`
      }
      if (line.trim() === '') return '<br>'
      return `<p>${line}</p>`
    })
    .join('\n')

  html = html.replace(/<br>\n<blockquote>/g, '<blockquote>')
  html = html.replace(/<blockquote>([\s\S]*?)<\/blockquote>/g, (_, content) => {
    return `<blockquote>${content.trim()}</blockquote>`
  })

  html = html
    .replace(/(?:<li>.*<\/li>\n?)+/g, match => `<ul>${match}</ul>`)
    .replace(/<li>(\d+)\.? /g, '<li>')

  html = html.replace(/<br>+/g, '')
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p>\s*<\/p>/g, '')

  html = html.replace(/%%CODEBLOCK_(\d+)%%/g, (_match, idx) => codeBlocks[parseInt(idx)] ?? '')

  html = html.replace(/<(strong|em|del|a)\b/g, '<span')

  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2" loading="lazy">')
  html = html.replace(
    /(?<!!)\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  )

  html = html.replace(/<\/span>/g, '</span>')

  return html
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w-]+/g, '')
}

export function extractToc(md: string): TableOfContent[] {
  const toc: TableOfContent[] = []
  const lines = md.split('\n')
  for (const line of lines) {
    const match = line.match(/^(#{1,4})\s+(.+)$/)
    if (match && match[1] && match[2]) {
      const level = match[1].length
      const text = match[2].trim()
      const id = slugifyHeading(text)
      toc.push({ id, text, level })
    }
  }
  return toc
}
