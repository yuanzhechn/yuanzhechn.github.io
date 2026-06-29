---
collection: posts
title: p2p直连打洞
slug: nat-hole-punching
tags:
  - 计算机网络
excerpt: 不良林20251213视频记录
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: 计算机网络
isTop: false
---
# 20251213_【建议收藏】 一次搞懂所有NAT类型，实战各NAT类型之间的打洞可行性，通过p2p vpn实现无公网ip穿透家庭内网，p2p直连打洞，游戏联机，BT下载

1. 关闭代理工具
2. 访问`natchecker.com`进行nat类型检测





# 🌐 全面解析 NAT 打洞与 P2P 组网技术笔记

**视频主题**：深入理解 NAT 类型（STUN）、P2P 直连原理及 Tailscale/EasyTier 实战  
**主讲人**：不良林  
**核心关键词**：NAT穿透, STUN, P2P, Full Cone, Symmetric NAT, Tailscale, EasyTier

---

## 📖 第一部分：NAT 理论基础与分类

### 1.1 为什么需要 NAT (Network Address Translation)
由于 IPv4 地址资源枯竭，绝大多数用户无法拥有独立的公网 IP。
- **内网 (LAN)**：设备拥有如 `192.168.x.x` 的私有 IP。
- **公网 (WAN)**：路由器/光猫拥有唯一的公网 IP。
- **作用**：路由器通过 NAT 技术，将内网设备的 `内网IP:端口` 映射为 `公网IP:端口`，从而实现上网。

### 1.2 NAT 的两个核心行为
理解 NAT 类型，必须从以下两个维度进行判定：
1.  **映射行为 (Mapping Behavior)**：内网设备发出的请求，路由器如何分配出口端口？
2.  **过滤行为 (Filtering Behavior)**：外部发回的数据包，路由器如何决定是否放行给内网设备？

### 1.3 四种经典的 NAT 类型 (RFC 3489 定义)

视频中重点对比了四种类型，安全性由低到高，穿透难度由低到高：

#### 🟢 NAT1: 全锥型 (Full Cone NAT)
- **定义**：最宽松的 NAT。
- **映射**：内网 `IP:Port` 映射到公网 `IP:Port` 后，该映射固定不变。
- **过滤**：**无限制**（Endpoint-Independent Filtering）。
- **特征**：一旦映射建立，**任何**外部主机都可以通过该公网 `IP:Port` 向内网设备发送数据。
- **打洞难度**：极低（几乎等同于拥有公网 IP）。

#### 🟡 NAT2: IP限制锥型 (Restricted Cone NAT)
- **别名**：地址限制锥型。
- **映射**：映射关系固定（同 Full Cone）。
- **过滤**：**IP 受限**（Address-Dependent Filtering）。
- **特征**：只有内网设备**主动发送过数据**的目标 IP，其发回的数据包才会被接收。其他 IP 发来的会被丢弃。
- **打洞难度**：低。

#### 🟠 NAT3: 端口限制锥型 (Port-Restricted Cone NAT)
- **定义**：家用路由器最常见的类型。
- **映射**：映射关系固定（同 Full Cone）。
- **过滤**：**IP 和端口均受限**（Address and Port-Dependent Filtering）。
- **特征**：只有内网设备主动发给 `目标IP:目标Port` 的数据，该目标必须用**完全相同**的 `IP:Port` 回复才能通过。
- **打洞难度**：中等（需要准确预测或获知端口）。

#### 🔴 NAT4: 对称型 (Symmetric NAT)
- **定义**：最严格的 NAT，企业级路由常见。
- **映射**：**动态映射**（Address and Port-Dependent Mapping）。
    - 内网设备即使使用同一个源端口，发往**不同**的目标 IP/Port 时，路由器会分配**不同**的公网端口。
- **过滤**：IP 和端口均受限。
- **特征**：端口随机性强，外部无法预测路由器分配的公网端口。
- **打洞难度**：极高（通常需要中继/Relay）。

---

## 🛠 第二部分：STUN 打洞原理 (Hole Punching)

### 2.1 打洞的核心逻辑
P2P（Peer-to-Peer）连接的目标是让两台位于 NAT 后的设备直接通信，不经过中转服务器。

1.  **信令服务器 (Signal/STUN Server)**：
    - 双方设备（A 和 B）首先连接公网的 STUN 服务器。
    - STUN 服务器告知 A：你的公网出口是 `1.1.1.1:100`。
    - STUN 服务器告知 B：你的公网出口是 `2.2.2.2:200`。
    - 双方交换这些信息。

2.  **建立连接 (Cone NAT 场景)**：
    - A 向 B 的公网地址 `2.2.2.2:200` 发包（此时 A 的路由器留下了“洞”）。
    - B 向 A 的公网地址 `1.1.1.1:100` 发包。
    - 由于 Cone NAT 的映射是不变的，且只要双方互相发包，防火墙规则就会放行，P2P 连接建立成功。

