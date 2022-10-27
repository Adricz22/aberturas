var mysql = require("mysql2");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_DB_NAME,
  database: process.env.RDS_DB_NAME,
});

// test connection
let sql = "SELECT * FROM usuarios";
pool.execute(sql, (err, result) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");

  // if (err) throw err;
  // console.log("RESULT ", result);
});

module.exports = pool.promise();
