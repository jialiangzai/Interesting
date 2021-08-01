## JavaScript 基础 - 第1天

> 了解变量、数据类型、运算符等基础概念，能够实现数据类型的转换，结合四则运算体会如何编程。

- 体会现实世界中的事物与计算机的关系
- 理解什么是数据并知道数据的分类
- 理解变量存储数据的“容器”
- 掌握常见运算符的使用，了解优先级关系
- 知道 JavaScript 数据类型隐式转换的特征

### 一、介绍

> 掌握 JavaScript 的引入方式，初步认识 JavaScript 的作用

#### 1.1 引入方式

JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过 `script` 标签将 JavaScript 代码引入到 HTML 中，有两种方式：

##### 内部形式

通过 `script` 标签包裹 JavaScript 代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 内联形式：通过 script 标签包裹 JavaScript 代码 -->
  <script>
    alert('嗨，欢迎来传智播学习前端技术！');
  </script>
</body>
</html>
```

##### 外部形式

一般将 JavaScript 代码写在独立的以 .js 结尾的文件中，然后通过 `script` 标签的 `src` 属性引入

```javascript
// demo.js
document.write('嗨，欢迎来传智播学习前端技术！');
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->
  <script src="demo.js"></script>
</body>
</html>
```

如果 script 标签使用 src 属性引入了某 .js 文件，那么 标签的代码会被忽略！！！如下代码所示：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 引入方式</title>
</head>
<body>
  <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->
  <script src="demo.js">
    // 此处的代码会被忽略掉！！！！
  	alert(666);  
  </script>
</body>
</html>
```

#### 1.2 注释和结束符

通过注释可以屏蔽代码被执行或者添加备注信息，JavaScript 支持两种形式注释语法：

##### 单行注释

使用 `// ` 注释单行代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 注释</title>
</head>
<body>
  
  <script>
    // 这种是单行注释的语法
    // 一次只能注释一行
    // 可以重复注释
    document.write('嗨，欢迎来传智播学习前端技术！');
  </script>
</body>
</html>
```

##### 多行注释

使用 `/* */` 注释多行代码

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 注释</title>
</head>
<body>
  
  <script>
    /* 这种的是多行注释的语法 */
    /*
    	更常见的多行注释是这种写法
    	在些可以任意换行
    	多少行都可以
      */
    document.write('嗨，欢迎来传智播学习前端技术！');
  </script>
</body>
</html>
```

**注：编辑器中单行注释的快捷键为 `ctrl + /`**

##### 结束符

在 JavaScript 中 `;` 代表一段代码的结束，多数情况下可以省略 `;` 使用回车（enter）替代。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 结束符</title>
</head>
<body>
  
  <script> 
    alert(1);
    alert(2);
    alert(1)
    alert(2)
  </script>
</body>
</html>
```

~~~javascript
let num  = 10
~~~

~~~css
div {
    color: red;
}
~~~

~~~html
<div>
    
</div>
~~~



JavaScript 跟 HTML 和 CSS 一样，会忽略【一些】空白符，但是换行符（回车）会被识别成结束符 `;`，因此在实际开发中有许多人主张书写 JavaScript 代码时省略结束符 `;`

#### 1.3 输入和输出

输出和输入也可理解为人和计算机的交互，用户通过键盘、鼠标等向计算机输入信息，计算机处理后再展示结果给用户，这便是一次输入和输出的过程。

举例说明：如按键盘上的方向键，向上/下键可以滚动页面，按向上/下键这个动作叫作输入，页面发生了滚动了这便叫输出。

##### 输出

JavaScript 可以接收用户的输入，然后再将输入的结果输出：

`alert()`、`document.wirte()`

以数字为例，向 `alert()` 或 `document.write()`输入任意数字，他都会以弹窗形式展示（输出）给用户。

##### 输入

向 `prompt()` 输入任意内容会以弹窗形式出现在浏览器中，一般提示用户输入一些内容。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 输入输出</title>
</head>
<body>
  
  <script> 
    // 1. 输入的任意数字，都会以弹窗形式展示
    document.write('要输出的内容');
    alert('要输出的内容');

    // 2. 以弹窗形式提示用户输入姓名，注意这里的文字使用英文的引号
    prompt('请输入您的姓名:');
  </script>
</body>
</html>
```

