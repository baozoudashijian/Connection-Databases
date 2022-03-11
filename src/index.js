let mysql = require('mysql');

let connection = mysql.createConnection({
  host: '139.198.43.25',//远程MySQL数据库的ip地址
  user: 'root',
  password : '123456@abc',
  database : 'wordpress'
});

connection.connect();

let sql = 'SELECT * FROM `wp_users` LIMIT 0, 1000'
connection.query(sql, (err, result) => {
  if(err) {
    console.log(err)
  }else{
    console.log(result)
  }
})
connection.end();