function sayHello() {
  alert("Hello world");
}

function askName() {
  let firstName = prompt('Enter first name:');
  let lastName = prompt('Enter last name:');
  let fullName = firstName + ' ' + lastName;
  if (fullName == 'Alex v') {
    alert('hellooooo you😎');
  } else {
    alert('Hello ' + fullName);
  }
}


function calcBmi() {
  let weight = prompt("Enter weight (kg):")
  let height = prompt("Enter weight (m):")
  let bmi = weight / (height * height)
 alert("Your BMI score is: " + bmi)
 if (bmi = <18.5 )
  Alert("you are underweight.")
if (bmi = 18.5 below 24.9)
  alert("You have a normal weight")
if (bmi = 25 below 29.9)
alert("You are overweight")
if (bmi = 30)
alert("you are OBESE")
}

function checkAge() {
    let age = 21
    age = prompt("Enter your age:")
  if (age < 18) {
    alert('Have a glass of milk🍼');
} else if (age >= 18 && age < 65) {
    alert('Have a beer on me🍻');
}
}