### 二、变量

> 理解变量是计算机存储数据的“容器”，掌握变量的声明方式

变量是计算机中用来存储数据的“容器”，它可以让计算机变得有记忆，通俗的理解变量就是使用【某个符号】来代表【某个具体的数值】（数据）

```html
<script>
  // x 符号代表了 5 这个数值
  x = 5;
  // y 符号代表了 6 这个数值
  y = 6;
    
  //举例： 在 JavaScript 中使用变量可以将某个数据（数值）记录下来！

  // 将用户输入的内容保存在 num 这个变量（容器）中
  num = prompt('请输入一数字!');

  // 通过 num 变量（容器）将用户输入的内容输出出来
  alert(num);
  document.write(num);
</script>
```

#### 2.1 声明和赋值

##### 声明

声明(定义)变量有两部分构成：声明关键字、变量名（标识）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 声明和赋值</title>
</head>
<body>
  
  <script> 
    // let 变量名
    // 声明(定义)变量有两部分构成：声明关键字、变量名（标识）
    // let 即关键字，所谓关键字是系统提供的专门用来声明（定义）变量的词语
    // age 即变量的名称，也叫标识符
    let age;
  </script>
</body>
</html>
```

关键字是 JavaScript 中内置的一些英文词汇（单词或缩写），它们代表某些特定的含义，如 `let` 的含义是声明变量的，看到 `let`  后就可想到这行代码的意思是在声明变量，如 `let age;` 

`let` 和 `var` 都是 JavaScript 中的声明变量的关键字，推荐使用 `let` 声明变量！！！

##### 赋值

声明（定义）变量相当于创造了一个空的“容器”，通过赋值向这个容器中添加数据。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 声明和赋值</title>
</head>
<body>
  
  <script> 
    // 声明(定义)变量有两部分构成：声明关键字、变量名（标识）
    // let 即关键字，所谓关键字是系统提供的专门用来声明（定义）变量的词语
    // age 即变量的名称，也叫标识符
    let age;
    // 赋值，将 18 这个数据存入了 age 这个“容器”中
    age = 18;
    // 这样 age 的值就成了 18
    document.write(age);
    
    // 也可以声明和赋值同时进行
    let str = 'hello world!';
    alert(str);
  </script>
</body>
</html>
```

#### 2.2 关键字  

JavaScript 使用专门的关键字 `let` 和 `var` 来声明（定义）变量，在使用时需要注意一些细节：

以下是使用 `let` 时的注意事项：

1. 允许声明和赋值同时进行
2. 不允许重复声明
3. 允许同时声明多个变量并赋值
4. JavaScript 中内置的一些关键字不能被当做变量名

以下是使用 `var` 时的注意事项：

2. 允许声明和赋值同时进行
2. 允许重复声明
3. 允许同时声明多个变量并赋值

大部分情况使用 `let` 和 `var` 区别不大，但是 `let` 相较 `var` 更严谨，因此推荐使用 `let`，后期会更进一步介绍二者间的区别。

#### 2.3 变量名命名规则

关于变量的名称（标识符）有一系列的规则需要遵守：

1. 只能是字母、数字、下划线、$，且不能能数字开头
2. 字母区分大小写，如 Age 和 age 是不同的变量
3. JavaScript 内部已占用于单词（关键字或保留字）不允许使用
4. 尽量保证变量具有一定的语义，见字知义

