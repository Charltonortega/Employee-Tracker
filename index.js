const inquirer = require("inquirer");
const queries = require("./queries");

async function mainMenu() {
  const choices = [
    "View All Departments",
    "View All Roles",
    "View All Employees",
    "Add Department",
    "Add Role",
    "Add Employee",
    "Update Employee Role",
  ];

  const { action } = await inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: choices,
  });

  // Call the appropriate function based on user choice
  switch (action) {
    case "View All Departments":
      const departments = await queries.getAllDepartments();
      console.log("All Departments:", departments);
      break;
    case "View All Roles":
      const roles = await queries.getAllRoles();
      console.log("All Roles:", roles);
      break;
    case "View All Employees":
      const employees = await queries.getAllEmployees();
      console.log("All Employees:", employees);
      break;
    case "Add Department":
      const departmentPrompt = await inquirer.prompt([
        {
          name: "departmentName",
          type: "input",
          message: "Enter the name of the new department:",
        },
      ]);
      const { departmentName } = departmentPrompt;

      // Call the function to add the department to the database
      await queries.addDepartment(departmentName);
      console.log(`Department "${departmentName}" added successfully.`);
      break;
    case "Add Role":
      const rolePrompt = await inquirer.prompt([
        {
          name: "title",
          type: "input",
          message: "Enter the title of the new role:",
        },
        {
          name: "salary",
          type: "number",
          message: "Enter the salary for the new role:",
        },
        {
          name: "departmentId",
          type: "number",
          message: "Enter the department ID for the new role:",
        },
      ]);
      const { title, salary, departmentId } = rolePrompt;

      // Call the function to add the role to the database
      await queries.addRole(title, salary, departmentId);
      console.log(`Role "${title}" added successfully.`);
      break;

    case "Add Employee":
      const employeePrompt = await inquirer.prompt([
        {
          name: "firstName",
          type: "input",
          message: "Enter the employee's first name:",
        },
        {
          name: "lastName",
          type: "input",
          message: "Enter the employee's last name:",
        },
        {
          name: "roleId",
          type: "number",
          message: "Enter the employee's role ID:",
        },
        {
          name: "managerId",
          type: "number",
          message: "Enter the employee's manager ID (optional):",
        },
      ]);
      const { firstName, lastName, roleId, managerId } = employeePrompt;

      // Call the function to add the employee to the database
      await queries.addEmployee(firstName, lastName, roleId, managerId);
      console.log(`Employee "${firstName} ${lastName}" added successfully.`);
      break;

    case "Update Employee Role":
      break;
    // Add more cases for other choices
  }
}

mainMenu(); // start the main menu
