import {
  createStudent,
  getStudents,
  findStudent,
  updateStudent,
  deleteStudent,
  getPassingStudents,
  calculateAverageScore,
  getStudentByEmail,
  getTopStudent,
  displaySummary
} from "./students.js";

try {
  createStudent(
    "Alice", 
    "alice@example.com", 
    85
  );

   createStudent(
    "Eric",
    "eric@example.com",
    60
  );

  createStudent(
    "Grace",
    "grace@example.com",
    92
  );

  console.log("All Students:", getStudents());
  console.log(displaySummary());

} catch (error) {
  console.error(error.message);
}