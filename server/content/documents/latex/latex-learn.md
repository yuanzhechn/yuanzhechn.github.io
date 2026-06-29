---
collection: documents
title: latex学习
slug: latex-learn
tags:
  - latex
  - 数学建模竞赛
excerpt: 记录latex一些简单的使用
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
groupSlug: latex
groupTitle: latex
order: 1
---
## 特殊符号

Latex中的特殊符号（因为有特殊含义，所以不能直接当成文本打出来，**需要\转译**）

- `%`，在LaTeX中，百分号是作为注释符号

- `&`，在LaTeX用于表格或数学公式中的位置对齐符号
- `$`，这个符号被用作数学公式标记符：被框在两个该符号中间的内容将会翻译为数学公式

- `~`，保留强制空格，非常古老的用法
- `^`和`_`，上三角和下划线用作上下标标记
- `{`和`}`，左右花括号表示将其中的内容作为一个整体对待
- `#`，编写宏包时使用

## 正文

### 设定区域和正文区域

- 设定区域
  - `\documentclass{...}`、`\usepackage{...}`为设定区域，规定论文格式，导入相关依赖包等
  - 一般不会对生产的PDF产生影响
  - 设定区域会随着我们不断添加新的元素而丰富

- 正文区域
  - `\begin...\end`命令中间的这个区域
  - 所有在最终PDF文件的可见内容均在此区域添加，包括文字，图表，公式
  - 在正文区域，我们需要先输入一篇论文的基本内容，设定论文题目，摘要，关键字等

### 正文各级标题

- `chapter`，章，一般只用于可以成书的文章
- `section`，节
- `subsection`，小节
- `subsubsection`，小小节

### 换行、换段、换页、首行缩进命令

- `\\`（`\newline`、`\linebreak`、`\\[offset]`）换行，（建议前俩）
- `\par`分段，（我试了一下，中间留个空行也行，建议段落和整行公式之间也留空行）
- `\newpage`分页命令
- `\setlength{\parindent}{长度}`首行缩进，（试了，原始大概1.5em）

### 正文行中特殊字符和短公式

- 使用两个`$`符号：`$公式$`

### 单行公式带编号

- ```latex
  \begin{equation} \label{公式标签}
  ......
  \end{equation}
  
  % 效果如下
  %                              α + β = γ                                    (1)
  ```

- 自动引用`\autoref{公式标签}`（需要导入依赖包`\usepackage{hyperref}`）

  效果：在对应位置有个 `Equation 1`以此类推，点击可跳转到公式位置

- 另一个引用`\eqref{公式标签}`（需要导入依赖包`\usepackage{amsmath}`）

  效果：在对应位置有个 `(1)`以此类推，点击可跳转到公式位置

> 引用这一块经测试，需要**先清理辅助文件**，**再用LaTeXmk点两次编译**，方可正常显示引用

### 无编号公式

- ```latex
  \[公式\]
  或
  $$公式$$
  ```

### 多行公式

- 使用`\begin{split}...\end{split}`，需要导入依赖包`\usepackage{amsmath}`

  注意：这里需要搭配上面的`\begin{equation} \label{公式标签}...\end{equation}`，`\[公式\]`或`$$公式$$`

### 分情况讨论

- 属于多行公式的一种，使用`\begin{cases}...\end{cases}`，需要导入依赖包`\usepackage{amsmath}`
- 如果公式比较紧就把`cases`换成`dcases`，导入依赖包`\usepackage{mathtools}`

> - 可用`&`进行对齐
> - 需要正文样式输出的地方用`\test{}`

关于公式的实例：

```latex
\begin{equation} \label{eq:long}
    f(x) =
    \begin{dcases}
        0, &x<0 \\       % 这里有个&
        \int_{-\infty}^\infty  \hat f(x)\xi\,e^{2 \pi i \xi x}  \,\mathrm{d}\xi , &otherside               % 这里也有&，对齐作用，否则x<0会紧挨着0,
    \end{dcases}
\end{equation}
```

$$
f(x) =
    \begin{dcases}
        0, &x<0 \\
        \int_{-\infty}^\infty  \hat f(x)\xi\,e^{2 \pi i \xi x}  \,\mathrm{d}\xi , &otherside
    \end{dcases}
$$

### 插入图片

- 依赖包`graphicx`（有的环境可能自带）

- 常用模版

  ```latex
  \begin{figure}[htbp]
  	\centering
  	\includegraphics[图片大小][图片路径]
  	\caption{图片标题、说明}
  	\label{图片标签}
  \end{figure}
  ```

- [图片大小]

  图片大小使用height和width规定，单位可以采用cm或in（inch），如果只规定高或宽其中一个，图片将保持高宽比插入，所以一般只需要规定图片宽度。

- [图片路径]

  图片相对于`.tex`文件的路径

- 双栏显示

  图片如果要跨栏显示，把`\begin{figure}...\end{figure}`替换为`\begin{figure*}...\end{figure*}`即可

