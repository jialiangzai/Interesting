## HTML

### html骨架结构

```html
<!--声明文档类型，告诉浏览器按照哪个版本的html解析-->
<!DOCTYPE html>
<html lang='en'>
<!--lang=zh-CN 用于搜索引擎看的-->
  <head>
      <meta charset='UTF-8'>
      <!--元信息 不是给用户看的 给搜索引擎和浏览器看的
		charset 字符集
		unicode 万国码
		gb2312 中文简体
		big5 中文繁体
		GBK 中间简体和中文繁体
-->
      <title></title>
    </head>
    <body>
        
    </body>
</html>
    
```



### sublime快捷键

* tab 补全代码
* ctrl+shift+d 复制一行
* ctrl+shift+k 删除一行
* ctrl+shift+↑（↓） 快速上移或下移一行
* ctrl+k+b 显示后者隐藏侧边栏
* ctrl+l 快速选中一行
* ctrl+f 查找
* ctrl+鼠标单击 选中编辑

### 排版标签

* 标题标签h1~h6 字体加粗 上下生成空白行，h1在一个页面上只能使用一次，多次使用不符合w3c标准，不利于页面搜索引擎seo优化
* 段落标签p 上下生成空白行
* 水平线hr
* 换行br

### 文本格式化标签

* 加粗 strong b
* 倾斜 em i
* 下划线 ins u
* 删除线 del s
* 上标 sup
* 下标 sub



### 标签的语义化

* 先写html后写css,当页面中去掉css样式，页面结构仍然排列清晰有序，组织良好

### 图片标签

* src 图片来源

* alt 图片不显示的时候显示的文字 替换文本

* title 提示文本 鼠标悬停到图片上显示的文字

* width 宽

* height 高

* border 边框

  ```html
  <img src='./images/01.jpg' alt='儿子' title='孙子' width='300' height='400' border='0'>
  <!--图片只更改宽或者高，图片-->
  ```

### 超链接

* href 跳转目标

* target 打开方式

  * _blank 在新窗口打开（原页面不关闭）

  * _self 在当前窗口打开（原页面关闭）

    ```html
    <a href='http://baidu.com'>超链接</a>
    <a href='#'>什么鬼</a>
    <!--空链接-->
    ```

### base

* 控制页面中所有超链接是以什么方式打开

  ```html
  <base target='_blank'>
  
  ```

### 锚点

* 同页面

  ```html
  <a href='#test'>测试</a>
  <h3 id='test'>
      第一
  </h3>
  ```

* 不同页面

  ```html
  <a href='test.html#test'>测试</a>
  
  <!--另一个页面test.html-->
  <h3 id='test'>
      第一
  </h3>
  ```

### 特殊字符

```html
<!--
&lt; <
&gt; >
&copy;©
&reg;®
&amp;&
&times;x
&divide;÷
&plusmn;±
&degree;°
&sup2;²
&sup3;³
&yen;￥
-->
```



### 注释

* ctrl+/ 

  ```html
  <!---->
  ```

### 路径

* 相对路径

  ```html
  <img src='../images/02.jpg'>
  ```

* 绝对路径

  * 从盘符出发

    ```html
    <img src='E:\black\基础班\第一天\代码\images\2.jpg'>
    
    ```

  * 互联网

    ```html
    <img src='http://skshdkdfdf.jpg'>
    ```

### 浏览器

