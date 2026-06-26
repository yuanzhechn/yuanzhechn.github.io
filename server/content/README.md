# 内容目录

内容分为博客文章、训练计划和学习文档。每篇内容只对应一个 Markdown 文件，结构化字段保存在文件顶部的 YAML frontmatter 中。

目录仅用于整理磁盘文件，不决定页面分类、标签或归档。页面数据只读取 frontmatter。

## 推荐方式

在博客前端进入“内容工作台”，可以：

- 手动录入标题、分类、标签等字段
- 导入现有 `.md` 文件或直接在线编辑
- 预览 Markdown 渲染效果
- 新建内容或修订已有文章

`date`、`updated` 和 `publishAt` 由后端自动写入，不需要手工填写。

## 文章格式

```yaml
---
collection: posts
title: 示例文章
slug: example-post
date: 2026-06-13
updated: 2026-06-13
category: frontend
tags:
  - vue
  - typescript
excerpt: 一段摘要
isTop: false
isPublished: true
---
```

frontmatter 后面直接书写 Markdown 正文。`slug` 发布后不可在编辑器中修改，以保证旧链接持续有效。

## 学习文档与文档集

学习文档使用 `collection: documents`。需要把多篇文档聚在一起时，为它们设置相同的文档集字段：

```yaml
groupSlug: database-learning
groupTitle: 数据库学习
```

使用 `order` 控制文档集内的章节顺序。文档集字段为空时，页面会将文档归入“零散记录”。

公开地址包含文档集 slug：

```text
/document/database-learning/database-normalization
```

## 训练计划与训练集

训练计划使用独立的训练集归档，不会与学习文档的文档集混用：

```yaml
collection: challenges
groupSlug: javascript-algorithm-training
groupTitle: JavaScript 与算法训练
```

公开地址同样包含训练集 slug：

```text
/challenge/javascript-algorithm-training/challenge-two-sum
```

## 训练计划格式

训练计划使用 `collection: challenges`，并包含 `dueAt`、`difficulty`、`sequence` 和 `cadence`。发布时间 `publishAt` 同样由后端自动生成。
