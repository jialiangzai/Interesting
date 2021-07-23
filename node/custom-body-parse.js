const qs=require('querystring')
const bodyparse=(req, res, next) => {
    let str=''
    // 变量 存储用户发送至服务器数据
    // 监听data事件
    req.on('data',(chunk)=>{
        str+=chunk
    })
    // 监听end事件
    req.on('end',()=>{
     // 拿到数据并把字符串的格式的数据解析为对象

       const body= qs.parse(str)
        
    //    现在已经拿到解析后的数据，把数据，挂载到req.body中
         req.body=body
        //  流转关系
        next()
        // console.log(str);
    })
}
module.exports=bodyparse