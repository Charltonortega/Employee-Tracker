# Employee Tracker SQL challenge

## 🌟 Features

- View all departments, roles, and employees
- Add departments, roles, and employees
- Update employee roles
- Delete departments, roles, and employees

## 📸 Screenshot

<div style="text-align:center">
  <img src="./assets/screenshots/Screenshot 2023-08-31 145203.png" alt="App Screenshot" width="50%"/>
</div>

## 🚀 Demo GIF

<div align="center">
  <img src="./assets/screenshots/demo.gif" alt="App Demo GIF" width="50%">
</div>

## 📷 Video Demo

ADD LINK HERE CHARLTON!!!

- [Github](https://github.com/Charltonortega/Employee-Tracker)

## 🛠 Setup

To set up the project, follow these steps:

1. Clone the repository:

```
git clone https://github.com/Charltonortega/Employee-Tracker.git
```

2. Navigate to the project directory: `cd Employee-Tracker`
3. Install the dependencies:

```
npm install
```

4. Set up your MySQL database and update the connection details in `db.js`

5. Create a `.env` file in the project root directory and set up your MySQL database credentials as follows:

```
DB_HOST='localhost'
DB_USER='your_username'
DB_PASSWORD='your_password'
DB_DATABASE='your_database_name'
```

Replace `your_username`, `your_password`, and `your_database_name` with your MySQL credentials.

6. Import the source schema and seeds.sql files into your MySQL database using the following command:

```
mysql -u root -p
SOURCE db/schema.sql
SOURCE db/seeds.sql
quit
```

7. Run the application:

```
node index.js
```

## 💻 Usage

1. Run the application using the instructions provided in the Setup section.

2. Use the arrow keys to navigate through the main menu.

3. Follow the on-screen prompts to perform various actions such as viewing, adding, updating, and deleting data.

## 📚 Resources

- [Inquirer](https://www.npmjs.com/package/inquirer) - for interacting with user input generating prompts
- [MySQL2](https://www.npmjs.com/package/mysql2) - for interacting with MySQL
- [Console.Table](https://www.npmjs.com/package/console.table) - for visualizing table data within terminal

## 🤝 Contributing

Pull request are welcome, For major changes please open issue first to dicuss what you would like to change.
