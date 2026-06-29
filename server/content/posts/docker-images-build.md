---
collection: posts
title: 创建镜像容器示例
slug: docker-images-build
tags:
  - 服务器运维
excerpt: 以Ubuntu 22.04 + CUDA 12.4.1为例，构建docker镜像，并创建适用于Isaac的容器
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 服务器
isTop: false
---
## 创建镜像

```bash
mkdir -p /root/yz-ssh-docker
cd /root/yz-ssh-docker

vim Dockerfile
```

在vim中粘贴：

```txt
# 1. 基础镜像：官方的 Ubuntu 22.04 + CUDA 12.4.1 
FROM nvidia/cuda:12.4.1-devel-ubuntu22.04

# 2. 避免安装过程中弹出选择时区的互动窗口
ENV DEBIAN_FRONTEND=noninteractive

# 3. 安装你指定的必备软件，以及 Isaac/Python 常用工具
# 合并在一条指令里执行，最后清理缓存以缩小镜像体积
RUN apt-get update && apt-get install -y \
    sudo \
    iputils-ping \
    net-tools \
    vim \
    openssh-client \
    openssh-server \
    vsftpd \
    git \
    git-lfs \
    wget \
    curl \
    python3 \
    python3-pip \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# 4. 初始化 git-lfs，并配置 SSH 允许 root 登录（初始密码：123456）
RUN git lfs install \
    && mkdir /var/run/sshd \
    && echo 'root:123456' | chpasswd \
    && sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config

# 5. 暴露 SSH 的 22 端口
EXPOSE 22

# 6. 容器启动时默认运行的命令：保持 SSH 服务在前台运行
CMD ["/usr/sbin/sshd", "-D"]
```

构建镜像：

```bash
docker build -t yz-ubuntu22.04-cuda12.4:latest .
```

## 创建容器

建议不要用这个：

```bash
docker run -itd \
  --name yuanzhe22.04 \        #容器名
  --gpus all \
  --shm-size=16g \
  -e NVIDIA_DRIVER_CAPABILITIES=all \
  -e NVIDIA_VISIBLE_DEVICES=all \
  -e ACCEPT_EULA=Y \
  -e DISPLAY=:0 \
  -e PRIVILEGED=true \
  --privileged \
  -p 5100:22 \
  -p 8011:8011 \              # 记得错开端口，别冲突了
  -p 8211:8211 \
  -v /tmp/.X11-unix:/tmp/.X11-unix:rw \
  -v /data/isaac_project/users/yuanzhe:/workspace \      # 挂载点，记得在users文件夹先创建用户的数据挂载文件夹
  -v /data/isaac_project/shared:/shared_data \          # 共享文件夹
  yz-ubuntu22.04-cuda12.4:latest
```

### 然后创建用户

在root：

```bash
docker exec -it yuanzhe22.04 bash
adduser yuanzhe           # 输入两次密码，然后一路回车
exit
```

至此，即可用`ssh yuanzhe@10.200.212.242 -p 5100`登录

### 权限问题

用管理员身份登录：

```powershell
ssh root@10.200.212.242 -p 5100
```

更改权限

```bash
usermod -aG sudo yuanzhe    # 加入管理员组
chown -R yuanzhe:yuanzhe /workspace    # 给/workspace权限
chmod -R 777 /shared_data          # 可读可写可执行
```
