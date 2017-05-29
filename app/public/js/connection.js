const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'<host>',
    user:'<user_name>',
    password:'<password>',
    database:'<database>'
});

connection.connect(function(error){
    if(error){
      console.log(error)
    }else
      console.log('Connected');
});

module.exports = connection;
