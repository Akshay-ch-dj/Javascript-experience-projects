'use strict';

/* ********************* Working With Strings ********************* */

/*
const airline = 'JET Airways India';
const plane = 'A320';

// They can be indexed
console.log(plane[0]);

// Length property
console.log(airline.length);

// To get the position or index of a letter(similar to arrays)
console.log(airline.indexOf('A')); // 4
// It gives the first occurrence, for the last one use lastIndexOF
console.log(airline.lastIndexOf('a')); // 16

console.log(airline.indexOf('India')); // 12

// Slice method requires index as arguments, so getting index firstly helps

// ************************** Slice Method *************************

// Slice is used to get the substring out of the main string

console.log(airline.slice(4)); // Airways India
// As strings are immutable, it didn't affect the original string
// Store the returned substring in a variable to use it

// With beginning and End indices
console.log(airline.slice(4, 7)); // Air

// length of the resulting string is (7 - 4)

// Extracting the first word
console.log(airline.slice(0, airline.indexOf(' '))); // Jet

// For the last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // India

// Negative indices for counting from end
console.log(airline.slice(1, -1)); // ET Airways Indi

// CODE: Practice
// receives an airplane seat and logs if it is a middle seat or not

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  // Need to Check the given middle seat is B or E
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// ************************** How Strings Works ?? *************************
// As strings in JS are not objects (primitives), but how methods like slice work on it,

// The JS engine is really smart so that when it encounter a string it convert the string primitive to a string object with the same content then in on that object the methods are called.

// This process is called boxing, that takes a primitive and put it into a box of object.

console.log(new String('jonas'));
console.log(typeof new String('jonas')); // Object
// All string methods return primitives

console.log(typeof new String('jonas').slice(1)); // String
*/

// ********************* strings Methods **********************

/*
const airline = 'Air Deccan Airways';

// Convert to Upper and Lower cases
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in a name "AKshAy" => "Akshay"
const passenger = 'AKsHay';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerLower, passengerCorrect);

// Comparing emails
const email = 'hello@akshay.io';
const loginEmail = 'Hello@Akshay.Io \n';

// They are same with case differences, first convert it to lowercase, get rid
// of whitespace and newline. tab characters

// const lowerEmail = loginEmail.toLowerCase();
// trim is similar to the strip(), rstrip(), lstrip() methods in python
// const trimmedEmail = lowerEmail.trim();

// console.log(trimmedEmail);

// In one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// In ES 2019, there is trimstart() and trimend(), similar to lstrip and rstrip

// ************************ Replace string parts *****************
const priceAM = '288.90$';
const priceIN = priceAM.replace('$', '₹').replace('.', ',');
console.log(priceIN);

// Large string
const announcement =
  'All passengers come to boarding door 23, Boarding door 23!';

// Replace door with gate
// Replace also returns a new string
console.log(announcement.replace('door', 'gate'));
// It only replaces the first occurrence, but "replaceAll" method is coming to it.
console.log(announcement.replaceAll('door', 'gate'));

// By using regular expression
console.log(announcement.replace(/door/g, 'gate')); // targeted global

// Checking methods that returns boolean
// 1. includes(), 2. startsWith(), 3. endsWith()

const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// Practice exercise

const checkBaggage = function (items) {
  // Put everthing to lowercase first
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome Abord');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and cameras');
checkBaggage('Got some food and gun for protection');
*/
/*
// ***************   Split and Join method in strings ********************
console.log('A-very-nice-string'.split('-'));
// The string split up at the points of '-' to an array

// can use space or empty string to split as letters

// CODE:Practice

const [firstName, lastName] = 'Akshay Chandran'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  // split to an array
  const names = name.split(' ');
  const normName = [];
  // capitalize each word
  names.forEach((n) => {
    normName.push(n[0].toUpperCase() + n.slice(1));
  });
  // join and return the array
  return normName.join(' ');
};

console.log(capitalizeName('akshay chandran p'));
console.log(capitalizeName('manza mazoor poonjikkara'));

// **************** Padding a string **********************
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
// The 25 is the total length, ie the padends means add ++s to the end so that
// the total will make up to a 35 length

// Practice: masking the credit card number
const maskCreditCard = function (number) {
  // convert to a string(the input can be a number or a string)
  // const n = String(number);
  const n = `${number}`;
  // Last four digits
  const lastDigits = n.slice(-4);
  // return the masked string
  return lastDigits.padStart(n.length, '*');
};

console.log(maskCreditCard(86843808340804380));
console.log(maskCreditCard('87384734'));

// *********************** Repeat ******************
const msg = 'Bad weather, call back...';

console.log(msg.repeat(5));
console.log(msg);
*/

// Challenge 4: String
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

const textArea = document.getElementById('text');
const getBtn = document.querySelector('.getText');
const output = document.querySelector('.output');

// The snake_case to camelCase converter
function toCamelCase(word) {
  // split with the underscore '_' and convert to lowercase
  const words = word.split('_').map((w) => w.toLowerCase());
  // separate the first word
  const first = words.shift();
  // Capitalize and join remaining
  // method 1
  // return first + words.map((w) => w.replace(w[0], w[0].toUpperCase())).join('');
  // method 2
  return (
    first + words.reduce((str, w) => str + w[0].toUpperCase() + w.slice(1), '')
  );
}

// Block of words to array of words
function blockToArray(text) {
  // Split with newline, truncate whitespace
  const textArray = text.split('\n');
  return textArray.map((w) => w.trim());
}

// print to console
function printToConsole(textArray) {
  textArray.forEach((text, ind) => {
    console.log(text.padEnd(25, ' ') + '✅'.repeat(ind + 1));
  });
}

// Event listeners
getBtn.addEventListener('click', () => {
  if (textArea.value) {
    const textContent = textArea.value;
    const conArray = blockToArray(textContent).map((w) => toCamelCase(w));
    // To console
    printToConsole(conArray);
    // To page
    output.textContent = conArray.join(', ');
  }
});
