<template>
  <section class="home-hero" aria-labelledby="home-hero-title">
    <div class="hero-copy">
      <p class="hero-kicker">{{ site.eyebrow }}</p>
      <h1 id="home-hero-title" class="hero-title">{{ site.title }}</h1>
      <p class="hero-subtitle">{{ site.subtitle }}</p>

      <div class="hero-actions">
        <RouterLink to="/posts" class="primary-action">开始阅读</RouterLink>
        <RouterLink to="/archives" class="secondary-action">浏览归档</RouterLink>
      </div>

      <dl class="hero-stats" aria-label="博客数据">
        <div v-for="stat in stats" :key="stat.key" class="stat-card">
          <dt>{{ stat.label }}</dt>
          <dd>{{ stat.value }}</dd>
        </div>
      </dl>
    </div>

    <aside class="hero-console" aria-label="博客动态">
      <div class="console-top">
        <span class="console-label">WRITING DESK</span>
        <span class="console-status">Live</span>
      </div>

      <RouterLink v-if="featuredPost" :to="`/post/${featuredPost.slug}`" class="featured-card">
        <span class="featured-label">最新精选</span>
        <strong>{{ featuredPost.title }}</strong>
        <span
          >{{ formatDate(featuredPost.createdAt) }} · {{ featuredPost.readingTime }} 分钟阅读</span
        >
      </RouterLink>

      <div class="signal-widget" aria-hidden="true">
        <span
          v-for="bar in signalBars"
          :key="bar"
          class="signal-bar"
          :style="{ '--bar-height': `${bar}%` }"
        />
      </div>

      <div class="console-grid" aria-hidden="true">
        <span v-for="cell in 24" :key="cell" :class="{ active: activeCells.includes(cell) }" />
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { HomeHeroContent, HomeStat, PostListItem } from '@/types'
import { formatDate } from '@/utils/date'

defineProps<{
  site: HomeHeroContent
  stats: HomeStat[]
  featuredPost?: PostListItem
}>()

const signalBars = [38, 72, 52, 88, 46, 64, 96, 58, 74]
const activeCells = [2, 4, 5, 8, 11, 13, 16, 17, 20, 22, 23]
</script>

<style scoped>
.home-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: var(--spacing-xl);
  align-items: stretch;
  margin: var(--spacing-md) 0 var(--spacing-2xl);
  padding: clamp(1.5rem, 4vw, 3rem);
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--color-primary) 10%, transparent),
      transparent 36%
    ),
    linear-gradient(
      180deg,
      var(--color-surface),
      color-mix(in srgb, var(--color-bg) 78%, var(--color-surface))
    );
}

.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(color-mix(in srgb, var(--color-border) 50%, transparent) 1px, transparent 1px),
    linear-gradient(
      90deg,
      color-mix(in srgb, var(--color-border) 50%, transparent) 1px,
      transparent 1px
    );
  background-size: 42px 42px;
  mask-image: linear-gradient(120deg, #000 0%, transparent 58%);
  opacity: 0.36;
}

.hero-copy,
.hero-console {
  position: relative;
  z-index: 1;
}

.hero-kicker {
  margin-bottom: var(--spacing-md);
  color: var(--color-primary);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.hero-title {
  max-width: 12ch;
  margin-bottom: var(--spacing-md);
  color: var(--color-text);
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 0.98;
}

.hero-subtitle {
  max-width: 620px;
  color: var(--color-text-secondary);
  font-size: 1.08rem;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
}

.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 var(--spacing-lg);
  border-radius: var(--radius-md);
  text-decoration: none;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.primary-action {
  background: var(--color-primary);
  color: #fff;
}

.secondary-action {
  border: 1px solid var(--color-border);
  color: var(--color-text);
  background: color-mix(in srgb, var(--color-surface) 70%, transparent);
}

.primary-action:hover,
.secondary-action:hover {
  transform: translateY(-2px);
}

.secondary-action:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
}

.stat-card {
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
}

.stat-card dt {
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-secondary);
  font-size: 0.82rem;
}

.stat-card dd {
  color: var(--color-text);
  font-size: 1.55rem;
  font-weight: 800;
}

.hero-console {
  display: flex;
  flex-direction: column;
  min-height: 360px;
  padding: var(--spacing-lg);
  border: 1px solid color-mix(in srgb, var(--color-border) 70%, var(--color-primary));
  border-radius: var(--radius-md);
  background:
    linear-gradient(
      160deg,
      color-mix(in srgb, var(--color-bg-secondary) 82%, transparent),
      transparent
    ),
    var(--color-surface);
}

.console-top {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.console-label,
.console-status,
.featured-label {
  color: var(--color-text-secondary);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.console-status {
  position: relative;
  padding-left: 0.8rem;
  color: var(--color-primary);
}

.console-status::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--color-primary);
  transform: translateY(-50%);
  animation: pulse 1.8s ease-in-out infinite;
}

.featured-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  text-decoration: none;
  background: color-mix(in srgb, var(--color-surface) 88%, transparent);
}

.featured-card strong {
  font-size: 1.1rem;
  line-height: 1.55;
}

.featured-card span:last-child {
  color: var(--color-text-secondary);
  font-size: 0.86rem;
}

.signal-widget {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  align-items: end;
  gap: 0.45rem;
  height: 112px;
  margin: auto 0 var(--spacing-lg);
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
}

.signal-bar {
  height: var(--bar-height);
  min-height: 18px;
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  background: linear-gradient(180deg, #38bdf8, var(--color-primary));
  animation: floatBar 3.8s ease-in-out infinite;
}

.signal-bar:nth-child(2n) {
  background: linear-gradient(180deg, #f59e0b, #ef4444);
  animation-delay: 0.4s;
}

.signal-bar:nth-child(3n) {
  animation-delay: 0.8s;
}

.console-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 0.35rem;
}

.console-grid span {
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  background: var(--color-bg-secondary);
}

.console-grid span.active {
  background: color-mix(in srgb, var(--color-primary) 82%, #38bdf8);
  box-shadow: 0 0 18px color-mix(in srgb, var(--color-primary) 36%, transparent);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: translateY(-50%) scale(1);
  }
  50% {
    opacity: 0.45;
    transform: translateY(-50%) scale(1.35);
  }
}

@keyframes floatBar {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .console-status::before,
  .signal-bar {
    animation: none;
  }

  .primary-action:hover,
  .secondary-action:hover {
    transform: none;
  }
}

@media (max-width: 900px) {
  .home-hero {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 3.25rem;
  }

  .hero-console {
    min-height: 300px;
  }
}

@media (max-width: 640px) {
  .home-hero {
    padding: var(--spacing-lg);
  }

  .hero-title {
    font-size: 2.55rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
  }

  .primary-action,
  .secondary-action {
    width: 100%;
  }
}
</style>
