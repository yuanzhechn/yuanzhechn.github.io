---
collection: documents
title: Javascript学习
slug: javascript-learn
tags:
  - web前端
  - Javascript
excerpt: Javascript基础学习
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
groupSlug: front-end
groupTitle: 前端
order: 1
---
# JavaScript

## JavaScript语句、标识符

### 语句

JavaScript 程序的单位是行（line），也就是一行一行地执行。一般 情况下，每一行就是一个语句

```javascript
var num = 10;
```



语句以分号结尾，一个分号就表示一个语句结束

### 标识符

标识符（identifier）指的是用来识别各种值的合法名称。最常见的标识符就是变量名

标识符是由：字母、美元符号(`$`)、下划线(`_`)和数字组成，其中数字不能开头

> 中文是合法的标识符，可以用作变量名（不推荐）

### JavaScript保留关键字

`arguments`、`break`、`case`、`catch`、`class`、`const`、`continue`、`debugger`、`default`、`delete`、`do`、`else`、`enum`、`eval`、`export`、`extends`、`false`、`finally`、`for`、`function`、`if`、`implements`、`import`、`in`、`instanceof`、`interface`、`let`、`new`、`null`、`package`、`private`、`protected`、`public`、`return`、`static`、`super`、`switch`、`this`、`throw`、`true`、`try`、`typeof`、`var`、`void`、`while`、`with`、`yield`

## 变量

### 变量的重新赋值

```javascript
var num = 10;
num = 20;
```

### 变量提升

JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。

```javascript
console.log(num);
var num = 10;
// 输出undefined
```

## JavaScript引入到文件

### 嵌入到HTML文件

```html
<body>
	<script>
		var age = 20
	</script>
</body>
```

### 引入本地独立JS文件

```html
<body>
	<script type="text/javascript" src="./itbaizhan.js">   </script>
</body>
```

### 引入网络来源文件

```html
<body>
	<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js">
    </script>
</body>
```

## JavaScript注释与常见输出方式

### JavaScript注释

源码中注释是不被引擎所解释的，它的作用是对代码进行解释。
Javascript 提供两种注释的写法：一种是单行注释，用`//`起头；另一种是多行注释，放在`/*`和`*/`之间。

### JavaScript输出方式

JavaScript有很多种输出方式，都可以让我们更直观的看到程序运行的结果

```javascript
// 在浏览器中弹出一个对话框,然后把要输出的内容展示出来,alert都是把要输出的内容首先转换为字符串然后在输出的
alert("要输出的内容");

document.write("要输出的内容");

// 在控制台输出内容
console.log("要输出的内容");
```

## 数据类型

### 数据类型分类

JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript的数据类型，共有六种。（ES6 又新增了第七种 Symbol 类型的值和第八种 BigInt类型，当前课程暂不涉及）

#### 原始类型(基础类型)

```javascript
var age = 20;
var name = "尚学堂";
var learn = true;
```

#### 合成类型(复合类型)

对象：因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器

```javascript
var user = {
    name:"尚学堂",
    age:20,
    learn:true
}
```

> 至于`undefined`和`null`，一般将它们看成两个特殊值。

## 运算符

### typeof运算符

确定一个值到底是什么类型。

#### 数值返回number

```javascript
typeof 123 // "number"
```

#### 字符串返回string

```javascript
typeof '123' // "string"
```

#### 布尔值返回boolean

```javascript
typeof false // "boolean"
```

#### 对象返回object

```javascript
typeof {} // "object"
```

#### null和undefined区别

null与undefined都可以表示“没有”，含义非常相似。将一个变量赋值为undefined或null，语法效果几乎没区别。

### 算术运算符

#### 加减乘除运算符

```javascript
10 + 10; // 20
100 - 10; // 90
10 * 2; // 20
10 / 5; // 2
```

#### 余数运算符

```javascript
13 % 5 // 3
```

#### 自增和自减运算符

```javascript
var x = 1;
var y = 1;
++x // 2
--y // 0
```

### 赋值运算符

赋值运算符（Assignment Operators）用于给变量赋值
最常见的赋值运算符是等号（=）

```javascript
// 将 1 赋值给变量 x
var x = 1;
// 将变量 y 的值赋值给变量 x
var x = y;

x += y // 等同于 x = x + y
x -= y // 等同于 x = x - y
x *= y // 等同于 x = x * y
x /= y // 等同于 x = x / y
x %= y // 等同于 x = x % y
```

### 比较运算符

| 比较运算符 |              描述              |
| :--------: | :----------------------------: |
|    `<`     |           小于运算符           |
|    `>`     |           大于运算符           |
|    `<=`    |        小于或等于运算符        |
|    `>=`    |        大于或等于运算符        |
|    `==`    |      相等运算符（比较值）      |
|   `===`    | 严格相等运算符（比较值和类型） |
|    `!=`    |          不相等运算符          |
|   `!==`    |        严格不相等运算符        |

### 布尔运算符

#### 取反运算符

- 布尔值取反

  ```javascript
  !true // false
  !false // true
  ```

