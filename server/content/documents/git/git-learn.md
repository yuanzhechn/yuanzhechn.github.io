---
collection: documents
title: git学习
slug: git-learn
tags:
  - git
excerpt: 使用交互式git学习网站学习笔记
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
groupSlug: git
groupTitle: git
order: 1
---
LearnGitBranching 全方位详细学习笔记

> **简介**：LearnGitBranching 是一个交互式的 Git 学习网站，通过可视化的“提交树”（Commit Graph）来展示 Git 命令对仓库状态的影响。
>
> **核心理念**：Git 的本质是一个有向无环图（DAG）。掌握 Git 就是掌握如何在这个图上创建节点（Commit）、移动指针（Branch/HEAD）以及复制节点。

---

## 第一部分：基础篇 (Main)

### 1. Git Commit (提交)
Git 仓库中的提交记录可以看作是项目的**快照**。
*   **原理**：Git 存储的是变化（Delta），但在逻辑上每个提交包含了整个项目的文件状态。提交记录非常轻量，因为它们只需存储父节点引用和当前的差异。
*   **命令**：
    ```bash
    git commit
    ```
*   **图解**：当前分支产生一个新的节点，箭头指向父节点。

### 2. Git Branch (分支)
分支在 Git 中极其轻量，它本质上仅仅是指向某个特定提交记录的**指针**（引用）。
*   **原理**：创建分支就是新建一个指针；切换分支就是移动 `HEAD` 指向不同的指针。
*   **命令**：
    ```bash
    git branch <分支名>    # 创建新分支
    git checkout <分支名>  # 切换到该分支
    # 快捷命令（创建并切换）：
    git checkout -b <分支名>
    ```

### 3. Git Merge (合并)
合并是两个分支历史的结合。
*   **原理**：`merge` 会创建一个特殊的“合并提交”（Merge Commit），该提交有两个父节点。
*   **场景**：保留完整的历史记录，非破坏性操作。
*   **命令**：
    ```bash
    git merge <目标分支>
    # 示例：将 bugFix 合并到 main
    git checkout main
    git merge bugFix
    ```

### 4. Git Rebase (变基)
变基是另一种合并方式，它通过“复制”提交记录并在另一个分支上“重放”来线性化历史。
*  **原理**：取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个放下去。

* **优点**：创造更清晰、线性的提交历史（没有繁杂的合并分叉）。

* **缺点**：会修改历史（改变 Commit Hash），**严禁**在公共/共享分支上对已推送的提交进行 Rebase。

* **命令**：
    ```bash
    git rebase <基底分支>
    # 示例：把 bugFix 移到 main 后面
    git checkout bugFix
    git rebase main
    ```
    *此时 `bugFix` 的历史看起来就像是紧接着 `main` 之后开发的。*

<table>
  <tr>
    <td>git checkout bugFix</td>
    <td>git rebase main</td>
    <td>git checkout main<br>git rebase bugFix
     </td>
  </tr>
  <tr>
    <td><img src="/content-assets/git-learn/001.png" height="300" /></td>
    <td><img src="/content-assets/git-learn/002.png" height="300" /></td>
    <td><img src="/content-assets/git-learn/003.png" height="300" /></td>
  </tr>
</table>



---

## 第二部分：高级操作与移动 (Ramping Up)

### 1. HEAD 与分离 HEAD (Detached HEAD)
*   **定义**：`HEAD` 是一个特殊的指针，它总是指向当前所在的本地分支（译注：通常指向分支名）。
*   **分离 HEAD**：当 `HEAD` 直接指向某个 **Commit Hash** 而不是分支名时，称为“分离 HEAD”状态。
*   **操作**：
    ```bash
    git checkout <commit_hash>
    ```

### 2. 相对引用 (Relative Refs)
通过哈希值指定提交记录太繁琐，Git 提供了相对引用。
*   **^ (Carat)**：向上一层（父节点）。
    *   `main^`：main 的父节点。
    *   `HEAD^`：当前节点的父节点。
*   **~ (Tilde)**：向上多层。
    *   `HEAD~3`：当前节点向上数第 3 个节点。
*   **链式调用**：
    ```bash
    git checkout HEAD~1^2  # 移动到父节点的第二个父节点
    ```

### 3. 强制修改分支位置
直接将某个分支引用拖动到特定的提交记录上。
*   **命令**：
    ```bash
    # 将 main 分支强制指向 HEAD 的第 3 级父节点
    git branch -f main HEAD~3
    ```