注：所谓关键字是指 JavaScript 内部使用的词语，如 `let` 和`var`，保留字是指 JavaScript 内部目前没有使用的词语，但是将来可能会使用词语。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 变量名命名规则</title>
</head>
<body>
  
  <script> 
    let age = 18; // 正确
    let age1 = 18; // 正确
    let _age = 18; // 正确

    // let 1age = 18; // 错误，不可以数字开头
    let $age = 18; // 正确
    let Age = 24; // 正确，它与小写的 age 是不同的变量
    // let let = 18; // 错误，let 是关键字
    let int = 123; // 不推荐，int 是保留字
  </script>
</body>
</html>
```

### 三、数据类型

> 计算机世界中的万事成物都是数据。

计算机程序可以处理大量的数据，为了方便数据的管理，将数据分成了不同的类型：

注：通过 typeof 关键字检测数据类型

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    // 检测 1 是什么类型数据，结果为 number
    document.write(typeof 1);
  </script>
</body>
</html>
```

#### 3.1 数值类型

即我们数学中学习到的数字，可以是整数、小数、正数、负数

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    let score = 100; // 正整数
    let price = 12.345; // 小数
    let temperature = -40; // 负数

    document.write(typeof score); // 结果为 number
    document.write(typeof price); // 结果为 number
    document.write(typeof temperature); // 结果为 number
  </script>
</body>
</html>
```

JavaScript 中的数值类型与数学中的数字是一样的，分为正数、负数、小数等。

#### 3.2 字符串类型

通过单引号（ `''`） 、双引号（ `""`）或反引号包裹的数据都叫字符串，单引号和双引号没有本质上的区别，推荐使用单引号。

注意事项：

1. 无论单引号或是双引号必须成对使用
2. 单引号/双引号可以互相嵌套，但是不以自已嵌套自已
3. 必要时可以使用转义符 `\`，输出单引号或双引号

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    let user_name = '小明'; // 使用单引号
    let gender = "男"; // 使用双引号
    let str = '123'; // 看上去是数字，但是用引号包裹了就成了字符串了
    let str1 = ''; // 这种情况叫空字符串
		
    documeent.write(typeof user_name); // 结果为 string
    documeent.write(typeof gender); // 结果为 string
    documeent.write(typeof str); // 结果为 string
  </script>
</body>
</html>
```

#### 3.3 布尔类型

表示肯定或否定时在计算机中对应的是布尔类型数据，它有两个固定的值 `true` 和 `false`，表示肯定的数据用 `true`，表示否定的数据用 `false`。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    //  pink老师帅不帅？回答 是 或 否
    let isCool = true; // 是的，摔死了！
    isCool = false; // 不，套马杆的汉子！

    document.write(typeof isCool); // 结果为 boolean
  </script>
</body>
</html>
```

#### 3.4 undefined

未定义是比较特殊的类型，只有一个值 undefined，只声明变量，不赋值的情况下，变量的默认值为 undefined，一般很少【直接】为某个变量赋值为 undefined。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 数据类型</title>
</head>
<body>
  
  <script> 
    // 只声明了变量，并末赋值
    let tmp;
    document.write(typeof tmp); // 结果为 undefined
  </script>
</body>
</html>
```

**注：JavaScript 中变量的值决定了变量的数据类型。**

### 四、类型转换

> 理解弱类型语言的特征，掌握显式类型转换的方法

在 JavaScript 中数据被分成了不同的类型，如数值、字符串、布尔值、undefined，在实际编程的过程中，不同数据类型之间存在着转换的关系。

#### 4.1 隐式转换

某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 隐式转换</title>
</head>
<body>
  <script> 
    let num = 13; // 数值
    let num2 = '2'; // 字符串

    // 结果为 132
    // 原因是将数值 num 转换成了字符串，相当于 '13'
    // 然后 + 将两个字符串拼接到了一起
    console.log(num + num2);

    // 结果为 11
    // 原因是将字符串 num2 转换成了数值，相当于 2
    // 然后数值 13 减去 数值 2
    console.log(num - num2);

    let a = prompt('请输入一个数字');
    let b = prompt('请再输入一个数字');

    alert(a + b);
  </script>
