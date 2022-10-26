require("dotenv").config();
var mysql = require("mysql2");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "containers-us-west-106.railway.app",
  user: "root",
  password: "H1jpKQvDZDme5yXwKDCM",
  database: "railway",
  // host: process.env.MYSQL_HOST,
  // user: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  // database: process.env.MYSQL_DB_NAME,
});

let sql = "SELECT * FROM usuarios";

pool.execute(sql, (err, result) => {
  if (err) throw err;

  console.log("RESULT ", result);
});

module.exports = pool.promise();
