require('dotenv').config()
var mysql = require("mysql2");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
});

MYSQL_HOST=containers-us-west-106.railway.app
MYSQL_USER=root
MYSQL_PASSWORD=H1jpKQvDZDme5yXwKDCM
MYSQL_DB_NAME=railway
MYSQL_PORT=7029
MYSQL_URL=mysql://${{ MYSQL_USER }}:${{ MYSQL_PASSWORD }}@${{ MYSQL_HOST }}:${{ MYSQL_PORT }}/${{ MYSQL_DB_NAME }}

let sql = "SELECT * FROM usuarios";

pool.execute(sql, (err, result) => {
  if (err) throw err;

  console.log("RESULT ", result);
});

module.exports = pool.promise();
