---
collection: documents
title: 数据库学习
slug: database-learn
tags:
  - 数据库
  - MySQL
excerpt: MySQL数据库学习笔记（尚未完成）
isPublished: true
date: '2026-06-29'
updated: '2026-06-29'
groupSlug: database
groupTitle: 数据库
order: 1
---
**启动与停止**

```cmd
管理员方式
net start mysql80
net stop mysql80
```

**连接方式**

- MySQL提供的客户端命令行工具

  打开MySQL 8.0 Command LineClient，输密码

- 系统自带的命令行工具执行

  ```cmd
  mysql [-h 127.0.0.1] [-p 3306] -u root -p
  ```

- 服务器上

  ```bash
  sudo /etc/init.d/mysql start   #开启
  sudo /etc/init.d/mysql stop    #停止
  sudo /etc/init.d/mysql restart #重启
  sudo service mysql stop        #停止
  sudo mysql -u root -p          #进入
  ```





# 基础篇

## 通用语法及分类

### SQL通用语法

1. SQL语句可以单行或多行书写，以分号结尾。
2. SQL语句可以使用空格/缩进来增强语句的可读性。
3. MySQL数据库的SQL语句不区分大小写，关键字建议使用大写。
4. 注释：
	- 单行注释：`--`(后有空格)注释内容或`#`注释内容（MySQL特有）
	- 多行注释：`/*注释内容*/`

### SQL分类

| 分类 | 全称                       | 说明                                                   |
| ---- | -------------------------- | ------------------------------------------------------ |
| DDL  | Data Definition Language   | 数据定义语言，用来定义数据库对象(数据库，表，字段)     |
| DML  | Data Manipulation Language | 数据操作语言，用来对数据库表中的数据进行增删改         |
| DQL  | Data Query Language        | 数据查询语言，用来查询数据库中表的记录                 |
| DCL  | Data Control Language      | 数据控制语言，用来创建数据库用户、控制数据库的访问权限 |

## DDL-定义

### 数据库操作

- 查询

  查询所有数据库

  ```sql
  show databases;
  ```

  查询当前数据库
  ```sql
  select database();
  ```

- 创建

  ```sql
  create database [if not exists] 数据库名 [default charset 字符集] [collate 排序规则];
  ```

- 删除

  ```sql
  drop database[if exists] 数据库名;
  ```

- 使用

  ```sql
  use 数据库名;
  ```

### 表操作

#### 查询

- 查询当前数据库所有表
  ```sql
  show tables;
  ```
- 查询表结构
  ```sql
  desc 表名;
  ```
- 查询指定表的建表语句
  ```sql
  show create table 表名;
  ```

#### 创建

```sql
create table 表名(
	字段1 字段1类型[comment 字段1注释],
	字段2 字段2类型[comment 字段2注释],
	字段3 字段3类型[comment 字段3注释],
    ......
	字段n 字段n类型[comment 字段n注释]
)[comment 表注释];
```

`[]`内为可选参数，最后一个不能加逗号

#### 修改

- 添加字段

  ```sql
  alter table 表名 add 字段名 类型(长度) [comment 注释] [约束];
  ```

- 修改字段

  - 修改数据类型

    ```sql
    alter table 表名 modify 字段名 新数据类型(长度);
    ```
  - 修改字段名和字段类型

    ```sql
    alter table 表名 chage 旧字段名 新字段名 类型(长度) [comment 注释] [约束];
    ```
  
- 删除字段

  ```sql
  alter table 表名 drop 字段名;
  ```

- 修改表名

  ```sql
  alter table 表名 rename to 新表名;
  ```

#### 删除

- 删除表

  ```sql
  drop table [if exists] 表名;
  ```

- 删除指定表，并重新创建该表（相当于清数据，但是字段还在）

  ```sql
  truncate table 表名;
  ```

### 数据类型

#### 数值类型

| 类型         | 大小     | 有符号(SIGNED)范围                                    | 无符号(UNSIGNED)范围                                       | 描述               |
| ------------ | -------- | ----------------------------------------------------- | ---------------------------------------------------------- | ------------------ |
| TINYINT      | 1  byte  | (-128，127)                                           | (0，255)                                                   | 小整数值           |
| SMALLINT     | 2  bytes | (-32768，32767)                                       | (0，65535)                                                 | 大整数值           |
| MEDIUMINT    | 3  bytes | (-8388608，8388607)                                   | (0，16777215)                                              | 大整数值           |
| INT或INTEGER | 4  bytes | (-2147483648，2147483647)                             | (0，4294967295)                                            | 大整数值           |
| BIGINT       | 8  bytes | (-2^63，2^63-1)                                       | (0，2^64-1)                                                | 极大整数值         |
| FLOAT        | 4  bytes | (-3.402823466 E+38，3.402823466351  E+38)             | 0 和 (1.175494351  E-38，3.402823466 E+38)                 | 单精度浮点数值     |
| DOUBLE       | 8  bytes | (-1.7976931348623157 E+308，1.7976931348623157 E+308) | 0 和  (2.2250738585072014 E-308，1.7976931348623157 E+308) | 双精度浮点数值     |
| DECIMAL      |          | 依赖于M(精度)和D(标度)的值                            | 依赖于M(精度)和D(标度)的值                                 | 小数值(精确定点数) |

#### 字符串类型

| 类型       | 大小                  | 描述                         |
| ---------- | --------------------- | ---------------------------- |
| CHAR       | 0-255 bytes           | 定长字符串                   |
| VARCHAR    | 0-65535 bytes         | 变长字符串                   |
| TINYBLOB   | 0-255 bytes           | 不超过255个字符的二进制数据  |
| TINYTEXT   | 0-255 bytes           | 短文本字符串                 |
| BLOB       | 0-65 535 bytes        | 二进制形式的长文本数据       |
| TEXT       | 0-65 535 bytes        | 长文本数据                   |
| MEDIUMBLOB | 0-16 777 215 bytes    | 二进制形式的中等长度文本数据 |
| MEDIUMTEXT | 0-16 777 215 bytes    | 中等长度文本数据             |
| LONGBLOB   | 0-4 294 967 295 bytes | 二进制形式的极大文本数据     |
| LONGTEXT   | 0-4 294 967 295 bytes | 极大文本数据                 |

#### 日期时间类型

| 类型      | 大小 | 范围                                       | 格式                | 描述                     |
| --------- | ---- | ------------------------------------------ | ------------------- | ------------------------ |
| DATE      | 3    | 1000-01-01 至  9999-12-31                  | YYYY-MM-DD          | 日期值                   |
| TIME      | 3    | -838:59:59 至  838:59:59                   | HH:MM:SS            | 时间值或持续时间         |
| YEAR      | 1    | 1901 至 2155                               | YYYY                | 年份值                   |
| DATETIME  | 8    | 1000-01-01 00:00:00 至 9999-12-31 23:59:59 | YYYY-MM-DD HH:MM:SS | 混合日期和时间值         |
| TIMESTAMP | 4    | 1970-01-01 00:00:01 至 2038-01-19 03:14:07 | YYYY-MM-DD HH:MM:SS | 混合日期和时间值，时间戳 |

## DML-操作

### 添加数据

- 给指定字段添加数据

  ```sql
  insert into 表名 (字段名1,字段名2,...) values (值1,值2,...);
  ```

- 给全部字段添加数据

  ```sql
  insert into 表名 values (值1,值2,...);
  ```

  

- 批量添加数据

  ```sql
  insert into 表名 (字段名1,字段名2,...) values (值1,值2,...),(值1,值2,...),(值1,值2,...);
  insert into 表名 values (值1,值2,...),(值1,值2,...),(值1,值2,...);
  ```

> - 字符串和日期型数据应该在引号内
> - 字段顺序与值的顺序一一对应
> - 插入数据大小，应在范围内

### 修改数据

```sql
update 表名 set 字段名1=值1, 字段名2=值2, ... [where 条件];
```

> 修改语句的条件可以有，可以无，若无，则修改整张表**所有数据**

### 删除数据

```sql
delete from 表名 [where 条件];
```

> - delete语句的条件可以有，可以无，若无，则删除整张表所有数据
>
> - delete语句不能删除某一个字段的值（可以使用update）

## DQL-查询

### 基本查询

- 查询多个字段

  ```sql
  select 字段1,字段2,... from 表名;
  select * from 表名;
  ```

