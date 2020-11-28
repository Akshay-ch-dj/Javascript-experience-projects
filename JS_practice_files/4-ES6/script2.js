'use strict';

// *********************** Functions **************************

/*
// With default values
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  // Dynamic calculations
  price = 5 + 5 * 0.1 + 0.1 * numPassengers
) {
  // Using the new ES6 way of object literals flightNum: flightNum
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

// NOTE: Skipping the number of passengers now won't work ie,
// The second parameter will always map to second one
// createBooking('LH123', 1000);
// as a workaround put the skipped one as undefined(to leave at the default value)
createBooking('LH123', undefined, 1000);

// ***************** How passing an argument works **************

// Create a flight variable(primitive, string)
const flight = 'LH232';

// Create an object person who need to travel in that flight
const akshay = {
  name: 'Akshay Chandran',
  sex: 'male',
  passport: 78956636356223,
};

// Checkin fn. to board the passenger(person) to flight
const checkIn = function (flightNum, passenger) {
  // Ohh, flight gets changed due to engine test failue
  flightNum = 'LH999'; // Eslint also gives an error
  // Lets add Mr/Mrs to the passenger
  let prefix = '';
  if (passenger.sex === 'male') {
    prefix = 'Mr. ';
  } else if (passenger.sex === 'female') {
    prefix = 'Mrs. ';
  }
  passenger.name = prefix + passenger.name; // Eslint also gives an error

  // Alert after passport check
  if (passenger.passport === 78956636356223) {
    alert('Checked IN');
  } else {
    alert('Wrong passsport detected!');
  }
};

// Lets call the checkIn fn.
checkIn(flight, akshay);
console.log(flight);
console.log(akshay);
*/
/*
Looking at the log results the flight name is unchanged (not cz of const.)
it is cz, whenever a primitive gets passed as an argument to the fn.
It is not the exact one but a copy of the primitive gets passed
flightNum = flight
that copy getting changed when reassigning
In the case of object,(it is the reference to it copied) it is the same location
mentioning as said in the earlier section
So the object attributes get changed.

Summary: passing primitive is the same as passing a copy to the function itself
*/

// When in large projects this knowledge of what happens to the objects and primitives
// passed in to a function saves your butt many times..

// Here is what happens when two functions manipulating the same object
/*
const newPassport = function (person) {
  // generate a random number and store as passport
  person.passport = Math.trunc(Math.random() * 10 ** 12);
  console.log(person.passport);
};

newPassport(akshay);
checkIn(flight, akshay);
*/
// The later one changed the passport number and the first one checking with the changed one

// So simply in all languages functions work with args
// Passing by value and passing by reference
// (python has passing by assignment https://stackoverflow.com/questions/986006/how-do-i-pass-a-variable-by-reference)

//  JS only got passing by value(the actual value is passed to fn.)
// (Even though it looks like passing by reference, in C++ even for primitives, one can pass the reference and change the actual mem. location)
// JS got no pass by reference, what happens with the objects as we know is still a value (ie pointing to the address that gets passed, pass a reference yes but not pass by reference )

// First class functions

// - Functions are simply values, cz as all things in JS is an object functions are also just another type of objects

// As functions are objects, there are certain methods associated with them (as like the array methods)
// Eg:- call, apply and bind methods.

// Higher order functions :- A fn. that receives another fn. as an argument, that return's a new fn, or both, (it is possible cz of first order functions.)

// eg:- the call back function passed to an event listener(eg: greet), is only called by the higher order fn(addEventListener) when a "click" or similar event happens.

// First class fn's and higher order functions are different things, first class functions is a feature a programming language has(its just a concept, that all functions are values) and higher order functions are practical things happens because the language supports first class functions.

// lets create a function that accepts other functions as an input

// Simple function to convert a string to one word by eliminating all the spaces
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// Another function that just transforms the first word of a function to uppercase

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// The higher order function

const transformer = function (str, fn) {
  // The original string to console
  console.log('Original String: ', str);
  // Transformed String
  console.log('Transformed String: ', fn(str));

  // The function name can be displayed using the name property
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Python and JS are friends', upperFirstWord);
transformer('Python and JS are friends', oneWord);
*/

/*
// Advantages of higher level functions

- In the core JS uses higher order functions very much.
- It allows to to separate the code in levels of abstractions,
- Hide some complexity from the main function(also can relate to the branches in git)
- ie the lower level function codes can be separated(like add merge), then only the higher ones left, so that one can think about solving some higher level stuffs rather than, thinking about the variables memory etc, the code itself gives us so many lower level methods and data-types ready to use, so that coder can focus on doing high level stuff with it.
- Then we create some other simpler functions with that methods to form the next level of abstraction, that process continues and finally to a big project.

*/

// Practice with higher order function

// The dark cave function, that looks for an year in a string
// and covert it to a random year ie, 33, 66, 99 or 132 years back..
// lets not ..k the timeline too much, so now there is only travelling to past possible.

/*
function yearCheck(s) {
  // Check for 4-digit no.
  const isNumIn = s.match(/(\d{4})/g);

  if (isNumIn) return Number(isNumIn);
  return false;
}

function darkCave(s, fn = yearCheck) {
  // get the year
  const year = fn(s);

  // Check for a year greater than 2010 and less than 2021
  if (year && year > 2010 && year < 2021) {
    // travel a random multiple of 33 years back
    const yearsTravelled = Math.trunc(Math.random() * 4 + 1) * 33;
    const traveledYear = year - yearsTravelled;
    return [s.replace(String(year), String(traveledYear)), yearsTravelled];
  }
  return [`The cave is closed ✖: ${s}`, 0];
}

// A time machine that connects to the cave
function timeMachine(s, fn) {
  // do the time travel using the cave
  const [newStr, year] = fn(s);
  return `you travelled ${year} years back: ${newStr}`;
}

console.log(timeMachine('Its all about 2020', darkCave));
// you travelled 66 years back: Its all about 1954
*/
