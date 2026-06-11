---
title: 博客内容管理工作流
slug: content-management-workflow
date: 2026-06-10
updated: 2026-06-11
category: guides
tags:
  - markdown
  - 内容管理
  - 工程化
excerpt: 说明文章、题目、标签和集中索引的维护方式，让以后新增 Markdown 内容保持简单可控。
isTop: false
isPublished: true
author: 博主
---

# 内容管理工作流

博客内容统一存放在 `content/` 下，并按照文章和题目拆成两个集合。

## 推荐命名

- 文件名使用小写英文与连字符，例如 `vue-rendering-notes.md`
- `slug` 发布后尽量不要修改，避免旧链接失效
- 图片建议放进 `public/content-assets/<文章 slug>/`
- 标签控制在 2 到 5 个，避免同义标签重复

## 元数据来源

每个 Markdown 文件的 frontmatter 可以独立描述内容，`content-index.json` 用于集中搜索、整理和覆盖字段。

```yaml
---
title: 一篇示例文章
slug: example-post
date: 2026-06-11
category: frontend
tags:
  - vue
  - typescript
isPublished: true
---
```

## 发布检查

- 标题和摘要是否清楚
- slug 是否唯一
- 日期是否为 `YYYY-MM-DD`
- 标签是否已经存在
- 代码块是否标注语言
- 手机端表格是否可阅读
