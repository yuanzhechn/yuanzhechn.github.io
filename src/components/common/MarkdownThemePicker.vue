<template>
  <div ref="pickerRoot" class="theme-picker">
    <button
      class="theme-trigger"
      type="button"
      :aria-expanded="open"
      aria-haspopup="dialog"
      @click="open = !open"
    >
      <span class="trigger-preview" aria-hidden="true">
        <span
          v-for="color in selectedTheme.colors"
          :key="color"
          :style="{ backgroundColor: color }"
        />
      </span>
      <span class="trigger-copy">
        <small>正文主题</small>
        <strong>{{ selectedTheme.name }}</strong>
      </span>
      <span class="trigger-chevron" aria-hidden="true">⌄</span>
    </button>

    <Transition name="theme-popover">
      <div v-if="open" class="theme-popover" role="dialog" aria-label="选择正文主题">
        <div class="popover-heading">
          <div>
            <strong>阅读外观</strong>
            <span>仅改变 Markdown 正文</span>
          </div>
          <button type="button" class="close-button" title="关闭" @click="open = false">×</button>
        </div>

        <div class="reader-setting">
          <span class="setting-copy">
            <strong>标题编号</strong>
            <small>为正文标题显示 1、1.1 等层级编号</small>
          </span>
          <button
            type="button"
            class="setting-switch"
            role="switch"
            :aria-checked="headingNumbersEnabled"
            :title="headingNumbersEnabled ? '关闭标题编号' : '开启标题编号'"
            @click="toggleHeadingNumbers"
          >
            <span />
          </button>
        </div>

        <div v-for="group in themeGroups" :key="group.mode" class="theme-group">
          <div class="group-label">
            <span>{{ group.mode === 'light' ? '浅色主题' : '深色主题' }}</span>
            <small>{{ group.themes.length }}</small>
          </div>
          <div class="theme-grid">
            <button
              v-for="theme in group.themes"
              :key="theme.id"
              type="button"
              class="theme-option"
              :class="{ active: selectedThemeId === theme.id }"
              @click="selectTheme(theme.id)"
            >
              <span
                class="option-preview"
                :style="{
                  '--preview-bg': theme.colors[2],
                  '--preview-accent': theme.colors[0],
                  '--preview-secondary': theme.colors[1],
                }"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </span>
              <span class="option-copy">
                <strong>{{ theme.name }}</strong>
                <small>{{ theme.description }}</small>
              </span>
              <span v-if="selectedThemeId === theme.id" class="option-check" aria-hidden="true"
                >✓</span
              >
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useMarkdownTheme } from '@/composables/useMarkdownTheme'
import type { MarkdownThemeId } from '@/data/markdownThemes'

const pickerRoot = ref<HTMLElement>()
const open = ref(false)
const {
  markdownThemes,
  selectedTheme,
  selectedThemeId,
  headingNumbersEnabled,
  setMarkdownTheme,
  toggleHeadingNumbers,
} = useMarkdownTheme()

const themeGroups = computed(() =>
  (['light', 'dark'] as const).map((mode) => ({
    mode,
    themes: markdownThemes.filter((theme) => theme.mode === mode),
  })),
)

function selectTheme(themeId: MarkdownThemeId) {
  setMarkdownTheme(themeId)
  open.value = false
}

function handlePointerDown(event: PointerEvent) {
  if (!pickerRoot.value?.contains(event.target as Node)) open.value = false
}

function handleKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false
}

onMounted(() => {
  document.addEventListener('pointerdown', handlePointerDown)
  document.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handlePointerDown)
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
.theme-picker {
  position: relative;
  z-index: 20;
}

.theme-trigger {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.65rem;
  align-items: center;
  min-width: 176px;
  min-height: 44px;
  padding: 0.42rem 0.58rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
}

.theme-trigger:hover,
.theme-trigger[aria-expanded='true'] {
  border-color: color-mix(in srgb, var(--color-primary) 58%, var(--color-border));
  box-shadow: var(--shadow-md);
}

.trigger-preview {
  display: flex;
  width: 42px;
  height: 30px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--color-border) 72%, transparent);
  border-radius: 6px;
}

.trigger-preview span {
  flex: 1;
}

.trigger-copy {
  display: grid;
  gap: 0.04rem;
  text-align: left;
}

