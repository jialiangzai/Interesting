1. !和~可以自调用执行函数!funciton(){}()

2. // 饼图 用自调用定义函数防止变量污染，可以使用相同变量

3. 自执行函数可以首尾加分号

4. tab可以快速选择变量和类名

![1630982010233](C:\Users\浪客\AppData\Roaming\Typora\typora-user-images\1630982010233.png)

5. 提示框触发效果（ 坐标轴指示器 ）：axisPointer: {  

​       // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果    cross十字架

​       type: 'shadow'    

​      }

6. borderColor: 'rgba(0, 240, 255, 0.3)'设置表格边框都会被压着四条线，前提是有边框// 是否显示直角坐标系网格show: true,

7.  轴线的分割线的样式  splitLine:默认是show:true显示，它中的linstyle才是分割线样式

8. axisLabel.interval:0//间隔显示，间隔几个元素；可以设置成 0 强制显示所有标签。如果设置为 `1`，表示『隔一个标签显示一个标签』，如果值为 `2`，表示隔两个标签显示一个标签，以此类推。或者把刻度文字变小fontSize:11

9. y轴的type值只有value

10. 定义特殊定制的参数（省略图形）书写在初始化实例echarts对象的option之外，其中必须要name和value，还有itemstyle:{单一图形颜色}/ 高亮的图形样式和标签样式。 鼠标进入图形高亮和提示框，  tooltip: { extraCssText: 'opacity:0'

    },此时的tooltip没有show属性；最后把数据填到series中的data，正常data是数组，内有对象或者数值![1631001632844](C:\Users\浪客\AppData\Roaming\Typora\typora-user-images\1631001632844.png)

11. 设置文字颜色图例是textstyle，刻度文字颜色axislabel：{color}

12. 轴线和分割线lineStyle:{}在外面添加axisLine /splitLine

13. grid边框  borderColor: ''

14. 单个数据图形的颜色  itemStyle

15. 不在使用固定数据使用动态数据，使用动态数据，series是数组， series系列中的data是对象{[],[],[]……}内容数组。数组项通常为具体的数据项。

16. 自定义属性

17. ![1631009215097](C:\Users\浪客\AppData\Roaming\Typora\typora-user-images\1631009215097.png)

18. 自定义属性获取多种方法定义在html标签中可以是非空的字符，空格谨慎 

19. 触发事件（真正触发）：click（） trigger（）triggerHanlder()

20.  事件触发机制  事件源事件类型事件执行行为/程序

21. 如果系列没有指定 `data`，并且 option 有 [dataset](https://echarts.apache.org/zh/option.html#dataset)，那么默认使用第一个 [dataset](https://echarts.apache.org/zh/option.html#dataset)。如果指定了 `data`，则不会再使用 [dataset](https://echarts.apache.org/zh/option.html#dataset)。

    可以使用 `series.datasetIndex` 指定其他的 [dataset](https://echarts.apache.org/zh/option.html#dataset)。

22. jquery中index()第一个匹配元素相对于同级元素的 index。获得第一个匹配元素相对于其同级元素的 index 位置。元素相对于选择器的 index。获得元素相对于选择器的 index 位置。

    该元素可以通过 DOM 元素或 jQuery 选择器来指定

23. ![1631067813363](C:\Users\浪客\AppData\Roaming\Typora\typora-user-images\1631067813363.png)

24. ​    // 鼠标进入扇形区不变大 在series中 老：hoverOffset(推荐) 新：selectedOffset 

25. ​    // 第一个值加第二个值=第三个值 半分比=第一个值/第三个值

    ​    // 保持数据和图形一致

26. 起始刻度的角度，默认为 90 度，即圆心的正上方。0 度为圆心的正右方 

27. 遍历数据
    模板字符串
    创建好li后添加点击事件 渲染 此时li已经存在，推荐事件委托 看触发类型遍历数组获取对应属性值并渲染类操作，但此时的近30天是依赖li的，让他运行一次做默认近30天（默认）

    动画效果 都创建好之后用定时器不断循环执行li点击事件

    鼠标进入和移出事件绑定对象是大盒子，鼠标进入清除定时器，离开开启定时器，清除之前的定时器

    此时两者没有练习，通过点击事件中重新赋值index变量，赋值index变量，实现同步，关联但是 ReferenceError: Cannot access 'index' before initialization，原因是let 的 index在第一次点击（默认），所以解决在第一次调用默认的时候初始化index=0

28. 事件的触发可以用函数封装来实现解决事件出发的冲突

29. jquery中的mouseenter是mouseover事件封装的

30. 定时器里面 mouseenter 冲突问题的解决方案

    **定时器里面不加mousenter 事件**，而是直接重新渲染数据就可以(执行鼠标经过事件里面的代码)

31. 因为jquery中的mouseenter是mouseover事件封装的，手动调用事件的时候会触发冒泡导致大盒子对应的事件停止计时器，

32. echarts社区把这个路径：https://www.makeapie.com/editor.html?c=xH2DfA0Olu 替换为这个路径：https://www.makeapie.com/asset/get/s/data-1528971808162-BkOXf61WX.json ，在服务器后添加，

33. 主要看依赖什么，下载json文件，文件注释一般都有文件依赖的json文件，由于代码量不可控制也可以新建一个新的js文件，初始化echarts实例，let myChart不加s，此时不用设置let option和echarts.setOption(参数)     let myChart=echarts.init(document.querySelector('.box'))

34. 复制网页上的代码全部 到js文件中

35. 添加  let uploadedDataURL="/data.json";（必须要写）

36. 最后用vscode插件live serve打开，本地打开会报错

37. 封装函数时不确定的参数作为形参、封装函数实现可复用的功能

