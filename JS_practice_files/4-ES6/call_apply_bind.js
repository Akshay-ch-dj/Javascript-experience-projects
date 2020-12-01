'use strict';

// Call, apply and bind methods practice

// Object with method using the 'this' keyword

/*
const airIndia = {
  airline: 'Air India',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNo, passengerName) {
    console.log(`${passengerName} booked a seat on ${this.airline} flight\
    ${this.iataCode}-${flightNo}`);

    // Push the passenger to flight booking
    this.bookings.push({
      flight: `${this.iataCode}-${flightNo}`,
      name: passengerName,
    });
  },
};

// Test
airIndia.book(237, 'Mufasa');

// Air India now got a new sub airline
const airIndiaGold = {
  airline: 'Air India Gold',
  iataCode: 'LHG',
  bookings: [],
};

// object destructuring
const { book } = airIndia;

// This won't works book is now a separate function.
// book(23, 'Sarah');

// To use the book function in the new sub airline
// We need to set the "this" keyword explicitly when calling the function.
// That when booking a air india gold ticket the "this" must point to that

*/
// 1. Using the "call" method

/*
// in place of 'this' used the new object(airIndiaGold)
book.call(airIndiaGold, 234, 'Sarah');
console.log(airIndiaGold);

// in place of 'this' used the new object(airIndia)
book.call(airIndia, 234, 'Sarah');
console.log(airIndia);

// 2. The apply method, difference is that we need an array here to pass the arguments
const flightData = [565, 'George Cooper'];

book.apply(airIndiaGold, flightData);

// But in modern JS, apply method is not used widely, cz of the spread operator
// just using the call method with spread operator is equivalent to apply method
book.call(airIndiaGold, ...flightData);

*/

// 3. The 'bind' method

/*
// It creates another function with the passed this keyword,

const flightData = [565, 'George Cooper'];

book.bind(airIndiaGold)(...flightData);
console.log(airIndiaGold);

// Book is now a function with this set to (execution context, points to the this of airIndiaGold)

// One can specify the arguments and create the new binds

// Here the flight number is already set
const bookAirGold234 = book.bind(airIndiaGold, 234);
// now we can book with only name
bookAirGold234('Sarah Corner');

// Using bind with event listeners

// let airIndia got 300 planes
airIndia.planes = 300;

// A buy plane function
airIndia.buyPlane = function () {
  console.log(this);

  this.planes += 1;
  console.log(this.planes);
};

// link an event listener wit buy plane button in the html

// document.querySelector('.plane').addEventListener('click', airIndia.buyPlane);
// the this in the eventListener functions points to the element

// Can overcome this using the bind method

document
  .querySelector('.plane')
  .addEventListener('click', airIndia.buyPlane.bind(airIndia));

*/

/*

// Partial Application

// A basic add tax method

const addTax = (taxRate, value) => value + value * taxRate;

// A specific tax called GST
// bind the addTax with this set to null and, a predefined rate
const addTaxGST = addTax.bind(null, 0.18);

addTaxGST(1000);
console.log(addTaxGST(100));
*/

// Challenge create a function returning a function similar to what the above
// bind does

/*
function addTax(taxRate) {
  return function (value) {
    return value + value * taxRate;
  };
}

const addTaxVat = addTax(0.18);
console.log(addTaxVat(2000));
*/
