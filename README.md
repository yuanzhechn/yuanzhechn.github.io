# RootUser Blog

RootUser 的个人博客。主站负责展示内容，`update/` 目录下的本地工具负责编辑 Markdown 内容。

## 本地实时预览主站

在项目根目录执行：

```powershell
cd D:\JetBrainsProject\WebStorm\my-blog
npm run dev:local
```

访问：

```text
http://127.0.0.1:5173
```

这个命令会同时启动：

```text
5173：主站前端 Vite
3000：主站后端 API，读取 server/content 里的 Markdown
```

本地开发时不需要每次 `build`。用 update 工具保存或修改 Markdown 后，刷新 `http://127.0.0.1:5173` 即可查看。

## 启动内容更新工具

另开一个终端，在 `update` 目录执行：

```powershell
cd D:\JetBrainsProject\WebStorm\my-blog\update
npm run dev
```

访问：

```text
http://127.0.0.1:5174
```

更新工具用于：

- 新建和编辑 Markdown
- 删除已有内容
- 管理标签、分类、集合
- 上传文章依赖图片或附件
- 自动写入 frontmatter

内容会保存到：

```text
server/content
```

图片和附件会保存到：

```text
server/content-assets/<文章slug>
```

## 内容目录

```text
server/
  content/
    posts/
      example-post.md
    documents/
      database-learning/
        relational-model.md
    challenges/
      algorithm-training/
        two-sum.md
  content-assets/
    example-post/
      image.png
```

说明：

- `posts/`：博客文章
- `documents/<集合slug>/`：学习文档
- `challenges/<集合slug>/`：训练计划
- 分类、标签、标题、发布时间等信息以 Markdown frontmatter 为准

## 发布静态页面

只有发布到 GitHub Pages 时才需要构建：

```powershell
npm run build-only
```

详细发布流程见：

```text
DEPLOY_WORKFLOW.md
```

## 常用命令

```powershell
npm run dev:local
npm run build-only
npm run build
npm run lint
```