- 设置别名

  ```sql
  select 字段1 [as 别名1], 字段2 [as 别名2] ... from 表名;
  ```

  > as可省略

- 去除重复记录

  ```sql
  select distinct 字段列表 from 表名;
  ```

### 条件查询

- 语法

  ```sql
  select 字段列表 from 表名 where 条件列表;
  ```

- 条件

    | 比较运算符      | 功能                                       |
    | --------------- | ------------------------------------------ |
    | >               | 大于                                       |
    | >=              | 大于等于                                   |
    | <               | 小于                                       |
    | <=              | 小于等于                                   |
    | =               | 等于                                       |
    | <> 或 !=        | 不等于                                     |
    | BETWEEN … AND … | 在某个范围内（含最小、最大值）             |
    | IN(…)           | 在in之后的列表中的值，多选一               |
    | LIKE 占位符     | 模糊匹配（_匹配单个字符，%匹配任意个字符） |
    | IS NULL         | 是NULL                                     |
    
    | 逻辑运算符 | 功能                         |
    | ---------- | ---------------------------- |
    | AND 或 &&  | 并且（多个条件同时成立）     |
    | OR 或 \|\| | 或者（多个条件任意一个成立） |
    | NOT 或 !   | 非，不是                     |

> ### 聚合函数
>
> 1. 介绍
>
>    将一列作为一个整体，进行纵向计算
>
> 2. 常见聚合函数
>
>    | 函数  | 功能     |
>    | ----- | -------- |
>    | count | 统计数量 |
>    | max   | 最大值   |
>    | min   | 最小值   |
>    | avg   | 平均值   |
>    | sum   | 求和     |
>
> 3. 语法
>
>     ```sql
>     select 聚合函数(字段列表) from 表名;
>     ```
>
> > 所有聚合函数不计算null

### 分组查询

- 语法

  ```sql
  select 字段列表 from 表名 [where 条件] group by 分组字段名 [having 分组过滤后条件];
  ```

  > where和having区别
  >
  > - 执行时机不同：where是分组之前进行过滤，不满足where条件不参与分组，而having是对分组之后的结果进行过滤
  > - 判断条件不同：where不能对聚合函数进行判断，而having可以

> - 执行顺序：where > 聚合函数 > having
> - 分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义

### 排序查询

- 语法；

  ```sql
  select 字段列表 from 表名 order by 字段1 排序方式1, 字段2 排序方式2;
  ```

- 排序方式

  - ASC：升序（默认值，可省略 ）
  - DESC：降序

  > 若是多字段排序，当第一个字段相同时，才会根据第二个字段进行排序

### 分页查询

- 语法

  ```sql
  select 字段列表 from 表名 limit 起始索引，查询记录数;
  ```

  > - 起始索引从**0**开始，起始索引=(查询页码-1)*每页显示记录数
  >
  > - 分页查询是数据库的方言，不同的数据库有不同的实现，MySQL中是limit
  >
  > - 如果查询的是第一页数据，起始索引可以省略，直接简写为limit 10

### 编写顺序、执行顺序

- 编写顺序

  ```sql
  select
  	字段列表
  from
  	表名列表
  where
  	条件列表
  group by
  	分组字段列表
  having
  	分组后条件列表
  order by
  	排序字段列表
  limit
  	分页参数
  ```

- 执行顺序

  ```sql
  from
  	表名列表
  where
  	条件列表
  group by
  	分组字段列表
  having
  	分组后条件列表
  select
  	字段列表
  order by
  	排序字段列表
  limit
  	分页参数
  ```

## DCL-控制

### 管理用户

1. 查询用户

   ```sql
   use mysql;
   select * from user;
   ```

2. 创建用户

   ```sql
   create user ‘用户名’@‘主机名’ identified by ‘密码’;
   ```

3. 修改用户密码

   ```sql
   alter user ‘用户名’@‘主机名’ identified with mysql_native_password by ‘新密码’;
   ```

4. 删除用户

   ```sql
   drop user ’用户名’@‘主机名’;
   ```

> - 主机名可以用%通配
> - 这类SQL开发人员操作的比较少，主要是数据库管理员使用

### 权限控制

| 权限                | 说明               |
| ------------------- | ------------------ |
| ALL, ALL PRIVILEGES | 所有权限           |
| SELECT              | 查询数据           |
| INSERT              | 插入数据           |
| UPDATE              | 修改数据           |
| DELETE              | 删除数据           |
| ALTER               | 修改表             |
| DROP                | 删除数据库/表/视图 |
| CREATE              | 创建数据库/表      |

