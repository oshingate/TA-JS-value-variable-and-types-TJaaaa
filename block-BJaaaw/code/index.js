// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num1 = prompt("Enter num1");
if (num1 % 2 === 0) {
  alert("number is even");
} else {
  alert("number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num2 = prompt("Enter num2");
let num3 = prompt("Enter num3");
if (num2 > num3) {
  alert(`number  ${num2} is max`);
} else {
  alert(`number  ${num3} is max`);
}

// 3. Convert the above code using`?` terniary operator
num2 > num3 ? alert(`number  ${num2} is max`) : alert(`number  ${num3} is max`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter house name");
if (houseName === "stark") {
  alert(`Winter is coming`);
} else if (houseName === "lannister") {
  alert(` A lannister always pays his debt`);
} else {
  alert(` All men must die`);
}

// 5. Convert the above code using`?` terniary operator
let houseName2 = prompt("Enter house name");

houseName2 == "stark"
  ? alert(`Winter is coming`)
  : houseName2 === "lannister"
  ? alert(` A lannister always pays his debt`)
  : alert(` All men must die`);
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNo = prompt("Enter number of month");
switch (Number(monthNo)) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`This month have 31 days`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(`This month have 30 days`);
    break;
  case 2:
    alert(`This month have 28 days`);
    break;

  default:
    alert(`Enter valid month`);
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.
You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = prompt("Enter your salary");

switch (true) {
  case salary <= 20000:
    alert(`Your inhand salary is ${salary - (salary * 10) / 100}`);
    break;
  case salary <= 40000:
    alert(`Your inhand salary is ${salary - (salary * 20) / 100}`);
    break;
  default:
    alert(`Your inhand salary is ${salary - (salary * 30) / 100}`);
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

let marks = Number(prompt("Enter your Marks"));
if (marks > 100) {
  alert(`Marks can't be greater than 100`);
} else if (marks > 80 && marks < 100) {
  alert(`Grade A`);
} else if (marks > 50 && marks < 80) {
  alert(`Grade B`);
} else if (marks > 30 && marks < 50) {
  alert(`Grade C`);
} else if (marks > 0) {
  alert(`Grade D`);
} else {
  alert(`try again`);
}

switch (true) {
  case marks > 100:
    alert(`Marks can't be greater than 100`);
    break;
  case marks > 80 && marks < 100:
    alert(`Grade A`);
    break;
  case marks > 50 && marks < 80:
    alert(`Grade B`);
    break;
  case marks > 30 && marks < 50:
    alert(`Grade C`);
    break;
  case marks > 0:
    alert(`Grade D`);
    break;
  default:
    alert(`try again`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = String(prompt("What is the weather like outside?"));

switch (weather) {
  case "sunny":
    alert(`Wear a T-shirt`);
    break;
  case "rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case "hot":
    alert(`Get a hanky`);
    break;
  case "freezing":
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
    break;
}
