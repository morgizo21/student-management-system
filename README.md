# Student Management System

A simple student management application built with JavaScript and Node.js. The project demonstrates CRUD operations, input validation, array methods, and modular programming.

## Features

- Create students with unique IDs
- View all students
- Find students by ID or email
- Update student information
- Delete students
- Prevent duplicate email addresses
- Validate student information
- Activate and deactivate students
- Filter passing, failing, and active students
- Calculate the average student score
- Find the highest-scoring student
- Determine whether a student passed or failed
- Display a summary of student statistics

## Technologies Used

- JavaScript (ES6+)
- Node.js
- JavaScript ES Modules

## Project Structure

```text
student-management/
├── app.js
├── students.js
├── validation.js
├── package.json
└── README.md
```

## How to Run

1. Install Node.js.
2. Clone this repository.
3. Open the project folder in your terminal.
4. Run:

```bash
node app.js
```

## Example Output

```text
Total Students: 3
Active Students: 3
Passing Students: 2
Failing Students: 1
Average Score: 79
```

## What I Learned

Through this project, I practiced:

- JavaScript functions and objects
- Array methods such as `find()`, `filter()`, `some()`, `reduce()`, and `splice()`
- Error handling with `try/catch` and `throw`
- Input validation
- ES module imports and exports
- Organizing code into reusable functions
- Implementing CRUD operations

## Notes

This project stores student information in memory using a JavaScript array. Data resets whenever the application restarts. No database is used.