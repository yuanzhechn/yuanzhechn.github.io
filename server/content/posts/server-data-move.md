---
collection: posts
title: 服务器磁盘爆满数据迁移
slug: server-data-move
tags:
  - 服务器运维
excerpt: 磁盘爆满数据迁移
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 服务器
isTop: false
---
### 查看整体

```bash
df -h
```

查看哪个目录的盘爆了

### 查看该目录下谁比较大

以根目录为例

```bash
sudo du -h --max-depth=1 / 2>/dev/null | sort -hr
```

然后逐层排查......

### 转移

例如在上次确认为/home/docker的数据量很大，如果/data下很充足时：

```bash
mkdir -p /data/home_docker
```

用rsync复制（不要用mv）:

```bash
rsync -aP /home/docker/ /data/home_docker/
```

注意不要漏掉后面的“/”

简单验证：

```bash
du -sh /home/docker
du -sh /data/home_docker
```

大小应该大致相同

或者验证文件数量

```bash
find /home/docker | wc -l
find /data/home_docker | wc -l
```

也可以再跑一次`rsync -aP /home/docker/ /data/home_docker/`，第二次比较快，只是同步变化


### 备份原来目录

不要直接删！！！

重命名：

```bash
mv /home/docker /home/docker.bak
```

### 建立软链接

```bash
ln -s /data/home_docker /home/docker
```

### 验证

可以如下验证

```bash
ls /home/docker

cd /home/docker/abc
```

### 删除备份

可在几天使用无异常后删除备份

```bash
rm -rf /home/docker.bak
```
