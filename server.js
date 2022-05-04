// 用于部署vue_test项目的服务器

// node server.js      --激活端口
// nodemon server.js   --使用nodemon包(自动重启工具)后激活端口
// http://localhost:5005/person  --本服务器端口地址
const express=require('express');
// yarn add connect-history-api-fallback  --安装包
// 定义 history包  --用于解决history模式无法刷新问题
const history = require('connect-history-api-fallback');
const { request, response } = require('express');
const app=express();
// 使用history包（调用history函数）  --必须调在静态资源之前
app.use(history())
app.use(express.static(__dirname+'/static'))

//针对IE 缓存问题
app.get('/ie',(request,response)=>{
  //设置响应头，设置允许跨域
  response.setHeader('Access-Contorl-Allow-Origin','*')
  // 设置响应体
  response.send('HELLO IE - 5')
})

//配置一个后端的路由
app.get('/person',(request,response)=>{
    response.send({ //给服务端返回一个对象
      name:'tom',
      age:18
    });
});


// 监听端口启动服务
app.listen(5005,(err)=>{
  if (!err) {
    console.log("服务已经启动，监听中");
  }
})