</body>
</html>
```

注：数据类型的隐式转换是 JavaScript 的特征，后续学习中还会遇到，目前先需要理解什么是隐式转换。

补充介绍模板字符串的拼接的使用

#### 4.2显式转换

编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。为了避免因隐式转换带来的问题，通常根逻辑需要对数据进行显示转换。

##### Number

通过 `Number` 显示转换成数值类型，当转换失败时结果为 `NaN`（Not a Number）即不是一个数字。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 隐式转换</title>
</head>
<body>
  <script>
    let t = '12';
    let f = 8;

    // 显式将字符串 12 转换成数值 12
    t = Number(t);

    // 检测转换后的类型
    // console.log(typeof t);
    console.log(t + f); // 结果为 20

    // 并不是所有的值都可以被转成数值类型
    let str = 'hello';
    // 将 hello 转成数值是不现实的，当无法转换成
    // 数值时，得到的结果为 NaN （Not a Number）
    console.log(Number(str));
  </script>
</body>
</html>
```

记忆单词案例

思路：

- 外层xxx
- 里层xxx

~~~javascript
// 记忆单词案例
        // 分析
        // 1. 外面的循环 记录第n天 
        for (let i = 1; i < 4; i++) {
            document.write(`第${i}天 <br>`)
            // 2. 里层的循环记录 几个单词
            for (let j = 1; j < 6; j++) {
                document.write(`记住第${j}个单词<br>`)
            }
        }
~~~


## JavaScript 基础 - 第二天

##### 算数运算符：+-*/%，小括号优先级

在js计算过程中，如果需要加（）如果需要设置多个（）时候可以嵌套使用

算数运算符特点：

1. 程序中遇到-*/%时候。变量会发生隐式类型转换（变量自己偷偷的将自己的数据类型改变）----隐式转换
2. 在程序中通过自己实现的数据类型转换是（强制类型转化）----显示类型转换
3. 当程序中出现字符串相加的时候，加号就是一个字符串拼接的作用，也可以做隐式类型转换

华氏度=9/5*摄氏度+32

##### 赋值运算符

将计算的结果通过赋值运算符赋值

=

+=              a+=b  ===>  a=a+b

-=	           a-=b  ===>a=a-b

*=               a*=b ===>a=a*b

/=	           a/=b===>a=a/b

%=               a%=b===>a=a%b

##### 比较运算符

在程序中用来比较 

 >

<

＞=          或的关系  

< =	         或的关系

==    等于会发生隐式类型转换 （忽略数据类型，直接比较的是值）

===   全等于在比较的时候同时要比较数据类型和值

!=

!==

##### 逻辑运算符

连接多个比较运算符，程序中出现多个条件通过逻辑运算符连接

&& 且  与 只要有一个结果为false最后结果为false，全部都为true结果为true      一假则假

||	 或  符号两边有一个true就为true        一真则真

！ 非 true变false  false变true 真变假，假变真

原因：通过左边能得到整个式子的结果，因此没必要再判断右边
       运算结果：无论 && 还是 || ，运算结果都是最后被执行的表达式值，一般用在变量赋值

| **&&** | 左边为false就短路 |
| ------ | ----------------- |
| \|\|   | 左边为true就短路  |

##### 一元运算符

在循环语句中会使用一元运算，     经常用于计数来使用。   

++ 

--

++a 或者a++

++运算是在变量原来值的基础上加一，--运算是在变量原来值的基础上减一

前置自增和后置自增单独使用没有区别

前置自增和后置自增如果参与运算有赋值的时候就有区别: (难点)

​     前置自增：先自加再使用（记忆口诀：++在前 先加  ）先计算再赋值

​     后置自增：先使用再自加（记忆口诀：++在后 后加）   先赋值再计算

1.前置自增和后置自增独立使用时二者并没有差别！

2.一般开发中我们都是独立使用

