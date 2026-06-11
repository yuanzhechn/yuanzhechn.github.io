<template>
  <section class="home-hero" aria-labelledby="home-hero-title">
    <div class="hero-copy">
      <p class="hero-kicker">{{ site.eyebrow }}</p>
      <h1 id="home-hero-title" class="hero-title">{{ site.title }}</h1>
      <p class="hero-subtitle">{{ site.subtitle }}</p>

      <div class="hero-actions">
        <RouterLink to="/posts" class="primary-action">开始阅读</RouterLink>
        <RouterLink to="/challenges" class="secondary-action">每期一题</RouterLink>
      </div>

      <dl class="hero-stats" aria-label="博客数据">
        <div v-for="stat in stats" :key="stat.key" class="stat-item">
          <dd>{{ stat.value }}</dd>
          <dt>{{ stat.label }}</dt>
        </div>
      </dl>
    </div>

    <aside class="featured-note" aria-label="精选文章">
      <div class="featured-topline">
        <span>Selected Note</span>
        <span class="featured-status">已更新</span>
      </div>

      <RouterLink v-if="featuredPost" :to="`/post/${featuredPost.slug}`" class="featured-link">
        <span class="featured-category">{{ featuredPost.category }}</span>
        <strong>{{ featuredPost.title }}</strong>
        <p>{{ featuredPost.excerpt }}</p>
        <div class="featured-meta">
          <span>{{ formatDate(featuredPost.createdAt) }}</span>
          <span>{{ featuredPost.readingTime }} 分钟阅读</span>
        </div>
        <div class="featured-tags">
          <span v-for="tag in featuredPost.tags.slice(0, 4)" :key="tag"># {{ tag }}</span>
        </div>
        <span class="featured-arrow" aria-hidden="true">↗</span>
      </RouterLink>

      <div v-else class="featured-empty">第一篇文章正在路上。</div>

      <div class="document-scale" aria-hidden="true">
        <span v-for="line in scaleLines" :key="line" :style="{ width: `${line}%` }" />
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

const scaleLines = [100, 86, 94, 62, 78, 48]
</script>

<style scoped>
.home-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(340px, 0.92fr);
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: center;
  min-height: 440px;
  margin: var(--spacing-md) 0 var(--spacing-2xl);
  padding: clamp(2rem, 5vw, 3.8rem) clamp(1.5rem, 5vw, 4rem);
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);
  background:
    linear-gradient(
      112deg,
      color-mix(in srgb, var(--color-primary) 11%, transparent),
      transparent 44%
    ),
    var(--color-surface);
}

.home-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(color-mix(in srgb, var(--color-border) 42%, transparent) 1px, transparent 1px),
    linear-gradient(
      90deg,
      color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
      transparent 1px
    );
  background-size: 38px 38px;
  mask-image: linear-gradient(115deg, #000 0%, transparent 52%);
  opacity: 0.46;
}

.hero-copy,
.featured-note {
  position: relative;
  z-index: 1;
}

.hero-kicker {
  margin-bottom: 0.75rem;
  color: var(--color-primary);
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
}

.hero-title {
  max-width: 10ch;
  margin-bottom: 1rem;
  font-size: 3.65rem;
  font-weight: 850;
  line-height: 1;
}

.hero-subtitle {
  max-width: 620px;
  color: var(--color-text-secondary);
  font-size: 1.02rem;
  line-height: 1.85;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.6rem;
}

.primary-action,
.secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0 1.15rem;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease;
}

.primary-action {
  color: #fff;
  background: var(--color-primary);
}

.secondary-action {
  border: 1px solid var(--color-border);
  color: var(--color-text);
  background: color-mix(in srgb, var(--color-surface) 82%, transparent);
}

.primary-action:hover,
.secondary-action:hover {
  transform: translateY(-2px);
}

.secondary-action:hover {
  border-color: var(--color-primary);
}

.hero-stats {
  display: flex;
  gap: clamp(1.2rem, 4vw, 2.5rem);
  margin-top: 1.8rem;
}

.stat-item {
  display: flex;
  gap: 0.45rem;
  align-items: baseline;
}

.stat-item dd {
  font-size: 1.4rem;
  font-weight: 850;
}

.stat-item dt {
  color: var(--color-text-secondary);
  font-size: 0.76rem;
}

.featured-note {
  min-width: 0;
  padding-left: clamp(1.5rem, 4vw, 3rem);
  border-left: 1px solid var(--color-border);
}

.featured-topline,
.featured-meta,
.featured-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 1rem;
}

.featured-topline {
  justify-content: space-between;
  margin-bottom: 1.3rem;
  color: var(--color-text-secondary);
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
}

.featured-status {
  position: relative;
  padding-left: 0.75rem;
  color: var(--color-primary);
}

.featured-status::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: currentColor;
  transform: translateY(-50%);
  animation: statusPulse 1.8s ease-in-out infinite;
}

.featured-link {
  position: relative;
  display: grid;
  gap: 0.8rem;
  color: var(--color-text);
  text-decoration: none;
}

.featured-category {
  color: var(--color-primary);
  font-size: 0.74rem;
  font-weight: 800;
  text-transform: uppercase;
}

.featured-link strong {
  max-width: 18ch;
  font-size: 1.65rem;
  line-height: 1.28;
}

.featured-link p {
  display: -webkit-box;
  overflow: hidden;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.featured-meta,
.featured-tags {
  color: var(--color-text-secondary);
  font-size: 0.74rem;
}

.featured-tags {
  color: color-mix(in srgb, var(--color-primary) 72%, var(--color-text-secondary));
}

.featured-arrow {
  position: absolute;
  top: -0.3rem;
  right: 0;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
}

.featured-link:hover .featured-arrow {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.featured-empty {
  color: var(--color-text-secondary);
}

.document-scale {
  display: grid;
  gap: 0.36rem;
  margin-top: 1.5rem;
  opacity: 0.55;
}

.document-scale span {
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
}

@keyframes statusPulse {
  50% {
    opacity: 0.35;
    transform: translateY(-50%) scale(1.35);
  }
}

@media (prefers-reduced-motion: reduce) {
  .featured-status::before {
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
    min-height: 0;
  }

  .featured-note {
    padding-top: 1.5rem;
    padding-left: 0;
    border-top: 1px solid var(--color-border);
    border-left: 0;
  }
}

@media (max-width: 640px) {
  .home-hero {
    padding: 1.5rem 1rem;
  }

  .hero-title {
    font-size: 2.65rem;
  }

  .hero-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .hero-stats {
    justify-content: space-between;
    gap: 0.65rem;
  }

  .stat-item {
    display: grid;
    gap: 0;
  }

  .featured-link strong {
    padding-right: 2.7rem;
    font-size: 1.3rem;
  }
}
</style>
