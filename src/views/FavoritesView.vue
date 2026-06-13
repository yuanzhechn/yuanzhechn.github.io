<template>
  <div class="favorites-launchpad" :class="{ editing }">
    <AppHeader />
    <section class="workspace">
      <main class="desktop-preview">
        <p v-if="errorMessage && !editing" class="message error">{{ errorMessage }}</p>
        <FavoriteGroupTree :sites="previewSites" />
      </main>

      <button v-if="authenticated && !editing" type="button" class="edit-launcher" @click="openEditor">
        编辑收藏
      </button>

      <aside v-if="editing" class="favorites-editor">
        <header class="editor-header">
          <div><small>LIVE EDITOR</small><h1>编辑收藏网站</h1></div>
          <button type="button" class="icon-button" title="关闭" @click="closeEditor">×</button>
        </header>

        <p class="editor-hint">分组路径用“/”分隔，例如：开发工具 / 前端 / Vue</p>

        <div class="editor-list">
          <article v-for="(site, index) in draftSites" :key="site.id" class="site-editor">
            <header>
              <strong>{{ site.name || '未命名网站' }}</strong>
              <div>
                <button type="button" title="上移" :disabled="index === 0" @click="move(index, -1)">↑</button>
                <button type="button" title="下移" :disabled="index === draftSites.length - 1" @click="move(index, 1)">↓</button>
                <button type="button" class="delete-button" title="删除" @click="remove(index)">×</button>
              </div>
            </header>
            <div class="site-fields">
              <label><span>名称</span><input v-model.trim="site.name" /></label>
              <label><span>ID</span><input v-model.trim="site.id" pattern="[a-z0-9]+(?:-[a-z0-9]+)*" /></label>
              <label class="wide"><span>网址</span><input v-model.trim="site.url" type="url" /></label>
              <label class="wide">
                <span>分组路径</span>
                <input
                  :value="groupPathDrafts[index]"
                  placeholder="开发工具 / 前端"
                  @input="updateGroupPath(site, index, $event)"
                />
              </label>
              <label><span>强调色</span><input v-model="site.accent" type="color" /></label>
              <label><span>说明</span><input v-model.trim="site.description" /></label>
              <label class="wide"><span>自定义图标地址</span><input v-model.trim="site.iconUrl" placeholder="留空则自动获取" /></label>
            </div>
          </article>
        </div>

        <button type="button" class="add-button" @click="addSite">+ 添加网站</button>
        <p v-if="errorMessage" class="message error">{{ errorMessage }}</p>
        <footer>
          <button type="button" class="quiet-button" @click="closeEditor">取消</button>
          <button type="button" class="save-button" :disabled="saving" @click="save">
            {{ saving ? '正在保存...' : '保存修改' }}
          </button>
        </footer>
      </aside>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import AppHeader from '@/components/common/AppHeader.vue'
import FavoriteGroupTree from '@/components/favorites/FavoriteGroupTree.vue'
import { favoriteApi, type FavoriteSiteInput } from '@/api/modules/favorite'
import { useAdminSession } from '@/composables/useAdminSession'
import type { FavoriteSite } from '@/types'

const sites = ref<FavoriteSite[]>([])
const draftSites = ref<FavoriteSiteInput[]>([])
const groupPathDrafts = ref<string[]>([])
const editing = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const { authenticated, checkSession } = useAdminSession()

