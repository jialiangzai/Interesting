document.title='唯美的诗句'
// 获取p
let lis=document.querySelectorAll('p') 
lis.forEach((item,index) => {
    // console.log(item);
    // console.log(lis.item);此时不能使用item的innerText因为item是element类型
   let p= item as HTMLParagraphElement
   index++;
   p.innerText='['+index+']'+p.innerText
    
});