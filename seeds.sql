-- Departments
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Marketing');

-- Roles
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Sales Manager', 70000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Specialist', 60000, 3);

-- Employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Jackson', 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Sarah', 'Williams', 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Robert', 'Brown', 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Emily', 'Jones', 3, 3);
