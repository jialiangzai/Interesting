// 获取所有单元格
var cells = document.querySelectorAll('.cell');
var bord = document.querySelector('#bord');
var message = document.querySelector('#message');
var winner = document.querySelector('#winner');
var btn = document.querySelector('#restart');
// 枚举
var Player;
(function (Player) {
    Player["X"] = "x";
    Player["O"] = "o";
})(Player || (Player = {}));
var currentPlayer;
// 创建变量记录次数
var steps;
// 所有赢得可能
var winArr = [
    // 横
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // 竖 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // 斜
    [0, 4, 8],
    [2, 4, 6],
];
// 重新游戏    初始化游戏
startGame();
btn.addEventListener('click', startGame);
function startGame() {
    message.style.display = 'none';
    // 重置次数
    steps = 0;
    // 重置默认玩家x
    currentPlayer = Player.X;
    //重置游戏提示x
    bord.classList.remove(Player.X, Player.O);
    bord.classList.add(currentPlayer);
    cells.forEach(function (item) {
        var cell = item;
        // cell.className=''这里不能用className会直接把单元格所有的类名去除
        cell.classList.remove(Player.X, Player.O);
        // 排他
        cell.removeEventListener('click', getcless);
        cell.addEventListener('click', getcless, { once: true });
    });
}
// 第一次游戏
function getcless(e) {
    // console.log(this);
    // 拿到当前点击单元格
    var target = e.target;
    target.classList.add(currentPlayer);
    steps++;
    // 判断输赢
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        message.style.display = 'block';
        winner.innerHTML = currentPlayer + "\u8D62\u4E86\uFF01";
        return;
    }
    // 平局情况
    if (steps === 9) {
        message.style.display = 'block';
        winner.innerText = "\u5E73\u5C40";
        // 结束游戏 防止无意义执行代码
        return;
    }
    // 切换用户
    currentPlayer = currentPlayer == Player.X ? Player.O : Player.X;
    bord.classList.remove(Player.X, Player.O);
    bord.classList.add(currentPlayer);
}
// 判断赢函数
function checkWin(player) {
    return winArr.some(function (item, index) {
        // console.log(itema,itemb,itemc);
        // 通过索引找到对应的单元格元素
        // let cellsa=cells[item[0]]
        // let cellsb=cells[item[1]]
        // let cellsc=cells[item[2]]
        // console.log(cellsa,cellsb,cellsc);
        // 找到对应单元格进行判断这 3 个单元格元素是否同时包含当前玩家的类名
        if (
        // cells[item[0]].classList.contains(player) &&
        // cells[item[1]].classList.contains(player) &&
        // cells[item[2]].classList.contains(player)
        hasClass(cells[item[0]], player) && hasClass(cells[item[1]], player) && hasClass(cells[item[2]], player)) {
            return true;
        }
        return false;
    });
}
// 判断是否有类名封装函数
function hasClass(el, name) {
    return el.classList.contains(name);
}
