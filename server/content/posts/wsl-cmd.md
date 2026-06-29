---
collection: posts
title: WSL常用指令
slug: wsl-cmd
tags:
  - wsl
excerpt: wsl中一些常用指令
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
category: wsl
isTop: false
---
`wsl --list -v`查看当前安装的所有linux版本

在cmd中打开：`wsl -d 子系统名字`

彻底关闭：`wsl --shutdown`

卸载子系统`wsl --unregister 子系统名字`

备份：`wsl --export Ubuntu ubuntu.tar`

导入：`wsl --import 目标名字 导入路径 备份路径`

> 例`wsl --import Ubuntu2 D:/wsl C:\Users\93917\Desktop\ubuntu.tar`

允许可视化窗口展示（wslg）：

`sudo apt-get install gimp`，然后直接输入gimp打开
