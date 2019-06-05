const mysql = require('mysql');
const dbConfig = require('../config')().db;

const mysql_pool  = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    port: dbConfig.port,
    ssl: dbConfig.ssl
});

exports.mysql_pool = mysql_pool;