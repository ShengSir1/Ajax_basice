// express框架
const { response, request } = require('express');
const express=require('express');
const app=express();

//针对IE 缓存问题
app.get('/ie',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Contorl-Allow-Origin','*')
  // 设置响应体
  response.send('HELLO IE - 5')
})
// 延时响应
app.all('/delay',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 响应头
  response.setHeader('Access-Control-Allow-Headers','*')
  setTimeout(() => {
    // 响应体
    response.send('延时响应')
  }, 3000);
})

//配置一个jQuery的服务
app.all('/jquery-server',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  response.setHeader('Access-Control-Allow-Headers','*')
  // 响应体
  const data = {name:'尚硅谷'}
  // response.send('Hello JQuery Ajax');
  response.send(JSON.stringify(data));
});

//配置一个axios的服务
app.all('/axios-server',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  response.setHeader('Access-Control-Allow-Headers','*')
  // 响应体
  const data = {name:'尚硅谷'}
  // response.send('Hello JQuery Ajax');
  response.send(JSON.stringify(data));
});

app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中");
})
// node server2.js      --激活端口
// nodemon server2.js   --使用nodemon包(自动重启工具)后激活端口
// http://localhost:8000/ 本地ip8000端口