var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();


//插入
connection.query('INSERT INTO user(name,password) VALUE(?,?)', ["maosi",123], function (error, results, fields) {
  if (error) throw error;
  console.log(results.insertId);
});

 
connection.end();