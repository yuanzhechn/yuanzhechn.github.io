---
collection: posts
title: 安装ssh服务端
slug: install-ssh-server
tags:
  - 服务器
excerpt: 安装ssh服务端记录
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 服务器
isTop: false
---
## 进入容器

```bash
docker exec -it 容器名 bash
```

## 安装

```bash
apt update
apt install -y openssh-server
```

创建sshd运行目录

```bash
mkdir -p /run/sshd
```

## 设置root密码

```bash
passwd root
```

## 允许root密码登录

```bash
vim /etc/ssh/sshd_config
```

添加

```
PermitRootLogin yes
PasswordAuthentication yes
UsePAM yes
```

## 启动ssh服务

```bash
service ssh start
```

检查是否启动

```bash
ps aux | grep sshd
# 或者
ss -tlnp | grep :22
```
