var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();

//多个？用数组，会按顺序填充

//更新
// connection.query("UPDATE user SET name = ?", ["maosi"],function(error, results, fields){
//   if (error) throw error;
//   console.log(results);
// });

//插入
// connection.query('INSERT INTO user(name,password) VALUE(?,?)', ["maosi",123], function (error, results, fields) {
//   if (error) throw error;
//   console.log(results.insertId);
// });

//更新
// connection.query('DELETE FROM user WHERE id = ?',[1], function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// })

//查询
connection.query('SELECT * FROM user', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
 
connection.end();