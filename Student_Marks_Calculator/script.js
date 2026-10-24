let percentage = document.getElementById("percentage");
let grade = document.getElementById("grade");
let marks = [];
let subjectInputs = document.getElementsByClassName("subjectInput");
// console.log(subjectInputs)
let percentageNum = null;
let gradeChar = undefined;
let calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  marksInArray();
  calculateMarks();
})

function marksInArray(){
  for(let i=0; i<subjectInputs.length; i++){
    let value = parseInt(subjectInputs[i].value);
    marks.push(value);
  }
}

function calculateMarks(){
  let totalMaxMarks = 500;
  let totalMarksObtain = marks.reduce((m1,m2)=>{
    return m1+m2;
  }, 0);
  percentageNum = (totalMarksObtain/totalMaxMarks) * 100;
  percentage.textContent = `${percentageNum}%`;
  gradeCalculator(percentageNum);
}

function gradeCalculator(p) {
  if (p >= 90 && p <= 100) {
    gradeChar = "A+ Outstanding";
  } else if (p >= 80 && p <= 89) {
    gradeChar = "A Excellent";
  } else if (p >= 70 && p <= 79) {
    gradeChar = "B+ Very Good";
  } else if (p >= 60 && p <= 69) {
    gradeChar = "B Good";
  } else if (p >= 50 && p <= 59) {
    gradeChar = "C+ Above Average";
  } else if (p >= 40 && p <= 49) {
    gradeChar = "C Average";
  } else if (p >= 33 && p <= 39) {
    gradeChar = "D Pass";
  } else if (p >= 0 && p <= 32) {
    gradeChar = "F Fail";
  } else{
    gradeChar = "Invalid Percentage!";
  }
  grade.textContent = `${gradeChar}`;
}