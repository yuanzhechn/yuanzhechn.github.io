---
title: PhyCat Markdown 主题展示
slug: phycat-theme-guide
date: 2026-06-11
updated: 2026-06-11
category: guides
tags:
  - markdown
  - typora
  - css
  - 主题
excerpt: 用一篇包含常用 Markdown 元素的示例文章，检查 11 套 PhyCat 主题在网页中的显示效果。
isTop: true
isPublished: true
author: 博主
---

# PhyCat 主题展示

这篇文章用于检查 **Typora PhyCat 主题** 在网页端的真实渲染效果。你可以使用文章标题旁边的主题选择器实时切换外观。

## 文本与链接

普通文本支持 *斜体*、**粗体**、~~删除线~~、`行内代码`，也支持访问 [Vue 官方网站](https://vuejs.org/)。

> 好的阅读主题不仅要好看，还需要保证长时间阅读时的清晰度、层级感和稳定性。

### 列表

- Markdown 文件继续放在 `content` 目录
- 每篇内容都可以配置分类与标签
- 主题选择会保存在浏览器中

1. 编写 Markdown
2. 在索引中登记
3. 启动项目查看效果

## 代码块

```ts
interface Article {
  title: string
  tags: string[]
  publishedAt: string
}

const article: Article = {
  title: '让 Markdown 保持简单',
  tags: ['Vue', 'TypeScript', 'CSS'],
  publishedAt: '2026-06-11',
}
```

## 表格

| 能力 | 状态 | 说明 |
| --- | --- | --- |
| 主题切换 | 已支持 | 11 套 PhyCat 主题 |
| 本地记忆 | 已支持 | 刷新后保留选择 |
| 内容隔离 | 已支持 | 不污染导航和侧栏 |
| 移动端 | 已支持 | 小屏自动收紧间距 |

## 图片与长内容

图片会限制在正文宽度内，表格和代码块在窄屏下可以横向滚动。后续新增的任何 Markdown 文件都会走同一套渲染链路。
