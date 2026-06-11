---
collection: challenges
title: 第 1 期：两数之和
slug: challenge-two-sum
date: 2026-06-11
publishAt: 2026-06-11
dueAt: 2026-06-18
difficulty: easy
sequence: 1
cadence: weekly
tags:
  - 数组
  - 哈希表
  - 算法
excerpt: 给定一个整数数组和目标值，找出和为目标值的两个元素下标。
isPublished: true
author: 博主
---

# 两数之和

给定一个整数数组 `nums` 和一个整数目标值 `target`，请找出数组中和为目标值的两个整数，并返回它们的下标。

## 示例

```text
输入：nums = [2, 7, 11, 15], target = 9
输出：[0, 1]
```

## 约束

- 每组输入只会对应一个答案
- 同一个元素不能使用两次
- 可以按任意顺序返回答案

## 思考方向

尝试分别写出暴力解法和哈希表解法，并比较二者的时间复杂度与空间复杂度。
