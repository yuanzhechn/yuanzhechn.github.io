<template>
  <DefaultLayout>
    <main class="admin-page">
      <header class="admin-heading">
        <div>
          <p>ADMIN CONSOLE</p>
          <h1>{{ editingSlug ? '修订内容' : '内容工作台' }}</h1>
        </div>
        <div v-if="authenticated" class="heading-actions">
          <button v-if="editingSlug" type="button" class="quiet-button" @click="startNew">新建</button>
          <button type="button" class="quiet-button" @click="handleLogout">退出登录</button>
        </div>
      </header>

      <section v-if="!checked" class="state-panel"><LoadingSpinner /></section>

      <form v-else-if="!authenticated" class="login-panel" @submit.prevent="handleLogin">
        <div>
          <h2>管理员认证</h2>
          <p>登录状态通过安全 Cookie 维护，密码不会写入浏览器存储。</p>
        </div>
        <label>
          <span>管理员密码</span>
          <input v-model="password" type="password" autocomplete="current-password" required />
        </label>
        <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
        <button type="submit" class="primary-button" :disabled="submitting">
          {{ submitting ? '正在验证...' : '进入内容工作台' }}
        </button>
      </form>

      <form v-else class="editor-panel" @submit.prevent="save">
        <section class="fields-panel">
          <div class="section-heading">
            <div>
              <span>内容字段</span>
              <small>发布时间与更新时间由服务器自动维护</small>
            </div>
            <label class="file-button">
              导入 Markdown
              <input type="file" accept=".md,text/markdown,text/plain" @change="importMarkdown" />
            </label>
            <label class="file-button">
              导入 Markdown 文件夹
              <input type="file" webkitdirectory directory multiple @change="importMarkdownFolder" />
            </label>
          </div>

          <div class="field-grid">
            <label>
              <span>内容类型</span>
              <select v-model="form.collection" :disabled="Boolean(editingSlug)">
                <option value="posts">博客文章</option>
                <option value="challenges">训练计划</option>
                <option value="documents">学习文档</option>
              </select>
            </label>
            <label>
              <span>标题</span>
              <input v-model.trim="form.title" required />
            </label>
            <label>
              <span>Slug</span>
              <input v-model.trim="form.slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" :disabled="Boolean(editingSlug)" />
            </label>
            <label v-if="form.collection === 'posts'">
              <span>分类</span>
              <input v-model.trim="form.category" required placeholder="frontend" />
            </label>
            <template v-if="form.collection === 'documents'">
              <label>
                <span>文档集</span>
                <select
                  v-model="selectedDocumentGroupSlug"
                  :disabled="Boolean(editingSlug)"
                  required
                  @change="selectDocumentGroup"
                >
                  <option value="">请选择已有文档集</option>
                  <option v-for="group in documentGroups" :key="group.slug" :value="group.slug">
                    {{ group.title }}
                  </option>
                  <option value="__new__">+ 新建文档集</option>
                </select>
              </label>
              <label v-if="selectedDocumentGroupSlug === '__new__'">
                <span>新文档集名称</span>
                <input v-model.trim="form.groupTitle" required placeholder="例如：数据库学习" />
              </label>
              <label v-if="selectedDocumentGroupSlug === '__new__'">
                <span>新文档集 Slug</span>
                <input v-model.trim="form.groupSlug" required placeholder="database-learning" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" />
              </label>
              <label>
                <span>章节顺序</span>
                <input v-model.number="form.order" type="number" min="1" />
              </label>
            </template>
            <template v-if="form.collection === 'challenges'">
              <label>
                <span>训练集</span>
                <select
                  v-model="selectedChallengeGroupSlug"
                  :disabled="Boolean(editingSlug)"
                  required
                  @change="selectChallengeGroup"
                >
                  <option value="">请选择已有训练集</option>
                  <option v-for="group in challengeGroups" :key="group.slug" :value="group.slug">
                    {{ group.title }}
                  </option>
                  <option value="__new__">+ 新建训练集</option>
                </select>
              </label>
              <label v-if="selectedChallengeGroupSlug === '__new__'">
                <span>新训练集名称</span>
                <input v-model.trim="form.groupTitle" required placeholder="例如：JavaScript 与算法训练" />
              </label>
              <label v-if="selectedChallengeGroupSlug === '__new__'">
                <span>新训练集 Slug</span>
                <input v-model.trim="form.groupSlug" required placeholder="javascript-algorithm-training" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" />
              </label>
              <label>
                <span>难度</span>
                <select v-model="form.difficulty">
                  <option value="easy">简单</option>
                  <option value="medium">中等</option>
                  <option value="hard">困难</option>
                </select>
              </label>
              <label>
                <span>序号</span>
                <input v-model.number="form.sequence" type="number" min="1" required />
              </label>
              <label>
                <span>周期</span>
                <select v-model="form.cadence">
                  <option value="weekly">每周</option>
                  <option value="biweekly">每两周</option>
                  <option value="monthly">每月</option>
                  <option value="irregular">不定期</option>
                </select>
              </label>
              <label>
                <span>截止日期</span>
                <input v-model="form.dueAt" type="date" required />
              </label>
            </template>
            <div class="tag-field wide-field">
              <span class="field-label">标签</span>
              <div class="tag-input" @click="focusTagInput">
                <button
                  v-for="tag in form.tags"
                  :key="tag"
                  type="button"
                  class="selected-tag"
                  :aria-label="`删除标签 ${tag}`"
                  @click.stop="removeTag(tag)"
                >
                  {{ tag }} <span aria-hidden="true">×</span>
                </button>
                <input
                  ref="tagInputElement"
                  v-model="tagDraft"
                  type="text"
                  placeholder="输入后按 Enter 创建标签"
                  @keydown="handleTagKeydown"
                  @blur="commitTag"
                />
              </div>
              <div v-if="availableTags.length" class="existing-tags">
                <span>已有标签</span>
                <button
                  v-for="tag in availableTags"
                  :key="tag.id"
                  type="button"
                  class="existing-tag"
                  @click="addTag(tag.name)"
                >
                  {{ tag.name }}
                  <small>{{ tag.postCount }}</small>
                </button>
              </div>
            </div>
            <label class="wide-field">
              <span>摘要</span>
              <textarea v-model.trim="form.excerpt" rows="2" />
            </label>
          </div>

          <div class="toggle-row">
            <label><input v-model="form.isPublished" type="checkbox" /> 对游客发布</label>
            <label v-if="form.collection === 'posts'"><input v-model="form.isTop" type="checkbox" /> 置顶文章</label>
          </div>
        </section>

        <section class="markdown-panel">
          <div class="editor-tabs" role="tablist">
            <button type="button" :class="{ active: editorMode === 'write' }" @click="editorMode = 'write'">编辑</button>
            <button type="button" :class="{ active: editorMode === 'preview' }" @click="editorMode = 'preview'">预览</button>
          </div>
          <textarea v-if="editorMode === 'write'" v-model="form.content" class="markdown-editor" spellcheck="false" required />
          <MarkdownRenderer v-else class="markdown-preview" :content="form.content || '*暂无内容*'" />
        </section>

        <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="form-success">{{ successMessage }}</p>
        <p v-if="pendingAssetFiles.length" class="asset-hint">
          已暂存 {{ pendingAssetFiles.length }} 个资源文件，保存后会上传到后端。
        </p>
        <footer class="save-bar">
          <span>{{ editingSlug ? `正在编辑 ${editingSlug}` : '新内容' }}</span>
          <button type="submit" class="primary-button" :disabled="submitting">
            {{ submitting ? '正在保存...' : editingSlug ? '保存修订' : '发布到后端' }}
          </button>
        </footer>
      </form>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import MarkdownRenderer from '@/components/common/MarkdownRenderer.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import { adminApi, type AdminCollection, type EditableContent } from '@/api/modules/admin'
