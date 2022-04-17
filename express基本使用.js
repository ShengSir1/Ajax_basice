// express框架
const { response } = require('express');
const express=require('express');

const app=express();

app.get('/',(request,response)=>{
    response.send('Hello express');
});

app.listen(8000,()=>{
    console.log("服务已经启动，监听中");
})
// node express基本使用.js      --激活端口
// nodemon express基本使用.js   --使用nodemon包(自动重启工具)后激活端口
// http://localhost:8000/ 本地ip8000端口