const state = {
  documents: [],
  tags: [],
  categories: [],
  documentGroups: [],
  challengeGroups: [],
  selected: null,
  currentTags: [],
  assets: [],
}

const maxAssetTotalSize = 80 * 1024 * 1024

const $ = (id) => document.getElementById(id)
const fields = {
  collection: $('collection'),
  title: $('title'),
  slug: $('slug'),
  category: $('category'),
  groupTitle: $('groupTitle'),
  groupSlug: $('groupSlug'),
  excerpt: $('excerpt'),
  order: $('order'),
  dueAt: $('dueAt'),
  difficulty: $('difficulty'),
  sequence: $('sequence'),
  cadence: $('cadence'),
  isPublished: $('isPublished'),
  isTop: $('isTop'),
  content: $('content'),
}

function setStatus(text, type = '') {
  const status = $('status')
  const statusBar = $('statusBar')
  status.textContent = text
  status.className = type
  statusBar.textContent = text
  statusBar.className = `status-bar ${type}`
}

function slugify(text) {
  const slug = text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/[\u4e00-\u9fa5]/g, '')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
  return slug
}

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n)?/)
  if (!match) return { data: {}, content: markdown }

  const data = {}
  const lines = match[1].split(/\r?\n/)
  let currentArrayKey = ''
  for (const line of lines) {
    const arrayItem = line.match(/^\s*-\s+(.+)$/)
    if (arrayItem && currentArrayKey) {
      data[currentArrayKey] ??= []
      data[currentArrayKey].push(arrayItem[1].trim().replace(/^['"]|['"]$/g, ''))
      continue
    }

    const pair = line.match(/^([A-Za-z][\w-]*)\s*:\s*(.*)$/)
    if (!pair) continue
    const [, key, rawValue] = pair
    const value = rawValue.trim()
    currentArrayKey = value === '' ? key : ''
    if (value === '') {
      data[key] = []
      continue
    }
    if (value === 'true' || value === 'false') data[key] = value === 'true'
    else data[key] = value.replace(/^['"]|['"]$/g, '')
  }

  return { data, content: markdown.slice(match[0].length) }
}

function applyImportedMarkdown(filename, markdown) {
  const parsed = parseFrontmatter(markdown)
  const data = parsed.data
  fields.content.value = parsed.content

  if (data.collection && ['posts', 'documents', 'challenges'].includes(data.collection)) fields.collection.value = data.collection
  if (data.title) fields.title.value = data.title
  if (data.slug) fields.slug.value = data.slug
  if (data.category) fields.category.value = data.category
  if (data.groupTitle) fields.groupTitle.value = data.groupTitle
  if (data.groupSlug) fields.groupSlug.value = data.groupSlug
  if (data.excerpt) fields.excerpt.value = data.excerpt
  if (data.order) fields.order.value = data.order
  if (data.dueAt) fields.dueAt.value = data.dueAt
  if (data.difficulty) fields.difficulty.value = data.difficulty
  if (data.sequence) fields.sequence.value = data.sequence
  if (data.cadence) fields.cadence.value = data.cadence
  if (typeof data.isPublished === 'boolean') fields.isPublished.checked = data.isPublished
  if (typeof data.isTop === 'boolean') fields.isTop.checked = data.isTop
  if (Array.isArray(data.tags)) state.currentTags = [...new Set(data.tags.map(String).filter(Boolean))]

  if (!fields.title.value) fields.title.value = filename.replace(/\.(md|markdown)$/i, '')
  if (!fields.slug.value) fields.slug.value = slugify(fields.title.value) || slugify(filename.replace(/\.(md|markdown)$/i, ''))

  renderTags()
  renderTagSuggestions()
  syncVisibility()
  setStatus(`已导入 Markdown：${filename}`, 'success')
}

function renderTags() {
  const tagBox = $('tagBox')
  tagBox.querySelectorAll('.tag').forEach((item) => item.remove())
  for (const tag of state.currentTags) {
    const chip = document.createElement('button')
    chip.type = 'button'
    chip.className = 'tag'
    chip.innerHTML = `<span>${tag}</span><b>×</b>`
    chip.addEventListener('click', () => {
      state.currentTags = state.currentTags.filter((item) => item !== tag)
      renderTags()
      renderTagSuggestions()
    })
    tagBox.insertBefore(chip, $('tagInput'))
  }
}

function addTag(tag) {
  const normalized = tag.trim()
  if (!normalized || state.currentTags.includes(normalized)) return
  state.currentTags.push(normalized)
  $('tagInput').value = ''
  renderTags()
  renderTagSuggestions()
}

function commitPendingTag() {
  addTag($('tagInput').value)
}

function renderTagSuggestions() {
  const wrap = $('tagSuggestions')
  const available = state.tags.filter((tag) => !state.currentTags.includes(tag))
  wrap.innerHTML = available.length ? '<span>已有标签</span>' : ''
  for (const tag of available) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'suggestion-chip'
    button.textContent = tag
    button.addEventListener('click', () => addTag(tag))
    wrap.appendChild(button)
  }
}

function renderGroupSuggestions() {
  const collection = fields.collection.value
  const groups = collection === 'documents' ? state.documentGroups : collection === 'challenges' ? state.challengeGroups : []
  const wrap = $('groupChips')
  wrap.innerHTML = groups.length ? '<span>已有集合</span>' : ''
  for (const group of groups) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'suggestion-chip'
    button.textContent = group.title
    button.addEventListener('click', () => {
      fields.groupTitle.value = group.title
      fields.groupSlug.value = group.slug
    })
    wrap.appendChild(button)
  }
}

function syncVisibility() {
  const collection = fields.collection.value
  $('categoryField').classList.toggle('hidden', collection !== 'posts')
  $('groupField').classList.toggle('hidden', collection === 'posts')
  document.querySelectorAll('.document-only').forEach((item) => item.classList.toggle('hidden', collection !== 'documents'))
  document.querySelectorAll('.challenge-only').forEach((item) => item.classList.toggle('hidden', collection !== 'challenges'))
  document.querySelectorAll('.post-only').forEach((item) => item.classList.toggle('hidden', collection !== 'posts'))

  const groups = collection === 'documents' ? state.documentGroups : state.challengeGroups
  $('groupOptions').innerHTML = groups.map((group) => `<option value="${group.title}" data-slug="${group.slug}"></option>`).join('')
  renderGroupSuggestions()
}

function fillOptions() {
  $('tagOptions').innerHTML = state.tags.map((tag) => `<option value="${tag}"></option>`).join('')
  $('categoryOptions').innerHTML = state.categories.map((category) => `<option value="${category}"></option>`).join('')
}

function renderList() {
  const keyword = $('searchInput').value.trim().toLowerCase()
  const list = $('contentList')
  const documents = state.documents.filter((item) =>
    [item.title, item.slug, item.category, item.groupTitle, item.groupSlug, ...item.tags].join(' ').toLowerCase().includes(keyword),
  )
  list.innerHTML = ''
  for (const item of documents) {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'content-item'
    button.innerHTML = `
      <strong>${item.title || item.slug}</strong>
      <span>${item.collection} / ${item.groupSlug || item.category || 'root'} / ${item.slug}</span>
    `
    button.addEventListener('click', () => loadDocument(item))
    list.appendChild(button)
  }
}

function resetForm() {
  state.selected = null
  state.currentTags = []
  state.assets = []
  fields.collection.value = 'posts'
  fields.title.value = ''
  fields.slug.value = ''
  fields.category.value = ''
  fields.groupTitle.value = ''
  fields.groupSlug.value = ''
  fields.excerpt.value = ''
  fields.order.value = '1'
  fields.dueAt.value = ''
  fields.difficulty.value = 'easy'
  fields.sequence.value = '1'
  fields.cadence.value = 'weekly'
  fields.isPublished.checked = true
  fields.isTop.checked = false
  fields.content.value = ''
  $('assetImport').value = ''
  renderAssets()
  renderTags()
  renderTagSuggestions()
  syncVisibility()
  $('deleteBtn').disabled = true
  setStatus('已准备新建内容')
}

function loadDocument(item) {
  state.selected = item
  state.currentTags = [...item.tags]
  state.assets = []
  fields.collection.value = item.collection
  fields.title.value = item.title
  fields.slug.value = item.slug
  fields.category.value = item.category || ''
  fields.groupTitle.value = item.groupTitle || ''
  fields.groupSlug.value = item.groupSlug || ''
  fields.excerpt.value = item.excerpt || ''
  fields.order.value = item.order || 1
  fields.dueAt.value = item.dueAt || ''
  fields.difficulty.value = item.difficulty || 'easy'
  fields.sequence.value = item.sequence || 1
  fields.cadence.value = item.cadence || 'weekly'
  fields.isPublished.checked = item.isPublished !== false
  fields.isTop.checked = Boolean(item.isTop)
  fields.content.value = item.content || ''
  $('assetImport').value = ''
  renderAssets()
  renderTags()
  renderTagSuggestions()
  syncVisibility()
  $('deleteBtn').disabled = false
  setStatus(`正在编辑：${item.path}`)
}

async function refresh() {
  const response = await fetch('/api/contents')
  const data = await response.json()
  Object.assign(state, data)
  fillOptions()
  syncVisibility()
  renderTagSuggestions()
  renderList()
}

function validateBeforeSave(data) {
  if (!data.title.trim()) return '请填写标题'
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug)) return '请填写合法 slug：只能使用小写英文、数字、连字符'
  if (data.collection === 'posts' && !data.category.trim()) return '博客文章必须填写分类'
  if (data.collection !== 'posts') {
    if (!data.groupTitle.trim()) return '请填写集合名称'
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.groupSlug)) return '请填写合法集合 slug'
  }
  if (data.collection === 'challenges' && !data.dueAt) return '训练计划必须填写截止日期'
  return ''
}