*   **应用**：快速修正错误的分支指向，或重置环境。

### 4. 分支记录回退
把分支记录回退几个提交记录来实现撤销修改
*   **命令**：
    
    ```bash
    git reset HEAD~1  # 把分支记录回退到HEAD的上一级（对远程分支无效）
    git revert HEAD
    ```

<table>
  <tr>
    <td></td>
    <td>git reset HEAD~1</td>
    <td>git revert HEAD(对于第一张图)</td>
  </tr>
  <tr>
    <td><img src="/content-assets/git-learn/004.png" height="300" /></td>
    <td><img src="/content-assets/git-learn/005.png" height="300" /></td>
    <td><img src="/content-assets/git-learn/006.png" height="300" /></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>新提交记录 C2' 引入了更改 —— 这些更改刚好是用来撤销 C2 这个提交的。也就是说 C2' 的状态与 C1 是相同的。</td>
  </tr>
</table>



---

## 第三部分：整理提交记录 (Moving Work Around)

### 1. Git Cherry-pick (优选)
这是最直接的“复制提交”方式。如果你知道你需要哪个具体的提交，可以直接把它抓过来。
*   **命令**：
    ```bash
    # 将 c2 和 c4 两个提交复制到当前 HEAD 下面
    git cherry-pick c2 c4
    ```

### 2. 交互式 Rebase (Interactive Rebase)
当你不知道 Commit Hash，或者想要重新排序、删除、合并提交时使用。
*   **命令**：
    ```bash
    git rebase -i HEAD~4
    ```
*   **UI 操作**：Git 会打开一个编辑器（Vim 等），列出最近 4 个提交。
    *   `pick`：保留。
    *   `drop`：删除。
    *   `reorder`：调整行顺序来改变提交顺序。
    *   `squash`：将此提交合并到上一个提交中。

---

## 第四部分：杂项技巧 (A Mixed Bag)

### 1. 本地栈式提交 (Stacking)
场景：你在开发 `feature`，但发现需要先修改 `main` 上的一个 bug。
*   **流程**：
    1.  `git checkout main`
    2.  `git cherry-pick <bugFix_commit>` (只抓取修复的那次提交)
    3.  或者使用 `rebase -i` 将 bugFix 调整到最前，然后更新 main。

### 2. Git Tag (标签)
分支会随新的提交移动，但 Tag 是永久的**锚点**，通常用于发布版本（v1.0, v2.0）。
*   **命令**：
    ```bash
    git tag v1 c1  # 在提交 c1 上打标签 v1
    git checkout v1 # 此时进入分离 HEAD 状态
    ```

### 3. Git Describe (描述)
用于查询当前位置距离最近的标签有多远。常用于构建系统生成版本号。
*   **语法**：`git describe <ref>`
*   **输出格式**：`<tag>_<numCommits>_g<hash>`
    *   `tag`：离得最近的标签。
    *   `numCommits`：相差多少个提交。
    *   `hash`：当前提交哈希的前几位。

---

## 第五部分：高级话题 (Advanced Topics)

### 1. 多次 Rebase
场景：你有多个分支 `side1`, `side2`, `side3`，都需要合并到 `main`，并希望保持线性历史。
*   **操作**：连续执行 Rebase。
    ```bash
    git rebase main side1 # 把后者部分移动到前者下方，移动部分为两者共同的最近的祖先（不含）到后者（含）的所有节点
    git rebase side1 side2
    git rebase side2 side3
    git checkout main
    git merge side3  # 此时是 Fast-forward
    ```

### 2. 选择父节点 (Select Parent)
针对合并提交（Merge Commit），它有两个父节点。
*   `^1`：代表“第一个父节点”（通常是你 Merge **时**所在的分支）。
*   `^2`：代表“第二个父节点”（通常是你 Merge **进来**的那个分支）。
*   **命令**：
    ```bash
    git checkout HEAD^   # 默认回到 ^1
    git checkout HEAD^2  # 回到 ^2
    ```
*   **支持链式**：`git checkout HEAD~^2~2`

---

## 第六部分：远程仓库基础 (Remote Basics)

### 1. Git Clone & Remote Branch
*   **Git Clone**：在本地创建一个远程仓库的完整副本。
*   **远程分支**：形如 `origin/main`。
    *   它们反映了远程仓库的状态。
    *   **特点**：你无法直接 checkout 到 `origin/main` 并进行 commit（会进入分离 HEAD）。你只能更新它们（通过 fetch），然后将本地分支 merge/rebase 进去。

