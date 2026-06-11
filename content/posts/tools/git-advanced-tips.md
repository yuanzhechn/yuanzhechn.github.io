---
title: Git 高级技巧：从入门到精通
slug: git-advanced-tips
date: 2025-01-18
updated: 2025-02-10
category: tools
tags:
  - git
excerpt: 掌握 Git rebase、cherry-pick、bisect 等高级技巧，让你的版本控制效率提升一个档次。
isTop: false
isPublished: true
author: 博主
---

## rebase vs merge

### merge 方式

```bash
git checkout feature
git merge main
```

产生一个合并提交，保留完整历史。

### rebase 方式

```bash
git checkout feature
git rebase main
```

将 feature 分支的提交"移植"到 main 的最新提交之上，历史更线性。

## cherry-pick 精准移植

```bash
git cherry-pick abc1234
```

将指定提交应用到当前分支，常用于：

- 从其他分支提取特定修复
- 将 hotfix 合并到 release 分支
- 跨分支复用功能代码

## bisect 二分查找

当你不确定哪个提交引入了 bug 时：

```bash
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
```

Git 会自动帮你二分查找，快速定位问题提交。

## 实用技巧

1. `git stash` 暂存未完成的修改
2. `git reflog` 恢复误删的分支
3. `git log --oneline --graph` 可视化分支历史
4. `git commit --amend` 修改最后一次提交

## 总结

掌握这些高级 Git 技巧，能让你的开发效率大幅提升。建议在非关键分支上多加练习。