3.后面 i++ 后置自增会使用相对较多

##### 分支语句

程序中的代码根据不同的条件执行不同的结果

分类：

ØIf分支语句

Ø三元运算符

Øswitch 语句

###### if分支语句

if语句有三种使用：单分支、双分支、多分支

* 单分支使用语法：

![1627540811218](C:\Users\浪客\AppData\Roaming\Typora\typora-user-images\1627540811218.png)

单条件判断中出现一个条件

条件：根据程序中的实际问题分析得到一个条件语句（一般是比较运算符合逻辑符组成）

js代码根据不同地条件要实现相对应的功能，可以让我们有选择性的执行想要的代码

js从上到下依次执行

Ø括号内的条件为true时，进入大括号里执行代码

Ø小括号内的结果若不是布尔类型时，会发生隐式转换转为布尔类型

判断条件的结果是够成立（true或者false），成立只执行if后大括号的js代码，后面不执行，为false只执行else的代码，前面的if的代码不执行

* 多条件判断分支语句

if（判断条件1）{

代码1；

}else if(判断条件2){

代码2

}……

![1627546207897](C:\Users\浪客\AppData\Roaming\Typora\typora-user-images\1627546207897.png)

Ø先判断条件1，若满足条件1就执行代码1，其他不执行

Ø若不满足则向下判断条件2，满足条件2执行代码2，其他不执行

Ø若依然不满足继续往下判断，依次类推

Ø若以上条件都不满足，执行else里的代码n

Ø注：可以写N个条件，但这里演示只写2个

xxxx is not defined表示xx变量未定义

 * 三元运算符     **三元运算符执行满足条件的语句**  

   ![1627552230786](C:\Users\浪客\AppData\Roaming\Typora\typora-user-images\1627552230786.png)

* switch执行满足条件的语句

  程序中变量的值是某些固定的值c

  ![1627552290833](C:\Users\浪客\AppData\Roaming\Typora\typora-user-images\1627552290833.png)



大白话：

* ​	先获取变量的值，使用变量的值和case后面的值进行相等比较，如果变量的值等于多少就执行对应的case中的代码，不相等就继续向下判断，都不相等执行default中的代码（js执行从上到下）
* 代码相同把case1：case2：case3：，break，    简写
* case的语句和break后跟分号
* case的break不能省略，default的break可以省略
* switch的变量和case的值数据类型要保持统一（重要），switch的变量实质是布尔值

专业释义：

Ø找到跟小括号里数据**全等**的case值，并执行里面对应的代码

Ø若没有全等 === 的则执行default里的代码

Ø例：数据若跟值2全等，则执行代码2



\1. switch case语句一般用于等值判断,不适合于区间判断

\2. switch case一般需要配合break关键字使用 没有break会造成case穿透





##### while

循环特点：反复执行跟if条件为才 while大括号里代码执行完毕后不会跳出，而是继续回到小括号里判断条件是否满足，若满足又执行大括号里的代码，然后再回到跳出

本质： 以某个变量为起始值，然后不断产生变化量，慢慢靠近终止条件的过程 

#### 语法


 初始化一个变量，（变量起始值）

while (条件又称终止条件){

代码，

变量变化值	

}

for 循环：反复执行的程序

for（初始化变量；条件；变量自增（自减））{

  代码；

}

​    // for循环: 反复执行程序(代码)

​    // 语法:

​    // for(初始化变量; 条件; 变量自增(自减)) {

​    //   代码;

​    // }



​    // 注意:

​    // a) 初始化变量必须是和条件有关系的变量

​    // b) 变量自增(自减)后面不能加分号



​    // 如何执行:

​    // 1. 先执行变量初始化

​    // 2. 将变量中的值带入到条件中,判断当前条件是否成立

​    // 3. 如果条件成立,则立即执行循环体中的代码

​    // 4. 变量自增(自减), 将修改后变量的值再次带入到条件中,判断条件是否成立