[MySQL :: MySQL 8.0 Reference Manual :: 8.2.2 Privileges Provided by MySQL](https://dev.mysql.com/doc/refman/8.0/en/privileges-provided.html)

1. 查询权限

   ```sql
   show grants for ‘用户名’@‘主机名’;
   ```

2. 授予权限

   ```sql
   grant 权限列表 on 数据库名.表名 to ‘用户名’@‘主机名’;
   grant 权限列表 on *.* to ‘用户名’@‘主机名’;    # 所有数据库的所有表
   ```

3. 撤销权限

   ```sql
   revoke 权限列表 on 数据库名.表名 from ‘用户名’@‘主机名’;
   ```

> - 多个权限之间，使用逗号分隔
> - 授权时，数据库名和表名可以使用`*`进行通配，代表所有

## 函数

 ### 字符串函数

| 函数                             | 功能                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| CONCAT(s1, s2, …, sn)            | 字符串拼接，将s1, s2, …, sn拼接成一个字符串                  |
| LOWER(str)                       | 将字符串全部转为小写                                         |
| UPPER(str)                       | 将字符串全部转为大写                                         |
| LPAD(str, n, pad)                | 左填充，用字符串pad对str的左边进行填充，达到n个字符串长度    |
| RPAD(str, n, pad)                | 右填充，用字符串pad对str的右边进行填充，达到n个字符串长度    |
| TRIM(str)                        | 去掉字符串头部和尾部的空格                                   |
| SUBSTRING(str, start, len)       | 返回从字符串str从start位置起的len个长度的字符串，**索引从1开始** |
| REPLACE(column, source, replace) | 替换字符串                                                   |

```sql
select 函数(参数);
```

### 数值函数

| 函数        | 功能                             |
| ----------- | -------------------------------- |
| CEIL(x)     | 向上取整                         |
| FLOOR(x)    | 向下取整                         |
| MOD(x, y)   | 返回x/y的模                      |
| RAND()      | 返回0~1内的随机数                |
| ROUND(x, y) | 求参数x的四舍五入值，保留y位小数 |

### 日期函数

| 函数                               | 功能                                              |
| ---------------------------------- | ------------------------------------------------- |
| CURDATE()                          | 返回当前日期                                      |
| CURTIME()                          | 返回当前时间                                      |
| NOW()                              | 返回当前日期和时间                                |
| YEAR(date)                         | 获取指定date的年份                                |
| MONTH(date)                        | 获取指定date的月份                                |
| DAY(date)                          | 获取指定date的日期                                |
| DATE_ADD(date, INTERVAL expr type) | 返回一个日期/时间值加上一个时间间隔expr后的时间值 |
| DATEDIFF(date1, date2)             | 返回起始时间date1和结束时间date2之间的天数        |

### 流程函数

| 函数                                                         | 功能                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------- |
| IF(value, t, f)                                              | 如果value为true，则返回t，否则返回f                     |
| IFNULL(value1, value2)                                       | 如果value1不为空，返回value1，否则返回value2            |
| CASE WHEN [ val1 ] THEN [ res1 ] … ELSE [ default ] END      | 如果val1为true，返回res1，… 否则返回default默认值       |
| CASE [ expr ] WHEN [ val1 ] THEN [ res1 ] … ELSE [ default ] END | 如果expr的值等于val1，返回res1，… 否则返回default默认值 |

 ## 约束

### 概述

1. 概念：约束是作用于表中字段上的规则，用于限制存储在表中的数据
2. 目的：保证数据库中数据的正确、有效性和完整性
3. 分类：

    | 约束                     | 描述                                                     | 关键字      |
    | ------------------------ | -------------------------------------------------------- | ----------- |
    | 非空约束                 | 限制该字段的数据不能为null                               | NOT NULL    |
    | 唯一约束                 | 保证该字段的所有数据都是唯一、不重复的                   | UNIQUE      |
    | 主键约束                 | 主键是一行数据的唯一标识，要求非空且唯一                 | PRIMARY KEY |
    | 默认约束                 | 保存数据时，如果未指定该字段的值，则采用默认值           | DEFAULT     |
    | 检查约束（8.0.16版本后） | 保证字段值满足某一个条件                                 | CHECK       |
    | 外键约束                 | 用来让两张图的数据之间建立连接，保证数据的一致性和完整性 | FOREIGN KEY |

    > 约束是作用于表中字段上的，可以在建表、修改表的时候添加约束

    **常用约束**

    | 约束条件 | 关键字         |
    | -------- | -------------- |
    | 主键     | PRIMARY KEY    |
    | 自动增长 | AUTO_INCREMENT |
    | 不为空   | NOT NULL       |
    | 唯一     | UNIQUE         |
    | 逻辑条件 | CHECK          |
    | 默认值   | DEFAULT        |

### 外键约束

1. 概念：外键用来让两张表的数据之间建立连接，从而保证数据的一致性和完整性

2. 语法

   - 添加外键

     ```sql
     -- 建表时创建约束
     create table 表名(
     	字段名 数据类型,
         ...
         [constraint] [外键名称] foreign key (外键字段名) references 主表(主表列名)
     );
     
     -- 已经创建好表之后建立约束
     alter table 表名 add constraint 外键名称 foreign key (外键字段名) references 主表(主表列名);
     
     -- 例子
     alter table emp add constraint fk_emp_dept_id foreign key (dept_id) references dept(id);
     ```
     
   - 删除外键
   
     ```sql
     alter table 表名 drop foreign key 外键名称;
     ```
   
     

3. 删除/更新行为

   | 行为        | 说明                                                         |
   | ----------- | ------------------------------------------------------------ |
   | NO ACTION   | 当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新（与RESTRICT一致） |
   | RESTRICT    | 当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新（与NO ACTION一致） |
   | CASCADE     | 当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则也删除/更新外键在子表中的记录 |
   | SET NULL    | 当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则设置子表中该外键值为null（要求该外键允许为null） |
   | SET DEFAULT | 父表有变更时，子表将外键设为一个默认值（Innodb不支持）       |
   ```sql
   alter table 表名 add constraint 外键名称 foreign key (外键字段名) references 主表(主表列名) on update 在更新时的行为 on delete 在删除时的行为;
   ```

## 多表查询

### 多表关系

- 概述

  项目开发中，在进行数据库表结构设计时，会根据业务需求及业务模块之间的关系，分析并设计表结构，由于业务之间相互关联，所以各个表结构之间也存在着各种联系，基本上分为三种：

  - 一对多（多对一）

    案例：部门与员工
    关系：一个部门对应多个员工，一个员工对应一个部门
    实现：在多的一方建立外键，指向一的一方的主键

  - 多对多

    案例：学生与课程
    关系：一个学生可以选多门课程，一门课程也可以供多个学生选修
    实现：建立第三张中间表，中间表至少包含两个外键，分别关联两方主键

  - 一对一

    案例：用户与用户详情
    关系：一对一关系，多用于单表拆分，将一张表的基础字段放在一张表中，其他详情字段放在另一张表中，以提升操作效率
    实现：在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的（UNIQUE）

### 多表查询概述

- 概述： 指从多张表中查询数据
- 笛卡尔积：笛卡尔乘积是指在数学中，两个集合的所有组合情况（多表查询时，需要消除无效的笛卡尔积）

- 多表查询分类

  - 连接查询

    - 内连接：相当于查询A、B交集部分数据

    - 外连接：
      - 左外连接：查询左表所有数据，以及两张表交集部分数据
      - 右外连接：查询右表所有数据，以及两张表交集部分数据
    - 自连接：当前表与自身的连接查询，自连接必须使用表别名

  - 子查询

### 连接查询-内连接

- 内连接查询语法

  - 隐式内连接

    ```sql
    select 字段列表 from 表1, 表2 where 条件...;
    ```

  - 显式内连接

    ```sql
    select 字段列表 from 表1 [inner] join 表2 on 连接条件...;
    ```

### 连接查询-外连接

#### 左外连接

```sql
select 字段列表 from 表1 left [outer] join 表2 on 条件...;
```

#### 右外连接

```sql
select 字段列表 from 表1  [outer] join 表2 on 条件...;
```

### 连接查询-自连接

```sql
select 字段列表 from 表A 别名A join 表A 别名B on 条件...;  -- 也可以用内连接，外连接
```

### 联合查询-union, union all

对于`union`查询，就是把多次查询的结果合并起来，形成一个新的查询结果集。

```sql
select 字段列表 from 表A ...
union [all]
select 字段列表 from 表B ...;   -- 没有all的话可以去重
```

> - 对于联合查询的多张表的列数必须保持一致，字段类型也要保持一致
> - `union all`会将全部的数据直接合并在一起，`union`会对合并之后的数据去重
> - 联合查询比使用or效率高，不会使索引失效

### 子查询

- 概念： SQL语句中嵌套`select`语句，称为**嵌套查询**，又称**子查询**。

  ```sql
  select * from t1 where column1 = (select column1 from t2);
  ```

> 子查询的外部语句可以是`insert`/`update`/`delete`/`select`的任何一个

- 根据子查询结果不同，分为：
  - 标量子查询（子查询结果为单个值）
  - 列子查询（子查询结果为一列）
  - 行子查询（子查询结果为一行）
  - 表子查询（子查询结果为多行多列）
- 根据子查询位置，分为：
  - `where`之后
  - `from`之后
  - `select`之后

#### 标量子查询

- 子查询结果返回的结果是单个值（数字、字符串、日期等），最简单的形式

- 常用操作符： `= <> > >= < <=`

#### 列子查询

- 子查询返回的结果是一列（可以是多行）

- 常用操作符：`in`,`not in`,`any`,`some`,`all`

  | 操作符 | 描述                                   |
  | ------ | -------------------------------------- |
  | IN     | 在指定的集合范围内，多选一             |
  | NOT IN | 不在指定的集合范围内                   |
  | ANY    | 子查询返回列表中，有任意一个满足即可   |
  | SOME   | 与ANY等同，使用SOME的地方都可以使用ANY |
  | ALL    | 子查询返回列表的所有值都必须满足       |

#### 行子查询

- 子查询返回的结果是一行（可以是多列）
- 常用操作符：`=`,`<>`,`in`,`not in` 

#### 表子查询

- 子查询返回的的结果是多行多列
- 常用操作符：`in`

## 事务

### 简介

事务是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作
请求，即这些操作**要么同时成功，要么同时失败**。

### 事务操作

- 查看/设置事务提交方式

  ```sql
  select @@autocommit;   -- 查看事务是不是自动提交，0是手动，1是自动
  set @@autocommit = 0;  -- 设置为手动
  ```

- 提交事务

  ```sql
  commit;
  ```

- 回滚事务

  ```sql
  rollback;
  ```

- 开启事务

  ```sql
  start transaction 或 begin
  ```

  

### 事务四大特性

- 原子性（Atomicity）：事务是不可分割的最小操作单元，要么全部成功，要么全部失败。
- 一致性（Consistency）：事务完成时，必须使所有的数据都保持一致状态。
- 隔离性（Isolation）：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行。
- 持久性（Durability）：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。

### 并发事务问题

| 问题       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| 脏读       | 一个事务读到另一个事务还没提交的数据                         |
| 不可重复读 | 一个事务先后读取同一条记录，但两次读取的数据不同             |
| 幻读       | 一个事务按照条件查询数据时，没有对应的数据行，但是再插入数据时，又发现这行数据已经存在 |

### 事务隔离级别

| 隔离级别                   | 脏读 | 不可重复读 | 幻读 |
| -------------------------- | ---- | ---------- | ---- |
| Read uncommitted           | √    | √          | √    |
| Read committed             | ×    | √          | √    |
| Repeatable Read(MySQL默认) | ×    | ×          | √    |
| Serializable               | ×    | ×          | ×    |

- √表示在当前隔离级别下该问题会出现
- Serializable 性能最低；Read uncommitted 性能最高，数据安全性最差

```sql
-- 查看事务隔离级别
select @@transaction_isolation;
-- 设置事务隔离级别
set [session | global] transaction isolation level {read uncommitted | read committed | repeatable | serializable}    -- session | global非别是会话级别（当前客户端）、全部客户端
```

> 隔离级别越高，数据越安全，但是性能越低

# 进阶篇

## 存储引擎

### MySQL体系结构

![MySQL体系结构](/content-assets/database-learn/MySQL体系结构.png)

- 连接层

  最上层是一些客户端和链接服务，主要完成一些类似于连接处理、授权认证、及相关的安全方案。服务器也会为安全接入的每个客户端验证它所具有的操作权限。

- 服务层

  第二层架构主要完成大多数的核心服务功能，如SQL接口，并完成缓存的查询，SQL的分析和优化，部分内置函数的执行。所有跨存储引擎的功能也在这一层实现，如过程、函数等。

- 引擎层

  存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API和存储引擎进行通信。不同的存储引擎具有不同的功能，这样我们可以根据自己的需要，来选取合适的存储引擎。

- 存储层

  主要是将数据存储在文件系统之上，并完成与存储引擎的交互。

### 存储引擎简介

1. 创建表时，指定存储引擎

   ```sql
   create table 表名(
   	...
   )engine = innodb
   ```

2. 查看当前数据库支持的存储引擎

   ```sql
   show engine;
   ```

### 存储引擎特点

#### InnoDB

- 介绍

  InnODB是一种兼顾高可靠性和高性能的通用存储引擎，在MySQL5.5之后，InnODB是默认的MySQL存储引擎。

- 特点

  - DML操作遵循ACID模型，支持**事务**；
  - **行级锁**，提高并发访问性能;
  - 支持**外键**FOREIGN KEY约束，保证数据的完整性和正确性；

- 文件

  xxx.ibd：xxx代表的是表名，innoDB引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm、sdi）、数据和索引。
  参数：innodb_file_per_table

> - 查看MySQL变量
>
>   ```sql
>   show variables like 'innodb_file_per_table'
>   ```
>
> - 从idb文件提取表结构数据（在cmd运行）：
>
>   ```cmd
>   ibd2sdi xxx.ibd
>   ```

- 逻辑存储结构

  ![InnoDB逻辑存储结构](D:\Desktop\河海大学\河海大学智泽实验室\数据库学习\笔记\InnoDB逻辑存储结构.png)

#### MyISAM

- 介绍

  MyISAM是MySQL早期的默认存储引擎。

- 特点

  - 不支持事务，不支持外键
  - 支持表锁，不支持行锁
  - 访问速度快

- 文件

  - xxx.sdi：存储表结构信息
  - xxx.MYD:存储数据
  - xxx.MYI: 存储索引

#### Memory

- 介绍

  Memory引擎的表数据时存储在内存中的，由于受到硬件问题、或断电问题的影响，只能将这些表作为临时表或缓存使用。

- 特点

  - 内存存放
  - hash索引（默认）

- 文件

  xxx.sdi:存储表结构信息

#### 特点

| 特点         | InnoDB              | MyISAM | Memory |
| ------------ | ---------------- | ------ | ------ |
| 存储限制     | 64TB                | 有     | 有     |
| 事务安全     | **支持**            | -      | -      |
| 锁机制       | **行锁**            | 表锁   | 表锁   |
| B+tree索引   | 支持                | 支持   | 支持   |
| Hash索引     | -                   | -      | 支持   |
| 全文索引     | 支持（5.6版本之后） | 支持   | -      |
| 空间使用     | 高                  | 低     | N/A    |
| 内存使用     | 高                  | 低     | 中等   |
| 批量插入速度 | 低                  | 高     | 高     |
| 支持外键     | **支持**            | -      | -      |

### 存储引擎选择

在选择存储引擎时，应该根据应用系统的特点选择合适的存储引擎。对于复杂的应用系统，还可以根据实际情况选择多种存储引擎进行组合。

- nnoDB：是Mysql的默认存储引擎，支持事务、外键。如果应用对事务的完整性有比较高的要求，在并发条件下要求数据的一致性，数据操作除了插入和查询之外，还包含很多的更新、删除操作，那么InnoDB存储引擎是比较合适的选择。
- MyISAM：如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且对事务的完整性、并发性要求不是很高，那么选择这个存储引擎是非常合适的。

- MEMORY：将所有数据保存在内存中，访问速度快，通常用于临时表及缓存。MEMORY的缺陷就是对表的大小有限制，太大的表无法缓存在内存中，而且无法保障数据的安全性。

## 索引

### 索引概述

#### 介绍

索引（index）是帮助MySQL**高效获取数据**的**数据结构**（**有序**）。在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。

#### 优缺点

| 优势                                                        | 劣势                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| 提高数据检索的效率，降低数据库的IO成本                      | 索引列也要占用空间                                           |
| 通过索引列对数据进行排序，降低数据排序的成本，降低CPU的消耗 | 索引大大提高了查询效率，同时却也降低更新表的速度，如对标进行insert、update、delete时，效率降低 |

### 索引结构

MySQL的索引是在存储引擎层实现的，不同的存储引擎有不同的结构，主要包含以下几种：

| 索引结构            | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| B+Tree              | 最常见的索引类型，大部分引擎都支持B+树索引                   |
| Hash                | 底层数据结构是用哈希表实现，只有精确匹配索引列的查询才有效，不支持范围查询 |
| R-Tree(空间索引)    | 空间索引是 MyISAM 引擎的一个特殊索引类型，主要用于地理空间数据类型，通常使用较少 |
| Full-Text(全文索引) | 是一种通过建立倒排索引，快速匹配文档的方式，类似于 Lucene, Solr, ES |

|    索引    | InnoDB        | MyISAM | Memory |
| :--------: | ------------- | ------ | ------ |
| B+Tree索引 | 支持          | 支持   | 支持   |
|  Hash索引  | 不支持        | 不支持 | 支持   |
| R-Tree索引 | 不支持        | 支持   | 不支持 |
| Full-text  | 5.6版本后支持 | 支持   | 不支持 |

> 平常所说的索引，如果没有特别指明，都是指B+Tree结构组织的索引

#### B-Tree（多路平衡查找树）

> - 二叉树缺点：顺序插入时，会形成一个链表，查询性能大大降低。大数据量情况下，层级较深，检索速度慢。
> - 红黑树缺点：大数据量情况下，层级较深，检索速度慢。

[B-Tree 演示](https://www.cs.usfca.edu/~galles/visualization/BTree.html)

![B-Tree结构](/content-assets/database-learn/B-Tree结构.png)

#### B+Tree

相对于B-Tree区别：

- 所有数据都会出现在叶子结点
- 叶子结点形成一个单向链表

![B+Tree结构图](/content-assets/database-learn/B-Tree结构图.png)

MySQL索引数据结构对经典的B+Tree进行了优化。在原B+Tree的基础上，增加一个指向相邻叶子节点的链表指针，就形成了带有顺序指针的B+Tree，提高区间访问的性能。

![优化B+Tree结构图](/content-assets/database-learn/优化B-Tree结构图.png)

> 为什么InnoDB存储引擎选择使用B+Tree索引结构？
>
> - 相对于二叉树，层级更少，搜索效率高
> - 对于B-tree，无论是叶子节点还是非叶子节点，都会保存数据，这样导致一页中存储的键值减少，指针跟着减少，要同样保存大量数据，只能增加树的高度，导致性能降低
> - 相对Hash索引，B+tree支持范围匹配及排序操作

#### Hash

哈希索引就是采用一定的hash算法，将键值换算成新的hash值，映射到对应的槽位上，然后存储在hash表中。

- 特点
  - Hash索引只能用于对等比较（=，in），不支持范围查询（between，>，<，...）
  - 无法利用索引完成排序操作
  - 查询效率比较高，通常只需要一次检索就可以了，效率通常要高于B+Tree索引

- 存储引擎支持

  在MySQL中，支持hash索引的是Memory引l擎，而InnoDB中具有自适应hash功能，hash索引是存储引擎根据B+Tree索引在指定条件下自动构建的。

### 索引分类

| 分类     | 含义                                                 | 特点                     | 关键字   |
| -------- | ---------------------------------------------------- | ------------------------ | -------- |
| 主键索引 | 针对于表中主键创建的索引                             | 默认自动创建，只能有一个 | PRIMARY  |
| 唯一索引 | 避免同一个表中某数据列中的值重复                     | 可以有多个               | UNIQUE   |
| 常规索引 | 快速定位特定数据                                     | 可以有多个               |          |
| 全文索引 | 全文索引查找的是文本中的关键词，而不是比较索引中的值 | 可以有多个               | FULLTEXT |

在InnoDB存储引擎中，根据索引的存储形式，又可以分为以下两种：

| 分类                      | 含义                                                       | 特点                 |
| ------------------------- | ---------------------------------------------------------- | -------------------- |
| 聚集索引(Clustered Index) | 将数据存储与索引放一块，索引结构的叶子节点保存了行数据     | 必须有，而且只有一个 |
| 二级索引(Secondary Index) | 将数据与索引分开存储，索引结构的叶子节点关联的是对应的主键 | 可以存在多个         |

聚集索引选取规则：

- 如果存在主键，主键索引就是聚集索引
- 如果不存在主键，将使用第一个唯一（UNIQUE）索引作为聚集索引
- 如果表没有主键，或没有合适的唯一索引，则InnoDB会自动生成一个rowid作为隐藏的聚集索引

![索引分类1](/content-assets/database-learn/索引分类1.png)

![索引分类2](/content-assets/database-learn/索引分类2.png)

### 索引语法

- 创建索引

  ```sql
  create [unique | fulltext] index index_name on table_name(index_col_name,...);
  ```

- 查看索引

  ```sql
  show index from table_name;
  ```

- 删除索引

  ```sql
  drop index index_name on table_name;
  ```

### SQL性能分析

#### SQL执行频率

MySQL客户端连接成功后，通过`show[session|global]status`命令可以提供服务器状态信息。通过如下指令，可以查看当前数据库的INSERT、UPDATE、DELETE、SELECT的访问频次：

```sql
show [session|global] status
show global status like 'Com____';   -- 几个字符就几个下划线
                                     -- 主要看Com_delete
                                     --      Com_insert
                                     --      Com_select
                                     --      Com_update
                                     -- 这几个字母个数都是一样的
```

#### 慢查询日志

慢查询日志记录了所有执行时间超过指定参数（`long_query_time`，单位：秒，默认10秒）的所有SQL语句的日志。

MySQL的慢查询日志默认没有开启，需要在MySQL的配置文件（`/etc/my.cnf`（我的在`/etc/mysql/my.cnf`）（windows是`.\MySQL\MySQL Server 8.0\my.ini`）中配置如下信息：

```sql
# 查看是否开启
show variables like 'slow_query_log';

-- 下面两个是在配置文件中修改的
# 开启MySQL慢日志查询开关
slow_query_log = 1;
# 设置慢日志时间为2秒，SQL语句执行时间超过两秒，就会视为慢查询，记录慢查询日志
long_query_time = 2;
```

配置完毕后，通过以下指令重新启动MySQL服务器进行测试，查看慢日志文件中记录的信息`/var/lib/mysql/localhost-slow.log`（win 日志位置`.\MySQL\MySQL Installer for Windows\Logs`）

> 实际上（经过241服务器测试所得），具体问题具体分析
>
> ```bash
> sudo vim /etc/mysql/my.cnf   # 进入
> 
> # 加上下面几行
> 	[mysqld]
> 	# 慢查询日志
> 	slow_query_log = 1
> 	long_query_time = 2
> # 上面
> ```

#### profile详情

show profiles能够在做SQL优化时帮助我们了解时间都耗费到哪里去了。通过have_profiling参数，能够看到当前MySQL是否支持profile操作：

```sql
select @@have_profiling;
```

默认profiling是关闭的，可通过set语句在session/global级别开启profiling：

```sql
-- 查看
select @@profiling;
-- 开启
set profiling = 1;
```

执行一系列的业务SQL操作，然后通过如下指令查看指令的执行耗时：

```sql
-- 查看每一条SQL语句的耗时基本情况
show profiles;

-- 查看指定query_id的SQL语句各个阶段的耗时情况
show profile for query query_id;

-- 查看指定query_id的SQL语句CPU的使用情况
show profile cpu for query query_id;
```

#### explain执行计划

`explain`或者`desc`命令获取MySQL如何执行`select`语句的信息，包括在`select`语句执行过程中表如何连接和连接的顺序。

```sql
# 直接在select语句之前加上explain/desc
explain select 字段列表 from 表名 where 条件;
```

explain执行计划各字段含义：

- `id`

  select查询的序列号，表示查询中执行select子句或者是操作表的顺序（id相同，执行顺序从上到下；id不同，值越大，越先执行）。

- `select_type`

  表示select类型，常见取值有

  - `simple`：简单表，即不使用表连接或者子查询
  - `primary`：主查询，即外层的查询
  - `union`：union中的第二个或者后面的查询语句
  - `subquery`：select/where之后包含了子查询

  等

- **`type`**

  表示连接类型，性能由好到差的连接类型为`NULL`、`system`、`const`、`eq_ref`、`ref`、`range`、`index`、`all`。

- **`possible_keys`**

  显示可能应用在这张表上的索引，一个或多个。

- **`key`**

  实际使用的索引，如果为NULL，则没有使用索引。

- **`key_len`**

  表示索引中使用的字节数，该值为索引字段的最大可能长度，并非实际使用长度，在不损失精确性的前提下，长度越短越好。

- `rows`

  MySQL认为必须要执行查询的行数，在innodb引擎的表中，是一个估计值，可能并不总是准确的。

- `filtered`

  表示返回结果的行数占需读取行数的百分比，值越大越好。

- **`extra`**

  额外信息

### 索引使用

- 最左前缀法则

  如果索引了多列（联合索引），要遵守最左前缀法则。最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。
  如果跳跃某一列，**索引将部分失效（后面的字段索引失效）**。

  > 和写条件时写的顺序无关

- 范围查询

  联合索引中，出现范围查询(>,<)，**范围查询右侧的列索引失效**（用了的那一列不失效）

- 索引列运算

  不要在索引列上进行运算操作，索引将失效。

- 字符串引号

  字符串类型字段使用时，不加引号，**索引将失效**。

- 模糊查询

  如果仅仅是尾部模糊匹配，索引不会失效。如果是头部模糊匹配，索引失效。

- `or`连接的条件

  用`or`分开的条件，如果or两边的条件中任一方不存在索引，那么涉及的索引都不会被用到。

- 数据分布影响

  如果MySQL评估使用索引比全表查询还慢，则不使用索引。

- SQL提示

  SQL提示是优化数据库的一个重要手段，简单来说，是在SQL语句中加入一些人为的提示来达到优化操作的目的。

  - `use index`（建议使用）

    示例：

    ```sql
    explain select * from tb_user use index(idx_user_pro) where profession = '软件工程';
    ```

  - `ignore index`（忽略）

    示例：

    ```sql
    explain select * from tb_user ignore index(idx_user_pro) where profession = '软件工程';
    ```

  - `force index`（强制使用）

    示例：

    ```sql
    explain select * from tb_user force index(idx_user_pro) where profession = '软件工程';
    ```

- 覆盖索引

  尽量使用覆盖索引（查询使用了索引，并且需要返回的列，在该索引中已经全部能够找到），减少`select *`

  > 在extra列：
  >
  > `usingindex condition`：查找使用了索引，但是需要回表查询数据
  > `usingwhere;using index`：查找使用了索引，但是需要的数据都在索引列中能找到，所以不需要回表查询数据

- 前缀索引

  当字段类型为字符串（varchar，text等）时，有时候需要索引很长的字符串，这会让索引变得很大，查询时，浪费大量的磁盘IO，影响查询效率。此时可以只将字符串的一部分前缀，建立索引，这样可以大大节约索引空间，从而提高索引效率。
  - 语法
    ```sql
    -- 创建前缀索引
    create index idx_xxxx on table_name(idx_col_name(n));    # n为前缀长度
    ```

  - 前缀长度
  
    可以根据索引的选择性来决定，而选择性是指不重复的索引值（基数）和数据表的记录总数的比值，索引选择性越高则查询效率越高，唯一索引的选择性是1，是最好的索引选择性，性能也是最好的。
  
    ```sql
    select count(distinct email) / count(*) from tb_user;       # distinct是去重的      
    select count(distinct substring(email, 1, 5)) / count(*) from tb_user; # 从第一个字符截5个
    ```

- 单列索引和联合索引

  - 单列索引：即一个索引只包含单个列
  - 联合索引：即一个索引包含了多个列

  业务场景中，如果存在多个查询条件，考虑针对查询字段建立索引时，建议建立联合索引，而非单列索引。

  > 多条件联合查询时，MySQL优化器会评估哪个字段的索引效率更高，会选择该索引完成本次查询。

### 索引设计原则

1. 针对于数据量较大，且查询比较频繁的表建立索引。

2. 针对于常作为查询条件（`where`）、排序（`order by`)、分组（`group by`）操作的字段建立索引。

3. 尽量选择区分度高的列作为索引，尽量建立唯一索引，区分度越高，使用索引的效率越高。

4. 如果是字符串类型的字段，字段的长度较长，可以针对于字段的特点，建立前缀索引。

5. 尽量使用联合索引，减少单列索引，查询时，联合索引很多时候可以覆盖索引，节省存储空间，避免回表，提高查询效率。

6. 要控制索引的数量，索引并不是多多益善，索引越多，维护索引结构的代价也就越大，会影响增删改的效率。

7. 如果索引列不能存储`NULL`值，请在创建表时使用`NOT NULL`约束它。当优化器知道每列是否包含`NULL`值时，它可以更好地确定哪个索引最有效地用于查询。

## SQL优化

### 插入数据

- `insert`优化

  - 批量插入

    建议每次`insert`插入数据在500-1000条之间

  - 手动提交事务

    ```sql
    -- 示例
    start transaction;
    ........
    .多次提交.
    ........
    commit;
    ```

  - 主键顺序插入

    顺序插入性能高于乱序输入

- 大批量插入数据

  如果一次性需要插入大批量数据集，使用`insert`语句插入性能较低，此时可以使用`MySQL`数据库提供的load指令进行插入。

  ```sql
  # 客户端连接服务器时，加上参数 --local-infile
  mysql --local-infile -u root -p
  # 设置全局参数local_infile为1，开启从本地加载文件导入数据的开关
  set global local_infile = 1;
  	# # 这里可以通过如下指令查看是否开启
  	# select @@local_infile
  # 执行load指令将准备好的数据，加载到表结构中
  load data local infile '存放数据的文件路径' into table `tb_user` fields terminated by ',' lines terminated by '\n';
  ```

### 主键优化

- 数据组织方式

在InnoDB存储引擎中，表数据都是根据主键顺序组织存放的，这种存储方式的表称为**索引组织表**（index organized table **IOT**）

- 页分裂

页可以为空，也可以填充一半，也可以填充100%，每个页包含了2-N行数据（如果一行数据过大，会行溢出），根据主键排列。

- 页合并

当删除一行记录时，实际上记录并没有被物理删除，只是记录被标记（flaged）为删除并且它的空间变得允许被其他记录声明使用。
当页中删除的记录达到MERGE_THRESHOLD（默认为页的50%），InnODB会开始寻找最靠近的页（前或后）看看是否可以将两个页合并以优化空间使用。

> MERGE_THRESHOLD：合并页的阈值，可以自己设置，在创建表或者创建索引时指定。

- 主键设计原则

- 满足业务需求情况下，尽量将低主键的长度。
- 插入数据时，尽量选择顺序插入，选择使用AUTO_INCREMENT自增主键。
- 尽量不使用UUID做主键或者是其他自然主键，如身份证号。
- 业务操作时，避免对主键的修改。

### `order by`优化

> - Using filesort：通过表的索引或全表扫描，读取满足条件的数据行，然后在排序缓冲区sort buffer中完成排序操作，所有不是通过索引直接返回排序结果的排序都叫FileSort排序。
> - Using index：通过有序索引顺序扫描直接返回有序数据，这种情况即为using index，不需要额外排序，操作效率高。

- 根据排序字段建立合适的索引，多字段排序时，也遵循最左前缀法则。
- 尽量使用覆盖索引。
- 多字段排序，一个升序一个降序，此时需要注意联合索引在创建时的规则（ASC/DESC）。
- 如果不可避免的出现filesort，大数据量排序时，可以适当增大排序缓冲区大小sort_buffer_size(默认256k)。
  

### `group by`优化

- 在分组操作时，可以通过索引提高效率。
- 分组操作时，索引的使用也是满足最左前缀法则。

### `limit`优化

优化思路：一般分页查询时，通过创建覆盖索引能够比较好地提高性能，可以通过覆盖索引加子查询形式进行优化。

示例：

```sql
-- 优化前
select * from tb_sku limit 2000000, 10;
-- 优化后
select t.* from tb_sku as t, (select id from tb_sku order by id limit 2000000, 10) as a where t.id = a.id;
-- 下面的语句是错误的，因为 MySQL 不支持 in 里面使用 limit
-- select * from tb_sku where id in (select id from tb_sku order by id limit 2000000, 10);
```

### `count`优化

> - MylSAM引擎把一个表的总行数存在了磁盘上，因此执行`count(*)`的时候会直接返回这个数，效率很高；
> - InnoDB引擎就麻烦了，它执行`count(*)`的时候，需要把数据一行一行地从引擎里面读出来，然后累积计数。

优化思路：自己计数

`count`几种用法

- count()是一个聚合函数，对于返回的结果集，一行一行地判断，如果count函数的参数不是NULL，累计值就加1，否则不加，最后返回累计值。

- 用法：`count(*)`、`count(主键)`、`count(字段)`、`count(1)`

  - `count(主键)`

    InnoDB引擎会遍历整张表，把每一行的主键id值都取出来，返回给服务层。服务层拿到主键后，直接按行进行累加（主键不可能为null)。

  - `count(字段)`

    - 没有not null约束：InnoDB引擎会遍历整张表把每一行的字段值都取出来，返回给服务层，服务层判断是否为null，不为null，计数累加。
    - 有not null约束：InnoDB引擎会遍历整张表把每一行的字段值都取出来，返回给服务层，直接按行进行累加。

  - `count(1)`

    InnoDB引擎遍历整张表，但不取值。服务层对于返回的每一行，放一个数字“1”进去，直接按行进行累加。

  - `count(*)`

    InnoDB引擎并不会把全部字段取出来，而是专门做了优化，不取值，服务层直接按行进行累加。

  > 按照效率排序：
  >
  > `count(字段)`<`count(主键id)`<`count(1)`≈`count(*)`，所以尽量使用`count(*)`

