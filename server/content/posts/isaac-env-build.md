---
collection: posts
title: Isaac环境搭建
slug: isaac-env-build
tags:
  - 服务器运维
  - Isaac
excerpt: 搭建Isaac环境
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 服务器
isTop: false
---
## 1.创建容器

### 1.1.创建

**先创建对应挂载文件夹！！！**

记得改第一行容器名

7-9行错开端口

10-12行先创建挂载文件夹，再映射

```bash
docker run --name yuanzhe_isaac -itd \
    --gpus all \
    -e "ACCEPT_EULA=Y" \
    --shm-size=16g \
    -e "PRIVILEGED=true" \
    -e "NVIDIA_DRIVER_CAPABILITIES=all" \
    -p 8211:8211 \
    -p 8011:8011 \
    -p 5100:22 \
    -v /data/isaac_project/users/yuanzhe:/workspace \
    -v /data/isaac_project/users/yuanzhe/ov_data:/root/.local/share/ov/data \
    -v /data/isaac_project/shared:/shared_data \
    nvcr.io/nvidia/isaac-sim:5.1.0 bash
```

### 1.2.安装ssh

**安装之前建议先看5.1，不然你会后悔的**

依旧在宿主机内：（用root权限进入）

```bash
docker exec -it -u root yuanzhe_isaac bash
```

安装ssh

```bash
apt update && apt install -y openssh-server
# 进度条停在68%时，选上海时区，要不然时间看不懂


# 配置并启动
mkdir -p /var/run/sshd
echo 'root:123456' | chpasswd
sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config
service ssh start
```

>
>
>在windows运行ssh，报错如下的话
>
>```
>(base) PS C:\Users\yz> ssh root@10.200.212.242 -p 5100
>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
>@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
>@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
>IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
>Someone could be eavesdropping on you right now (man-in-the-middle attack)!
>It is also possible that a host key has just been changed.
>The fingerprint for the ED25519 key sent by the remote host is
>SHA256:nSwW3mBoldWkAEmlTZ+zZ7a5EJTozDSELAVXt8dPPTk.
>Please contact your system administrator.
>Add correct host key in C:\\Users\\yz/.ssh/known_hosts to get rid of this message.
>Offending ECDSA key in C:\\Users\\yz/.ssh/known_hosts:47
>Host key for [10.200.212.242]:5100 has changed and you have requested strict checking.
>Host key verification failed.
>```
>
>可运行下述命令，删除旧指纹
>
>```powershell
>ssh-keygen -R "[10.200.212.242]:5100"
>```
>
>

再配置一下环境变量：

```bash
echo 'export ENABLE_EGL=1' >> ~/.bashrc
echo 'export DISPLAY=:0' >> ~/.bashrc
echo 'export ACCEPT_EULA=Y' >> ~/.bashrc
echo 'export OMNI_KIT_ALLOW_ROOT=1' >> ~/.bashrc
# 告诉 Isaac Sim / Isaac Lab，不要去连云端Assets资源，直接用本地绝对路径
echo 'export ISAAC_NUCLEUS_DIR="/shared_data/Assets"' >> ~/.bashrc
echo 'export ISAACLAB_NUCLEUS_DIR="/shared_data/Assets"' >> ~/.bashrc
source ~/.bashrc
```

**建议直接用root登录，不要创用户**




## 2.安装Isaac Lab

```bash
cd /workspace/IsaacLab
```

配置环境变量：

```bash
cat << 'EOF' >> ~/.bashrc

# ==========================================
# Isaac Sim & Isaac Lab Environment Variables
# ==========================================
# 指定 Isaac Sim 引擎本体的绝对路径
export ISAACSIM_PATH="/isaac-sim"
# 指定你刚刚克隆的 Isaac Lab 路径
export ISAACLAB_PATH="/workspace/IsaacLab"

# 设置快捷命令 (Alias)
alias isaacsim_python="${ISAACSIM_PATH}/python.sh"
alias isaaclab="${ISAACLAB_PATH}/isaaclab.sh"
EOF

# 使环境变量立即生效
source ~/.bashrc
```

先用软链接解决一下路径问题

```bash
# 1. 确保你在 Isaac Lab 目录下
cd /workspace/IsaacLab

# 2. 创建软链接，将容器内的 /isaac-sim 映射到当前目录的 _isaac_sim
ln -s /isaac-sim _isaac_sim

# 3. 检查一下链接是否成功（终端会显示 _isaac_sim -> /isaac-sim）
ls -al _isaac_sim
```

提前把git装好

```bash
apt-get update && apt-get install -y git
```

换源

```bash
# 为 Isaac Sim 的内置 Python 设置全局清华源
/isaac-sim/python.sh -m pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

Isaac Lab编译安装

```bash
# 确保在 Isaac Lab 目录下
cd $ISAACLAB_PATH

