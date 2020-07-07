const mysql = require('promise-mysql');
const migration = require('mysql-migrations');

async function main() {
  const connection = await mysql.createPool({
    connectionLimit: 10,
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    port: parseInt(process.env.RDS_PORT, 0) || 3306
  });
  
  migration.init(connection, __dirname + '/migrations');
}

main();