### `update`优化

InnoDB的行锁是针对索引加的锁，不是针对记录加的锁，并且该索引不能失效，否则会从行锁升级为表锁。

尽量根据主键/索引字段进行数据更新。

## 视图/存储过程/触发器

### 视图

#### 介绍

视图（View）是一种虚拟存在的表。视图中的数据并不在数据库中实际存在，行和列数据来自定义视图的查询中使用的表，并且是在使用视图时动态生成的。

通俗的讲，视图只保存了查询的SQL逻辑，不保存查询结果。所以我们在创建视图的时候，主要的工作就落在创建这条SQL查询语句上。

#### 创建

```sql
create [or replace] view 视图名称[(列表名称)] as select语句 [with [cascaded | local] check option];
-- or replace            如果该名称视图已经存在，则替换，如果不存在，则创建
-- [(列表名称)]           显式指定视图中列的名称，若需指定，则和后面select语句的的列一一对应
-- with check option     强制要求：通过该视图插入或更新的数据，必须符合该视图的where语句条件
    --                   只在通过该视图insert/update时起作用
    -- cascaded          当通过视图更新数据时，数据库不仅会检查当前视图的条件，还会递归检查所有底层视图的条件，无论底层视图是否定义了 check option
    -- local             当通过视图更新数据时，数据库只检查当前视图的条件。对于底层视图，只有在底层视图显式定义了 check option 时才检查，否则忽略底层视图的规则。
```

