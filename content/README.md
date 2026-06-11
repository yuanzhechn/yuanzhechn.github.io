# 内容目录

每个 Markdown 文件必须配套一个位于同一目录、文件名相同的 JSON 元数据文件：

```text
content/
├─ content-entry.schema.json
├─ posts/
│  └─ 任意目录/
│     ├─ example.md
│     └─ example.json
└─ challenges/
   └─ 任意目录/
      ├─ week-01.md
      └─ week-01.json
```

目录只用于整理磁盘文件，不参与页面分类、标签或归档。

## 添加文章

新建 `article.md` 和同目录的 `article.json`：

```json
{
  "$schema": "../../content-entry.schema.json",
  "collection": "posts",
  "title": "文章标题",
  "slug": "article-slug",
  "date": "2026-06-11",
  "updated": "2026-06-11",
  "category": "frontend",
  "tags": ["vue", "typescript"],
  "excerpt": "文章摘要",
  "isTop": false,
  "isPublished": true,
  "author": "博主"
}
```

- 分类只读取 `category`。
- 标签只读取 `tags`。
- 归档年份和发布日期只读取 `date`。
- Markdown 中的 frontmatter 不参与元数据计算。

## 添加题目

新建 `challenge.md` 和同目录的 `challenge.json`：

```json
{
  "$schema": "../../content-entry.schema.json",
  "collection": "challenges",
  "title": "题目标题",
  "slug": "challenge-slug",
  "publishAt": "2026-06-11",
  "dueAt": "2026-06-18",
  "tags": ["算法"],
  "difficulty": "easy",
  "sequence": 1,
  "cadence": "weekly",
  "isPublished": true,
  "author": "博主"
}
```

缺少同名 JSON、JSON 格式错误或必填字段缺失时，开发服务器和构建会直接报错。
