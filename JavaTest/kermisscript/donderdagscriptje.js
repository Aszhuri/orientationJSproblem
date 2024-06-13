function sayHello() {
  alert("Hello world");
}

function askName() {
  let firstName = prompt("Enter first name:");
  let lastName = prompt("Enter last name:");
  let fullName = firstName + " " + lastName;
  alert("Hello " + fullName);
}

function calcBmi() {
  let weight = prompt("Enter weight (kg):")
  let height = prompt("Enter weight (m):")
  let bmi = weight / (height * height)
  alert("Your BMI score is: " + bmi)
}

function checkAge() {
    let age = 21 = prompt("Enter your age:")}
  if (age < 18) {
    alert('Have a glass of milk🍼');
} else if (age >= 18 && age < 65) {
    alert('Have a beer on me🍻');
}
