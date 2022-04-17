// 用于部署vue_test项目的服务器

// node server.js      --激活端口
// nodemon server.js   --使用nodemon包(自动重启工具)后激活端口
// http://localhost:5005/person  --本服务器端口地址
const express=require('express');

const app=express();
app.use(express.static(__dirname+'/static'))

//配置一个后端的路由
app.get('/person',(request,response)=>{
    response.send({ //给服务端返回一个对象
      name:'tom',
      age:18
    });
});

app.listen(5005,(err)=>{
  if (!err) {
    console.log("服务已经启动，监听中");
  }
})