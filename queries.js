const pool = require('./db');
const inquirer = require('inquirer');
const queries = require('./queries');


module.exports = { 
  // get all departments from the database
  getAllDepartments: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM department');
      return rows;// rows is an array
    } catch (error) {
      throw error;// throw an error if something goes wrong
    }
  },

  // Get all roles from the database
  getAllRoles: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM role');
      return rows; 
    } catch (error) { 
      throw error; 
    }
  },

  // Get all employees from the database
  getAllEmployees: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM employee');
      return rows;
    } catch (error) {
      throw error;
    }
  },

  // Add a new department to the database
  addDepartment: async (name) => {
    try {
      await pool.query('INSERT INTO department (name) VALUES (?)', [name]);
    } catch (error) {
      throw error;
    }
  },

  // Add a new role to the database
  addRole: async (title, salary, department_id) => {
    try {
      await pool.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
    } catch (error) {
      throw error;
    }
  },

  // Add a new employee to the database
  addEmployee: async (first_name, last_name, role_id, manager_id) => {
    try {
      await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
    } catch (error) {
      throw error;
    }
  },

  // Update an employee's role in the database
  updateEmployeeRole: async (employee_id, role_id) => {
    try {
      await pool.query('UPDATE employee SET role_id = ? WHERE id = ?', [role_id, employee_id]);
    } catch (error) {
      throw error;
    }
  }
};
