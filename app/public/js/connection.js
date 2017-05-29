const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password:'1234',
    database:'simchafund'
});

connection.connect(function(error){
    if(error){
      console.log(error)
    }else
      console.log('Connected');
});

module.exports = connection;