.trigger-copy small {
  color: var(--color-text-secondary);
  font-size: 0.66rem;
  line-height: 1.2;
}

.trigger-copy strong {
  font-size: 0.86rem;
  line-height: 1.2;
}

.trigger-chevron {
  color: var(--color-text-secondary);
  font-size: 1rem;
  transform: translateY(-2px);
}

.theme-popover {
  position: absolute;
  top: calc(100% + 0.65rem);
  right: 0;
  width: min(540px, calc(100vw - 2rem));
  max-height: min(680px, calc(100vh - 7rem));
  padding: 1rem;
  overflow-y: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-surface) 96%, transparent);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(18px);
}

.popover-heading,
.group-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.popover-heading {
  padding-bottom: 0.85rem;
  border-bottom: 1px solid var(--color-border);
}

.popover-heading > div {
  display: grid;
  gap: 0.16rem;
}

.popover-heading strong {
  font-size: 0.94rem;
}

.popover-heading span,
.group-label small {
  color: var(--color-text-secondary);
  font-size: 0.74rem;
}

.close-button {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  font-size: 1.2rem;
  background: transparent;
  cursor: pointer;
}

.close-button:hover {
  color: var(--color-text);
  background: var(--color-bg-secondary);
}

.theme-group {
  margin-top: 1rem;
}

.reader-setting {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.85rem;
  padding: 0.72rem 0.78rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
}

.setting-copy {
  display: grid;
  gap: 0.12rem;
}

.setting-copy strong {
  font-size: 0.82rem;
}

.setting-copy small {
  color: var(--color-text-secondary);
  font-size: 0.68rem;
}

.setting-switch {
  position: relative;
  flex: 0 0 auto;
  width: 40px;
  height: 22px;
  padding: 2px;
  border: 0;
  border-radius: 11px;
  background: var(--color-border);
  cursor: pointer;
  transition: background 0.18s ease;
}

.setting-switch span {
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
  transition: transform 0.18s ease;
}

.setting-switch[aria-checked='true'] {
  background: var(--color-primary);
}

.setting-switch[aria-checked='true'] span {
  transform: translateX(18px);
}

.group-label {
  margin-bottom: 0.55rem;
  color: var(--color-text-secondary);
  font-size: 0.76rem;
  font-weight: 700;
}

.theme-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.48rem;
}

.theme-option {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.62rem;
  align-items: center;
  min-width: 0;
  padding: 0.48rem;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  color: var(--color-text);
  text-align: left;
  background: var(--color-bg-secondary);
  cursor: pointer;
}

.theme-option:hover,
.theme-option.active {
  border-color: color-mix(in srgb, var(--color-primary) 62%, var(--color-border));
  background: color-mix(in srgb, var(--color-primary) 7%, var(--color-surface));
}

.option-preview {
  display: grid;
  align-content: center;
  gap: 4px;
  width: 58px;
  height: 42px;
  padding: 7px;
  border: 1px solid color-mix(in srgb, var(--preview-accent) 30%, transparent);
  border-radius: 6px;
  background: var(--preview-bg);
}

.option-preview span {
  display: block;
  height: 3px;
  border-radius: 2px;
  background: var(--preview-accent);
}

.option-preview span:nth-child(2) {
  width: 72%;
  background: var(--preview-secondary);
}

.option-preview span:nth-child(3) {
  width: 48%;
}

.option-copy {
  display: grid;
  min-width: 0;
}

.option-copy strong,
.option-copy small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.option-copy strong {
  font-size: 0.82rem;
}

.option-copy small {
  color: var(--color-text-secondary);
  font-size: 0.68rem;
}

.option-check {
  position: absolute;
  top: 0.35rem;
  right: 0.42rem;
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 900;
}

.theme-popover-enter-active,
.theme-popover-leave-active {
  transition:
    opacity 0.16s ease,
    transform 0.16s ease;
}

.theme-popover-enter-from,
.theme-popover-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 640px) {
  .theme-trigger {
    width: 100%;
  }

  .theme-popover {
    position: fixed;
    top: auto;
    right: 0.75rem;
    bottom: 0.75rem;
    left: 0.75rem;
    width: auto;
    max-height: min(76vh, 620px);
  }

  .theme-grid {
    grid-template-columns: 1fr;
  }
}
</style>