- 非布尔值取反

  对于非布尔值，取反运算符会将其转为布尔值。可以这样记忆，以下六个值取反后为true，其他值都为false

  `undefined`、`null`、`false`、`0`、`NaN`、空字符串

  ```javascript
  !undefined // true
  !null // true
  !0 // true
  !NaN // true
  !"" // true
  
  !54 // false
  !'hello' // false
  ```

#### 且运算符

```javascript
console.log(10 < 20 && 10 >5); // true
```

#### 或运算符

```javascript
console.log(10 < 20 || 10 < 5); // true
```

## 条件语句

### if语句

```javascript
if (条件){
   语句;
}
```

### if...else语句

```javascript
if (条件) {
  // 满足条件时，执行的语句
} else {
  // 不满足条件时，执行的语句
}

if (条件1) {
  // ...
} else if (条件2) {
  // ...
} else {
  // ...
}
```

### switch语句

```javascript
switch (表达式) {
  case 值1:
    // ...
    break;
  case 值2:
    // ...
    break;
  default:
    // ...
}

```

### 三元运算符

```javascript
(条件) ? 表达式1 : 表达式2
```

## 循环语句

### for循环

```javascript
for (初始化表达式; 条件; 迭代因子) {
  语句;
}
```

1. 初始化表达式（initialize）：确定循环变量的初始值，只在循环
   开始时执行一次。
2. 布尔表达式（test）：每轮循环开始时，都要执行这个条件表达
   式，只有值为真，才继续进行循环。
3. 迭代因子（increment）：每轮循环的最后一个操作，通常用来
   递增循环变量。

以上三个可省略任何一个

### while循环

```javascript
while (条件) {
  语句;
}
```

### break和continue语句

break跳出整个循环；continue跳出本次循环，进入下次循环

## 字符串

### 介绍

- 字符串就是零个或多个排在一起的字符，放在单引号或双引号之中

- 单引号字符串的内部，可以使用双引号。双引号字符串的内部，可以使用单引号

- 如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此

### 长字符串

如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠

```javascript
var longString = 'Long \
long \
string';
longString // "Long long long string"
```

### length属性

length属性返回字符串的长度，该属性也是无法改变的

```javascript
var s = 'itbaizhan';
s.length // 9
```

### 字符串方法

#### charAt()

`charAt()`返回指定位置的字符，参数是从`0`开始编号的

```javascript
var s = new String('itbaizhan');
s.charAt(1) // "t"
s.charAt(s.length - 1) // "n"
```

如果参数为负数，或大于等于字符串的长度，`charAt()`返回空字符串

```javascript
'itbaizhan'.charAt(-1) // ""
'itbaizhan'.charAt(9) // ""
```

#### concat()

`concat`方法用于连接两个字符串，返回一个新字符串，不改变原字符串

```javascript
var s1 = 'itbaizhan';
var s2 = 'sxt';
s1.concat(s2) // "itbaizhansxt"
s1 // "itbaizhan"
```

该方法可以接受多个参数

```javascript
'sxt'.concat('itbaizhan', 'bjsxt') //"sxtitbaizhanbjsxt"
```

如果参数不是字符串，`concat`方法会将其先转为字符串，然后再连接

```javascript
var one = 1;
var two = 2;
var three = '3';
''.concat(one, two, three) // "123"
```

#### substring()

`substring`方法用于从原字符串取出子字符串并返回，不改变原字符串。

它的第一个参数表示子字符串的开始位置，第二个位置表示结束位置（返回结果不含该位置）

```javascript
'itbaizhan'.substring(0, 2) // "it"
```

如果省略第二个参数，则表示子字符串一直到原字符串的结束

```javascript
'itbaizhan'.substring(2) // "baizhan"
```

如果第一个参数大于第二个参数，`substring`方法会自动更换两个参数的位置

```javascript
'itbaizhan'.substring(9, 2) // "baizhan"
// 等同于
'itbaizhan'.substring(2, 9) // "baizhan"
```

如果参数是负数，`substring`方法会自动将负数转为0

```javascript
'itbaizhan'.substring(-3) // "itbaizhan"
'itbaizhan'.substring(2, -3) // "it"
```

#### substr()

`substr`方法用于从原字符串取出子字符串并返回，不改变原字符串，跟`substring`方法的作用相同

`substr`方法的第一个参数是子字符串的开始位置（从0开始计算），第二个参数是子字符串的长度

```javascript
'itbaizhan'.substr(2, 7); // baizhan
```

如果省略第二个参数，则表示子字符串一直到原字符串的结束

```javascript
'itbaizhan'.substr(2) // "baizhan"
```

如果第一个参数是负数，表示倒数计算的字符位置。如果第二个参数是负数，将被自动转为0，因此会返回空字符串

```javascript
'itbaizhan'.substr(-7) // "baizhan"
'itbaizhan'.substr(4, -1) // ""
```

#### indexOf()

`indexOf`方法用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置。如果返回`-1`，就表示不匹配

```javascript
'hello world'.indexOf('o') // 4
'itbaizhan'.indexOf('sxt') // -1
```

