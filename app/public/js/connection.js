const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'',
    user:'',
    password:'',
    database:''
});

connection.connect(function(error){
    if(error){
      console.log(error)
    }else
      console.log('Connected');
});

module.exports = connection;
