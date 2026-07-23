// Prompt the user for details
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let email = prompt("Enter your email:");

// Alert the collected info
alert(`Hi ${name}, you are ${age} years old and we'll keep in touch via your email: ${email}`);


// A. Store your name and log it
let myName = "Judith Korlekie Agudey";
console.log("Name:", myName);

// B. Store your age and log it
let myAge = 25; // replace with your actual age
console.log("Age:", myAge);

// C. Add two numbers
let sum = 10 + 5;
console.log("Sum:", sum);

// D. Subtract two numbers
let difference = 20 - 7;
console.log("Difference:", difference);

// E. Divide two numbers
let quotient = 50 / 5;
console.log("Quotient:", quotient);

// F. Multiply two numbers
let product = 6 * 8;
console.log("Product:", product);

// G. Find the remainder of 15 % 4
let remainder = 15 % 4;
console.log("Remainder:", remainder);

// H. Store a boolean value
let myGod = true;
console.log("Boolean:", myGod);

// I. Variable set to a number and log type
let unoValue = 100;
console.log("Number Value:", unoValue);
console.log("Type of unoValue:", typeof unoValue);

// J. Variable set to a string and log type
let tourValue = "Uno Tours";
console.log("String Value:", tourValue);
console.log("Type of tourValue:", typeof tourValue);

function registrationAlert(username, age, email) {
  if (age < 12) {
    return `Hi ${username}, you are ${age} years old and you are too young to register. Sorry 😔😔`;
  } else if (age >= 12 && age < 18) {
    return `Hi ${username}, you are ${age} years old and you have limited options to register for. We will keep in touch via your email: ${email} 👋🏽👋🏽`;
  } else {
    return `Hi ${username}, you are ${age} years old and you can register for any option of your choosing. We will keep in touch via your email: ${email} 👋🏽👋🏽`;
  }
}

// Example usage:
console.log(registrationAlert("Havier Sanchez", 10, "test@example.com"));
console.log(registrationAlert("Havier Sanchez", 15, "test@example.com"));
console.log(registrationAlert("Havier Sanchez", 20, "test@example.com"));
