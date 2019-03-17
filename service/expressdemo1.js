
//import connection from '../service/testSql.js';
var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',    
    password: 'LIUdong123',
    database: 'anmial',
    insecureAuth: true,
});
connection.connect();
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

//登录
app.post('/login', function (req, res) {
    console.log("/login 响应 DELETE 请求");
    
    connection.query(`SELECT * FROM anmial.user WHERE username =${req.body.username} and password = ${req.body.password};`, 
    function (error, results, fields) {
        console.log(results);
        if (results.length == 1){
            res.send('登录页面');
        }else if (error) throw error;
    });
    
})

//
app.post('/regist', function (req, res) {
    console.log("/regist post 请求");
    connection.query(`INSERT INTO anmial.user (username, password) VALUES (${req.body.name}, ${req.body.password});`,     
    function (error, results, fields) {
        console.log(results);
        if (results){
            res.send('注册');
        }else if (error.sqlState == '23000'){
            res.send('用户名重复')
        }; 
        //throw error;
    });
    
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