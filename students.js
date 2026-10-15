import { validateStudent } from "./validation.js";

const students = [];

let nextId = 0;

function createStudent(name, email, score){
  students.forEach(student => {
    if(student.email === email){
      throw new Error("This email is already registered")
    }
  });

  const student = {
    id: nextId + 1,
    name,
    email,
    score,
    active: true
  }

  validateStudent(student);

  students.push(student);

  nextId += 1;

  return student;
}

function activateStudent(id){
  const student = findStudent(id)

  student.active = true;

  return student
}

function deactivateStudent(id){
  const student = findStudent(id)

  student.active = false;

  return student
}


function getStudents(){
  return students;
}

function getStudentByEmail(email){

  if(email === null || email === ""){
    throw new Error("Enter valid email")
  }

  if(typeof email !== "string"){
    throw new Error("Email must be string")
  }

  const student = students.find((student) => student.email === email);

  if(!student){
    throw new Error("Student not found")
  }
  
  return student;
}

function findStudent(id){
  const student = students.find((student) => student.id === id);

  if(!student){
    throw new Error("Student not found");
  }

  return student;
}

function updateStudent(id, updates){
  const student = findStudent(id);

  if(updates.email !== undefined){
    const emailExists = students.some(s => s.email === updates.email && s.id !== id);

    if(emailExists){
      throw new Error("This email is already registered");
    }
  }

  const updatedStudent = {
    ...student,
    name: updates.name !== undefined ? updates.name : student.name,
    email: updates.email !== undefined ? updates.email : student.email,
    score: updates.score !== undefined ? updates.score : student.score
  };

  validateStudent(updatedStudent)
  
  Object.assign(student, updatedStudent)

  return student;
}

function deleteStudent(id){
  const index = students.findIndex((student) => student.id === id);

  if (index === -1){
    throw new Error("Student not found");
  }

  const deleteStudent = students.splice(index, 1);

  return deleteStudent[0]
}

function getPassingStudents(){
  return students.filter((student) => student.score >= 70);
}

function getFailingStudents(){
  return students.filter((student) => student.score < 70);
}

function getTopStudent(){

  if(students.length === 0){
    return 0;
  }

  const topStudent = students.reduce((prevStudent, currentStudent) => {
     if(currentStudent.score > prevStudent.score){
      return currentStudent
     }

     return prevStudent
    }
  )

  return topStudent
}

function getActiveStudents(){
  return students.filter((student) => student.active)
}

function calculateAverageScore(){
  if(students.length === 0){
    return 0;
  }

  let total = 0;

  for(const student of students){
    total += student.score
  }

  return total / students.length;
}

function getStudentResult(id){
  const student = findStudent(id)

  if(student.score >= 70){
    return "Passed"
  } else {
    return "Failed"
  }
}

function displaySummary(){
  const totalStudents = students.length;

  const activeStudents = getActiveStudents().length;

  const passingStudents = getPassingStudents().length;

  const failingStudents = getFailingStudents().length;

  const averageScore = calculateAverageScore();

  const summary = `
    Total Students: ${totalStudents}
    Active Students: ${activeStudents}
    Passing Students: ${passingStudents}
    Failing Students: ${failingStudents}
    Average Score: ${averageScore}
    `;

  return summary;
}

export {
  createStudent,
  getStudents,
  findStudent,
  updateStudent,
  deleteStudent,
  getPassingStudents,
  getActiveStudents,
  calculateAverageScore,
  getStudentByEmail,
  activateStudent,
  deactivateStudent,
  getFailingStudents,
  getTopStudent,
  getStudentResult,
  displaySummary
};