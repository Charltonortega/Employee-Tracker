const queries = require("./queries");
const pool = require("./db");

async function testQueries() {
  try {
    // Test the getAllDepartments function
    const departments = await queries.getAllDepartments();
    console.log("All Departments:", departments);

    // Test the getAllRoles function
    const roles = await queries.getAllRoles();
    console.log("All Roles:", roles);

    // Test the getAllEmployees function
    const employees = await queries.getAllEmployees();
    console.log("All Employees:", employees);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    pool.end(); // Close the connection pool when done testing
  }
}

testQueries(); // Call the testQueries function
