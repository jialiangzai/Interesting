window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask')
    var big = document.querySelector('.big');
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function (ev) {
        // 1.先计算鼠标在盒子内的距离
        var x = ev.pageX - this.offsetLeft;
        var y = ev.pageY - this.offsetTop;
        // console.log(x, y);
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= preview_img.offsetWidth - mask.offsetWidth) {
            maskX = preview_img.offsetWidth - mask.offsetWidth;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= preview_img.offsetHeight - mask.offsetHeight) {
            maskY = preview_img.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigImg = document.querySelector('.bigimg');
        var bigmax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigmax / (preview_img.offsetWidth - mask.offsetWidth);
        var bigy = maskY * bigmax / (preview_img.offsetWidth - mask.offsetWidth);
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigy + 'px';
    })
})