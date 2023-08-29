const mysql = require('mysql2');
const dotenv = require('dotenv').config(); // using our created .env config file

const pool = mysql.createPool({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
  });
  
module.exports = pool.promise();


