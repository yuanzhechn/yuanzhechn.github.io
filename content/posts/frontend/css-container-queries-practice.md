---
title: CSS Container Queries 实战
slug: css-container-queries-practice
date: 2025-02-22
updated: 2025-02-22
category: frontend
tags:
  - css
excerpt: Container Queries 正在改变响应式设计的范式。本文从实际场景出发，详解如何使用容器查询构建真正组件级的响应式布局。
isTop: false
isPublished: true
author: 博主
---

## 什么是 Container Queries

Container Queries（容器查询）允许我们基于父容器的尺寸来应用样式，而非整个视口。

## 基本语法

```css
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
```

## 实际应用场景

### 自适应卡片组件

使用 Container Queries 后，同一个卡片组件在不同容器中会自动调整布局：

- 窄容器中：垂直堆叠
- 宽容器中：水平排列
- 中等宽度：图片侧边 + 文字区域

### 仪表盘布局

```css
.dashboard {
  container-type: inline-size;
}

@container (min-width: 600px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 与 Media Queries 的对比

| 特性 | Media Queries | Container Queries |
|------|---------------|-------------------|
| 响应维度 | 视口 | 父容器 |
| 组件复用性 | 较低 | 高 |
| 浏览器支持 | 全部 | 现代浏览器 |

## 总结

Container Queries 是响应式设计的重要补充，它让我们能够构建真正可复用的响应式组件。在组件化开发日益普及的今天，这个特性尤为重要。
