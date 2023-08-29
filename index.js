const inquirer = require('inquirer');
const queries = require('./queries');

async function mainMenu() {
    const choices = [
      'View All Departments',
      'View All Roles',
      'View All Employees',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
    ];
  
    const { action } = await inquirer.prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: choices,
    });
  
    // Call the appropriate function based on user choice
    switch (action) {
      case 'View All Departments':
        const departments = await queries.getAllDepartments();
        console.log('All Departments:', departments);
        break;
      case 'View All Roles':
        const roles = await queries.getAllRoles();
        console.log('All Roles:', roles);
        break;
      case 'View All Employees':
        const employees = await queries.getAllEmployees();
        console.log('All Employees:', employees);
        break;
    
        case 'Add Department':
            const departmentPrompt = await inquirer.prompt([
              {
                name: 'departmentName',
                type: 'input',
                message: 'Enter the name of the new department:',
              },
            ]);
            const { departmentName } = departmentPrompt;
          
            // Call the function to add the department to the database
            await queries.addDepartment(departmentName);
            console.log(`Department "${departmentName}" added successfully.`);
            break;
      case 'Add Role':
        // Implement logic to prompt user for role details and add to the database
        break;
      case 'Add Employee':
        // Implement logic to prompt user for employee details and add to the database
        break;
      case 'Update Employee Role':
        // Implement logic to prompt user for employee and new role, and update the database
        break;
      // Add more cases for other choices
    }
  }
  
  mainMenu(); // start the main menu