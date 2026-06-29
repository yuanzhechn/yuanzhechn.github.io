---
collection: posts
title: xfce容器拉取与构建
slug: xfce-docker-pull-and-build
tags:
  - 服务器运维
excerpt: 为Issac强化学习搭建具有可视化界面的服务器docker环境
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 服务器
isTop: false
---
# xfce

## 拉取

### 最新版

```bash
docker pull lscr.io/linuxserver/webtop:ubuntu-xfce
```

或者国内网络环境：

```bash
docker pull linuxserver/webtop:ubuntu-xfce
```

## 构建容器

此处是因为我要和我之前搭Isaac环境的文件夹对应，故多了好多挂载点，直接把前两条-v参数删除即可

```bash
docker run -d \
  --name yuanzhe_xfce \
  --gpus all \
  --shm-size=16g \
  -e PUID=0 \
  -e PGID=0 \
  -e TZ=Asia/Shanghai \
  -e TITLE=yuanzhe_xfce \
  -e NVIDIA_DRIVER_CAPABILITIES=all \
  -p 3001:3001 \
  -p 5101:22 \
  -v /data/isaac_project/users/yuanzhe_xfce:/workspace \
  -v /data/isaac_project/shared:/shared_data \
  -v /data/isaac_project/users/yuanzhe_xfce/webtop_config:/config \
  --restart unless-stopped \
  linuxserver/webtop:ubuntu-xfce
```

## 注意

访问的时候记得使用https协议
