---
collection: posts
title: 打包及加载镜像
slug: package-load-images
tags:
  - 服务器运维
excerpt: 打包及加载docker镜像
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 服务器
isTop: false
---
如何把一个服务器的镜像传到另一个服务器

本文具体是一台服务器（服务器1）上之前拉取了xfce镜像，版本是Ubuntu24.04LTS；另一台（服务器2）拉取较晚，版本为Ubuntu26.04LTS，由于版本需要，故拉取旧版本到服务器2。

## 打标记

在服务器2上打标记，防止由于镜像名相同而冲突

```bash
docker tag linuxserver/webtop:ubuntu-xfce webtop-ubuntu-xfce:26.04
```

同样，给服务器1的镜像也打上标记

## 打包

在服务器1上

```bash
docker save webtop-ubuntu-xfce:24.04 | gzip > webtop-ubuntu-xfce-24.04.tar.gz
```

检查文件

```bash
ls -lh webtop-ubuntu-xfce-24.04.tar.gz
```

## 传输

在服务器1：

```bash
scp webtop-ubuntu-xfce-24.04.tar.gz root@服务器2:~/
```

## 加载

在服务器2：

```bash
docker load -i /workspace/webtop-ubuntu-xfce-24.04.tar.gz
```

检查：

```bash
docker images | grep webtop
```

检查镜像的Ubuntu版本：

```bash
docker run --rm webtop-ubuntu-xfce:24.04 cat /etc/os-release
# 临时创建容器，检查完就删除
```