function enrich(site: FavoriteSiteInput): FavoriteSite | null {
  try {
    const domain = new URL(site.url).hostname.replace(/^www\./, '')
    return {
      ...site,
      domain,
      iconUrl: site.iconUrl || `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    }
  } catch {
    return null
  }
}
const previewSites = computed(() =>
  editing.value
    ? draftSites.value.map(enrich).filter((site): site is FavoriteSite => Boolean(site))
    : sites.value,
)

async function loadSites() {
  try { sites.value = await favoriteApi.list() }
  catch (error) { errorMessage.value = error instanceof Error ? error.message : '收藏网站加载失败' }
}
function openEditor() {
  draftSites.value = sites.value.map(({ domain: _, ...site }) => ({
    ...site,
    iconUrl: site.iconUrl.includes('google.com/s2/favicons') ? '' : site.iconUrl,
  }))
  groupPathDrafts.value = draftSites.value.map((site) => site.groupPath.join(' / '))
  editing.value = true
  errorMessage.value = ''
}
function closeEditor() { editing.value = false; errorMessage.value = '' }
function addSite() {
  draftSites.value.push({
    id: `site-${Date.now()}`,
    name: '',
    url: 'https://',
    description: '',
    groupPath: ['未分类'],
    accent: '#3b82f6',
    iconUrl: '',
  })
  groupPathDrafts.value.push('未分类')
}
function remove(index: number) {
  draftSites.value.splice(index, 1)
  groupPathDrafts.value.splice(index, 1)
}
function move(index: number, offset: number) {
  const target = index + offset
  if (target < 0 || target >= draftSites.value.length) return
  const [site] = draftSites.value.splice(index, 1)
  if (site) draftSites.value.splice(target, 0, site)
  const [pathDraft] = groupPathDrafts.value.splice(index, 1)
  if (pathDraft !== undefined) groupPathDrafts.value.splice(target, 0, pathDraft)
}
function updateGroupPath(site: FavoriteSiteInput, index: number, event: Event) {
  const value = (event.target as HTMLInputElement).value
  groupPathDrafts.value[index] = value
  site.groupPath = value
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
}
async function save() {
  saving.value = true
  errorMessage.value = ''
  try {
    sites.value = await favoriteApi.save(draftSites.value)
    editing.value = false
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '保存失败'
  } finally { saving.value = false }
}
onMounted(async () => { await Promise.all([loadSites(), checkSession()]) })
</script>

<style scoped>
.favorites-launchpad { display:grid; grid-template-rows:auto minmax(0,1fr); height:100vh; overflow:hidden; background:linear-gradient(125deg,rgba(255,255,255,.5) 0 12%,transparent 12%),linear-gradient(35deg,rgba(68,212,146,.24) 0 26%,transparent 26%),linear-gradient(155deg,transparent 0 42%,rgba(32,129,226,.28) 42% 64%,transparent 64%),linear-gradient(215deg,#dcecff 0%,#b9d9ef 34%,#d5efe5 68%,#f4f8ff 100%); }
.workspace { position:relative; display:grid; grid-template-columns:minmax(0,1fr); min-height:0; }
.editing .workspace { grid-template-columns:minmax(0,3fr) minmax(360px,2fr); }
.desktop-preview { min-width:0; min-height:0; padding:.65rem; overflow:auto; }
.edit-launcher { position:fixed; right:1rem; bottom:1rem; min-height:42px; padding:.65rem 1rem; border:1px solid rgb(255 255 255 / 55%); border-radius:var(--radius-md); color:#fff; background:rgb(15 23 42 / 72%); box-shadow:0 12px 30px rgb(15 23 42 / 22%); backdrop-filter:blur(14px); cursor:pointer; font-weight:700; }
.favorites-editor { display:grid; grid-template-rows:auto auto minmax(0,1fr) auto auto auto; gap:.75rem; min-width:0; min-height:0; padding:1rem; border-left:1px solid var(--color-border); color:var(--color-text); background:color-mix(in srgb,var(--color-surface) 96%,transparent); box-shadow:-14px 0 36px rgb(15 23 42 / 12%); backdrop-filter:blur(18px); }
.editor-header,.favorites-editor footer,.site-editor > header { display:flex; align-items:center; justify-content:space-between; gap:.75rem; }
.editor-header small { color:var(--color-primary); font-weight:800; }
.editor-header h1 { font-size:1.3rem; }
.editor-hint { color:var(--color-text-secondary); font-size:.76rem; }
.icon-button,.site-editor header button { display:grid; width:30px; height:30px; place-items:center; border:1px solid var(--color-border); border-radius:var(--radius-sm); color:var(--color-text); background:var(--color-surface); cursor:pointer; }
.site-editor header > div { display:flex; gap:.25rem; }
.site-editor header button:disabled { opacity:.35; cursor:not-allowed; }
.site-editor header .delete-button { color:#b42318; }
.editor-list { display:grid; gap:.65rem; overflow:auto; }
.site-editor { display:grid; gap:.65rem; padding:.75rem; border:1px solid var(--color-border); border-radius:var(--radius-sm); background:var(--color-bg-secondary); }
.site-fields { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:.5rem; }
.site-fields label { display:grid; gap:.25rem; min-width:0; }
.site-fields span { font-size:.7rem; font-weight:700; }
.site-fields input { width:100%; min-height:36px; padding:.45rem .55rem; border:1px solid var(--color-border); border-radius:var(--radius-sm); color:var(--color-text); background:var(--color-surface); }
.site-fields input[type=color] { padding:.2rem; }
.wide { grid-column:1/-1; }
.add-button,.quiet-button,.save-button { min-height:40px; padding:.55rem .85rem; border:0; border-radius:var(--radius-sm); cursor:pointer; font-weight:700; }
.add-button,.quiet-button { color:var(--color-text); background:var(--color-bg-secondary); }
.save-button { color:#fff; background:var(--color-primary); }
.message { padding:.6rem .7rem; border-radius:var(--radius-sm); }
.error { color:#b42318; background:#fef3f2; }
[data-theme='dark'] .favorites-launchpad { background:radial-gradient(circle at 18% 20%,rgba(255,255,255,.08),transparent 18%),radial-gradient(circle at 78% 22%,rgba(14,165,233,.16),transparent 20%),radial-gradient(circle at 28% 88%,rgba(79,192,141,.12),transparent 24%),linear-gradient(145deg,#102033 0%,#0f1b2d 48%,#0b1726 100%); }
@media (max-width:900px) { .editing .workspace { grid-template-columns:1fr; grid-template-rows:minmax(45vh,1fr) auto; overflow:auto; } .favorites-launchpad.editing { height:auto; min-height:100vh; overflow:visible; } .favorites-editor { max-height:none; border-top:1px solid var(--color-border); border-left:0; } }
@media (max-width:640px) { .favorites-launchpad { height:auto; min-height:100vh; overflow:visible; } .workspace { min-height:calc(100vh - var(--header-height)); } .desktop-preview { min-height:50vh; } .site-fields { grid-template-columns:1fr; } .wide { grid-column:auto; } }
</style>
