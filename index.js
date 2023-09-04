const inquirer = require("inquirer");
const queries = require("./queries");
const logo = require("./logo");
const consoleTable = require("console.table"); // import all the modules

// function to return and display the main menu
async function displayAndReturnToMainMenu(data, tableName) {
  console.table(tableName, data);
  await inquirer.prompt([
    {
      name: "return",
      type: "confirm",
      message: "Press 'Enter' to continue to the main menu",
    },
  ]);
  mainMenu();
}
// display the main menu
async function mainMenu() {
  const choices = [
    "🏢   View All Departments",
    "💼   View All Roles",
    "👥   View All Employees",
    "➕   Add Department",
    "➕   Add Role",
    "➕   Add Employee",
    "🔄   Update Employee Role",
    "🗑️   Delete Department",
    "🗑️   Delete Role",
    "🗑️   Delete Employee",
  ];

  const { action } = await inquirer.prompt({
    // prompt the user for an action
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: choices,
  });

  switch (action) {
    case "🏢   View All Departments":
      const departments = await queries.getAllDepartments();
      await displayAndReturnToMainMenu(departments, "All Departments");
      break;
    case "💼   View All Roles":
      const roles = await queries.getAllRoles();
      await displayAndReturnToMainMenu(roles, "All Roles");
      break;
    case "👥   View All Employees":
      const employees = await queries.getAllEmployees();
      await displayAndReturnToMainMenu(employees, "All Employees");
      break;
    case "➕   Add Department":
      const departmentPrompt = await inquirer.prompt([
        {
          name: "departmentName",
          type: "input",
          message: "Enter the name of the new department:",
        },
      ]);
      const { departmentName } = departmentPrompt;

      await queries.addDepartment(departmentName);
      console.log(`Department "${departmentName}" added successfully.`);
      await displayAndReturnToMainMenu([], "All Departments");
      break;
    case "➕   Add Role":
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
      await displayAndReturnToMainMenu([], "All Roles");
      break;
    case "➕   Add Employee":
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
      await displayAndReturnToMainMenu([], "All Employees");
      break;

    case "🔄   Update Employee Role":
      const employeeList = await queries.getEmployeeNames();
      const employeeChoices = employeeList.map((employee) => ({
        name: employee.name,
        value: employee.id,
      }));

      const updateEmployeeRolePrompt = await inquirer.prompt([
        {
          name: "employeeId",
          type: "list",
          message: "Select an employee to update:",
          choices: employeeChoices,
        },
        {
          name: "newRoleId",
          type: "number",
          message: "Enter the new role ID for the employee:",
        },
      ]);
      const { employeeId, newRoleId } = updateEmployeeRolePrompt;

      await queries.updateEmployeeRole(employeeId, newRoleId);
      console.log(`Employee's role updated successfully.`);

      const updatedEmployees = await queries.getAllEmployees();
      await displayAndReturnToMainMenu(updatedEmployees, "All Employees");
      break;

    case "🗑️   Delete Department":
      const departmentsToDelete = await queries.getAllDepartments();
      const departmentChoicesToDelete = departmentsToDelete.map(
        (department) => ({
          name: department.name,
          value: department.id,
        })
      );

      const deleteDepartmentPrompt = await inquirer.prompt([
        {
          name: "departmentId",
          type: "list",
          message: "Select a department to delete:",
          choices: departmentChoicesToDelete,
        },
        {
          name: "confirm",
          type: "confirm",
          message: "Are you sure you want to delete this department?",
        },
      ]);

      if (deleteDepartmentPrompt.confirm) {
        await queries.deleteDepartment(deleteDepartmentPrompt.departmentId);
        console.log("Department deleted successfully.");
      } else {
        console.log("Department deletion cancelled.");
      }
      await displayAndReturnToMainMenu([], "All Departments");
      break;

    case "🗑️   Delete Role":
      const rolesToDelete = await queries.getAllRoles();
      const roleChoicesToDelete = rolesToDelete.map((role) => ({
        name: role.title,
        value: role.id,
      }));

      const deleteRolePrompt = await inquirer.prompt([
        {
          name: "roleId",
          type: "list",
          message: "Select a role to delete:",
          choices: roleChoicesToDelete,
        },
        {
          name: "confirm",
          type: "confirm",
          message: "Are you sure you want to delete this role?",
        },
      ]);

      if (deleteRolePrompt.confirm) {
        await queries.deleteRole(deleteRolePrompt.roleId);
        console.log("Role deleted successfully.");
      } else {
        console.log("Role deletion cancelled.");
      }
      await displayAndReturnToMainMenu([], "All Roles");
      break;

    case "🗑️   Delete Employee":
      const employeesToDelete = await queries.getAllEmployees();
      const employeeChoicesToDelete = employeesToDelete.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      }));

      const deleteEmployeePrompt = await inquirer.prompt([
        {
          name: "employeeId",
          type: "list",
          message: "Select an employee to delete:",
          choices: employeeChoicesToDelete,
        },
        {
          name: "confirm",
          type: "confirm",
          message: "Are you sure you want to delete this employee?",
        },
      ]);

      if (deleteEmployeePrompt.confirm) {
        await queries.deleteEmployee(deleteEmployeePrompt.employeeId);
        console.log("Employee deleted successfully.");
      } else {
        console.log("Employee deletion cancelled.");
      }
      await displayAndReturnToMainMenu([], "All Employees");
      break;
  }
}
console.log(logo); // Display the logo at the beginning
mainMenu(); // Start the main menu
