// 定义中间件
const express = require('express')

const app = express()


// 1.导入自定义的模块
const custombodyparse=require('./custom-body-parse')

app.use(custombodyparse)

app.post('/',(req,res)=>{
    res.send(req.body)
})


app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1');
})