`indexOf`方法还可以接受第二个参数，表示从该位置开始向后匹配

```javascript
'hello world'.indexOf('o', 6) // 7
```

#### trim()

`trim`方法用于去除字符串两端的空格，返回一个新字符串，不改变原字符串

```javascript
' hello world '.trim()
// "hello world"
```

该方法去除的不仅是空格，还包括制表符（`\t`、`\v`）、换行符（`\n`）和回车符（`\r`）

```javascript
'\r\nitbaizhan \t'.trim() // 'itbaizhan'
```

ES6扩展方法， `trimEnd()`和`trimStart()`方法

```javascript
"   itbaizhan   ".trimEnd();         /*   itbaizhan*/
"   itbaizhan   ".trimStart();       /*itbaizhan   */
```

#### split()

`split`方法按照给定规则分割字符串，返回一个由分割出来的子字符串组成的数组

```javascript
'it|sxt|baizhan'.split('|') // ["it", "sxt", "baizhan"]
```

如果分割规则为空字符串，则返回数组的成员是原字符串的每一个字符。

```javascript
'a|b|c'.split('') // ["a", "|", "b", "|", "c"]
```

如果省略参数，则返回数组的唯一成员就是原字符串

```javascript
'it|sxt|bz'.split() // [it|sxt|bz]
```

`split`方法还可以接受第二个参数，限定返回数组的最大成员数。

```javascript
'it|sxt|bz'.split('|', 0) // []
'it|sxt|bz'.split('|', 1) // ["it"]
'it|sxt|bz'.split('|', 2) // ["it", "sxt"]
'it|sxt|bz'.split('|', 3) // ["it", "sxt", "bz"]
'it|sxt|bz'.split('|', 4) // ["it", "sxt", "bz"]
```

## 数组

### 介绍

数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。

```javascript
var arr = ['sxt', 'baizhan', 'it'];
```

除了在定义时赋值，数组也可以先定义后赋值。

任何类型的数据，都可以放入数组

如果数组的元素还是数组，就形成了多维数组

### length属性

数组的length属性，返回数组的成员数量

```javascript
['sxt', 'baizhan', 'it'].length // 3
```

### 数组的遍历

可以使用for循环或while循环

还可以for...in遍历

```javascript
var a = ['sxt', 'baizhan', 'it'];
for (var i in a) {
  console.log(a[i]);
}
```

### 数组方法

#### Array.isArray()

`Array.isArray`方法返回一个布尔值，表示参数是否为数组。它可以弥补`typeof`运算符的不足

```javascript
var arr = ["尚学堂", 100, true];
console.log(typeof arr); // object

var arr = ['sxt', 'baizhan', 'it'];
Array.isArray(arr) // true
```

#### push()/pop()

`push`方法用于在数组的末端添加一个或多个元素，并返回添加新元素后的数组长度。**注意，该方法会改变原数组**

```javascript
var arr = [];
arr.push("尚学堂") // 1
arr.push('itbaizhan') // 2
arr.push(true, {}) // 4
arr // [尚学堂, 'itbaizhan', true, {}]
```

`pop`方法用于删除数组的最后一个元素，并返回该元素。**注意，该方法会改变原数组**

```javascript
var arr = ['尚学堂', 'itbaizhan', 'WEB前端'];
arr.pop() // 'WEB前端'
arr // ['尚学堂', 'itbaizhan']
```

#### shift()/unshift()

`shift`方法用于删除数组的第一个元素，并返回该元素。**注意，该方法会改变原数组**

```javascript
var arr = ['尚学堂', 'itbaizhan', 'WEB前端'];
arr.shift() // '尚学堂'
arr // ['itbaizhan', 'WEB前端']
```

`unshift`方法用于在数组的第一个位置添加元素，并返回添加新元素后的数组长度。**注意，该方法会改变原数组**

```javascript
var arr = ['尚学堂', 'itbaizhan', 'WEB前端'];

arr.unshift('baizhan'); // 4
arr // ['baizhan', '尚学堂', 'itbaizhan', 'WEB前端']
```

`unshift`方法可以接受多个参数，这些参数都会添加到目标数组头部

```javascript
var arr = [ '尚学堂', 'itbaizhan' ];
arr.unshift('WEB前端', 'baizhan') // 4
arr // [ 'WEB前端', 'baizhan', '尚学堂','itbaizhan' ]
```

#### join()

`join`方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔

```javascript
var a = [1, 2, 3, 4];
a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"
```

如果数组成员是`undefined`或`null`或空位，会被转成空字符串

```javascript
[undefined, null].join('#') // '#'
['a',, 'b'].join('-') // 'a--b'
```

数组的`join`配合字符串的`split`可以实现数组与字符串的互换

```javascript
var arr = ["a","b","c"];
var myArr = arr.join("");
console.log(myArr); // 'abc'
console.log(myArr.split("")); // ['a', 'b', 'c']
```

#### concat()

`concat`方法用于多个数组的合并。它将新数组的成员，添加到原数组成员的后部，然后返回一个新数组，**原数组不变**

