var express = require('express');
var app = express();

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})

//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');

    
})

//
app.get('/login', function (req, res) {
    console.log("/login 响应 DELETE 请求");
    res.send('登录页面');
})

//
app.post('/regist', function (req, res) {
    console.log("/regist post 请求");
    res.send('注册');
})

app.get('/detail', function (req, res) {
    console.log("/detail GET 请求");
    res.send('详情');
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log(host, port);
})