#### 查询

```sql
-- 查看创建视图语句
show create view 视图名称;
-- 查看视图数据
select * from 视图名称......;
```

#### 修改

```sql
-- 方式一
create or replace view 视图名称[(列表名称)] as select语句 [with [cascaded | local] check option];         -- 不同于创建语句的是or replace不可省略
-- 方式二
alter view 视图名称[(列名列表)] as select语句 [with [cascaded | local] check option];
```

#### 删除

```sql
drop view [if exists] 视图名称 [, 视图名称] ...;
```

#### 检查选项

当使用`with check option`子句创建视图时，MySQL会通过视图检查正在更改的每个行，例如插入，更新，删除，以使其符合视图的定义。MySQL允许基于另一个视图创建视图，它还会检查依赖视图中的规则以保持一致性。为了确定检查的范围，mysql提供了两个选项：`cascaded`和 `local`，默认值为`cascaded`。

#### 视图更新

要使视图可更新，视图中的行与基础表中的行之间必须存在一对一的关系。如果视图包含以下任何一项，则该视图**不可更新**：

- 聚合函数或窗口函数（`sum()`、`min()`、`max()`、`count()`等）
- `distinct`
- `group by`
- `having`
- `union` 或者 `union all`

#### 视图的优点

- 简单

  视图不仅可以简化用户对数据的理解，也可以简化他们的操作。那些被经常使用的查询可以被定义为视图，从而使得用户不必为以后的操作每次指定全部的条件。