```javascript
['hello'].concat(['world']) // ["hello", "world"]
['hello'].concat(['world'], ['!']) // ["hello", "world", "!"]
```

除了数组作为参数，`concat`也接受其他类型的值作为参数，添加到目标数组尾部。

```javascript
[1, 2, 3].concat(4, 5, 6) // [1, 2, 3, 4, 5, 6]
```

#### reverse()

`reverse`方法用于颠倒排列数组元素，返回改变后的数组。**注意，该方法将改变原数组**

```javascript
var a = ['a', 'b', 'c'];
a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```

实现一个字符串反转排列

```javascript
var str = "hello";
str.split("").reverse().join("") // "olleh"
```

#### indexOf()

`indexOf`方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回`-1`

```javascript
var arr = ['a', 'b', 'c'];
arr.indexOf('b') // 1
arr.indexOf('y') // -1
```

`indexOf`方法还可以接受第二个参数，表示搜索的开始位置

```javascript
['尚学堂', '百战程序员', 'itbaizhan'].indexOf('尚学堂', 1) // -1
```

## 函数

### 函数的声明

function命令： function命令声明的代码区块，就是一个函数。function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。

### 函数名的提升

JavaScript引擎将函数名视同变量名，所以采用function命令声明函数时，整个函数会像变量声明一样，被提升到代码头部

```javascript
add();
function add() {}
```

### 函数参数

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数

### 函数返回值

JavaScript函数提供两个接口实现与外界的交互，其中参数作为入口，接收外界信息；返回值作为出口，把运算结果反馈给外界

## 对象

### 对象概述

对象就是一组“键值对”（key-value）的集合，是一种无序的复合数据集合

```javascript
var user = {
  name: 'itbaizhan',
  age: '13'
};
```

对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用

```javascript
var user = {
  getName: function (name) {
    return name;
 }
};
user.getName("itbaizhan") // itbaizhan
```

如果属性的值还是一个对象，就形成了链式引用

```javascript
var user = {
    name:"itbaizhan",
    age:13,
    container:{
        frontEnd:["Web前端","Android","iOS"],
        backEnd:["Java","Python"]
   }
}
user.container.frontEnd // ["Web前端","Android","iOS"]
```

### Math对象

#### Math.abs()

`Math.abs`方法返回参数值的绝对值

#### Math.max(), Math.min()

`Math.max`方法返回参数之中最大的那个值，`Math.min`返回最小的那个
值。如果参数为空, `Math.min`返回`Infinity`,`Math.max` 返回`-Infinity`

#### Math.floor(), Math.ceil()

`Math.floor`方法返回小于参数值的最大整数

`Math.ceil`方法返回大于参数值的最小整数

#### Math.random()

返回`[0, 1)`之间一个伪随机数

### Date()对象

#### Date.now()

`Date.now`方法返回当前时间距离时间零点（1970年1月1日 00:00:00UTC）的毫秒数，相当于Unix时间戳乘以1000

```javascript
Date.now();   // 1635216733395
```

#### 时间戳

时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数。
格林威治和北京时间就是时区的不同
Unix是20世纪70年代初出现的一个操作系统，Unix认为1970年1月1日0点是时间纪元。JavaScript也就遵循了这一约束
`Date`对象提供了一系列`get*`方法，用来获取实例对象某个方面的值

- 实例方法get类
  - getTime()：返回实例距离1970年1月1日00:00:00的毫秒数
  - getDate()：返回实例对象对应每个月的几号（从1开始）
  - getDay()：返回星期几，星期日为0，星期一为1，以此类推
  - getYear()：返回距离1900的年数
  - getFullYear()：返回四位的年份
  - getMonth()：返回月份（0表示1月，11表示12月）
  - getHours()：返回小时（0-23）
  - getMilliseconds()：返回毫秒（0-999）
  - getMinutes()：返回分钟（0-59）
  - getSeconds()：返回秒（0-59）

## DOM概述

DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个JavaScript 对象，从而可以用脚本进行各种操作（比如对元素增删内容）
浏览器会根据 DOM 模型，将结构化文档HTML解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，
DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言

### 节点

DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子

- 节点的类型有七种
  - Document：整个文档树的顶层节点
  - DocumentType：doctype标签
  - Element：网页的各种HTML标签
  - Attribute：网页元素的属性（比如class="right"）
  - Text：标签之间或标签包含的文本
  - Comment：注释
  - DocumentFragment：文档的片段

### 节点树

一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，倒过来就像一棵树

浏览器原生提供document节点，代表整个文档

```javascript
document // 整个文档树
```

- 除了根节点，其他节点都有三种层级关系
  - 父节点关系（parentNode）：直接的那个上级节点
  - 子节点关系（childNodes）：直接的下级节点
  - 同级节点关系（sibling）：拥有同一个父节点的节点

### Node.nodeType属性

- 不同节点的nodeType属性值和对应的常量如下
  - 文档节点（document）：9，对应常量Node.DOCUMENT_NODE
  - 元素节点（element）：1，对应常量Node.ELEMENT_NODE
  - 属性节点（attr）：2，对应常量Node.ATTRIBUTE_NODE
  - 文本节点（text）：3，对应常量Node.TEXT_NODE
  - 文档片断节点（DocumentFragment）：11，对应常量Node.DOCUMENT_FRAGMENT_NODE

