var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();

//更新
connection.query("UPDATE user SET name = ?", ["maosi"],function(error, results, fields){
  if (error) throw error;
  console.log(results);
});

 
connection.end();