- 安全

  数据库可以授权，但不能授权到数据库特定行和特定的列上。通过视图用户只能查询和修改他们所能见到的数据

- 数据独立

  视图可帮助用户屏蔽真实表结构变化带来的影响

### 存储过程

#### 介绍

存储过程是事先经过编译并存储在数据库中的一段SQL语句的集合，调用存储过程可以简化应用开发人员的很多工作，减少数据在数据库和应用服务器之间的传输，对于提高数据处理的效率是有好处的。
存储过程思想上很简单，就是数据库SQL语言层面的代码封装与重用。

#### 特点

- 封装，复用
- 可以接收参数，也可以返回数据
- 减少网络交互，效率提升

#### 创建

```sql
create procedure 存储过程名称([参数列表])
begin
	-- SQL语句
end;

-- 注意：在命令行中，执行创建存储过程SQL时，需要通过关键字 delimiter 指定SQL语句的结束符。
-- 例如：
    delimiter $$                   # 以 $$ 作为结束符
    -- 然后
    create procedure 存储过程名称([参数列表])
    begin
        -- SQL语句
    end$$
    -- 用完可以改回去
    delimiter ;                    # 以 ; 作为结束符
```

#### 调用

```sql
call 名称([参数]);
```

#### 查看

```sql
-- 查询指定数据库的存储过程及状态信息
select * from information_schema.routines where routine_schema = 'xxx';
-- 查询某个存储过程的定义
show create procedure 存储过程名称;
```