```javascript
document.nodeType // 9
document.nodeType === Node.DOCUMENT_NODE // true
```

## document对象_方法/获取元素

### document.getElementsByTagName()

`document.getElementsByTagName`方法搜索 HTML 标签名，返回符合条件的元素。它的返回值是一个类似数组对象（`HTMLCollection`实例），可以实时反映 HTML 文档的变化。如果没有任何匹配的元素，就返回一个空集

```javascript
var paras = document.getElementsByTagName('p');
```

如果传入`*`，就可以返回文档中所有 HTML 元素

```javascript
var allElements = document.getElementsByTagName('*');
```

### document.getElementsByClassName()

`document.getElementsByClassName`方法返回一个类似数组的对象（`HTMLCollection`实例），包括了所有`class`名字符合指定条件的元素，元素的变化实时反映在返回结果中

```javascript
var elements = document.getElementsByClassName(names);
```

由于`class`是保留字，所以JavaScript一律使用`className`表示CSS的`class`

参数可以是多个`class`，它们之间使用空格分隔

```javascript
var elements = document.getElementsByClassName('foo bar');
```

### document.getElementsByName()

`document.getElementsByName`方法用于选择拥有`name`属性的 HTML 元素（比如`<form>`、`<radio>`、`<img>`等），返回一个类似数组的的对象（`NodeList`实例），因为`name`属性相同的元素可能不止一个

```javascript
// 表单为 <form name="itbaizhan"></form>
var forms = document.getElementsByName('itbaizhan');
```

### document.getElementById()

`document.getElementById`方法返回匹配指定`id`属性的元素节点。如果没有发现匹配的节点，则返回`null`

```javascript
var elem = document.getElementById('para1');
```

注意，该方法的参数是大小写敏感的。比如，如果某个节点的`id`属性是 main ，那么`document.getElementById('Main')`将返回`null`

### document.querySelector()

`document.querySelector`方法接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回`null`

```javascript
var el1 = document.querySelector('.myclass');
```

### document.querySelectorAll()

`document.querySelectorAll`方法与`querySelector`用法类似，区别是返回一个`NodeList`对象，包含所有匹配给定选择器的节点

```javascript
var elementList = document.querySelectorAll('.myclass');
```

## document对象_方法/创建元素

### document.createElement()

`document.createElement`方法用来生成元素节点，并返回该节点

```javascript
var newDiv = document.createElement('div');
```

### document.createTextNode()

`document.createTextNode`方法用来生成文本节点（`Text`实例），并返回该节点。它的参数是文本节点的内容

```javascript
var newDiv = document.createElement('div');
var newContent = document.createTextNode('Hello');
newDiv.appendChild(newContent);
```

### document.createAttribute()

`document.createAttribute`方法生成一个新的属性节点（`Attr`实例），并返回它

```javascript
var attribute = document.createAttribute(name);
```

```javascript
var root = document.getElementById('root');
var it = document.createAttribute('itbaizhan');
it.value = 'it';
root.setAttributeNode(it);
```

## Element对象_属性

Element对象对应网页的 HTML 元素。每一个 HTML 元素，在DOM 树上都会转化成一个Element节点对象（以下简称元素节点）

### Element.id

`Element.id`属性返回指定元素的 id 属性，该属性可读写

```javascript
// HTML 代码为 <p id="foo">
var p = document.querySelector('p');
p.id // "foo"
```

### Element.className

`className`属性用来读写当前元素节点的`class`属性。它的值是一个字符串，每个`class`之间用空格分割

```javascript
// HTML 代码 <div class="one two three" id="myDiv"></div>
var div = document.getElementById('myDiv');
div.className
```

### Element.classList

- `classList`对象有下列方法
  - `add()`：增加一个 class。
  - `remove()`：移除一个 class。
  - `contains()`：检查当前元素是否包含某个 class。
  - `toggle()`：将某个 class 移入或移出当前元素。

```javascript
var div = document.getElementById('myDiv');
div.classList.add('myCssClass');
div.classList.add('foo', 'bar');
div.classList.remove('myCssClass');
div.classList.toggle('myCssClass'); // 如果myCssClass 不存在就加入，否则移除
div.classList.contains('myCssClass'); // 返回 true 或者 false
```

### Element.innerHTML

`Element.innerHTML`属性返回一个字符串，等同于该元素包含的所有HTML 代码。该属性可读写，常用来设置某个节点的内容。它能改写所有元素节点的内容，包括`<HTML>`和`<body>`元素

```javascript
el.innerHTML = '';
```

### Element.innerText

`innerText`和`innerHTML`类似，不同的是`innerText`无法识别元素，会直接渲染成字符串

## Element获取元素位置