import { apiBaseUrl } from '@/api/client'
import { useAdminSession } from '@/composables/useAdminSession'
import { useTagStore } from '@/stores/tag'
import { documentApi } from '@/api/modules/document'
import { challengeApi } from '@/api/modules/challenge'
import type { ChallengeGroup, DocumentGroup } from '@/types'

const route = useRoute()
const router = useRouter()
const tagStore = useTagStore()
const { authenticated, checked, checkSession, login, logout } = useAdminSession()
const password = ref('')
const submitting = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const editorMode = ref<'write' | 'preview'>('write')
const editingSlug = ref('')
const tagDraft = ref('')
const tagInputElement = ref<HTMLInputElement>()
const documentGroups = ref<DocumentGroup[]>([])
const challengeGroups = ref<ChallengeGroup[]>([])
const selectedDocumentGroupSlug = ref('')
const selectedChallengeGroupSlug = ref('')
const pendingAssetFiles = ref<Array<{ file: File; relativePath: string }>>([])

const blankForm = (): EditableContent => ({
  collection: 'posts',
  title: '',
  slug: '',
  category: '',
  groupSlug: '',
  groupTitle: '',
  order: 1,
  tags: [],
  excerpt: '',
  isTop: false,
  isPublished: true,
  difficulty: 'medium',
  sequence: 1,
  cadence: 'weekly',
  dueAt: '',
  content: '',
})
const form = reactive<EditableContent>(blankForm())
const availableTags = computed(() =>
  tagStore.tags.filter((tag) => !form.tags.includes(tag.name)),
)

