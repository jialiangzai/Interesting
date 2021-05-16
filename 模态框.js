window.addEventListener('load', function () {
    // 1.获取元素
    var login = document.querySelector('.login');
    var mask = document.querySelector('.login-bg');
    var link = document.querySelector('#link');
    var closeBtn = document.querySelector('#closeBtn');
    var title = document.querySelector('#title');
    // 2.点击链接link让mask和login显示
    link.addEventListener('click', function () {
        mask.style.display = 'block';
        login.style.display = 'block';
    })
    closeBtn.addEventListener('click', function () {
        mask.style.display = 'none';
        login.style.display = 'none';
    })
    // 3.开始拖拽   拖拽分为鼠标按下，主要是鼠标移动，鼠标弹起
    //首先获取鼠标在盒子内的坐标
    // 4. 开始拖拽
    // (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
    title.addEventListener('mousedown', function (e) {
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
        document.addEventListener('mousemove', move)

        function move(e) {
            login.style.left = e.pageX - x + 'px';
            login.style.top = e.pageY - y + 'px';
        }
        // (3) 鼠标弹起，就让鼠标移动事件移除
        // document.addEventListener('mouseup', function () {
        //     document.removeEventListener('mousemove', move)
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move);
        })
    })
})