### 2.2 对称型 NAT (Symmetric) 的死结
- 如果 A 是对称型 NAT：
    - A 连接 STUN 服务器时，路由器分配端口 `100`。
    - A 尝试连接 B 时，因为目标地址变了（从 STUN 服务器变成了 B），路由器会**重新分配**一个新端口（例如 `105`）。
    - 此时 B 依然往旧端口 `100` 发包，导致连接失败。
- **端口猜测**：部分软件尝试猜测对称 NAT 分配端口的规律（如顺序递增），但这并不可靠。

### 2.3 NAT 连通性矩阵 (能否直连)

| 源 \ 目标 | NAT1 (Full) | NAT2 (IP) | NAT3 (Port) |     NAT4 (Symmetric)      |
| :-------- | :---------: | :-------: | :---------: | :-----------------------: |
| **NAT1**  |   ✅ 直连    |  ✅ 直连   |   ✅ 直连    |          ✅ 直连           |
| **NAT2**  |   ✅ 直连    |  ✅ 直连   |   ✅ 直连    |          ✅ 直连           |
| **NAT3**  |   ✅ 直连    |  ✅ 直连   |   ✅ 直连    |    ❌ 困难 (通常需中继)    |
| **NAT4**  |   ✅ 直连    |  ✅ 直连   |   ❌ 困难    | ❌ **无法直连** (必须中继) |

> **结论**：一方是 Full Cone 时，连通性最好；双方都是 Symmetric NAT 时，基本无解，必须走服务器中转。

---

## 💻 第三部分：工具实战演示

### 3.1 NAT 类型检测工具`natchecker.com`

- **工具名称**：NAT Checker / NAT Type Tester
- **原理**：通过向不同 IP 的 STUN 服务器发送请求，观察回包的 IP 和 Port 变化来判断 NAT 类型。
- **重要提示**：浏览器的检测结果可能受插件或 WebRTC 限制影响，建议使用命令行工具或专用软件更准确。

### 3.2 Tailscale (基于 WireGuard 的虚拟组网)`tailscale.com`
- **特点**：
    - 零配置，基于账号体系。
    - 智能选择路径：优先 P2P，失败则走 DERP 中继。
- **演示流程**：
    1.  Mac 和 Android 手机登录同一账号。
    2.  在终端使用 `tailscale status` 查看节点状态。
    3.  使用 `tailscale ping <对端IP>` 检测连接方式。
- **结果分析**：
    - `via DERP(sfo)`：表示走了中继服务器（延迟高，速度受限）。
    - `direct`：表示 P2P 打洞成功（直连，速度快）。
    - **案例**：视频中演示了 NAT4 环境下 Tailscale 能够实现 Direct 直连（通过端口预测或生日攻击等高级算法），但在极端的 NAT4-NAT4 双端对称环境下仍可能回退到 DERP。

### 3.3 EasyTier (去中心化组网新秀)`easytier.cn`
- **特点**：
    - 纯 Go/Rust 编写（视频中为 Rust 版本），无需中心化登录服务器。
    - 支持手动指定公共节点（Public Peers）。
    - 界面简洁，显示直观的 NAT 类型。
- **演示流程**：
    1.  输入相同的 `Network Name` 和 `Secret`。
    2.  添加公共节点 URL 以辅助打洞。
    3.  启动服务，观察 UI 显示的连接状态。
- **P2P 表现**：
    - UI 会明确显示当前链路是 `p2p` 还是 `relay`。
    - 视频演示中，当模拟极端 NAT4 环境时，EasyTier 显示无法建立 P2P 连接，必须依赖中转。

---

## 📝 总结与网络优化建议

1.  **公网 IP 是王道**：如果有公网 IP，直接做端口映射（Port Forwarding），这就是 NAT1 效果，连接最稳。
2.  **开启 DMZ**：如果路由器支持，将需要 P2P 的设备设置为 DMZ 主机，可将 NAT 类型提升为 NAT1 (Full Cone)。
3.  **开启 UPnP**：通用即插即用，允许软件自动向路由器申请端口映射，有助于将 NAT3 变为 NAT2 或 NAT1。
4.  **运营商因素**：
    - 移动宽带/大内网通常是 NAT3 或 NAT4，打洞困难。
    - 尽量争取光猫改桥接，用性能较好的路由器拨号。
5.  **工具选择**：
    - **Tailscale/ZeroTier**：适合小白，通过中继保底，体验平滑。
    - **EasyTier/N2N**：适合喜欢折腾、去中心化或自建中转节点的用户。

### 💡 附录：常用命令 (Tailscale)
```bash
# 查看节点详细状态
tailscale status

# 测试连通性及连接模式（关键命令）
tailscale ping <Hostname或IP>
# 输出示例：
# pong from server-a (100.x.x.x) via DERP(tok) in 120ms  <-- 走了中继
# pong from server-a (100.x.x.x) via 1.2.3.4:12345 in 30ms <-- P2P直连

```

### 参考资料

[中心化逻辑部署 Easytier - 无 Web 管理](https://blog.mitsea.com/1b37bda595c580c989edf890db8e0b19/)