function addTag(value: string) {
  const tags = value
    .split(/[,，]/)
    .map((tag) => tag.trim())
    .filter(Boolean)
  form.tags = [...new Set([...form.tags, ...tags])]
  tagDraft.value = ''
  tagInputElement.value?.focus()
}

function commitTag() {
  if (tagDraft.value.trim()) addTag(tagDraft.value)
}

function removeTag(tag: string) {
  form.tags = form.tags.filter((item) => item !== tag)
}

function handleTagKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ',' || event.key === '，') {
    event.preventDefault()
    commitTag()
    return
  }
  if (event.key === 'Backspace' && !tagDraft.value && form.tags.length) {
    event.preventDefault()
    form.tags = form.tags.slice(0, -1)
  }
}

function focusTagInput() {
  tagInputElement.value?.focus()
}

function selectDocumentGroup() {
  if (selectedDocumentGroupSlug.value === '__new__') {
    form.groupSlug = ''
    form.groupTitle = ''
    return
  }
  const existing = documentGroups.value.find(
    (group) => group.slug === selectedDocumentGroupSlug.value,
  )
  form.groupSlug = existing?.slug || ''
  form.groupTitle = existing?.title || ''
}

function selectChallengeGroup() {
  if (selectedChallengeGroupSlug.value === '__new__') {
    form.groupSlug = ''
    form.groupTitle = ''
    return
  }
  const existing = challengeGroups.value.find(
    (group) => group.slug === selectedChallengeGroupSlug.value,
  )
  form.groupSlug = existing?.slug || ''
  form.groupTitle = existing?.title || ''
}

function applyContent(content: EditableContent) {
  Object.assign(form, blankForm(), content)
  selectedDocumentGroupSlug.value =
    content.collection === 'documents' ? content.groupSlug || '' : ''
  selectedChallengeGroupSlug.value =
    content.collection === 'challenges' ? content.groupSlug || '' : ''
}

async function loadEditTarget() {
  const slug = typeof route.query.edit === 'string' ? route.query.edit : ''
  const requestedCollection =
    route.query.collection === 'documents' || route.query.collection === 'challenges'
      ? route.query.collection
      : 'posts'
  if (!slug || !authenticated.value) return
  try {
    applyContent(await adminApi.getContent(requestedCollection, slug))
    editingSlug.value = slug
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '无法读取文章'
  }
}

async function handleLogin() {
  submitting.value = true
  errorMessage.value = ''
  try {
    await login(password.value)
    password.value = ''
    await loadEditTarget()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '登录失败'
  } finally {
    submitting.value = false
  }
}

async function handleLogout() {
  await logout()
  startNew()
}

function startNew() {
  editingSlug.value = ''
  applyContent(blankForm())
  selectedDocumentGroupSlug.value = ''
  selectedChallengeGroupSlug.value = ''
  pendingAssetFiles.value = []
  errorMessage.value = ''
  successMessage.value = ''
  void router.replace({ name: 'admin-publish' })
}

