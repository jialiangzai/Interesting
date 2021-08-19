document.title = '唯美的诗句';
// 获取p
var lis = document.querySelectorAll('p');
lis.forEach(function (item, index) {
    // console.log(item);
    // console.log(lis.item);此时不能使用item的innerText因为item是element类型
    var p = item;
    index++;
    p.innerText = '[' + index + ']' + p.innerText;
});
