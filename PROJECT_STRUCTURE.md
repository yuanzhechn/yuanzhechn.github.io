# 项目核心结构说明

这个项目现在分成三块：

1. 主站前端：`src/`
2. 主站本地后端与内容数据：`server/`
3. 本地内容更新工具：`update/`

## 文件树

```text
my-blog/
├─ public/                         # 主站静态资源，构建时原样复制
│  └─ favicon.ico
│
├─ src/                            # 主站 Vue 前端
│  ├─ api/                         # 前端请求后端 API 的封装
│  │  ├─ client.ts                 # API 基础地址、请求错误处理
│  │  └─ modules/                  # 文章、学习文档、训练计划、收藏网站等接口
│  │
│  ├─ assets/                      # 前端资源
│  │  ├─ markdown-themes/          # Typora 风格 Markdown 主题 CSS
│  │  └─ styles/                   # 全局样式、变量、基础样式
│  │
│  ├─ components/                  # 主站组件
│  │  ├─ blog/                     # 文章卡片、文章列表、文章目录等
│  │  ├─ challenge/                # 训练计划卡片
│  │  ├─ common/                   # 导航栏、页脚、Markdown 渲染器、主题切换器
│  │  ├─ content/                  # 标签/分类侧栏
│  │  ├─ favorites/                # 收藏网站桌面布局组件
│  │  ├─ home/                     # 首页展示组件
│  │  └─ ui/                       # 通用空状态、错误状态、加载状态
│  │
│  ├─ composables/                 # 复用逻辑，例如 Markdown 主题和滚动行为
│  ├─ data/                        # 前端静态配置，例如 Markdown 主题注册
│  ├─ layouts/                     # 页面布局
│  ├─ router/                      # Vue Router 路由配置
│  ├─ stores/                      # Pinia 状态管理
│  ├─ types/                       # TypeScript 类型定义
│  ├─ utils/                       # 日期、格式化、Markdown 处理等工具
│  ├─ views/                       # 页面级组件
│  ├─ App.vue                      # 主站根组件
│  └─ main.ts                      # 主站入口
│
├─ server/                         # 主站本地后端和内容目录
│  ├─ src/
│  │  ├─ config.ts                 # 后端配置，端口、内容目录、静态目录等
│  │  ├─ content.ts                # 扫描 Markdown、校验 frontmatter、生成 API 数据
│  │  ├─ favorites.ts              # 读取收藏网站数据
│  │  ├─ server.ts                 # Fastify 服务入口，提供 API 和静态主站
│  │  └─ types.ts                  # 后端内容类型定义
│  │
│  ├─ content/                     # Markdown 内容源文件
│  │  ├─ posts/                    # 博客文章
│  │  ├─ documents/                # 学习文档，按集合 slug 分目录
│  │  └─ challenges/               # 训练计划，按集合 slug 分目录
│  │
│  ├─ content-assets/              # Markdown 图片和附件
│  │  └─ <文章slug>/               # 每篇文章独立的资源目录
│  │
│  ├─ data/
│  │  └─ favorites.json            # 收藏网站分组和链接数据
│  │
│  └─ tsconfig.json                # 后端 TypeScript 编译配置
│
├─ update/                         # 独立的本地内容更新工具
│  ├─ public/
│  │  ├─ index.html                # 更新工具页面结构
│  │  ├─ app.js                    # 更新工具前端逻辑
│  │  └─ styles.css                # 更新工具样式
│  ├─ package.json                 # 更新工具启动脚本
│  └─ server.ts                    # 更新工具本地服务，写入 Markdown 和附件
│
├─ DEPLOY_WORKFLOW.md              # main 和 gh-pages 推送流程
├─ README.md                       # 常用启动方式和项目说明
├─ index.html                      # Vite 主站入口 HTML
├─ package.json                    # 主项目依赖和脚本
├─ package-lock.json               # npm 依赖锁定文件
├─ vite.config.ts                  # Vite 配置，含本地 API 代理
├─ tsconfig.json                   # TypeScript 配置入口
├─ tsconfig.app.json               # 前端 TypeScript 配置
└─ tsconfig.node.json              # Vite/Node TypeScript 配置
```

## 启动入口

本地实时预览主站：

```powershell
cd D:\JetBrainsProject\WebStorm\my-blog
npm run dev:local
```

访问：

```text
http://127.0.0.1:5173
```

内容更新工具：

```powershell
cd D:\JetBrainsProject\WebStorm\my-blog\update
npm run dev
```

访问：

```text
http://127.0.0.1:5174
```

## 内容存储规则

Markdown 文件保存在：

```text
server/content
```

图片和附件保存在：

```text
server/content-assets/<文章slug>
```

内容类型对应关系：

```text
posts/                       # 博客文章
documents/<集合slug>/         # 学习文档
challenges/<集合slug>/        # 训练计划
```

页面展示的标题、分类、标签、发布时间、集合信息等都来自 Markdown 顶部的 frontmatter。目录结构只负责整理磁盘文件，不直接决定页面归档。

## 主站与更新工具的关系

`update/` 是独立的本地工具，不属于主站页面，也不会发布到 GitHub Pages。

它负责：

- 新建和编辑 Markdown
- 删除已有内容
- 上传图片和附件
- 自动生成 frontmatter
- 把内容写入 `server/content`

主站负责：

- 从后端 API 读取 Markdown
- 渲染文章、学习文档和训练计划
- 展示 Typora 风格 Markdown 主题
- 展示收藏网站、归档、标签等页面

## 发布相关

本地开发不需要每次构建。只有发布静态页面时才执行：

```powershell
npm run build-only
```

具体发布流程见：

```text
DEPLOY_WORKFLOW.md
```
