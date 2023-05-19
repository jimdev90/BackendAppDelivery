const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'app_delivery'
});

db.connect(function(err){
    if(err) throw err;
    console.log('DATABASE MYSQL CONNECT');
});

module.exports = db;