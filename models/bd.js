var mysql = require("mysql2");

var pool = mysql.createPool({
  connectionLimit: 10,
  database: process.env.RDS_DB_NAME,
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  password: process.env.RDS_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

// test connection
pool.getConnection(function (err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

module.exports = pool.promise();
