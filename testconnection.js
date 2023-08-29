const pool = require('./db');

async function testConnection() {
    try {
      const [rows, fields] = await pool.query('SELECT NOW() AS currentTime');
      console.log('Database Connection Successful:', rows[0].currentTime);
    } catch (error) {
      console.error('Database Connection Error:', error);
    } finally {
      pool.end();
    }
  }
  
  testConnection();
  