# 内容管理工作流

博客文章和“每期一题”都采用 Markdown 正文与同名 JSON 元数据分离的方式管理。

## 文件配对

每个 Markdown 必须有一个同目录、同文件名的 JSON：

```text
my-article.md
my-article.json
```

Markdown 只负责正文，JSON 负责页面需要的结构化信息。

## 目录不参与分类

`posts/` 和 `challenges/` 下可以按个人习惯建立任意文件夹。目录名称只用于整理磁盘文件，不会自动成为分类，也不会影响标签和归档。

下面两个位置中的文章，只要 JSON 内容相同，在页面上的分类、标签和归档结果就完全相同：

```text
content/posts/frontend/my-article.md
content/posts/notes/2026/my-article.md
```

## 文章元数据

文章的同名 JSON 示例：

```json
{
  "$schema": "../../content-entry.schema.json",
  "collection": "posts",
  "title": "一篇示例文章",
  "slug": "example-post",
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

- 分类页面只读取 `category`。
- 标签页面只读取 `tags`。
- 归档页面只读取 `date`。
- 文章地址由 `slug` 决定。

## 题目元数据

题目的同名 JSON 示例：

```json
{
  "$schema": "../../content-entry.schema.json",
  "collection": "challenges",
  "title": "第 1 期：示例题目",
  "slug": "challenge-example",
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

## 发布检查

- `.md` 和 `.json` 是否同名且位于同一目录
- `slug` 是否唯一
- 日期是否使用 `YYYY-MM-DD`
- 文章是否填写 `category`
- `tags` 是否为字符串数组
- `isPublished` 是否符合预期

缺少同名 JSON 或必填字段时，开发服务器和生产构建会直接报错。
