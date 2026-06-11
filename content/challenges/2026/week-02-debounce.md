---
collection: challenges
title: 第 2 期：实现一个防抖函数
slug: challenge-debounce
date: 2026-06-18
publishAt: 2026-06-18
dueAt: 2026-06-25
difficulty: medium
sequence: 2
cadence: weekly
tags:
  - JavaScript
  - 函数
  - 工程实践
excerpt: 手写一个支持参数透传、this 绑定和取消调用的 debounce 函数。
isPublished: true
author: 博主
---

# 实现一个防抖函数

实现 `debounce(fn, wait)`，连续调用时只在停止触发 `wait` 毫秒后执行最后一次调用。

## 基础要求

- 参数能够正确传给原函数
- 保留调用时的 `this`
- 返回一个可以重复调用的新函数

## 进阶要求

为返回函数增加 `cancel()` 方法，取消尚未执行的调用。

```ts
const search = debounce((keyword: string) => {
  console.log(keyword)
}, 300)

search('v')
search('vu')
search('vue')
```

思考如何定义 TypeScript 泛型，使返回函数尽可能保留原函数的参数类型。