### 2. Git Fetch (获取)
`git fetch` 是与远程仓库通信的核心命令。
*   **作用**：
    1.  下载本地没有的远程提交记录。
    2.  更新本地的远程分支指针（如 `origin/main`）。
*   **注意**：`fetch` **不会** 修改你的本地工作区（不会改变你的 `main` 分支），它只是把数据下载下来。

### 3. Git Pull (拉取)
由于 `git fetch` 后通常紧接着就是合并，Git 提供了快捷方式。
*   **公式**：
    ```
    git pull = git fetch + git merge
    ```
*   **变体**：
    ```
    git pull --rebase = git fetch + git rebase
    ```

### 4. Git Push (推送)
将本地的变更上传到远程仓库，并更新远程仓库的引用。
*   **命令**：
    ```bash
    git push
    ```
*   **限制**：如果远程仓库的历史比你新（其他人推过了），Git 会拒绝推送，强制你先拉取（Pull）合并。

---

## 第七部分：远程高级操作 (Advanced Remote)

### 1. 处理偏离的历史 (Diverged History)
场景：你写了代码，准备 push，但同事已经 push 了新代码到远程 `main`。
*   **直接 Push 会失败**。
*   **解决方法 1 (Merge)**：
    ```bash
    git fetch
    git merge origin/main
    git push
    # 简写：git pull; git push
    ```
*   **解决方法 2 (Rebase - 推荐)**：
    ```bash
    git fetch
    git rebase origin/main
    git push
    # 简写：git pull --rebase; git push
    ```
    *优点：保持远程分支历史整洁线性。*

### 2. 锁定的 Main (Locked Main) / 受保护分支
场景：有些分支（如 main）被配置为“Protected”，禁止直接 Push，必须通过 Pull Request (PR) 合并。
*   如果我不小心在 main 上直接提交了代码，怎么办？
*   **流程**：
    1.  新建分支：`git checkout -b feature`
    2.  推送到远程：`git push origin feature`
    3.  重置本地 main 与远程同步：`git checkout main; git reset --hard origin/main`

---

## 第八部分：深入理解 Push/Pull 参数 (Refspecs)

这是 Git 中最晦涩但最强大的部分。

### 1. Git Push 参数
语法：`git push <remote> <place>`
*   **基本用法**：
    ```bash
    git push origin main
    ```
    意思是：切到本地 `main`，把它推送到远程 `origin` 的 `main`。

*   **<source>:<destination> 语法**：
    如果你想把本地的 `foo` 分支推送到远程的 `bar` 分支：
    ```bash
    git push origin foo:bar
    ```

*   **删除远程分支**：
    如果 `<source>` 为空，相当于“推送空”到远程，即删除。
    ```bash
    git push origin :foo
    # 删除远程的 foo 分支
    ```

### 2. Git Fetch 参数
语法与 Push 极其相似，只是方向相反。
*   **基本用法**：
    ```bash
    git fetch origin foo
    ```
    意思是：下载远程 `foo` 分支，并更新本地的 `origin/foo`（注意：不会直接更新本地 `foo`）。

*   **<source>:<destination> 语法**：
    ```bash
    git fetch origin foo:bar
    ```
    意思是：找到远程的 `foo`，下载下来，并在本地创建一个名为 `bar` 的分支（如果已存在则更新它）。
    *这允许你直接通过 fetch 在本地创建新分支。*

*   **在 Fetch 中创建空分支**：
    ```bash
    git fetch origin :bar
    ```
    *这会在本地创建一个新分支 `bar`。*

### 3. 这里的 source 和 destination
*   **Push**: source 是本地，destination 是远程。
*   **Fetch**: source 是远程，destination 是本地。

---

## 最佳实践总结 (节外生枝)

1.  **保持历史线性**：尽量使用 `git pull --rebase` 而不是 `git pull`，这样可以避免无意义的 Merge Commit。
2.  **原子提交**：每个 Commit 只做一件事。这使得 `cherry-pick` 和 `rebase` 更容易。
3.  **不要 Rebase 公共分支**：一旦代码 push 到了多人共享的分支，就不要在本地 rebase 它，否则会造成其他人的历史混乱。
4.  **善用暂存区 (Stash)**：虽然本教程未详细涉及，但 `git stash` 可以在切换分支时保存当前未提交的进度。
5.  **Reflog 是后悔药**：如果把分支搞丢了，`git reflog` 记录了 HEAD 的每一次移动，可以找回丢失的 commit。