|     属性     |                             描述                             |
| :----------: | :----------------------------------------------------------: |
| clientHeight | 获取元素高度包括`padding`部分，但是不包括`border`、 `margin` |
| clientWidth  | 获取元素宽度包括`padding`部分，但是不包括`border`、 `margin` |
| scrollHeight | 元素总高度，它包括`padding`，但是不包括`border`、`margin`包括溢出的不可见内容 |
| scrollWidth  | 元素总宽度，它包括`padding`，但是不包括`border`、`margin`包括溢出的不可见内容 |
|  scrollLeft  |              元素的水平滚动条向右滚动的像素数量              |
|  scrollTop   |              元素的垂直滚动条向下滚动的像素数量              |
| offsetHeight | 元素的 CSS 垂直高度（单位像素），包括元素本身的高度、`padding`和`border` |
| offsetWidth  | 元素的 CSS 水平宽度（单位像素），包括元素本身的高度、`padding`和`border` |
|  offsetLeft  |                    到定位父级左边界的间距                    |
|  offsetTop   |                    到定位父级上边界的间距                    |

### Element.clientHeight，Element.clientWidth

`Element.clientHeight`属性返回一个整数值，表示元素节点的 CSS 高度（单位像素），只对块级元素生效，对于行内元素返回`0`。如果块级元素没有设置 CSS 高度，则返回实际高度
除了元素本身的高度，它还包括`padding`部分，但是不包括`border`、`margin`。如果有水平滚动条，还要减去水平滚动条的高度。注意，这个值始终是整数，如果是小数会被四舍五入。
`Element.clientWidth`属性返回元素节点的 CSS 宽度，同样只对块级元素有效，也是只包括元素本身的宽度和`padding`，如果有垂直滚动条，还要减去垂直滚动条的宽度。
`document.documentElement`的`clientHeight`属性，返回当前视口的高度（即浏览器窗口的高度）。 `document.body`的高度则是网页的实际高度。

```javascript
// 视口高度
document.documentElement.clientHeight
// 网页总高度
document.body.clientHeight
```

### Element.scrollHeight，Element.scrollWidth

`Element.scrollHeight` 属性返回一个整数值（小数会四舍五入），表示当前元素的总高度（单位像素），它包括 `padding` ，但是不包括 `border` 、`margin` 以及水平滚动条的高度（如果有水平滚动条的话）

`Element.scrollWidth` 属性表示当前元素的总宽度（单位像素），其他地方都与 `scrollHeight` 属性类似。这两个属性只读

整张网页的总高度可以从 `document.documentElement` 或 `document.body` 上读取

```javascript
// 返回网页的总高度
document.documentElement.scrollHeight
document.body.scrollHeight
```

### Element.scrollLeft，Element.scrollTop

`Element.scrollLeft` 属性表示当前元素的水平滚动条向右侧滚动的像素数量， `Element.scrollTop` 属性表示当前元素的垂直滚动条向下滚动的像素数量。对于那些没有滚动条的网页元素，这两个属性总是等于0如果要查看整张网页的水平的和垂直的滚动距离，要从`document.documentElement` 元素上读取

```javascript
document.documentElement.scrollLeft
document.documentElement.scrollTop
```

### Element.offsetHeight，Element.offsetWidth

`Element.offsetHeight` 属性返回一个整数，表示元素的 CSS 垂直高度（单位像素），包括元素本身的高度、`padding` 和 `border`，以及水平滚动条的高度（如果存在滚动条）。
`Element.offsetWidth` 属性表示元素的 CSS 水平宽度（单位像素），其他都与 `Element.offsetHeight` 一致。
这两个属性都是只读属性，只比 `Element.clientHeight` 和 `Element.clientWidth` 多了边框的高度或宽度。如果元素的 CSS 设为不可见（比如 `display:none;` ），则返回 0

### Element.offsetLeft，Element.offsetTop

`Element.offsetLeft`返回当前元素左上角相对于`Element.offsetParent`节点的水平位移，`Element.offsetTop`返回垂直位移，单位为像素。通常，这两个值是指相对于父节点的位移

```html
<div class="parent">
    <div class="box" id="box"></div>
</div>
```

```css
.parent{
    width: 200px;
    height: 200px;
    background: red;
    position: relative;
    left: 50px;
    top: 50px;
}
.box{
    width: 100px;
    height: 100px;
    background: yellow;
    position: relative;
    left: 50px;
    top: 50px;
}
```

```javascript
var box = document.getElementById("box");
console.log(box.offsetLeft);
console.log(box.offsetTop);
```

## CSS操作

### HTML元素的style属性

操作 CSS 样式最简单的方法，就是使用网页元素节点的 `setAttribute` 方法直接操作网页元素的 `style` 属性

```javascript
div.setAttribute(
  'style',
  'background-color:red;' + 'border:1px solid black;'
);
```

### 元素节点的style属性

```javascript
var divStyle = document.querySelector('div').style;
divStyle.backgroundColor = 'red';
divStyle.border = '1px solid black';
divStyle.width = '100px';
divStyle.height = '100px';
divStyle.fontSize = '10em';
```

### cssText属性

```javascript
var divStyle = document.querySelector('div').style;
divStyle.cssText = 'background-color: red;'
  + 'border: 1px solid black;'
  + 'height: 100px;'
  + 'width: 100px;';
```

