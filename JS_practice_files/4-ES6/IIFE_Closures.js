'use strict';

// IIFE & Closure

/*
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

// practicing closure

console.dir(booker);

*/
// Closure Examples

// 1.

/*
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // gives 46

console.dir(f);

// the 'a' variable is in the backpack of f() function.

// Now another function h()

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
// Now f() is a different function it is redefined by h,
f(); // outs 1554 (777 * 2)

// Lets inspect the function f,

console.dir(f);

// Its closure is - Closure (h) {b: 777}, now it not have the value of 'a',
// So the closure changes when it gets reassigned, consider it as a reborn of
// a fun declaration

*/

// 2. The timer example

// Function to board passengers

/*
const boardPassengers = function (n, wait) {
  // divide the total to 3 equal group
  const perGroup = n / 3;

  // Set a timer
  setTimeout(function () {
    console.log(`We are now boarding ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  // log items
  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
*/
/*
Will start boarding in 3 seconds
After 3 seconds
We are now boarding 180 passengers
There are 3 groups each with 60 passengers
*/

// The callback function can able to use all variables in the parent exec context
// while it is closed at immediately,

/*
function sampleFun(cars) {
  console.log(cars.trey?.color ?? 'No trey');
}

sampleFun({});
// logs "No trey"
*/

// Closure challenge
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

/*
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

*/