- `htbp`是LaTeX中用于控制浮动体位置的一个选项集。浮动体（如图片或表格）通常不会被直接放置在代码所在的位置，而是由LaTeX根据排版需要放置在页面的其他位置。`htbp`用于指定浮动体的偏好位置。这些选项的含义如下：
  - h（here）：尽量将浮动体放置在代码所在的位置。然而，如果页面的顶部或底部能够更好地容纳浮
    动体，LaTeX可能会选择这样做。
  - t（top）：将浮动体放置在页面的顶部。
  - b（bottom）：将浮动体放置在页面的底部。
  - p（page）：将浮动体放置在一个单独的页面上。
  - 前面加个`!`表示强制排版，忽略美观
  - 这些选项可以组合使用，例如`ht`表示首选放置在页面顶部，但如果不行就放置在代码所在的位置。
    默认情况下，如果你不提供任何选项，LaTeX会使用`tbp`作为默认值。
  - 例如，`\begin{figure})[htbp]`表示在尽量放在当前位置，如果不行就放在页面顶部，底部，或者单独
    一页。

### 表格

示例：

```latex
\begin{table}[!htbp]
    \begin{center}                  % 让表格在页面居中显示
        \caption{Notations}         % 给表格加标题并自动生成类似"Table 1:标题名"的序号
        \begin{tabular}{cl}         % 第一列c即默认居中对齐，第二列l即默认居左对齐
            \toprule                % 粗顶线
            \multicolumn{1}{m{3cm}}{\centering Symbol}
                     & \multicolumn{1}{m{8cm}}{\centering Definition} \\
                                    % multicolumn{1}是指这格只占一列，即没有合并列；3cm指这一
                                    % 格宽3cm；\centering指居中显示（题目一般居中）
            \midrule                % 细分界线
            $A$      & the first one                                  \\ % 每一行的不同
            $b$      & the second one                                 \\ % 项之间用&间
            $\alpha$ & the last one                                   \\ % 隔，用来对齐
            \bottomrule             % 粗底线
        \end{tabular}\label{tb:notation}  % 设置标签，在文中引用同公式
    \end{center}
\end{table}
```

- 每列属性其他：r,l,c,t,b<->右左中上下

制表网站（不怎么好用）：

www.latex-tables.com

[Create LaTeX tables online – TablesGenerator.com](https://tablesgenerator.com/)

### 参考文献

推荐使用bib格式，在下列网站直接点引用就能有复制bib格式的选项。

[Google 学术搜索](https://scholar.google.com/)

[百度学术](https://xueshu.baidu.com/)

bib文件实例：

```bib
@article{聂凯2025基于,
  title={基于YOLOv8-RFL模型的电力绝缘子缺陷检测方法},
  author={聂凯 and 李泽 and 高文豪 and 李诚真 and 刘永鹏 and 李清泉},
  journal={电网技术},
  number={9},
  year={2025},
}

% 当然可以罗列多个，不再赘述
```

把bib格式的文本复制到新建的`.bib`文件中，在要列出参考文献的地方写出：

```latex
\bibliographystyle{unsrt}              % 其中unsrt是按引用顺序排序
\bibliography{bib文件的文件名}           % 此处不用写后缀.bib
```

引用时，直接在要引用的地方写`\cite{bib文件第一个字段名}`，对应上面就是`聂凯2025基于`

如果想把`[1]`标放在右上角，则需在设定区域（也就是`\begin{document}`之前）添加`\newcommand{\upcite}[1]{\textsuperscript{\cite{#1}}}`，然后在文中的引用从`\cite{}`改为`\upcite{}`

> 这里的编译方式也是`LaTeXmk`

## 摘要、目录、附录

### 摘要

在`\begin{abstract}...\end{abstract}`内，

若要关键字，加上：

```latex
\vspace{5pt}
\textbf{Keywords}: MATLAB, mathematics, LaTeX.
```

### 目录

```latex
\maketitle  % 生成 Summary Sheet
\tableofcontents  % 生成目录
```

### 附录

用`\begin{subappendices}...\end{subappendices}`框起来

代码引用示例：

```latex
\begin{lstlisting}[language=Python, name={test.py}]
# Python code example
for i in range(10):
    print('Hello, world!')
\end{lstlisting}
```

## 快捷键

预览pdf文档时，左键双击转到代码

查看代码时，Ctrl+Alt+J转到预览

## 中文问题

代码首行加上`%!TEX program = xelatex`，在导包区加上`\usepackage{ctex}`，仍用`LaTeXmk`编译即可。

此时会衍生一个问题，在写英文版时“摘要”“目录”等关键字会由于模版原因仍然呈现中文，所以记得删除以上两条指令；或者，一劳永逸地，导包区加的那个改成`\usepackage[scheme=plain]{ctex}`就行，可兼容中英文。
