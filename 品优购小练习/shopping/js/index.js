window.addEventListener('load', function () {
    //1.获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    //2.鼠标经过就显示隐藏的按钮
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(() => {
            arrow_r.click();
        }, 2000);

    });
    //3.动态生成小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        ol.appendChild(li);
        li.setAttribute('index', i);
        //4.在创建好小圆圈后就直接生成点击事件，利用排他思想
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index')
            num = index;
            circle = index;//极其重要
            //5.点击小圆圈，移动ul,移动距离是等于小圆圈的索引号*图片的宽度，是负值
            console.log(index);
            animate(ul, -focusWidth * index)
        })
    }
    //修改ol里的第二个li设置类名为current
    ol.children[1].className = 'current';
    //6.克隆第一张图片到最后一张,这里注意是在小圆圈添加后进行的克隆
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮，图片滚动一张,但是无缝动画会让小圆点数量不符，所以用克隆
    var num = 0; var circle = 0; var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = '0';
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //8.点击右侧按钮小圆圈跟着一起变化，注意最后一张图片需要if
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circle_c();
        }
    })
    // arrow_r.addEventListener('click', function () {
    //     if (num == ul.children.length - 1) {
    //         ul.style.left = '0';
    //         num = 0;
    //     }
    //     num++;
    //     animate(ul, -num * focusWidth);
    //     //8.点击右侧按钮小圆圈跟着一起变化，注意最后一张图片需要if
    //     circle++;
    //     if (circle == ol.children.length) {
    //         circle = 0;
    //     }
    //     circle_c();
    // })
    //9.左侧按钮,注意左侧就是减
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //10.点击右侧按钮小圆圈跟着一起变化，注意最后一张图片需要if
            circle--;
            //如果circle为负数，则是第一张图片要改为第四个小圆圈
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circle_c();
        }
    })
    function circle_c() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    // 10.定时器自动播放轮播图
    var timer = setInterval(() => {
        arrow_r.click();
    }, 3000);
})