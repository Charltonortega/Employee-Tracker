const pool = require("./db");

// Define the getEmployeeNames function
function getEmployeeNames() {
  return new Promise(async (resolve, reject) => {
    try {
      const query =
        'SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee';
      const [results] = await pool.query(query);
      resolve(results);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  // Get all departments from the database
  getAllDepartments: async () => {
    try {
      const [rows] = await pool.query("SELECT * FROM department");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Get all roles from the database
  getAllRoles: async () => {
    try {
      const [rows] = await pool.query("SELECT * FROM role");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Get all employees from the database
  getAllEmployees: async () => {
    try {
      const [rows] = await pool.query("SELECT * FROM employee");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Add a new department to the database
  addDepartment: async (name) => {
    try {
      await pool.query("INSERT INTO department (name) VALUES (?)", [name]);
    } catch (error) {
      throw error;
    }
  },

  // Add a new role to the database
  addRole: async (title, salary, department_id) => {
    try {
      await pool.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [title, salary, department_id]
      );
    } catch (error) {
      throw error;
    }
  },

  // Add a new employee to the database
  addEmployee: async (first_name, last_name, role_id, manager_id) => {
    try {
      await pool.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [first_name, last_name, role_id, manager_id]
      );
    } catch (error) {
      throw error;
    }
  },

  // Update an employee's role in the database
  updateEmployeeRole: async (employee_id, role_id) => {
    try {
      await pool.query("UPDATE employee SET role_id = ? WHERE id = ?", [
        role_id,
        employee_id,
      ]);
    } catch (error) {
      throw error;
    }
  },

  // delete a department by its ID
  deleteDepartment: async (departmentId) => {
    try {
      await pool.query("DELETE FROM department WHERE id = ?", [departmentId]);
    } catch (error) {
      throw error;
    }
  },

  // delete a role by its ID
  deleteRole: async (roleId) => {
    try {
      await pool.query("DELETE FROM role WHERE id = ?", [roleId]);
    } catch (error) {
      throw error;
    }
  },

  // Delete an employee by their ID
  deleteEmployee: async (employeeId) => {
    try {
      await pool.query("DELETE FROM employee WHERE id = ?", [employeeId]);
    } catch (error) {
      throw error;
    }
  },

  getEmployeeNames, // Export the getEmployeeNames function
};
