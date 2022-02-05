const mysql = require('mysql2');

const mysql_pool  = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

exports.mysql_pool = mysql_pool;