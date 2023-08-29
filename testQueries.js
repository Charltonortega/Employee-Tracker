const queries = require('./queries');
const pool = require('./db'); 

async function testQueries() {
  try {
    // Test the getAllDepartments function
    const departments = await queries.getAllDepartments();
    console.log('All Departments:', departments);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    pool.end(); // Close the connection pool when done testing
  }
}

testQueries(); // Call the testQueries function
