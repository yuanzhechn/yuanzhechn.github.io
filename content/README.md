# 内容目录

内容按集合和主题分目录管理：

```text
content/
├─ content-index.json          # 集中索引、分类和标签
├─ posts/                      # 博客文章
│  ├─ frontend/
│  ├─ backend/
│  ├─ tools/
│  ├─ life/
│  └─ guides/
└─ challenges/                 # 每期一题
   └─ 2026/
```

## 添加文章

1. 在 `posts/<分类>/` 下新建 `.md` 文件。
2. 复制已有文章的 frontmatter，至少填写 `title`、`slug`、`date`、`category`。
3. 在 `content-index.json` 的 `entries` 中登记文件路径和标签。

没有登记到索引的 Markdown 仍会自动加载，索引中的字段会覆盖 frontmatter，便于集中整理。

## 添加题目

1. 在 `challenges/<年份>/` 下新建 `.md` 文件。
2. 设置 `collection: challenges`，并填写难度、期号、发布日期。
3. 在 `content-index.json` 中登记标签、难度和发布频率。

题目正文与普通文章共用 Markdown 和 PhyCat 主题渲染能力。