function payload() {
  commitPendingTag()
  return {
    originalPath: state.selected?.path,
    collection: fields.collection.value,
    title: fields.title.value,
    slug: fields.slug.value,
    category: fields.category.value,
    tags: state.currentTags,
    excerpt: fields.excerpt.value,
    isTop: fields.isTop.checked,
    isPublished: fields.isPublished.checked,
    groupTitle: fields.groupTitle.value,
    groupSlug: fields.groupSlug.value,
    order: Number(fields.order.value) || 1,
    dueAt: fields.dueAt.value,
    difficulty: fields.difficulty.value,
    sequence: Number(fields.sequence.value) || 1,
    cadence: fields.cadence.value,
    content: rewriteAssetLinks(fields.content.value),
    assets: state.assets,
  }
}

function normalizeAssetName(name) {
  return name
    .split(/[\\/]+/)
    .map((segment) => segment.trim())
    .filter(Boolean)
    .map((segment) => segment.replace(/[^\w\u4e00-\u9fa5.-]/g, '-'))
    .join('/')
}

function stripCommonAssetRoot(names) {
  const normalized = names.map(normalizeAssetName)
  const splitPaths = normalized.map((name) => name.split('/'))
  if (splitPaths.length === 0) return []

  let commonLength = 0
  while (
    splitPaths.every((segments) => segments.length > commonLength + 1) &&
    splitPaths.every((segments) => segments[commonLength] === splitPaths[0][commonLength])
  ) {
    commonLength += 1
  }

  return splitPaths.map((segments) => segments.slice(commonLength).join('/'))
}

