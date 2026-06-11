---
title: 使用 Vue 3 + TypeScript 搭建个人博客
slug: build-blog-with-vue3-typescript
date: 2025-05-15
updated: 2025-05-20
category: frontend
tags:
  - vue
  - typescript
  - vite
excerpt: 本文详细介绍如何使用 Vue 3 Composition API 配合 TypeScript 从零搭建一个现代化个人博客系统，涵盖项目架构、状态管理、路由设计等核心内容。
isTop: true
isPublished: true
author: 博主
---

## 引言

Vue 3 发布至今已有数年时间，其 Composition API 和 TypeScript 的深度整合让前端开发体验大幅提升。本文将详细介绍如何使用 Vue 3 + TypeScript 从零搭建一个现代化个人博客系统。

## 技术选型

| 技术 | 版本 | 说明 |
|------|------|------|
| Vue | 3.x | 前端框架 |
| Pinia | 2.x | 状态管理 |
| Vite | 5.x | 构建工具 |
| TypeScript | 5.x | 类型系统 |

## 项目初始化

使用 Vite 快速创建项目：

```bash
npm create vite@latest my-blog -- --template vue-ts
cd my-blog
npm install
```

## 项目结构设计

一个良好的项目结构是系统化开发的基础。我们采用分层架构：

```
src/
├── api/          # API层
├── components/   # 组件
├── composables/  # 组合式API
├── layouts/      # 布局
├── router/       # 路由
├── stores/       # 状态管理
├── types/        # 类型定义
├── utils/        # 工具函数
└── views/        # 页面
```

## 路由设计

使用 Vue Router 管理页面导航，主要路由包括：

- 首页 (`/`)
- 文章列表 (`/posts`)
- 文章详情 (`/post/:slug`)
- 分类 (`/categories`)
- 标签 (`/tags`)
- 归档 (`/archives`)
- 关于 (`/about`)

## 状态管理

使用 Pinia 进行状态管理，按模块拆分：

- `postStore` - 文章相关状态
- `categoryStore` - 分类相关状态
- `tagStore` - 标签相关状态
- `appStore` - 应用级状态（主题、侧边栏等）

## 总结

通过本文的介绍，你应该对如何使用 Vue 3 + TypeScript 搭建个人博客有了全面的了解。完整代码可以在 GitHub 上找到。
