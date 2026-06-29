---
collection: posts
title: ssh反向端口转发
slug: ssh-reverse-port-forwarding
tags:
  - 服务器
excerpt: 转发本地代理到服务器上
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 服务器
isTop: false
---
### 本地电脑执行

```powershell
ssh -N -R 7897:127.0.0.1:7897 用户名@服务器IP -p SSH端口
# 第一个7897是映射到服务器的端口，第二个四你自己本地代理端口（根据自己请款改）
```

此powershell保持开启

### 服务器设置

```bash
export HTTP_PROXY=http://127.0.0.1:7897
export HTTPS_PROXY=http://127.0.0.1:7897
export ALL_PROXY=http://127.0.0.1:7897

export http_proxy=http://127.0.0.1:7897
export https_proxy=http://127.0.0.1:7897
export all_proxy=http://127.0.0.1:7897

export NODE_USE_ENV_PROXY=1
export GLOBAL_AGENT_HTTP_PROXY=http://127.0.0.1:7897
```

上述可以写入文件：`~/.proxy_codex`

以下写入`~/.unproxy`

```bash
unset HTTP_PROXY
unset HTTPS_PROXY
unset ALL_PROXY

unset http_proxy
unset https_proxy
unset all_proxy

unset NODE_USE_ENV_PROXY
unset GLOBAL_AGENT_HTTP_PROXY
```


### 测试

```bash
curl -I https://api.openai.com
```