function assetUrlFor(path) {
  const filename = normalizeAssetName(path.split(/[\\/]+/).pop() || path)
  const match = state.assets.find((asset) => {
    const normalized = normalizeAssetName(asset.name)
    return normalized === normalizeAssetName(path) || normalized.endsWith(`/${filename}`) || normalized === filename
  })
  const finalPath = match ? normalizeAssetName(match.name) : normalizeAssetName(path)
  return `/content-assets/${fields.slug.value}/${finalPath}`
}

function shouldRewriteLink(url) {
  return (
    url &&
    !url.startsWith('/') &&
    !url.startsWith('#') &&
    !/^[a-z][a-z0-9+.-]*:/i.test(url)
  )
}

function rewriteAssetLinks(markdown) {
  if (!fields.slug.value || !state.assets.length) return markdown
  return markdown
    .replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+(['"][^'"]*['"]))?\)/g, (full, alt, url, title = '') => {
      return shouldRewriteLink(url) ? `![${alt}](${assetUrlFor(url)}${title ? ` ${title}` : ''})` : full
    })
    .replace(/<img\b([^>]*?)\bsrc=["']([^"']+)["']([^>]*)>/gi, (full, before, url, after) => {
      return shouldRewriteLink(url) ? `<img${before}src="${assetUrlFor(url)}"${after}>` : full
    })
}

