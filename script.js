/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Dennis");
console.log(23);

let firstName = "Dennis";
console.log(firstName);

// Variable name conventions
let person = "dennis";
let PI = 3.1415; // Constants in all uppercase

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 2);
// console.log(typeof "Dennis");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1989;
console.log(typeof year);

console.log(typeof null); //type of null is object -> BUG, should be null
*/

/*
// assigning a variable that can change (mutate) will happen with 'let'
let age = 32;
age = 33;

// assigning a variable that will never change (imutable) will happen with 'const'
const birthYear = 1989;
// birthYear = 1990; --> ERROR, birthYear was assigned a different value earlier

// const job; --> needs initial value

// 'var' is the old way of declaring variables and acts just as 'let'
var job = "programmer";
job = "teacher";
*/

/*
const now = 2037;
const ageDennis = now - 1989;
const ageFreddy = now - 2012;
console.log(ageDennis, ageFreddy);

console.log(ageDennis * 2, ageDennis / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = "Dennis";
const lastName = "Pierins";
console.log(firstName + " " + lastName);

// Assignement operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 2; // x = x / 2 = 50
x++; // x = x + 1 = 51
x--; // x = x - 1 = 50
console.log(x);

// Comparison operators
console.log(ageDennis > ageFreddy); // >, <, >=, <=
console.log(ageFreddy >= 18);
*/

/*
const now = 2037;
const ageDennis = now - 1989;
const ageFreddy = now - 2012;

console.log(now - 1989 > now - 2012); // operator precedence: JS calculates the substractions before comparing them

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageFreddy + ageDennis) / 2;
console.log(ageFreddy, ageDennis);
console.log(averageAge);
*/

/*
const firstName = "Dennis";
const job = "JahBless";
const birthYear = 1989;
const year = 2037;

const dennis =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(dennis);

const dennis2 = `I'm ${firstName}, a ${year - birthYear} year old ${job} `;
console.log(dennis2);

console.log("String with \n multiple \n lines");
console.log(`String with
multiple
lines`);
*/

/*
const age = 15;

if (age >= 18) {
  console.log(`You may start your driving license 😉`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You have to wait ${yearsLeft} more years for your driving license 😢`
  );
}

const birthYear = 2001;
let century;

if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
// Type conversion
const inputYear = "1991"; // STRING
console.log(inputYear + 18); // 199118
console.log(Number(inputYear)); // 1991
console.log(Number(inputYear) + 18); // 2009

console.log(Number("dennis")); // NaN (Not a number)
console.log(typeof NaN); // number (INVALID ONE)

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // 11
n = n - 1; // 11-1=10
console.log(n); //10
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("don't spend it all");
} else {
  console.log("You should get a job");
}

let height;
if (height) {
  console.log("Yay, height is defined!");
} else {
  console.log("Height is undefined...");
}
*/

/*
// === is the strict equality operator, == is the loose equality operator (performs type coercion)
const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favNum = Number(prompt("What's your favourite number?")); // Without the number conversion, the prompt function provides a string
console.log(favNum);
console.log(typeof favNum);

if (favNum === 25) {
  // '25' == 25
  console.log("We have the same favourite number!");
} else if (favNum === 7) {
  console.log("7 is also pretty cool");
} else {
  console.log("It's neither 7 or 25...");
}

if (favNum !== 25) {
  console.log("Why wouldn't you choose 25?");
}
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // NOT

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
*/

/*
const day = "monday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
*/

/*
3 + 4; // Expression
1989; // Expression
true && false && !false; // Expression


if (23 > 10) {
  const str = "23 is bigger"; // Statement
}

console.log(`I'm ${2037 - 1989} years old`) // Expression (${2037 - 1989})
*/

const age = 23;
age >= 18
  ? console.log("I may drink wine :)")
  : console.log("I may not drink wine :(");

const drink = age >= 18 ? "wine" : "no wine";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "no wine";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