async function importMarkdown(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  form.content = await file.text()
  if (!form.slug) form.slug = file.name.replace(/\.md$/i, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  pendingAssetFiles.value = []
}

const imageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp'])

function fileExtension(path: string) {
  const index = path.lastIndexOf('.')
  return index >= 0 ? path.slice(index).toLowerCase() : ''
}

function normalizeBrowserPath(path: string) {
  return path.replace(/\\/g, '/').replace(/^\/+/, '')
}

function relativeToMarkdown(path: string, markdownDirectory: string) {
  const normalizedPath = normalizeBrowserPath(path)
  return markdownDirectory && normalizedPath.startsWith(`${markdownDirectory}/`)
    ? normalizedPath.slice(markdownDirectory.length + 1)
    : normalizedPath.split('/').pop() || normalizedPath
}

function assetPublicPrefix(collection: AdminCollection, slug: string, groupSlug?: string) {
  return collection === 'documents' || collection === 'challenges'
    ? `${apiBaseUrl}/content-assets/${collection}/${groupSlug}/${slug}/assets`
    : `${apiBaseUrl}/content-assets/${collection}/${slug}/assets`
}

function rewriteMarkdownAssetLinks(content: string, assetPathMap: Map<string, string>) {
  return content.replace(/(!\[[^\]]*]\()([^)#?]+)((?:[?#][^)]*)?\))/g, (match, start, rawPath, suffix) => {
    const decodedPath = decodeURIComponent(String(rawPath).trim())
    if (/^(?:[a-z]+:)?\/\//i.test(decodedPath) || decodedPath.startsWith('/') || decodedPath.startsWith('#')) return match
    const normalizedPath = normalizeBrowserPath(decodedPath).replace(/^\.\//, '')
    const rewritten = assetPathMap.get(normalizedPath) || assetPathMap.get(normalizedPath.split('/').pop() || '')
    return rewritten ? `${start}${encodeURI(rewritten)}${suffix}` : match
  })
}

async function importMarkdownFolder(event: Event) {
  const input = event.target as HTMLInputElement
  const files = Array.from(input.files || [])
  input.value = ''
  if (!files.length) return

  const markdownFiles = files.filter((file) => file.name.toLowerCase().endsWith('.md'))
  if (markdownFiles.length !== 1) {
    errorMessage.value = markdownFiles.length
      ? '文件夹里只能放一个 Markdown 正文文件'
      : '文件夹里没有找到 Markdown 正文文件'
    return
  }

  const markdownFile = markdownFiles[0]!
  const markdownPath = normalizeBrowserPath(markdownFile.webkitRelativePath || markdownFile.name)
  const markdownDirectory = markdownPath.includes('/') ? markdownPath.slice(0, markdownPath.lastIndexOf('/')) : ''
  const assets = files
    .filter((file) => file !== markdownFile && imageExtensions.has(fileExtension(file.name)))
    .map((file) => ({
      file,
      relativePath: relativeToMarkdown(file.webkitRelativePath || file.name, markdownDirectory),
    }))

  if (!form.slug) {
    form.slug = markdownFile.name
      .replace(/\.md$/i, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const groupSlug = form.collection === 'posts' ? undefined : form.groupSlug
  const prefix = assetPublicPrefix(form.collection, form.slug, groupSlug)
  const assetPathMap = new Map<string, string>()
  for (const asset of assets) {
    assetPathMap.set(normalizeBrowserPath(asset.relativePath), `${prefix}/${normalizeBrowserPath(asset.relativePath)}`)
    assetPathMap.set(asset.file.name, `${prefix}/${normalizeBrowserPath(asset.relativePath)}`)
  }

  form.content = rewriteMarkdownAssetLinks(await markdownFile.text(), assetPathMap)
  pendingAssetFiles.value = assets
  successMessage.value = assets.length
    ? `已导入 Markdown，并识别到 ${assets.length} 个图片资源。`
    : '已导入 Markdown，未发现图片资源。'
  errorMessage.value = ''
}

async function save() {
  submitting.value = true
  errorMessage.value = ''
  successMessage.value = ''
  try {
    const result = editingSlug.value
      ? await adminApi.updateContent(form.collection, editingSlug.value, { ...form })
      : await adminApi.createContent(form.collection, { ...form })
    if (pendingAssetFiles.value.length) {
      await adminApi.uploadAssets(
        form.collection,
        result.slug,
        pendingAssetFiles.value,
        form.collection === 'posts' ? undefined : form.groupSlug,
      )
      pendingAssetFiles.value = []
    }
    editingSlug.value = result.slug
    successMessage.value = '保存成功，日期已由服务器自动更新。'
    await router.replace({ query: { edit: result.slug } })
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存失败'
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  const [, groups, trainingGroups] = await Promise.all([
    tagStore.fetchTags(),
    documentApi.listGroups(),
    challengeApi.getChallengeList(),
  ])
  documentGroups.value = groups
  challengeGroups.value = trainingGroups
  await checkSession()
  await loadEditTarget()
})
</script>

<style scoped>
.admin-page { width: min(1180px, 100%); margin: 0 auto; }
.admin-heading, .section-heading, .save-bar, .toggle-row, .heading-actions { display: flex; align-items: center; }
.admin-heading { justify-content: space-between; gap: 1rem; margin-bottom: 1.25rem; padding-bottom: 1rem; border-bottom: 1px solid var(--color-border); }
.admin-heading p { color: var(--color-primary); font-size: .72rem; font-weight: 800; }
.admin-heading h1 { margin-top: .2rem; font-size: 1.8rem; }
.heading-actions, .toggle-row { gap: .65rem; }
.login-panel, .fields-panel, .markdown-panel, .state-panel { border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); }
.login-panel { display: grid; gap: 1rem; width: min(760px, 100%); padding: 1.5rem; }
.login-panel p, .section-heading small { color: var(--color-text-secondary); }
.editor-panel { display: grid; gap: 1rem; }
.fields-panel { padding: 1rem; }
.section-heading { justify-content: space-between; gap: 1rem; margin-bottom: 1rem; }
.section-heading > div { display: grid; gap: .2rem; }
.field-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .85rem; }
label { display: grid; gap: .4rem; }
label > span { font-size: .78rem; font-weight: 700; }
input, select, textarea { width: 100%; padding: .65rem .75rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); color: var(--color-text); background: var(--color-bg); }
input, select { min-height: 42px; }
input:disabled, select:disabled { opacity: .65; cursor: not-allowed; }
.wide-field { grid-column: 1 / -1; }
.tag-field { display: grid; gap: .4rem; }
.field-label { font-size: .78rem; font-weight: 700; }
.tag-input {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: .4rem;
  min-height: 44px;
  padding: .35rem .45rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  cursor: text;
}
.tag-input:focus-within { border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 14%, transparent); }
.tag-input input { flex: 1 1 210px; width: auto; min-width: 150px; min-height: 30px; padding: .2rem; border: 0; background: transparent; outline: none; }
.selected-tag, .existing-tag {
  display: inline-flex;
  align-items: center;
  gap: .3rem;
  border: 0;
  border-radius: var(--radius-sm);
  cursor: pointer;
  white-space: nowrap;
}
.selected-tag {
  min-height: 30px;
  padding: .3rem .55rem;
  color: #fff;
  background: var(--color-primary);
  font-size: .78rem;
}
.selected-tag span { font-size: 1rem; line-height: 1; opacity: .8; }
.existing-tags { display: flex; align-items: center; flex-wrap: wrap; gap: .4rem; }
.existing-tags > span { margin-right: .15rem; color: var(--color-text-secondary); font-size: .74rem; }
.existing-tag { min-height: 28px; padding: .25rem .5rem; color: var(--color-text-secondary); background: var(--color-bg-secondary); font-size: .74rem; }
.existing-tag:hover { color: var(--color-primary); background: color-mix(in srgb, var(--color-primary) 10%, var(--color-bg-secondary)); }
.existing-tag small { min-width: 1.1rem; padding: .05rem .25rem; border-radius: 999px; color: var(--color-text-secondary); background: var(--color-surface); font-size: .64rem; }
.toggle-row { margin-top: 1rem; }
.toggle-row label { display: flex; align-items: center; font-size: .82rem; }
.toggle-row input { width: 17px; min-height: 17px; }
.markdown-panel { min-height: 520px; overflow: hidden; }
.editor-tabs { display: flex; gap: .25rem; padding: .5rem; border-bottom: 1px solid var(--color-border); background: var(--color-bg-secondary); }
.editor-tabs button { padding: .45rem .8rem; border: 0; border-radius: var(--radius-sm); color: var(--color-text-secondary); background: transparent; cursor: pointer; }
.editor-tabs button.active { color: var(--color-text); background: var(--color-surface); box-shadow: 0 1px 3px rgb(0 0 0 / 8%); }
.markdown-editor { display: block; min-height: 470px; resize: vertical; border: 0; border-radius: 0; padding: 1.25rem; font: .92rem/1.7 ui-monospace, SFMono-Regular, Consolas, monospace; outline: none; }
.markdown-preview { min-height: 470px; padding: 1.25rem; overflow: auto; }
.save-bar { position: sticky; bottom: .75rem; justify-content: space-between; gap: 1rem; padding: .75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: color-mix(in srgb, var(--color-surface) 92%, transparent); box-shadow: 0 8px 30px rgb(0 0 0 / 10%); backdrop-filter: blur(14px); }
.save-bar span { color: var(--color-text-secondary); font-size: .8rem; }
.primary-button, .quiet-button, .file-button { min-height: 40px; padding: .55rem .9rem; border: 0; border-radius: var(--radius-sm); font-weight: 700; cursor: pointer; }
.primary-button { color: #fff; background: var(--color-primary); }
.primary-button:disabled { opacity: .55; cursor: not-allowed; }
.quiet-button, .file-button { color: var(--color-text); background: var(--color-bg-secondary); }
.file-button { display: inline-flex; align-items: center; }
.file-button input { position: absolute; width: 1px; height: 1px; opacity: 0; }
.form-error, .form-success { padding: .7rem .8rem; border-radius: var(--radius-sm); font-size: .82rem; }
.form-error { color: #b42318; background: #fef3f2; }
.form-success { color: #067647; background: #ecfdf3; }
.state-panel { display: grid; min-height: 220px; place-items: center; }
@media (max-width: 800px) { .field-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .field-grid { grid-template-columns: 1fr; } .wide-field { grid-column: auto; } .admin-heading { align-items: flex-start; } }
</style>