* 常见的五大浏览器：谷歌、火狐、ie、opera、safari
* 浏览器内核：渲染引擎和js引擎
* 常见浏览器内核：Trident(ie)、Webkit(safari)、Presto(opera)、chromium/Blink(chrome）、Gecko(firefox)
* 对于移动端：Android-webkit、IOS/wp7-safari或者ie的Trident
* Web标准：html(结构)+css(样式)+javascript(行为)

### div和span区别

* div占一行，span在一行内显示

### 列表

* 无序列表：

  ```html
  <!--
  	ul连不能直接写文字和标签，ul只能嵌套li
  	li外面必须有父元素ul或者ol li里面可以嵌套任意标签
  -->
  <ul>
      <li>元素</li>
      <li>
      	<p>嵌套</p>
      </li>
  </ul>
  ```

* 有序列表

  ```html
  <!--
  	ol连不能直接写文字和标签，ol只能嵌套li
  	li外面必须有父元素ul或者ol li里面可以嵌套任意标签
  -->
  
  <ol>
      <li>新闻</li>
  </ol>
  ```

* 自定义列表

  ```html
  <dl>
      <dt>自定义列表标题</dt>
      <dd>解释项1</dd>
      <dd>解释项2</dd>
  </dl>
  ```

### 表格

* 语法：

  ```html
  <table>
      <!--tr外边必须有父元素table,tr里面只能嵌套td和th(表头)，td里面可以嵌套任意元素-->
      <tr>
      	<td>单元格</td>
          <td>单元格</td>
          <td>单元格</td>
      </tr>
      <tr>
      	<td>单元格</td>
          <td>单元格</td>
          <td>单元格</td>
      </tr>
  </table>
  ```

* 表格属性

  * border 边框
  * 边框与内容之间距离 cellpadding，默认值1
  * 边框与边框之间距离 cellspacing，默认值2
  * 表格宽度 width
  * 表格高度 height
  * 水平对齐方式 align=center/left(默认)/right
    * 设置在表格上，表示表格整体水平对齐方式
    * 设置在tr和td上，里面内容水平对齐方式

* 表格的标题和表头

  ```html
  <table>
      <caption>我是标题</caption>
      <tr>
          <!--里面文字加粗居中-->
      	<th>表头</th>
      </tr>
      <tr>
      	<td>单元格</td>
      </tr>
  </table>
  ```

* 结构

  ```html
  <table>
      <!--
  	thead tbody 不代表行或者列，是给表格分成2部分，使表格更有序，增强语义化，更好的seo
  -->
      <thead>
      	<tr>
          	<th>表头1</th>
              <th>表头2</th>
              <th>表头3</th>
          </tr>
      </thead>
      <tbody>
      	<tr>
          	<td>单元格</td>
              <td>单元格</td>
              <td>单元格</td>
          </tr>
      </tbody>
  </table>
  ```

* 合并单元格

  * colspan 合并列

  * rowspan 合并行

    ```html
    <table>
        
        <tr>
        	<td rowspan='2'>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2</td>
            <td>3</td>
        </tr>
    	<tr>
        	<td colspan='2'>1</td>
            <td>3</td>
        </tr>
    
    </table>
    ```

### 表单

* form 表单域

* action 手机信息提交给哪个文件处理

* name 表单域的名称

* method 传递信息的方法

* method='get' 默认值 通过浏览器的地址栏进行传递信息 post

* 表单控件

  * 单行文本输入框

    ```html
    <input type='text' value='孙子' name='username' maxlength='字符长度' size='宽'>
    ```

  * 密码框

    ```html
    <input type='passward'>
    ```

  * label使用（点击文字，input获取焦点）

    ```html
    <label for='user'>昵称：<input type='text' id='user'>
    ```

  * 单选框

    * 实现单选效果必须将name值设置相同的值

    ```html
    <input type='radio' name='sex' id='female'>女
    <!--
    	checked默认选择状态
    -->
    <input type='radio' name='sex' id='male' checked='checked'>男
    ```

  * 多选框

    ```html
    <input type='checkbox' >爸爸
    <input type='checkbox'>密码
    ```

  * 下拉菜单

    ```html
    <select>
        <!--
    	selected 设置默认选择
    -->
        <option selected='selected'>1995</option>
        <option>1996</option>
        <option>1997</option>
    </select>
    ```

  * 文件域

    ```html
    <input type='file'>
    ```

  * 文本域

    ```html
    <textarea col='一行字符的个数' rows='行数'></textarea>
    ```

  * 按钮

    ```html
    <input type='submit' value='提交'>可以提交
    <input type='image' src='images/btn.png'>可以提交
    <input type='reset' value='重置'>
    <input type='button' value='按钮'>不可提交
    <button>按钮</button> 可以提交 
    ```

## CSS

### css书写位置

* 行内样式 和html结构混合 不推荐

  ```html
  <div style='color:red;font-size:40px;'>
      来点字
  </div>
  ```

* 内嵌式 控制当前页面 部分分离（与html）通常头部

  ```html
  <style>
      div{
          color:red;
          font-size:40px;
      }
  </style>
  ```

* 外链样式

  ```html
  <!--
  	引入外部css文件 事前完全分离
  -->
  <link rel='stylesheet' href='htm.css'>
  ```

### 简单选择器

* 标签选择器 

  * 选择页面上所有同类标签

    ```html
    <style>
        div{
            color:red;
            font-size:40px;
        }
    </style>
    ```

* 类选择器

  * 谁调用谁生效 调用class='类名'

  * 一个类选择器可以被多个标签调用

  * 一个标签可以同时调用多个类选择器

    ```html
    <style>
        .box{
            color:red;
            font-size:40px;
        }
    </style>
    ```

  * 命名规范

    * 不能以纯数字或以数字开头定义类名
    * 定义类名的时候不能出现特殊字符（-或者_可以）
    * 不能适应中文定义类名

* id选择器

  * 需要调用 id='id名'
  * 一个id选择器只能调用一次，多次调用不符合w3c规范
  * 一个标签只能调用一个id选择器
  * 一个标签可以同时调用类选择器和id选择器

* 通配符选择器

  ```html
  <style>
      *{
          color:red;
          font-size:40px;
      }
  </style>
  ```

### 文字属性

* 字体设置
  * 浏览器默认字体大小为16px
  * 中文字体加单引号
  * 多个字体之前用`逗号`隔开 英文字体在前面 中文字体在后面
  * unicode字体写法：
    * 在控制台上输入escape('中文字体名称')
    * 把%u替换为\,最终得到文字的unicode编码

* font-size:文字大小
  * h1 2倍
  * h2 1.5倍
  * h3 1.17倍
  * h4 1倍
  * h5 0.83倍
  * h6 0.75倍
* font-family:arial ,'宋体'
* font-weight 文字加粗 
  * 100-900不带单位
  * normal 默认 不加粗 400
  * bold 加粗 700
* font-style 文字风格
  * normal 默认值 不倾斜
  * italic 斜体
  * oblique 倾斜(有些英文字体用italic不管用)
* font:font-style font-weight font-size/line-height font-family `其中font-size和font-family为必写`
* letter-spacing:20px;调整字（母）与字（母）之间的距离，可以为负值
* word-spacing:50px;调整单词与单词之间的距离 对中文无效，可以为负值
* 行高 line-height 默认1.1-1.3 (normal)

### css外观属性

* 设置字体颜色 
  * color:red;
  * color:rbg(255,0,205);
  * color:#4574af;
* 设置首行缩进：text-indent:2em(1em相当于一个汉字的大小)
* 文本修饰 text-decoration:underline
  * none
  * underline 下划线
  * line-through 删除线
  * overline 上划线
* 控制盒子`内部内容`水平对齐方式text-align，对整个盒子水平对齐没有作用
  * left 左对齐 默认
  * center 居中对齐
  * right 水平右对齐

>  注意：行内元素不能直接使用text-align和text-indent

### 复合选择器

* 后代选择器：

  * 发生前提是嵌套的关系

  * 父元素在前 子元素在后，用空格连在一起

  * 后代选择器可以无限制的隔代

  * 只要能代表父元素，子元素，后代选择器可以是任意选择器的组合

    ```css
    div p span{
        color:red;
    }
    ```

* 子代选择器

  * 选择是父元素的直接下一代（亲儿子），用>连接，父元素在前子在后，可以是任意选择器的组合

    ```css
    .box>span{
        color:skyblue;
    }
    ```

* 交集选择器

  * 满足两个条件，即是这个标签，又调用后边的类（id）选择器

* 并集选择器

  * 样式相同或者部分相同的选择器，通过**逗号**连在一起，进行集体的声明，最后一个并集选择器没有逗号

    ```css
    .box,h1,p,h2{
        font-size:12px;
    }
    ```

* 相邻选择器

  * 选择器1+选择器2

  * 为了精确的选择到选择器1后面的选择器2，必须是并列关系，紧挨着的元素

    ```css
    div+div{
        color:red;
    }
    ```

### 链接伪类选择器

* 未访问状态:link,可以省略

  ````css
  a:link{
      
  }
  ````

* 访问之后的状态:visited

  ```css
  a:visited{
      
  }
  ```

* 鼠标悬停

  ```css
  a:hover{
  }
  ```

* 激活状态:active（鼠标按住不松手）

  ```css
  a:active{
      
  }
  ```

### 标签的显示模式

* 块元素
  * 典型代表 div p h1-h6 ul ol li dl form
  * 特点：
    * 独占一行
    * 可以设置宽高
    * 块元素不设置宽度的时候，默认`父元素内容区域的宽度`，不设置高度的时候，默认高度为0，内容会撑开高度
* 行内元素
  * 典型代表 a span strong b em ins u s i
  * 特点
    * 在一行上显示
    * 行内元素不能设置宽和高
    * 行内元素默认宽高为0，内容会撑开宽高
    * 行内与元素代码换行生成缝隙
* 行内块元素
  * 典型代表 input img textarea td
  * 特点
    * 在一行显示
    * 可以设置宽高
    * 行内块元素换行生成缝隙
* 模式转换
  * 块元素转行内元素
    * display：inline
  * 行内元素和行内块元素转换为块级元素
    * display:block
  * 块元素和行内元素转换成行内块元素
    * display:inline-block

### 背景

* 特点：
  
  * 背景撑不开盒子
* 背景颜色 background-color:
  * transparent 透明
  * #cccc
  * rgba(255,255,0)
* 背景图片
  
  * background-image:url()
* 背景平铺
  * background-repeat
    * no-repeat 不平铺
    * repeat-x 水平平铺 
    * repeat-y 垂直平铺
    * repeat 默认值 铺满盒子
* 背景定位
  * background-position
    * 写方位值 left right center top bottom
      * 写两个方位词 left和right top和bottom不能一块写
      * 写一个方位词 另外一个值默认为center
    * 写具体数值
      * 写2个值。第一个值为距离左边的距离，第二个值距离顶边位置
      * 写1个值。另外一个值默认center
    * 方位值和数值混合使用
      * 如果第一个是方位值，只能写水平方向	left  right center 
      * 如果第二个方位值 只能写垂直方向 top bottom center
    * 百分比：百分比=容器宽度（高度）-图片宽度（高度）=剩余的的值的百分比
* 背景大小（后面介绍）
  * background-size
    * cover:盒子将被占满，通过缩放背景图片，可能背景图片显示不全，但是盒子一定被占满
    * contain：背景图片完全显示，通过缩放背景图片，可能盒子不一定占满，但是背景图片一定完全显示
    * 具体数值
    * 百分比
* 背景附着
  * background-attachment
    * fixed 固定 背景不随着滚动条的滚动而滚动
    * scroll 默认值 背景随着滚动条的滚动而滚动
    * **当背景附着attchment为fixed,并且同时设置背景定位，其定位参考不是盒子的大小，参考的是浏览器的位置**
* 背景属性连写
  * background:color image repeat attachment position/size
  * 多组背景用逗号隔开，最后一组分号结束，背景颜色写在最后一组
* **注意：大的背景图设置时候，设置定位的时候，想让它居中显示，可以设置top center**
* 一般情况下，小图标额大的背景图片时使用背景图片，其余插入图片，看自己心情

### 导航案例

>  一行文字，行高和盒子高度一致的时候，这行文字垂直居中

### 标签的嵌套规范

* 块元素可以嵌套块元素、行内元素、行内块元素
  * div可以嵌套任意标签
  * p元素不能嵌套其他块元素，可以嵌套行内元素、行内块元素
  * 不推荐标题里边嵌套其他块元素，可以嵌套其他的行内元素、行内块元素
* 行内块元素不能嵌套块元素，可以嵌套行内元素，行内块元素
* 行内元素不能嵌套块元素，行内块元素，只能嵌套行内元素
  * a标签不能嵌套a标签，但是可以嵌套其他的元素（有时候会嵌套块元素等，需要模式转换）

### 行高

* 浏览器默认文字大小16px

* 属性设置
  * normal 默认值 1.1-1.3倍文字大小
  * 行高文字基线与基线之间的距离
  * 一行文字，行高与标签高度一致的时候，文字垂直居中
  * 一行文字，行高小于容器高度的时候，这行文字偏上显示
  * 一行文字，行高大于容器高度的时候，这行文字偏下显示

### css三大特性

#### 层叠性

* 多个样式作用域同一个或者同一类标签的时候，发生样式冲突，后边的样式会把前边的样式覆盖掉，就近原则，和样式调用的顺序无关

#### 继承性

* 特例：
  * 以color text- font- line-文字类开头的都是可以让子元素继承父元素的样式
  * a标签不能继承父元素的文字的颜色
  * 标题标签不会继承父元素的文字大小
  * 另外，后面会介绍，对于给链接a标签设置文字，尽量采用继承的方式设置文字的大小，以免出现问题

#### 优先级

* 优先级解决样式冲突的能力，权重高的优先级大，优先显示，权重低的，不执行
* 权重
  * 继承与通配符 0000
  * 标签选择器 0001
  * 类选择器 0010
  * id选择器 0100
  * 行内样式 1000
  * !important 无穷
  * 权重会叠加，叠加演示，eg:0005+0005=00010(懂)
  * 分清楚什么是继承 什么是后代

### 盒子模型

> 边框+内边距+外边距+内容区域

#### 边框设置

* 单独设置

  ```css
  border-top-color:red
  
  border-top-style:solid
  
  border-left-width:1px
  ```

* 连写

  ```css
  border:1px solid #000;//顺序没有要求，线型为必写
  //线型
  //solid 实线
  //dotted 点线
  //dashed 虚线
  //double 双线
  //设置四条边框的连写，顺序为顺时针 从上边框开始（上右下左）
  
  ```

#### 内边距

* 内边距是内容区域与边框的距离

* 设置

  ```css
  padding-left:50px;
  //边距连写
  padding:10px;//上下左右一样
  padding:10px 20px;//上下10，左右20
  padding:10px 20px 30px;//上10 左右20,下30
  padding:10px 20px 30px 40px;//顺时针 从上右下左
  ```

#### 内边距撑大盒子问题

* 盒子实际宽度（高度）=width(内容区域的宽度)/height(内容区域的高度)+左右的padding值(上下内边距)+左右边框(上下边框)
* 一个块元素没有设置宽度，给这个块元素设置左右内边距，不会撑宽盒子
* 块元素设置宽度，必然撑宽盒子
* 行内元素，行内块元素设置左右内边距，必然撑宽盒子,上下内边距必然撑高盒子

#### 外边距

* 外边距设置

  ```css
  margin-top:50px;
  margin:30px;//设置连写和内边距的取值顺序一样
  ```

* 外边距可以使 **设置了宽度的块元素**水平居中

  ```css
  margin:0 auto;
  ```

* margin:0 auto只能使`设置宽度`的`块元素`水平居中

* text-align:center 可以使块元素（行内块元素）里面的内容（文字，行内元素，行内块元素）注意此处没有块元素，也就是说内部的块元素将只会使其中内部块元素的内部内容继承水平居中效果，对于自身并不会水平居中；而margin的水平居中正是使设置宽度的块元素水平居中

* 行内元素只能设置左右内外边距，不能设置垂直上下的内外边距

* 外边距遇到的两个问题

  * `相邻块元素的垂直外边距的合并`
    * 当上下相邻的两个块元素相遇时，如果上面的元素有下边距，下面的元素有上外边距，则他们回见的垂直的外边距将会取两者中较大者
    * 避免此情况的发生
  * `嵌套块元素的垂直外边距的合并`
    * 对于两个嵌套关系的块元素，如果父元素没有上内边距及边框，则父元素的上外边距会与子元素的外边距发生合并，合并到父元素上，合并为两者中较大者，即使父元素的外边距为0，也会发生外边距合并
    * 给父元素定义1像素的上边框或上内边距
    * 可以为父元素添加overflow:hidden,触发块级格式化上下文BFC
    * 当子元素浮动或者脱标时候，不会产生外边距塌陷

### 表格细线边框

* 语法：

  ```css
  border-collapse:collapse;//只对表格适用
  ```

### 边框案例

* 高度剩余法
* 清除input默认边框 border:0/none
* 清除轮廓线outline:0/none
* 伪类 ：focus 获取光标焦点的状态 配合input使用

## CSS3

* 设置css3到ie9才支持

> 注意使用控制台下载整个页面的效果图
>
> - ctrl+shift+p截取时，必须保证显示设置为100%,才能为准确的值

### 边框圆角

* 语法

  ```css
  border-left-top-radius:10px;//设置单独的圆角（正圆切）
  border-left-top-radius:100px 200px //设置单独的椭圆切
  border-radius:50px;//四条边框圆角相同的连写
  border-radius:10px 20px;左上角及右下角圆角为10px 右上角及左下角圆角为20px
  border-radius:10px 20px 30px;//左上角为10，左下角及右上角为20px 右下角为20
  border-radius:10px 20px 30px 40px;//左上角 右上角 右下角  左下角 
  border-radius:50%;//设置为正圆，保证当前盒子的为一个正方形
  border-radius:50px 100px 10px 20px /20px 40px 100px 150px;//设置椭圆切 水平半径/垂直半径
  ```

### 盒子阴影

* 语法：	

  * 第一个值是阴影的水平偏移量，正值向右，负值向左

  * 第二个值是阴影垂直偏移量，正值向下，负值向上

  * 第三个值阴影的模糊范围

  * 第四个值是阴影大小

  * 第五个只是阴影的颜色

  * 阴影默认是外阴影

    ```css
    box-shadow: (inset) -20px -10px 20px 2px #666;
    /*多组阴影之间用逗号隔开*/
    box-shaow:20px 20px 20px 2px #666,inset 10px 20px 2px 2px #f00,
    ```

### 透明设置

* rgba()设置**单颜色**的透明，a是alpha透明，取值范围0-1,0.5的0可以省略
* opacity:设置元素**整体**的透明度，取值范围0-1

## 标准流

* 在页面上，元素自上而下，自左而右，块元素独占一行，行内元素在一行上显示，直到碰到父元素的边界，标准流（普通流）

## 浮动

* 特点：

  * 1.浮动的元素会脱离标准流的控制，不占据原来的位置
  * 2.浮动可以使（块）元素在一行显示
  * 3.浮动只能浮动到父元素的左边和右边，受到父元素`内边距`控制
  * 4.浮动元素顶对齐，代码换行没有缝隙(标准流中一行显示的元素是底对齐的，且中间有缝隙)
  * 5.浮动元素不会影响标准流里的块元素，只会影响下边的元素
  * 6.浮动元素有了`行内块`元素的显示特点：
    * 块元素浮动之后，不会默认父元素的宽度，默认宽度高度变成0，内容会撑开盒子宽高
    * 行内元素浮动之后，可以设置宽高了

* **当文字、行内元素、行内块元素遇到浮动元素时候，会环绕，不会跑到浮动元素的底下**

* **浮动元素掉下来，是因为浮动子元素宽度相加超过了父元素宽度，浮动的子元素不设置宽度，被内容撑开的最大宽度是`小于等于`父元素的宽度**

* 清除浮动的原因：为了解决父元素不能设置高度，里面的子元素浮动之后不能撑开父元素高度问题

* 清除浮动：

  * 额外标签法：	

    * 在最后一个浮动元素后面加一个额外标签<div style='clear:both;'></div>不推荐使用

  * 给浮动的父元素（亲爹），使用overflow:hidden清除浮动，触发BFC，块级格式化上下文，独立的布局区域，不受到外部因素的干扰

    * 弊端:一旦子元素出了父元素的范围（边界），多了部分会被隐藏掉

  * 给父元素添加after伪元素清除浮动

    ```css
        .clearfix:after{
            content:'';
            display:block;
            height:0;
            clear:both;
            visibility:hidden;
        }
        /*为了兼容ie6-7 hasLayout 渲染引擎内部的一个布局插件*/
        .clearfix{
            *zoom:1;
        }
    ```

  * 给浮动的元素的父元素（亲爹），调用clearfix双伪元素清除浮动

    ```css
    .clearfix:before,.clearfix:after{
        content:'';
        display:table;
    }
    .clearfix:after{
        clear:both;
    }
    .clearfix{
        *zoom:1;
    }
    ```

    

### 伪元素

* :hover伪类 ::before前伪元素 相当于行内元素，单标签是不能添加伪元素

* ::before 前伪元素是在元素里面前边插入伪元素，可以当做`行内元素`对待

* ::after 后伪元素是在元素里面的后面插入伪元素，可以当做`行内元素`对待

* 可以写成:before :after

* **其中content为必写属性，否则伪元素不成立**

  ```css
  .box::after{
      content:'';
      width:50px;
      height:50px;
      display:block;
      background-color:red;
  }
  ```

## 定位

特殊位置，压住	

* 定位在浮动的上面

### 静态定位Static

* 不会动，不脱标，元素默认的定位方式

> position:static

### 相对定位relative

* 特点：
  * 1.相对定位元素`不脱标`还占据原来的位置
  * 2.相对定位的元素位置偏移基于`自身`位置

### 绝对定位absolute

* 特点：
  * 1.绝对定位的元素`脱标`，不占据原来的位置
  * 2.绝对定位的元素，所有父元素没有定位，位置偏移基于`浏览器`
  * 3.绝对定位的元素，如果父元素有定位，位置偏移基于离他最近的使用了定位的父元素偏移
  * 4.绝对定位的元素有了`行内块`的显示特点
    * 绝对定位的块元素，不会默认父元素的宽，默认宽度为0
    * 绝对定位的行内元素，可以设置宽高

### 子绝父相

* 子绝父相：子元素`绝对定位`absolute，父元素`相对定位`relative，子元素的位置偏移基于父元素，父元素不脱标，还占据原来的位置，下边的盒子顶不上来，布局正常

### 固定定位

* 特点：
  * 1.固定定位的元素`脱标`，不占据原来的位置
  * 2.固定定位的元素的位置偏移基于`浏览器可视窗口`
  * 3.固定定位的元素有了`行内块`元素的显示
    * 固定定位的块元素不会默认父元素的宽度，默认宽高为0，内容会撑开宽高
    * 固定定位的行内元素会转换成行内块元素，可以设置宽高
* 固定定位与绝对定位比较
  * `绝对定位`位置偏移基于浏览器的时候，`会随着滚动条（内容）滚动`
  * `固定定位`位置偏移基于浏览器可视窗口的时候，`不会随着滚动条（内容）滚动`

  > 百分比为单位时候，绝大多数参考的父元素的宽度 
  >
  > 前面学的background-size参考的是盒子宽度-背景图片的宽度=剩余宽度的百分比

### 定位的盒子居中显示

* 当元素的定位时候，margin:0 auto失效（脱标）

* 只能使`标准流`里的块元素水平居中

* 定位盒子居中显示

  * 方法1：

  ```css
          .son{
              position:absolute;
              left:50%;
              top:50%;
              margin-left:-(向左走自身宽度的一半)
              margin-top:-(向上走自身高度的一)
          }
  ```

  * 方法2

    ````css
    .son{
        width:100px;
        height:100px;
        //设置这种方式的前提是必须盒子的宽度是设置了的，被内容撑开的宽高无效
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        margin:auto;
    }
    ````

* ```
  ### 定位元素的堆叠顺序
  
  * z-index:默认值为0，标签越靠后，z-index层叠顺序就越靠前
  * 如果属性值相同时，按照标签书写顺序，后来居上
  * 数字后面不加单位
  * 定位的层级关系
    浏览器默认解析顺序是后来居上
    改变盒子层级关系用z-index属性，值越大，越靠上
  * z是z轴,不带单位，值默认auto
  * **注意：z-index调整定位元素只能应用于相对定位，绝对定位，固定定位上，对于标准流和浮动，静态定位无效**
  ```

  

## 元素的显示与隐藏

* display:none:`隐藏对象`，隐藏之后不占位置
* visibility:hidden:`对象隐藏`，隐藏之后还占据位置

## overflow元素的溢出处理

* overflow：visible;溢出可见 `默认值`
* overflow:scroll;不管内容是否溢出，都生成滚动条
* overflow:auto;溢出时候有滚动条，不溢出不生成滚动条
* overflow:hidden;溢出隐藏
* `溢出的内容不占位置`

## 鼠标样式

* cursor:default 默认值 小白
* pointer:小手
* move:移动
* text:文本
* not-allowed 禁止
* help:帮助

## 清除轮廓线

* outline:0/none:清除轮廓线
* resize:none:禁止`文本域`拖拽

## 单行文本生成省略号实现

* 语法：

  ```css
  white-space:nowrap;/*让文本强制一行显示*/
  text-overflow:ellipsis;/*将溢出的文字变为省略号*/
  overflow:hidden;/*溢出的部分隐藏*/
  ```

## vertical-align垂直对象方式

* vertical-align:是`行内元素和行内块元素`的专有属性

* 控制行内元素、行内块元素、文字垂直对齐，对块元素无效

  * baseline默认
  * top 顶对齐
  * bottom 底对齐
  * middle 垂直居中对齐

* vertical-align:baseline:`清除图片底部的缝隙`，只需要将vertical-align的值设置为除了baseline(基线以外的值)都可以，或者将图片`转换为块元素`，也能清除图片底部的缝隙

* top 顶对齐

* middle 垂直居中对齐

* bottom 底对齐

* 行内块垂直对齐 浮动和vetical-align，文本框和按钮 图片和input但是最好都设置一下，延伸，input是无法顶端对齐的，因他会按照默认字体大小的基线对齐，所以会有空隙，，关于图片底部默认缝隙可以用vam或者把图片转变成块级元素

* 行内块在父元素里面垂直居中，行高等于父亲高度，再给行内块盒子设置vam就能实现行内块垂直居中

* a链接的文字大小尽量写在父元素上进行继承，否则会出现问题，如果是写在a标签上，进行如下解决：

  > ```css
  > .box a{
  >     vertical-align:middle;
  >     font-size:12px
  > }
  > ```
  >
  
  接上个问题原因是因为如果设置了a的字体大小则它的父亲会被撑大，浏览器默认字体大小是16px，垂直对齐方式是基线对齐，可以把a的字体大小写小但是不提倡，li把高度写死，或给a字体大小设置了正常加上vam，或者在准备的时候给body设置默认字体大小，就不会出现这种问题。

## 精灵图的使用

* 使用步骤
  * 1.背景图片撑不开盒子的宽高，测量需要局部的大小，设置为盒子的宽高
  * 2.将测量的局部大小的坐标值，设置成背景定位的**负值**

## 结构伪类选择器

div的第一个孩子

```css
.father/*空格必须有*/ div:first-child{
    
}
/*可以省略子元素*/
```

* div的最后一个子元素

  $$
  .father/*空格必须有*/  span:last-child{
      
  }
  /*可以省略子元素*/
  $$

* 选择父元素的第几个子元素（`从1开始`）

* 会把所有的符合条件的后代都会被选中，所以要规范书写才能精准选择

  ```
  .father/*空格必须有*/  p:nth-child(2){
      /*注意p要和第几个子元素对应上，不然无效*/
  }
  /*可以省略子元素*/
  /*可以进行选择的自己的后代*/
  ```

* 选择父元素的倒数第几个子元素

  ```css
  .father/*空格必须有*/  h2:nth-last-child(3){
      
  }
  /*可以省略子元素*/
  ```

* 选择父元素里边`**同类型**`的第几个子元素

  ```css
  .father h2:nth-of-type(2){
      
  }
  /*不能省略对应的子元素*/
  ```

## placeholder占位符

* ::placeholder修改占位符样式，占位符选择器，修改占位符的样式，必须是`两个占冒号`

## 插入网页的图标

```css
<link href='favicon.ico' rel='short icon' type='image/x-icon'>
```



## 属性选择器

* 通过标签的属性来选择标签

  ```css
  [href]{
      color:pink;
  }
  [class]{
      color:yellow;
  }
  
  ```

* 通过标签完整的属性值来选择标签

  ```css
  [href='abc.html']{
      color:red;
  }
  [type='text']{
      
  }
  ```

* 通过标签属性的值以某些字符`开头`的来选择标签

  ```css
  [href^='a']{
  }
  ```

* 通过标签属性的值以某些字符`结尾`来选择标签

  ```css
  [href$='l']{}
  ```

* 通过属性的值`包含`某些字符来选择标签

  ```css
  [href*='a']{
      
  }
  ```

## css属性的书写顺序

* 1.定位布局（display/position/float/clear/visibility/overflow）
* 2.自身属性（width/height/margin/padding/border/background）
* 3.文本属性（color/font/text-decoration/text-align/vertical-align/white-space/border-word）
* 4.其他属性(css3)(content/cursor/boroder-radius/box-shadow/text-shadow/background:linear-gradient)

## 三角形的制作

```css
.box{
    width:0;
    height:0;
    border-style:solid;
    border-color:transparent transparent blue transparent;
    border-width:50px 100px;
}
```



## 过渡动画

* 过渡动画从一种状态到另一种状态（属性值的变化），过渡需要触发条件，通常都`写在开始状态`

* 过渡属性：transition-property:(all 全部属性 多个属性用逗号隔开)

* 过渡时间：transition-duration:1s 必写

* 过渡时间曲线：transition-timing-function:linear/ease(默认)/ease-in/ease-out/ease-in-out

* 过渡的延时：transition-delay:1s

  ```css
  transition:all 1s linear;
  ```

## html5

### 新增的语义标签

```css
<header>头部</header>
<nav>导航</nav>
<aside>侧边栏</aside>
<article>文章</article>
<section>区块</section>
<footer>底部</footer>
```



### 新增的音频标签

```html
<audio controls=''loop='' autoplay=''>
	<source src='小乔.mp3'>
    <source src='小乔.wav'>
    <source src='小乔.ogg'>
</audio>

```



### 新增的表单控件

```html
<form action=''>
    
    邮箱:<input type='email'><!--必须包含@-->
    电话：<input type='tel'>
    搜索：<input type='search'>
    数字：<input type='number'>
    网址：<input type='url'><!--必须包含https://-->
    时间：<input type='time'>
    日期：<input type='date'>
    周:<input type='week'>
</form>
```



### 新增的视频标签

```html
<video controls=''loop='' autoplay='' width='' height=''>
	<source src='小乔.mp4'>
    <source src='小乔.web'>
    <source src='小乔.ogg'>
</video>
```



### 新增的表单属性

* placeholder:占位符
* autofocus:自动获取光标焦点
* autocomplete:自动完成
  * on默认值 输入框记住输入的内容
  * off输入框不会记住输入的内容
* required 必填项

## css3盒模型

```css
box-sizing:border-box /*怪异模式下，内边距边框不会撑大盒子*/
box-sizing：content-box/*标准的盒模型，内边距，边框会撑大盒子*/

```



## css3背景大小

* background-size:
  * cover:背景图片等比例缩放，铺满盒子，有可能显示不完整
  * contain:背景图片等比例缩放，显示完整，有可能盒子铺不满
  * 写2个数值：
    * 第一个值代表背景图片的宽，第二个值代表高
  * 通常写一个值，代表宽，高等比例缩放
  * 百分比：参考盒子的大小
    * 写2个值代表，第一只代表宽，第二个代表高
    * 写1个值代表宽，高等比例缩放

## css3线性渐变

```css
background-image:linear-gradient(to top,red,green);
```



> 多组背景图逗号隔开，最后一组分号结束，背景颜色在最后一组
>
> ```html
> <style>
> .box{
> 		width: 600px;
> 		height: 400px;
> 		border: 1px solid #000;
> 		background: url(images/bg1.png) no-repeat left top ,
> 					url(images/bg2.png) no-repeat right top,
> 					url(images/bg3.png) no-repeat right bottom,
> 					url(images/bg4.png) no-repeat left bottom,
> 					red url(images/bg5.png) no-repeat center;
> 	}
> </style>
> ```
>
> seo
>
> seo搜索引擎模块化 自然排名 sem搜索引擎营销 百度快照不花钱
>
> meta 元信息 tdk 标题  描述 关键字（搜索引擎和浏览器）





