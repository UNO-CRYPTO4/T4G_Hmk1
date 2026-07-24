// Prompt the user for details immediately (this runs on page load)
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let email = prompt("Enter your email:");

// Alert the collected info
alert(`Hi ${name}, you are ${age} years old and we'll keep in touch via your email: ${email}`);

// Other exercises (console logs)
let myName = "Judith Korlekie Agudey";
console.log("Name:", myName);

let myAge = 25;
console.log("Age:", myAge);

let sum = 10 + 5;
console.log("Sum:", sum);

let difference = 20 - 7;
console.log("Difference:", difference);

let quotient = 50 / 5;
console.log("Quotient:", quotient);

let product = 6 * 8;
console.log("Product:", product);

let remainder = 15 % 4;
console.log("Remainder:", remainder);

let myGod = true;
console.log("Boolean:", myGod);

let unoValue = 100;
console.log("Number Value:", unoValue);
console.log("Type of unoValue:", typeof unoValue);

let tourValue = "Uno Tours";
console.log("String Value:", tourValue);
console.log("Type of tourValue:", typeof tourValue);

// Function definition
function registerUser() {
  const username = prompt("Enter your name:");
  const userage = parseInt(prompt("Enter your age:"), 10);
  const useremail = prompt("Enter your email:");

  if (userage < 12) {
    alert(`Hi ${username}, you are ${userage} years old and you are too young to register. Sorry 😔😔`);
  } else if (userage >= 12 && userage < 18) {
    alert(`Hi ${username}, you are ${userage} years old and you have limited options to register for. We will keep in touch via your email: ${useremail} 👋🏾👋🏾`);
  } else {
    alert(`Hi ${username}, you are ${userage} years old and you can register for any option of your choosing. We will keep in touch via your email: ${useremail} 👋🏾👋🏾`);
  }
}

// 🔑 Call the function so it actually runs
registerUser();