## 事件处理程序

事件处理程序分为：

1. HTML事件处理
2. DOM0级事件处理
3. DOM2级事件处理

### HTML事件

```html
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <title>Js事件详解--事件处理</title>
    </head>
    <body>
        <div id="div">
            <button id="btn1" onclick="demo()">按钮</button>
        </div>
        <script>
            function demo(){
                alert("hello html事件处理");
            }
        </script>
    </body>
</html>
```

### DOM0级事件处理

```html
<body>
    <div id="div">
        <button id="btn1">按钮</button>
    </div>
    <script>
        var btn1 = document.getElementById("btn1");
        btn1.onclick = function(){alert("Hello DOM0级事件处理程序1");}//被覆盖掉
        btn1.onclick = function(){alert("Hello DOM0级事件处理程序2");}
    </script>
</body>
```

### DOM2级事件处理

```html
<body>
    <div id="div">
        <button id="btn1">按钮</button>
    </div>
    <script>
        var btn1 = document.getElementById("btn1");
        btn1.addEventListener("click", demo1);
        btn1.addEventListener("click", demo2);
        btn1.addEventListener("click", demo3);
        function demo1(){
            alert("DOM2级事件处理程序1")
        }
        function demo2(){
            alert("DOM2级事件处理程序2")
        }
        function demo3(){
            alert("DOM2级事件处理程序3")
        }
        btn1.removeEventListener("click",demo2);
    </script>
</body>
```

## 事件类型之鼠标事件

### 鼠标事件

- 鼠标事件指与鼠标相关的事件，具体的事件主要有以下一些
  - click：按下鼠标时触发
  - dblclick：在同一个元素上双击鼠标时触发
  - mousedown：按下鼠标键时触发
  - mouseup：释放按下的鼠标键时触发
  - mousemove：当鼠标在节点内部移动时触发。当鼠标持续移动时，该事件会连触发。
  - mouseenter：鼠标进入一个节点时触发，进入子节点不会触发这个事件
  - mouseleave：鼠标离开一个节点时触发，离开父节点不会触发这个事件
  - mouseover：鼠标进入一个节点时触发，进入子节点会再一次触发这个事件
  - mouseout：鼠标离开一个节点时触发，离开父节点也会触发这个事件
  - wheel：滚动鼠标的滚轮时触发

> 这些方法在使用的时候，除了DOM2级事件，都需要添加前缀`on`

```javascript
var btn1 = document.getElementById("btn1");
btn1.onclick = function(){
    console.log("click事件");
} 
```

## Event事件对象

事件发生以后，会产生一个事件对象，作为参数传给监听函数

### Event对象属性

#### Event.Target

Event.target属性返回事件当前所在的节点

```javascript
// HTML代码为
// <p id="para">Hello</p>
function setColor(e) {
  console.log(this === e.target);
  e.target.style.color = 'red';
}
para.addEventListener('click', setColor);
```

#### Event.type

Event.type属性返回一个字符串，表示事件类型。事件的类型是在生成事件的时候。该属性只读

### Event对象方法

#### Event.preventDefault

`Event.preventDefault`方法取消浏览器对当前事件的默认行为。比如点击链接后，浏览器默认会跳转到另一个页面，使用这个方法以后，就不会跳转了

```javascript
btn.onclick = function(e){
    e.preventDefault(); // 阻止默认事件
    console.log("点击A标签");
}
```

#### Event.stopPropagation

`stopPropagation`方法阻止事件在 DOM 中继续传播，防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上其他的事件监听函数

```javascript
btn.onclick = function(e){
    e.stopPropagation(); // 阻止事件冒泡
    console.log("btn");
}
```

## 事件类型之键盘事件

键盘事件由用户击打键盘触发，主要有keydown、keypress、keyup三个事件

1. keydown：按下键盘时触发。
2. keypress：按下有值的键时触发，即按下 Ctrl、Alt、Shift、Meta 这样无值的键，这个事件不会触
   发。对于有值的键，按下时先触发keydown事件，再触发这个事件。
3. keyup：松开键盘时触发该事件

```javascript
username.onkeypress = function(e){
    console.log("keypress事件");
}
```

### event对象

`keyCode`:唯一标识

```javascript
var username = document.getElementById("username");
username.onkeydown = function(e){
    if(e.keyCode === 13){
        console.log("回车");
   }
}
```

## 事件类型之表单事件

表单事件是在使用表单元素及输入框元素可以监听的一系列事件

### input事件