#### 删除

```sql
drop procedure [if exists] 存储过程名称;
```

#### 变量

##### 系统变量

**系统变量**是MySQL服务器提供，不是用户定义的，属于服务器层面。分为全局变量（global）、会话变量（session）

- 查看系统变量

  ```sql
  -- 查看所有系统变量
  show [session | global] variables;        # []内省略时默认session
  -- 可以通过like模糊匹配方式查找变量
  show [session | global] variables like '...';
  -- 查看指定变量的值
  select @@[session. | global.]系统变量名;    # 不省略时记得加'.'
  ```

- 设置系统变量

  ```sql
  set [session | global] 系统变量名 = 值;
  set @@[session. | global.]系统变量名 = 值;     # 不省略时记得加'.'
  ```

> 如果没有指定`session/global`，默认是`session`会话变量
>
> MySQL服务器重新启动之后，所设置的全局参数会失效，要想不失效，可以在`/etc/my.cnf`中配置

##### 用户自定义变量

**用户自定义变量**是用户根据需要自己定义的变量，用户变量不用提前声明，在用的时候直接“@变量名”使用即可，其作用于为当前连接。

- 赋值

  ```sql
  set @var_name = expr [,@var_name = expr]...;
  set @var_name := expr [,@var_name := expr]...;
  
  select @var_name := expr [,@var_name := expr]...;
  select 字段名 into @var_name from 表名;
  ```

- 使用

  ```sql
  select @var_name;
  ```

> 用户定义变量无序对其进行声明或初始化，只不过获取到的值为`NULL`

##### 局部变量

**局部变量**是根据需要定义在局部生效的变量，访问之前，需要`declare`声明。可用作存储过程内的局部变量和输入参数，局部变量的范围是在其内声明的`begin...end`块。

- 声明

  ```sql
  declare 变量名 变量类型 [default...];
  ```

  变量类型就是数据库字段类型：INT、BIGINT、CHAR、VARCHAR、DATE、TIME等。

- 赋值

  ```sql
  set 变量名 = 值;
  set 变量名 := 值;
  select 字段名 into 变量名 from 表名...;
  ```

#### if判断

语法：

```sql
if 条件1 then
	...
elseif 条件2 then           -- 可选
	...
else                       -- 可选
	...
end if;
```

#### 参数

| 类型  | 含义                                         | 备注 |
| ----- | -------------------------------------------- | ---- |
| IN    | 该类参数作为输入，也就是需要调用时传入值     | 默认 |
| OUT   | 该类参数作为输出，也就是该参数可以作为返回值 |      |
| INOUT | 既可以作为输入参数，也可以作为输出参数****   |      |

用法：

```sql
create procedure 存储过程名称([in / out / inout 参数名 参数类型])
begin
	-- SQL语句
end;
```

#### case

语法：

```sql
-- 语法一：
case case_value
	when when_value1 then statement_list1
	[when when_value2] then statement_list2
	...
	[else statement_list]
end case;
-- 语法二：
case
	when search_condition1 then statement_list1
	[when search_condition2] then statement_list2
	...
	[else statement_list]
end case;
```

#### 循环

##### while

while循环是有条件的循环控制语句。满足条件后，再执行循环体中的SQL语句。具体语法为：

```sql
# 先判定条件，如果条件为True，则执行逻辑，否则，不执行逻辑
while 条件 do
	SQL逻辑...
end while;
```

##### repeat

repeat是有条件的循环控制语句，当满足条件时退出循环。具体语法为：

```sql
# 先执行一次逻辑，然后判定逻辑是否满足，如果满足，则退出，如果不满足，则继续下一次循环
repeat
	SQL逻辑...
	until 条件
end repeat;
```

##### loop

loop实现简单的循环，如果不在SQL逻辑中增加退出循环的条件，可以用其来实现简单的死循环。loop可以配合一下两个语句使用：

- `leave`配合循环使用，退出循环。
- `iterate`必须用在循环中，作用是跳过当前循环剩下的语句，直接进入下一次循环。

```sql
[begin_label:] loop
	SQL逻辑...
end loop [end_label];


leave label;    -- 退出指定标记的循环体
iterate label;  -- 直接进入下一次循环
```

#### 游标cursor

**游标（CURSOR）**是用来存储查询结果集的数据类型，在存储过程和函数中可以使用游标对结果集进行循环的处理。游标的使用包括游标的声明、OPEN、FETCH和 CLOSE，其语法分别如下。

- 声明游标

  ```sql
  declare 游标名称 cursor for 查询语句;
  ```

- 打开游标

  ```sql
  open 游标名称;
  ```

- 获取游标记录

  ```sql
  fetch 游标名称 into 变量[,变量];
  ```

- 关闭游标

  ```sql
  close 游标名称;
  ```

#### 条件处理程序

**条件处理程序（Handler）**可以用来定义在流程控制结构执行过程中遇到问题时相应的处理步骤。具体语法为：

```sql
declare handler_action handler for condition_value [, condition_value]... statement;


handler_action
	continue                        继续执行当前程序
	exit                            终止执行当前程序
condition_value
	sqlstate sqlstate_value         状态码，如'02000'
	sqlwarning                      所有01开头的sqlstate代码的缩写
	not found                       所有以02开头的sqlstate代码的缩写
	sqlexception                    所有没有被sqlwarning或not found捕获的sqlstate代码的缩写
```

