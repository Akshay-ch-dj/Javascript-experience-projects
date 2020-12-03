'use strict';

// IIFE & Closure

const secureBooking = function () {
  let passengerCount = 0;

  // The return function
  return function () {
    passengerCount += 1;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

// Now call the booker function

booker();
booker();
booker();
