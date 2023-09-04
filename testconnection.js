const pool = require("./db"); // require the database

async function testConnection() {
  // Test the database connection
  try {
    const [rows, fields] = await pool.query("SELECT NOW() AS currentTime"); // attemp to execute current time from database.
    console.log("Database Connection Successful:", rows[0].currentTime);
  } catch (error) {
    console.error("Database Connection Error:", error); // handle error if it fails
  } finally {
    pool.end();
  }
}

testConnection();
