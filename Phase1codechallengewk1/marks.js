
function calculateGrade() {
  var marks = parseFloat(document.getElementById("marks").value);
  var grade;

  if (isNaN(marks)) {
    grade = "Invalid input. Please enter a numeric value.";
  } else if (marks > 79) {
    grade = "A";
  } else if (marks >= 60 && marks <= 79) {
    grade = "B";
  } else if (marks >= 50 && marks <= 59) {
    grade = "C";
  } else if (marks >= 40 && marks <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }

  document.getElementById("result").innerHTML = "The grade for " + marks + " marks is: " + grade;
}