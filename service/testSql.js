var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',    
    password: 'LIUdong123',
    database: 'anmial',
    insecureAuth: true,
});



export  {connection};