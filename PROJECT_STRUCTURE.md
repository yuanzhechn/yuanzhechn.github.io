# 项目核心文件说明

```text
my-blog/
├─ public/
│  └─ favicon.ico                               # 浏览器标签页图标
│
├─ src/
│  ├─ api/                                      # 页面使用的数据访问接口
│  │  ├─ client.ts                              # 封装后端地址、Cookie 和错误处理
│  │  ├─ index.ts                               # 统一导出文章 API
│  │  └─ modules/
│  │     ├─ admin.ts                            # 管理员登录、退出和上传接口
│  │     ├─ post.ts                             # 调用后端文章、分类、标签和归档 API
│  │     └─ challenge.ts                        # 调用后端训练计划 API
│  │
│  ├─ assets/
│  │  ├─ markdown-themes/                       # Markdown 渲染使用的 Typora 主题
│  │  │  ├─ phycat/
│  │  │  │  ├─ phycat.light.css                # PhyCat 浅色主题公共基础样式
│  │  │  │  └─ phycat.dark.css                 # PhyCat 深色主题公共基础样式
│  │  │  ├─ phycat-abyss.css                   # 深渊主题配色
│  │  │  ├─ phycat-caramel.css                 # 焦糖主题配色
│  │  │  ├─ phycat-cherry.css                  # 樱桃主题配色
│  │  │  ├─ phycat-forest.css                  # 森林主题配色
│  │  │  ├─ phycat-mauve.css                   # 木槿主题配色
│  │  │  ├─ phycat-mint.css                    # 薄荷主题配色
│  │  │  ├─ phycat-prussian.css                # 普鲁士蓝主题配色
│  │  │  ├─ phycat-radiation.css               # 辐光主题配色
│  │  │  ├─ phycat-sakura.css                  # 樱花主题配色
│  │  │  ├─ phycat-sky.css                     # 晴空主题配色
│  │  │  └─ phycat-vampire.css                 # 夜宴主题配色
│  │  └─ styles/
│  │     ├─ base.css                            # 浏览器样式重置和基础元素样式
│  │     ├─ main.css                            # 汇总项目全局样式
│  │     └─ variables.css                       # 定义颜色、间距、阴影等 CSS 变量
│  │
│  ├─ components/
│  │  ├─ blog/
│  │  │  ├─ PostCard.vue                       # 展示单篇文章摘要卡片
│  │  │  ├─ PostList.vue                       # 展示文章列表及空状态
│  │  │  ├─ PostMeta.vue                       # 展示文章日期、字数和阅读时间
│  │  │  ├─ PostPagination.vue                 # 控制文章列表分页
│  │  │  ├─ PostTag.vue                        # 展示可点击的文章标签
│  │  │  └─ PostToc.vue                        # 展示文章目录并定位标题
│  │  ├─ challenge/
│  │  │  └─ ChallengeCard.vue                  # 展示单期题目的摘要信息
│  │  ├─ common/
│  │  │  ├─ AppFooter.vue                      # 全站页脚
│  │  │  ├─ AppHeader.vue                      # 全站导航栏
│  │  │  ├─ BackToTop.vue                      # 页面返回顶部按钮
│  │  │  ├─ MarkdownRenderer.vue               # 在 Shadow DOM 中渲染 Markdown 和主题
│  │  │  └─ MarkdownThemePicker.vue            # Markdown 主题切换面板
│  │  ├─ favorites/
│  │  │  └─ FavoriteSiteCard.vue               # 展示收藏网站图标和链接
│  │  ├─ home/
│  │  │  ├─ HomeActivityHeatmap.vue            # 首页内容活跃度热力图
│  │  │  ├─ HomeChallengeSpotlight.vue         # 首页最新题目展示组件
│  │  │  ├─ HomeDashboard.vue                  # 首页数据和快捷入口面板
│  │  │  ├─ HomeHero.vue                       # 首页主要视觉区域
│  │  │  └─ HomeQuickFinder.vue                # 首页文章快速查找组件
│  │  └─ ui/
│  │     ├─ EmptyState.vue                     # 通用空数据提示
│  │     ├─ ErrorState.vue                     # 通用错误提示
│  │     └─ LoadingSpinner.vue                 # 通用加载状态
│  │
│  ├─ composables/
│  │  ├─ useMarkdownTheme.ts                   # 管理 Markdown 主题选择和本地持久化
│  │  └─ useScrollToTop.ts                     # 管理路由切换后的页面滚动位置
│  │
│  ├─ data/
│  │  ├─ favorites.ts                          # 配置收藏网站、分组和网站图标
│  │  └─ markdownThemes.ts                     # 注册主题并提供网页兼容样式
│  │
│  ├─ layouts/
│  │  ├─ BlogLayout.vue                        # 文章和题目详情页的正文、侧栏布局
│  │  └─ DefaultLayout.vue                     # 普通页面使用的通用布局
│  │
│  ├─ router/
│  │  ├─ guards.ts                             # 处理页面标题等路由守卫逻辑
│  │  ├─ index.ts                              # 创建并导出 Vue Router
│  │  └─ routes.ts                             # 定义所有页面路由
│  │
│  ├─ stores/
│  │  ├─ app.ts                                # 管理全站主题等应用状态
│  │  ├─ category.ts                           # 管理分类数据状态
│  │  ├─ challenge.ts                          # 管理题目列表和详情状态
│  │  ├─ post.ts                               # 管理文章列表、详情和分页状态
│  │  └─ tag.ts                                # 管理标签数据状态
│  │
│  ├─ types/
│  │  ├─ category.ts                           # 分类相关 TypeScript 类型
│  │  ├─ challenge.ts                          # 题目相关 TypeScript 类型
│  │  ├─ favorite.ts                           # 收藏网站相关 TypeScript 类型
│  │  ├─ home.ts                               # 首页组件相关 TypeScript 类型
│  │  ├─ index.ts                              # 统一导出项目类型
│  │  ├─ post.ts                               # 文章相关 TypeScript 类型
│  │  └─ tag.ts                                # 标签相关 TypeScript 类型
│  │
│  ├─ utils/
│  │  ├─ date.ts                               # 日期格式化工具
│  │  ├─ format.ts                             # 文本和数字格式化工具
│  │  └─ markdown.ts                           # Markdown 解析、转义和目录提取工具
│  │
│  ├─ views/
│  │  ├─ AboutView.vue                         # 关于页面
│  │  ├─ AdminPublishView.vue                   # 管理员登录和内容上传页面
│  │  ├─ ArchiveView.vue                       # 文章归档页面
│  │  ├─ BlogDetailView.vue                    # 博客文章详情页面
│  │  ├─ BlogListView.vue                      # 文章列表及筛选结果页面
│  │  ├─ CategoryView.vue                      # 分类总览页面
│  │  ├─ ChallengeDetailView.vue               # 每期一题详情页面
│  │  ├─ ChallengeListView.vue                 # 每期一题列表页面
│  │  ├─ FavoritesView.vue                     # 桌面风格收藏网站页面
│  │  ├─ HomeView.vue                          # 博客首页
│  │  ├─ NotFoundView.vue                      # 404 页面
│  │  └─ TagView.vue                           # 标签总览页面
│  │
│  ├─ App.vue                                  # 应用根组件和全局样式入口
│  └─ main.ts                                  # 创建 Vue 应用并注册 Pinia 和路由
│
├─ .editorconfig                               # 统一编辑器基础格式
├─ .gitignore                                  # 定义 Git 忽略文件
├─ .oxlintrc.json                              # 配置 Oxlint 检查规则
├─ .prettierrc.json                            # 配置 Prettier 格式化规则
├─ env.d.ts                                    # 声明 Vite、Vue 和虚拟模块类型
├─ eslint.config.ts                            # 配置 ESLint 检查规则
├─ index.html                                  # Vite 应用 HTML 入口
├─ package.json                                # 定义依赖和项目脚本
├─ package-lock.json                           # 锁定 npm 依赖版本
├─ tsconfig.app.json                           # 配置前端应用 TypeScript 编译
├─ tsconfig.json                               # 汇总 TypeScript 配置
├─ tsconfig.node.json                          # 配置 Node 和 Vite 文件的 TypeScript 编译
└─ vite.config.ts                              # 配置 Vue、开发工具和路径别名
```
