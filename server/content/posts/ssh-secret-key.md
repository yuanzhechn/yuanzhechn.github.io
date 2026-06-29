---
collection: posts
title: 通过密钥ssh登录服务器
slug: ssh-secret-key
tags:
  - 服务器运维
excerpt: 使用密钥登录服务器的配置方法
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 服务器
isTop: false
---
# 密钥登录配置指南

## 在自己电脑上操作

### 1. 生成密钥（使用 Ed25519 算法）

```bash
ssh-keygen -t ed25519 -C "你的邮箱@example.com"
```

会弹出消息让你输入：
- **第一个**是密钥保存位置：直接按回车使用默认路径（如 `~/.ssh/id_ed25519`），防止之后找不到。
- **第二个**是设置密码（passphrase）。
- **第三个**是确认密码。

---

### 2. 启动 SSH 代理并添加密钥  
> （我这边用的是 Windows PowerShell；如果不是，可能需要其他指令）

```powershell
# 启动 ssh-agent 服务
Start-Service ssh-agent

# 添加密钥
ssh-add ~/.ssh/id_ed25519
```

如果提示：
```
~/.ssh/id_ed25519: No such file or directory
```
可能是路径识别问题，可以改用完整路径，例如：
```powershell
ssh-add C:\Users\用户名\.ssh\id_ed25519
```

然后再次输入密码，即可成功添加密钥。

查看公钥内容：
```bash
cat ~/.ssh/id_ed25519.pub
```

---

### 3. 将生成的公钥添加到服务器的 `~/.ssh/authorized_keys` 文件中

你可以使用以下命令自动完成（推荐）：
```bash
ssh-copy-id User@IP
```

也可以手动操作：

1. 在本地电脑查看公钥内容：
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. 登录服务器，检查 `~/.ssh/authorized_keys` 是否存在：
   ```bash
   # 如果不存在，就创建一个
   touch ~/.ssh/authorized_keys
   ```

3. 将公钥内容复制到 `authorized_keys` 文件中：
   ```bash
   echo "粘贴你的公钥内容" >> ~/.ssh/authorized_keys
   ```
   > **注意**：也可以直接编辑文件粘贴进去。  
   > **务必粘贴完整公钥内容**，不要只复制中间部分。  
   > 正确格式应为：  
   > `ssh-ed25519 xxxxx xxx.com`

4. 设置正确权限：
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys
   ```

---

### 4. 测试登录

#### 修改服务器端的 SSH 配置文件：
```bash
sudo vim /etc/ssh/sshd_config
```

确保以下配置项：
```conf
PasswordAuthentication no        # 禁用密码登录
PubkeyAuthentication yes         # 启用密钥登录
PermitRootLogin prohibit-password  # root 只能用密钥登录
```

> **建议**：先保持 `PasswordAuthentication yes`，测试密钥登录成功后再设为 `no`。

修改完成后重启 SSH 服务：
```bash
sudo systemctl restart sshd
```

#### 在自己电脑上测试：
```bash
ssh User@IP
```
看看是否可以免密登录。

---

## 结束后操作

### 1. 备份私钥
```bash
cp ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.backup
```

### 2. 永久添加密钥到 ssh-agent（Windows PowerShell）
```powershell
# 设置 ssh-agent 自动启动
Get-Service ssh-agent | Set-Service -StartupType Automatic

# 检查是否已运行
Get-Service ssh-agent

# 如果没有运行，就启动它
Start-Service ssh-agent

# 添加密钥（使用环境变量获取用户目录）
ssh-add $env:USERPROFILE\.ssh\id_ed25519
```

### 3. （可选）创建 SSH 别名

在自己电脑操作：

1. 确保 `~/.ssh/config` 文件存在；如果不存在，就创建一个。

2. 在其中写入以下内容：
```conf
Host master03                     # 别名
    HostName xxx.xxx.xxx.xxx       # 服务器 IP
    User root                     # 用户名
    IdentityFile ~/.ssh/id_ed25519  # 私钥位置，尽量使用绝对路径，防止识别不了
    IdentitiesOnly yes            # 只使用指定的身份文件

Host *
    AddKeysToAgent yes
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

> 配置完成后，即可通过 `ssh master03` 快速连接服务器。

---

✅ 所有原始内容均已保留，仅优化了格式、层级和可读性。
