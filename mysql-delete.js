var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'test'
});
 
connection.connect();


//删除
connection.query('DELETE FROM user WHERE id = ?',[1], function (error, results, fields) {
  if (error) throw error;
  console.log(results);
})

 
connection.end();