[MySQL :: MySQL 8.0 Error Reference :: 2 Server Error Message Reference](https://dev.mysql.com/doc/mysql-errors/8.0/en/server-error-reference.html)

### 存储函数

存储函数是有返回值的存储过程，存储函数的参数只能是IN类型的。具体语法如下：

```sql
create function 存储函数名称([参数列表])
returns type [characteristic...]
begin
	-- SQL语句
	return ...;
end;


characteristic说明：
	deterministic        相同的输入参数总是产生相同的结果
	no sql               不包含SQL语句
	reads sql data       包含读取数据的语句，但不包含写入数据的语句
```

### 触发器

#### 介绍

触发器是与表有关的数据库对象，指在insert/update/delete之前或之后，触发并执行触发器中定义的SQL语句集合。触发器的这种特性可以协助应用在数据库端确保数据的完整性，日志记录，数据校验等操作。
使用别名OLD和NEW来引用触发器中发生变化的记录内容，这与其他的数据库是相似的。现在触发器还只支持行级触发，不支持语句级触发。

| 触发器类型      | NEW 和 OLD                                             |
| --------------- | ------------------------------------------------------ |
| insert 型触发器 | NEW 表示将要或者已经新增的数据                         |
| update 型触发器 | OLD 表示修改之前的数据，NEW 表示将要或已经修改后的数据 |
| delete 型触发器 | OLD 表示将要或者已经删除的数据                         |

#### 创建

```sql
create trigger trigger_name
    before/after insert/update/delete
    on tbl_name
    for each row         -- 行级触发器
begin
	trigger_stmt;
end;
```

#### 查看

```sql
show triggers;
```

#### 删除

```sql
drop trigger [schema_name.]trigger_name;   -- 如果没有指定schema_name，默认为当前数据库。
```

## 锁

- 介绍

  锁是计算机协调多个进程或线程并发访问某一资源的机制。在数据库中，除传统的计算资源(CPU、RAM、I/0)的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个角度来说，锁对数据库而言显得尤其重要，也更加复杂。

- 分类

  MySQL中的锁，按照锁的粒度分，分为一下三类：

  1. 全局锁：锁定数据库中的所有表。
  2. 表级锁：每次操作锁住整张表。
  3. 行级锁：每次操作锁住对应的行数据。

### 全局锁

- 介绍

  全局锁就是对整个数据库实例加锁，加锁后整个实例就处于只读状态，后续的DML的写语句，DDL语句，已经更新操作的事务提交语句都将被阻塞。

  其典型的使用场景是做全库的逻辑备份，对所有的表进行锁定，从而获取一致性视图，保证数据的完整性。

- 基本操作

  加全局锁：

  ```sql
  flush tables with read lock;
  ```

  释放全局锁：

  ```sql
  unlock tables;
  ```

  备份：

  ```sql
  mysqldump -u root -p123456 itcast > itcast.sql
  ```

- 特点

  数据库中加全局锁，是一个比较重的操作，存在以下问题:

  1. 如果在主库上备份，那么在备份期间都不能执行更新，业务基本上就得停摆。
  2. 如果在从库上备份，那么在备份期间从库不能执行主库同步过来的二进制日志(binlog)，会导致主从延迟。（该结构会在后续主从复制讲解）

- 解决方法

  在InnoDB引擎中，我们可以在备份时加上参数 –single-transaction 参数来完成不加锁的一致性数据备份。

  ```sql
  mysqldump --single-transaction -uroot -p123456 itcast > itcast.sql
  ```


### 表级锁

#### 表锁

- 介绍

  每次操作锁住整张表。锁定粒度大，发生锁的冲突的概率最高，并发度最低。应用在MyISAM、InnoDB、BDB等存储引擎中。

- 对于表级锁，主要分为以下三类：

  1. 表锁
  2. 元数据锁（meta data lock，MDL）
  3. 意向锁

- 表锁

  对于表锁，分为两类：

  1. 表共享读锁（read lock）
  2. 表独占写锁（write lock）

  **读锁不会阻塞其他客户端的读，但是会阻塞写。写锁既会阻塞其他客户端的读，又会阻塞其他客户端的写。**

- 语法

  ```sql
  -- 加锁
  lock tables 表名... read/write
  
  -- 释放锁
  unlock tables/客户端断开连接
  ```

#### 元数据锁（meta data lock，MDL）

MDL加锁过程是系统自动控制，无需显式使用，在访问一张表的时候会自动加上。MDL锁主要作用是维护表元数据的数据一致性，在表上有活动事务的时候，不可以对元数据进行写入操作。**为了避免DML与DDL冲突，保证读写的正确性。**



在MySQL5.5中引入了MDL，当对一张表进行增删改查的时候，加MDL读锁（共享）；当对表结构进行变更操作的时候，加MDL写锁（排他）

| 对应SQL                                     | 锁类型                                | 说明                                             |
| ------------------------------------------- | ------------------------------------- | ------------------------------------------------ |
| lock tables xxx read /write                 | SHARED_READ_ONLY/SHARED_NO_READ_WRITE |                                                  |
| select 、 select … lock in share mode       | SHARED_READ                           | 与SHARED_READ、SHARED_WRITE兼容，与EXCLUSIVE互斥 |
| insert 、update、delete、select …for update | SHARED_WRITE                          | 与SHARED_READ、SHARED_WRITE兼容，与EXCLUSIVE互斥 |
| alter table …                               | EXCLYSIVE                             | 与其他的MDL都互斥                                |

查看元数据锁：

```sql
select object_type, object_schema, object_name, lock_type, lock_duration from performance_schema.metadata_locks;
```

#### 意向锁

为了避免DML在执行时，加的行锁与表锁的冲突，在InnoDB中引入了意向锁，使得表锁不用检查每行数据是否加锁，使用意向锁来减少表锁的检查。

1. 意向共享锁（IS）：由语句`select ... lock in share mode`添加
2. 意向排他锁（IX）：由`insert`、`update`、`delete`、`select ... for update`添加

兼容情况：

1. 意向共享锁（IS）：与表锁共享锁（read）兼容，与表锁排他锁（write）互斥。
2. 意向排他锁（IX）：与表锁共享锁（read）及排他锁（write）都互斥。意向锁之间不会互斥。

查看意向锁及行锁的加锁情况：

```sql
select object_shema, object_name, index_name, lock_type, lock_mode, lock_data from performance_schema.data_locks;
```

### 行级锁

行级锁，每次操作锁住对应的行数据。锁定粒度最小，发生锁冲突的概率最低，并发度最高。应用在InnoDB存储引擎中。

InnoDB的数据是基于索引组织的，行锁是通过对索引上的索引项加锁来实现的，而不是对记录加的锁。对于行级锁，主要分为以下三类：

1. 行锁(Record Lock):锁定单个行记录的锁，防止其他事务对此行进行update和delete。在RC、RR隔离级别下都支持。
2. 间隙锁(GapLock):锁定索引记录间隙(不含该记录)，确保索引记录间隙不变，防止其他事务在这个间隙进行insert，产生幻读。在RR隔离级别下都支持。
3. 临键锁(Next-Key Lock):行锁和间隙锁组合，同时锁住数据，并锁住数据前面的间隙Gap。在RR隔离级别下支持。

#### 行锁

InnoDB实现了以下两种类型的行锁：

1. 共享锁（S）：允许一个事务去读一行，阻止其他事务获得相同数据集的排它锁。
2. 排他锁（X）：允许获取排他锁的事务更新数据，阻止其他事务获得相同数据集的共享锁和排他锁。

<table border="1" cellspacing="0" cellpadding="10" style="border-collapse: collapse; width: 100%;">
    <tr>
        <!-- 核心代码：利用 linear-gradient 绘制对角线 -->
        <th style="width: 200px; height: 60px; background: linear-gradient(to top right, transparent 49.5%, black 49.5%, black 50.5%, transparent 50.5%);">
            <!-- 上面的文字：靠右 -->
            <div style="text-align: right; padding-bottom: 5px;">请求锁类型</div>
            <!-- 下面的文字：靠左 -->
            <div style="text-align: left; padding-top: 5px;">当前锁类型</div>
        </th>
        <th>S (共享锁)</th>
        <th>X (排他锁)</th>
    </tr>
    <tr>
        <td><b>S (共享锁)</b></td>
        <td style="text-align: center;">兼容</td>
        <td style="text-align: center;">冲突</td>
    </tr>
    <tr>
        <td><b>X (排他锁)</b></td>
        <td style="text-align: center;">冲突</td>
        <td style="text-align: center;">冲突</td>
    </tr>
</table>

| SQL                         | 行锁类型       | 说明                                     |
| :-------------------------- | -------------- | ---------------------------------------- |
| insert，update，delete …    | 排他锁         | 自动加锁                                 |
| select                      | **不加任何锁** |                                          |
| select … lock in share mode | 共享锁         | 需要手动select之后加上lock in share mode |
| select … for update         | 排他锁         | 需要手动在select之后for update           |

#### 行锁—演示

默认情况下，InnoDB在 REPEATABLE READ事务隔离级别运行，InnoDB使用 next-key锁进行搜索和索引扫描，以防止幻读。

1. 针对唯一索引进行检索时，对已存在的记录进行等值匹配时，将会自动优化为行锁。
2. InnoDB的行锁是针对于索引加的锁，不通过索引条件检索数据，那么!nnoDB将对表中的所有记录加锁，此时 **就会升级为表锁**。