async function save() {
  const data = payload()
  const message = validateBeforeSave(data)
  if (message) {
    setStatus(message, 'error')
    return
  }
  setStatus('保存中...')
  $('saveBtn').disabled = true
  try {
    const response = await fetch('/api/contents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    if (!response.ok) {
      setStatus(result.message || '保存失败', 'error')
      return
    }
    await refresh()
    const saved = state.documents.find((item) => item.path === result.path)
    if (saved) loadDocument(saved)
    setStatus(`保存成功：${result.path}`, 'success')
  } catch (error) {
    setStatus(`保存失败：${error.message || '无法连接 update 服务'}`, 'error')
  } finally {
    $('saveBtn').disabled = false
  }
}

async function deleteCurrent() {
  if (!state.selected) {
    setStatus('请先从左侧选择一篇已有内容', 'error')
    return
  }
  const ok = window.confirm(`确定删除这篇内容吗？\n\n${state.selected.title || state.selected.slug}\n${state.selected.path}\n\n对应的图片目录也会一起删除。`)
  if (!ok) return

  setStatus('删除中...')
  $('deleteBtn').disabled = true
  try {
    const response = await fetch('/api/contents', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: state.selected.path, slug: state.selected.slug }),
    })
    const result = await response.json()
    if (!response.ok) {
      setStatus(result.message || '删除失败', 'error')
      return
    }
    await refresh()
    resetForm()
    setStatus('删除成功', 'success')
  } catch (error) {
    setStatus(`删除失败：${error.message || '无法连接 update 服务'}`, 'error')
  } finally {
    $('deleteBtn').disabled = !state.selected
  }
}

$('tagInput').addEventListener('keydown', (event) => {
  if (event.isComposing) return
  if (!['Enter', ',', '，'].includes(event.key)) return
  event.preventDefault()
  commitPendingTag()
})

$('tagInput').addEventListener('blur', () => {
  commitPendingTag()
})

$('addTagBtn').addEventListener('click', commitPendingTag)

fields.collection.addEventListener('change', () => {
  syncVisibility()
  renderTagSuggestions()
})
fields.title.addEventListener('input', () => {
  if (!fields.slug.value || !state.selected) fields.slug.value = slugify(fields.title.value)
})
fields.slug.addEventListener('input', renderAssets)
fields.groupTitle.addEventListener('input', () => {
  const collection = fields.collection.value
  const groups = collection === 'documents' ? state.documentGroups : state.challengeGroups
  const existing = groups.find((group) => group.title === fields.groupTitle.value)
  fields.groupSlug.value = existing ? existing.slug : slugify(fields.groupTitle.value)
})
$('searchInput').addEventListener('input', renderList)
$('newBtn').addEventListener('click', resetForm)
$('saveBtn').addEventListener('click', save)
$('deleteBtn').addEventListener('click', deleteCurrent)
$('mdImport').addEventListener('click', () => {
  $('mdImport').value = ''
})
$('mdImport').addEventListener('change', async (event) => {
  try {
    const file = event.target.files?.[0]
    if (!file) return
    if (!/\.(md|markdown)$/i.test(file.name)) {
      setStatus('请选择 .md 或 .markdown 文件', 'error')
      return
    }
    applyImportedMarkdown(file.name, await file.text())
  } catch (error) {
    setStatus(`导入失败：${error.message || '无法读取 Markdown 文件'}`, 'error')
  }
})

function renderAssets() {
  const hint = $('assetHint')
  if (!state.assets.length) {
    hint.textContent = '未选择图片。选择图片后会保存到 server/content-assets/<slug>/。'
    return
  }
  hint.textContent = `已选择 ${state.assets.length} 张图片，保存后可在 Markdown 中用 /content-assets/${fields.slug.value || '<slug>'}/文件名 引用。`
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result))
    reader.addEventListener('error', reject)
    reader.readAsDataURL(file)
  })
}

$('assetImport').addEventListener('change', async (event) => {
  const files = [...(event.target.files || [])]
  const totalSize = files.reduce((sum, file) => sum + file.size, 0)
  if (totalSize > maxAssetTotalSize) {
    state.assets = []
    renderAssets()
    setStatus('图片总大小超过 80MB，请分批上传或压缩图片', 'error')
    return
  }
  const assetNames = stripCommonAssetRoot(files.map((file) => file.webkitRelativePath || file.name))
  state.assets = await Promise.all(
    files.map(async (file, index) => ({
      name: assetNames[index],
      data: await readFileAsDataUrl(file),
    })),
  )
  fields.content.value = rewriteAssetLinks(fields.content.value)
  renderAssets()
})

refresh().then(resetForm).catch((error) => setStatus(error.message, 'error'))