input事件当`<input>`、`<select>`、`<textarea>`的值发生变化时触发。对于复选框（`<input type=checkbox>`）或单选框（<input type=radio>`），用户改变选项时，也会触发这个事件

input事件的一个特点，就是会连续触发，比如用户每按下一次按键，就会触发一次input事件。

```javascript
var username =
document.getElementById("username");
username.oninput = function(e){
    console.log(e.target.value);
}
```

### select事件

select事件当在`<input>`、`<textarea>`里面选中文本时触发

```javascript
// HTML 代码如下
// <input id="test" type="text" value="Select me!" />
var elem = document.getElementById('test');
elem.addEventListener('select', function (e)
{
  console.log(e.type); // "select"
}, false);
```

### Change 事件

Change事件当 `<input>`、`<select>`、`<textarea>` 的值发生变化时触发。它与input事件的最大不同，就是不会连续触发，只有当全部修改完成时才会触发

```javascript
var email = document.getElementById("email");
email.onchange = function(e){
    console.log(e.target.value);
}
```

### reset 事件，submit 事件

这两个事件发生在表单对象 `<form>` 上，而不是发生在表单的成员上。
reset事件当表单重置（所有表单成员变回默认值）时触发。
submit事件当表单数据向服务器提交时触发。注意，`submit`事件的发生对象是`<form>`元素，而不是`<button>` 元素，因为提交的是表单，而不是按钮

```html
<form id="myForm" onsubmit="submitHandle">
    <button onclick="resetHandle">重置数据</button>
    <button>提交</button>
</form>
```

```javascript
var myForm = document.getElementById("myForm")
function resetHandle(){
    myForm.reset();
}
function submitHandle(){
    console.log("提交");
}
```

## 事件代理(事件委托)

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）

```javascript
var ul = document.querySelector('ul');

ul.addEventListener('click', function (event){
  if (event.target.tagName.toLowerCase() === 'li') {
    // some code
  }
});
```

## 定时器

JavaScript 提供定时执行代码的功能，叫做定时器（timer），主要由 `setTimeout()` 和 `setInterval()` 这两个函数来完成。它们向任务队列添加定时任务

### setTimeout()

`setTimeout` 函数用来指定某个函数或某段代码，在多少毫秒之后执行。它返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。

```javascript
var timerId = setTimeout(func|code, delay);
```

`setTimeout` 函数接受两个参数，第一个参数 `func | code` 是将要推迟执行的函数名或者一段代码，第二个参数 `delay` 是推迟执行的毫秒数

```javascript
setTimeout(function(){
    console.log("定时器")
},1000)
```

> **温馨提示**
>
> 还有一个需要注意的地方，如果回调函数是对象的方法，那么`setTimeout`使得方法内部的 `this` 关键字指向全局环境，而不是定义时所在的那个对象

```javascript
var name = "sxt";
var user = {
    name: "itbaizhan",
    getName: function () {
        /* setTimeout(function(){
            console.log(this.name);
        },1000) */
        // 上述改为
        var that = this;
        setTimeout(function(){
            console.log(that.name);
        },1000)
    }
};
user.getName();
```

定时器可以取消

```javascript
var id = setTimeout(f, 1000);
clearTimeout(id);
```

### setInterval()

`setInterval` 函数的用法与 `setTimeout` 完全一致，区别仅仅在于 `setInterval` 指定某个任务每隔一段时间就执行一次，也就是无限次的定时执行

```javascript
var timer = setInterval(function() {
  console.log(2);
}, 1000)
```

通过setInterval方法实现网页动画

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial￾scale=1.0">
    <title>Document</title>
    <style>
        #someDiv{
            width: 100px;
            height: 100px;
            background: red;
        }
    </style>
</head>
<body>
    <div id="someDiv"></div>
    <script>
    var div = document.getElementById('someDiv');
    var opacity = 1;
    var fader = setInterval(function() {
        opacity -= 0.05;
        if (opacity > 0) {
            div.style.opacity = opacity;
        } else {
            clearInterval(fader);
        }
    }, 30);
    </script>
</body>
</html>
```

定时器可以进行取消

```javascript
var id = setInterval(f, 1000);
clearInterval(id);
```

## 防抖(debounce)

防抖严格算起来应该属于性能优化的知识，但实际上遇到的频率相当高，处理不当或者放任不管就容易引起浏览器卡死。
从滚动条监听的例子说起

```javascript
function showTop () {
    var scrollTop =
document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll  = showTop
```

以上这个函数的默认执行频率太高了，接下来进行优化

```javascript
function debounce(fn,delay){
    let timer = null //借助闭包
    return function() {
        if(timer){
            clearTimeout(timer)
       }
        timer = setTimeout(fn,delay) // 简化写法
   }
}
// 然后是旧代码
function showTop () {
    var scrollTop = document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll = debounce(showTop,300)
```

> **防抖定义**
> 对于短时间内连续触发的事件（上面的滚动事件），防抖的含义就是让某个时间期限（如上面的1000毫秒）内，事件处理函数只执行一次

## 节流(throttle)

节流严格算起来应该属于性能优化的知识，但实际上遇到的频率相当高，处理不当或者放任不管就容易引起浏览器卡死

```javascript
function throttle(fn,delay){
    let valid = true
    return function() {
       if(!valid){
           //休息时间 暂不接客
           return false
       }
       // 工作时间，执行函数并且在间隔期内把状态位设为无效
        valid = false
        setTimeout(function(){
            fn()
            valid = true;
       }, delay)
   }
}
function showTop () {
    var scrollTop = document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll = throttle(showTop,300)
```
