function validateStudent(student){
  if(!student.name){
    throw new Error("Student name is required");
  }

  if(!student.email){
    throw new Error("Student email is required");
  }

  if(typeof student.score !== "number"){
    throw new Error("Student score must be a number");
  }

  if (student.score < 0 || student.score > 100){
    throw new Error("Score must be between 0 and 100");
  }

  //

  if(student.email)

  return true;
}

export { validateStudent };