# 推送与部署流程

以下命令都在项目根目录执行：

```text
D:\JetBrainsProject\WebStorm\my-blog
```

## 推送源码到 main

```bash
git checkout main
git status
git add .
git commit -m "你的提交说明"
git push origin main
```

如果是第一次绑定远程仓库：

```bash
git remote add origin https://github.com/yuanzhechn/yuanzhechn.github.io.git
git branch -M main
git push -u origin main
```

## 推送静态页面到 gh-pages

先在项目根目录构建前端静态文件：

```bash
npm run build-only
```

然后切换到 `gh-pages` 分支，并只提交静态页面文件：

```bash
git checkout gh-pages
git add index.html 404.html favicon.ico assets .nojekyll
git commit -m "第一次挂载静态页面"
git fetch origin gh-pages
git push --force-with-lease=gh-pages:refs/remotes/origin/gh-pages -u origin gh-pages
```

推完后切回源码分支：

```bash
git checkout main
```

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

`gh-pages` 只放静态页面，不要提交这些目录：

```text
src/
server/
node_modules/
dist/
日志文件
IDE 配置
```
