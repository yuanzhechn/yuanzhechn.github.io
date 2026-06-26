# 推送与部署流程

这套流程固定为：

1. 先提交并推送源码到 `main`
2. 再构建静态页面到 `dist`
3. 进入 `dist` 里临时 `git init`
4. 强制推送 `dist` 到 `gh-pages`
5. 推送完成后删除 `dist\.git`

这样 `dist` 只在发布时临时变成 Git 仓库，发布完立刻清理，不会长期形成嵌套 Git 仓库。

## 执行目录

先进入项目根目录：

```text
D:\JetBrainsProject\WebStorm\my-blog
```

## 1. 推送源码到 main

在项目根目录执行：

```powershell
git checkout main
git status
git add .
git commit -m "你的提交说明"
git push origin main
```

`main` 分支保存完整源码，包括 `src/`、`server/`、`public/`、配置文件、文档和依赖清单。

如果 `git commit` 提示 `nothing to commit`，说明源码没有新改动，可以继续构建静态页面。

## 2. 构建静态页面

仍然在项目根目录执行：

```powershell
npm run build-only
```

构建产物会生成到：

```text
D:\JetBrainsProject\WebStorm\my-blog\dist
```

## 3. 在 dist 里初始化临时 Git 仓库

进入 `dist`：

```powershell
Set-Location "D:\JetBrainsProject\WebStorm\my-blog\dist"
git init
git remote add origin https://github.com/yuanzhechn/yuanzhechn.github.io.git
git checkout -b gh-pages
git add .
git commit -m "第一次挂载静态页面"
```

## 4. 强制推送静态页面到 gh-pages

仍然在 `dist` 目录执行：

```powershell
git push -f origin gh-pages
```

以后更新静态页面也可以继续强制推送，因为 `gh-pages` 只保存构建后的静态文件，不需要保留历史记录。

## 5. 删除 dist 里的 .git

推送完成后，仍然在 `dist` 目录执行：

```powershell
Remove-Item -Recurse -Force .\.git
```

然后回到项目根目录：

```powershell
Set-Location "D:\JetBrainsProject\WebStorm\my-blog"
```

这一步很重要：删掉 `dist\.git` 后，`dist` 就只是普通构建产物目录，不会形成嵌套 Git 仓库。

## GitHub Pages 设置

在 GitHub 仓库页面设置：

```text
Settings -> Pages
Source: Deploy from a branch
Branch: gh-pages
Folder: /root
```

访问地址：

```text
https://yuanzhechn.github.io/
```

## 注意

不要在主项目根目录切换到 `gh-pages` 分支。

正确做法是：主项目根目录永远主要维护 `main`，静态页面只在 `dist` 里临时初始化 Git 并强制推送。推送完成后立刻删除 `dist\.git`。