# 建立软链接并安装 Isaac Lab 的 Python 依赖
# (这会将 Isaac Lab 的包注册到 Isaac Sim 的 Python 环境中)
./isaaclab.sh --install
```


## 3.使用方法

### 3.1.Isaac Sim基础使用方法

- 运行py文件

    例如：我的workspace有个run_and_video.py文件

    ```bash
    /isaac-sim/python.sh /workspace/run_and_video.py
    ```

- 安装python依赖包方法

    ```bash
    /isaac-sim/python.sh -m pip install 包的名字
    ```

- 安装软件方法：（我忘了安装apt了没，看着办吧，没安装就用apt-get安装一下）

    由于是用root登录的，不用加sudo（也没安装好像）

    ```bash
    apt-get update
    apt-get install -y 软件的名字
    ```
### 3.2.Isaac Lab使用方法

还有测试环节：

- 空场景

    `./isaaclab.sh -p scripts/tutorials/00_sim/create_empty.py --headless`

- 运行倒立摆任务训练，开启无头模式和视频录制:
   `./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task Isaac-Cartpole-v0 --headless --video`

   查看生成的视频文件	

   `ls -lh /workspace/IsaacLab/logs/rsl_rl/cartpole/*/videos/`

- 还有机器狗：

    `./isaaclab.sh -p scripts/reinforcement_learning/rsl_rl/train.py --task Isaac-Velocity-Flat-Anymal-C-v0 --headless --video`

    存储路径：

    `/workspace/IsaacLab/logs/rsl_rl/anymal_c_flat`


## 4.使用规范

- 在各自容器内`/workspace`下写代码，防止误删容器造成数据丢失

- IsaacSim软件在容器内路径`/isaac-sim`下，使用方法见上节

- IsaacLab在容器内路径`/workspace/IsaacLab`，使用示例见上节

- 容器内路径`/workspace/ov_data`是缓存文件，**勿动这个文件夹**

- 容器内路径`/shared_data`是共享数据文件夹，主要存放资源文件（在`/shared_data/Asset`）（就不用联网下载了），另外也可以互相传东西，**谨慎使用指令！！！**

- 宿主机路径`/data/isaac_project/shared/BackUp`是备份文件夹，防止把自己环境搞崩了克隆缓慢，对应的自己容器内`/shared_data/BackUp`，里面东西勿动

- 代码中调用模型的时候就去上述共享文件及调用就行，此处**详见5.4！！！**

- 代码中最后记得关线程（这部分我目前在**5.1**已经设置，**不用管了**）要不然服务器一直在空转，占用资源，例如：

    ```python
    import sys
    import os
    
    # 1. 尝试优雅关闭
    simulation_app.close()
    print("引擎已关闭。")
    
    # 2. 拔电源！强制操作系统的内核直接回收这个进程的所有 CPU 和内存！
    print("强行干掉底层僵尸进程，释放 CPU...")
    os._exit(0) 
    ```





## 5.额外处理方法或常见报错

### 5.1.CPU占用较高情况

可以在1pandel的命令的Command设置`sleep infinity`，下一个Entrypoint留空。

然后再次执行**1.2安装ssh步骤**

> 此处为我自己留样，不用管：
>
> Command：bash
>
> Entrypoint：/isaac-sim/runheadless.sh

### 5.2.每次用1pandel重新构建容器时要重新安装ssh，配置环境变量

当然你安装的所有软件包都不见了

### 5.3.报错 `isaacsim.asset.importer.urdf`

这是一个**软件功能扩展插件 (Extension)**，

通常是网络问题，我备了个份在/BackUp文件夹里，自行`cp`出来

然后假设你放在了`/workspace/`下，即宿主机的`/data/isaac_project/users/<用户名>`：

```bash
# 1. 进入报错日志中提示的插件缓存目录
cd /isaac-sim/kit/data/Kit/Isaac-Sim/5.1/exts/3/

# 2. 创建这个插件的专属文件夹（名字必须和报错中要求的一模一样）
mkdir isaacsim.asset.importer.urdf-2.4.31

# 3. 将传进来的包解压到这个文件夹中
unzip /workspace/isaacsim.asset.importer.urdf-2.4.31+107.3.3.lx64.r.cp311.zip -d isaacsim.asset.importer.urdf-2.4.31/
```

### 5.4.好像不一定找我的本地Assets，还是会联网找

强制重定向！！！

打开`/workspace/IsaacLab/source/isaaclab/isaaclab/utils/assets.py`

修改25行左右：

修改前：

```python
NUCLEUS_ASSET_ROOT_DIR = carb.settings.get_settings().get("/persistent/isaac/asset_root/cloud")
"""Path to the root directory on the Nucleus Server."""

NVIDIA_NUCLEUS_DIR = f"{NUCLEUS_ASSET_ROOT_DIR}/NVIDIA"
"""Path to the root directory on the NVIDIA Nucleus Server."""

ISAAC_NUCLEUS_DIR = f"{NUCLEUS_ASSET_ROOT_DIR}/Isaac"
"""Path to the ``Isaac`` directory on the NVIDIA Nucleus Server."""

ISAACLAB_NUCLEUS_DIR = f"{ISAAC_NUCLEUS_DIR}/IsaacLab"
"""Path to the ``Isaac/IsaacLab`` directory on the NVIDIA Nucleus Server."""
```

修改为：

```python
# ================= 强制改为本地脱机路径 =================
NUCLEUS_ASSET_ROOT_DIR = "/shared_data/Assets/Isaac/5.1"

NVIDIA_NUCLEUS_DIR = f"{NUCLEUS_ASSET_ROOT_DIR}/NVIDIA"

ISAAC_NUCLEUS_DIR = f"{NUCLEUS_ASSET_ROOT_DIR}/Isaac"

ISAACLAB_NUCLEUS_DIR = f"{ISAAC_NUCLEUS_DIR}/IsaacLab"
# ========================================================
```

然后重新编译

```bash
cd /workspace/IsaacLab
./isaaclab.sh --install
```



## 6.其他

挂载方式

```
宿主机                                  容器
/data/isaac_project/users/用户         :/workspace \
/data/isaac_project/users/用户/ov_data :/root/.local/share/ov/data \
/data/isaac_project/shared            :/shared_data \

IsaacSim在各自的/isaac-sim下
shared文件夹放Asset文件
```





此时时间为15:14 2026/4/1

版本号v3.0

by yz