​    // 5. 如果成立则继续执行, 如果不成立,则不执行循环体中的代码初始化变量必须是和条件有关系的变量，变量自增（自减）后面不能加分号
先执行变量的初始化，把变量带入到条件中，如果成立执行代码，变量自增或者自减，重新把新递增或递减的变量带入到条件直到条件不成立终止循环，初始化变量就执行一次

​    // 循环语句:

​    // 1) while循环

​    // 2) for循环





​    // 循环特点: 反复执行的过程, 循环不是一直在执行,当满足某些条件的时候,循环也会停止

​    // 1) 表 2) 上课 3) 日起日落 



​    // 语法:

​    // 初始化变量;

​    // while(条件) {

​    //  代码;

​    //  变量自增;

​    //  变量自减;

​    // }



​    // 如何执行:

​    // 1. 初始化变量, 先定义一个变量,并给变量赋值 (初始化的变量必须是条件中用到的变量)

​    // 2. 条件: 根据程序中实际需要分析得到的一个条件

​    // 3. 先执行变量初始化

​    // 4. 将变量的值带入到条件中,判断条件是否成立,如果条件不成立(false),那么循环体中的代码不会执行

​    // 5. 如果条件成立,则程序会执行循环体中的代码, 修改变量的值(通过自增或自减)

​    // 6. 将修改后变量的值再次带入到条件中,如果条件成立则继续执行循环体中的代码,如果不成立,则不会执行循环体中的代码

​    // 7.  接收用户输入用户名和密码，只要用户名不是admin或者密码不是888就一直提示要求重新输入,如果正确则提登录成功

​    // let uname = prompt('请输入用户名');

​    // let pwd = prompt('请输入密码');

​    // while(uname != 'admin' && pwd != 888) {

​    //   uname = prompt('请输入用户名');

​    //   pwd = prompt('请输入密码');

​    // }

​    // alert('登录成功');

​      // 8.打印九九乘法表

​    // 需要2个循环:

​    // a) 一个循环控制打印行, 另外一个循环打印列

​    for(let i = 1; i <= 9; i++) {

​      document.write('<br>');

​      for(let j = 1; j <= i; j++) {

​        document.write(`${j}X${i}=${i*j}&nbsp;`);

​      }  

​    }

​    // 向数组中添加值: 

​    // 语法1: 数组名.push(值, 值);

​    // 特点: 将添加的值添加到了数组的末尾

​    // let ary = ['a', 'b', 'c'];

​    //   ary[3] = 'f';

​    // console.log(ary);

​    // 代码演示:

​    // ary.push(1, 2, 3, 4,5);

​    // console.log(ary);



​    // 语法2: 数组名.unshift(值, 值);

​    // 特点: 将添加的值添加到了数组的开始

​    // ary.unshift(1,2,3,4,5);

​    // console.log(ary);





​    // 特点: 从数组的末尾删除值

​    // ary.pop();

​    // console.log(ary);



​    // 语法4: 数组名.shift();

​    // 特点: 从数组的开始位置删除值

​    // ary.shift();

​    // console.log(ary);

断点调试：
// 步骤:
          // 1. 先运行程序

​    // 2. 打开控制台程序,选择sources选项卡

​    // 3. 点击对应的html页面

​    // 4. 在页面中设置断点(将断点设置到程序的开始位置,点击鼠标左键)

​    // 5. 重新刷新页面,执行程序

​    // 6. 点击下一步按钮,让程序一步一步执行 F10快捷键

​    // 7. 当程序开始执行的时候,重点关注程序中变量值的变化,和条件的结果

​    // ☞ 鼠标悬停到对应变量的上面,那么就可以看到变量的值

​    // ☞ 用户鼠标选中整个条件表达式,然后将鼠标悬停到条件上面,看到条件的结果

 1) 可以让我们看到程序执行的每一步  2) 根据断点调试发现程序中的问题(逻辑问题)