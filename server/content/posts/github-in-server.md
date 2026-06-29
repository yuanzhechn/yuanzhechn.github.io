---
collection: posts
title: 在服务器上绑定github账号
slug: github-in-server
tags:
  - git
  - github
excerpt: 在服务器上配置github的ssh提交
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: git
isTop: false
---
## 配置Git用户名和邮箱

```bash
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub邮箱"
```

查看是否成功

```bash
git config --global --list
```

## 在服务器生成SSH Key

```bash
ssh-keygen -t ed25519 -C "你的GitHub邮箱"
```

一路回车，默认生成：

```bash
~/.ssh/id_ed25519
~/.ssh/id_ed25519.pub
```

启动ssh-agent并添加私钥

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

## 把公钥添加到github

服务器执行

```bash
cat ~/.ssh/id_ed25519.pub       # 注意有pub是公钥
```

然后复制整行

去github网页：

```bash
头像 → Settings → SSH and GPG keys → New SSH key
```

写个title，然后粘贴公钥

## 测试服务器是否连接上github

```bash
ssh -T git@github.com
```

## 使用ssh地址clone/pull私有仓库

```bash
git clone git@github.com:你的用户名/仓库名.git
```

如果已经克隆过，这样设置，设置前后可以通过`git remote -v`查看变化。

```bash
git remote set-url origin git@github.com:你的用户名/仓库名.git
```
