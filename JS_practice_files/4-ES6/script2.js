'use strict';

// *********************** Functions **************************

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

const newPassport = function (person) {
  // generate a random number and store as passport
  person.passport = Math.trunc(Math.random() * 10 ** 12);
  console.log(person.passport);
};

newPassport(akshay);
checkIn(flight, akshay);

// The later one changed the passport number and the first one checking with the changed one

// So simply in all languages functions work with args
// Passing by value and passing by reference
// (python has passing by assignment https://stackoverflow.com/questions/986006/how-do-i-pass-a-variable-by-reference)

//  JS only got passing by value(the actual value is passed to fn.)
// (Even though it looks like passing by reference, in C++ even for primitives, one can pass the reference and change the actual mem. location)
// JS got no pass by reference, what happens with the objects as we know is still a value (ie pointing to the address that gets passed, pass a reference yes but not pass by reference )
