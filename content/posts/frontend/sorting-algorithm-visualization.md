---
title: 算法入门：排序算法可视化
slug: sorting-algorithm-visualization
date: 2024-12-05
updated: 2024-12-08
category: frontend
tags:
  - algorithm
  - typescript
excerpt: 通过可视化的方式理解常见排序算法的原理与实现，让抽象的算法变得直观。
isTop: false
isPublished: true
author: 博主
---

## 冒泡排序

最简单的排序算法，重复遍历数组，比较相邻元素并交换：

```typescript
function bubbleSort(arr: number[]): number[] {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
```

- 时间复杂度：O(n²)
- 空间复杂度：O(1)
- 稳定排序

## 快速排序

分治策略的经典应用：

```typescript
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr
  const pivot = arr[0]
  const left = arr.slice(1).filter(x => x <= pivot)
  const right = arr.slice(1).filter(x => x > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}
```

- 时间复杂度：O(n log n) 平均
- 最坏情况：O(n²)

## 算法对比

| 算法 | 平均复杂度 | 空间复杂度 | 稳定性 |
|------|-----------|-----------|--------|
| 冒泡 | O(n²) | O(1) | 稳定 |
| 选择 | O(n²) | O(1) | 不稳定 |
| 插入 | O(n²) | O(1) | 稳定 |
| 快速 | O(n log n) | O(log n) | 不稳定 |
| 归并 | O(n log n) | O(n) | 稳定 |
