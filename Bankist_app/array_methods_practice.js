'use strict';

// ************************* Slice method **********************

/*
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(arr.slice(2)); // ["c", "e", "f", "g"]
console.log(arr.slice(2, 4)); // ["c", "e"]
// Negative
console.log(arr.slice(-2)); // ["f", "g"]
// Everything except the first and the last one
console.log(arr.slice(1, -1)); // ["b", "c", "e", "f"]

// Creating a shallow copy of an array
// from prv. lessons, using spread operator
// const arrCpy = [...arr];
// Using slice
const arrCpy = arr.slice();

// Use destructuring for individual cases, and use slice when used with
// other chaining methods

// ************************* Splice method **********************

// The splice is similar to slice but it changes the original array,
// console.log(arr.splice(2));
// console.log(arr); // ["a", "b"]

// So splice changes the original array(destructive method)
// So one common use case of this method is to delete elements from the array
arr.splice(-1);
// the last element gone
console.log(arr); // ["a", "b", "c", "d", "e"]

// The second argument is the number of elements to be deleted starting from the index position
// Starting from position 1 remove 2 elements
const arrRes = arr.splice(1, 2);
console.log(arr); // ["a", "d", "e"]
console.log(arrRes); // ["b", "c"]

// The third argument is the elements to add

*/

/*
// ************************* reverse method **********************

const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr2 = ['j', 'k', 'l', 'm', 'n'];

console.log(arr2.reverse()); // ["n", "m", "l", "k", "j"]
// But the reverse method mutates the original one too
console.log(arr2); // ["n", "m", "l", "k", "j"]

// ************************* concat method **********************
const letters = arr.concat(arr2);
console.log(letters); // It joins the 2 arrays
// Similar one using the destructuring
console.log([...arr, ...arr2]);

// ************************* join method **********************
console.log(letters.join('-'));

// Remember the old ones push, pop ==> From last remove and add,
//                  shift, unshift ==> From first add and remove,

*/

// ************************* The forEach Method **********************

// Using the bankist app logic

// The trans array is basically an account holders transactions

// const trans = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
for (let i = 0; i < trans.length; i++) {
  if (trans[i] > 0) {
    console.log(`You deposited ${trans[i]}`);
  } else {
    console.log(`You withdrew ${Math.abs(trans[i])}`);
  }
}
*/

/*
// Using forEach
trans.forEach((t, i, arr) => {
  if (t > 0) {
    console.log(`Movement ${i + 1}: You deposited ${t}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(t)}`);
  }
});

// It is basically a function called for each iteration, so it must be relatively slower

// can access them in order, (element, index, the array itself)
*/

// ******************** forEach with maps and sets **********************

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['RS', 'Indian Rupee'],
]);

// Order is reversed in maps, it is value, key
currencies.forEach((value, key, map) => {
  console.log(map);
  console.log(key, value);
});

// with sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'RS']);

console.log(currenciesUnique);

currenciesUnique.forEach((item, index, set) => {
  console.log(item, index, set);
});

// But the result is
// USD USD Set(4){"USD", "GBP", "EUR", "RS"}
// GBP GBP Set(4){"USD", "GBP", "EUR", "RS"}
// EUR EUR Set(4){"USD", "GBP", "EUR", "RS"}
// RS RS Set(4){"USD", "GBP", "EUR", "RS"}

// Shows that the sets don't got any indexes and index part is not omitted from the for loop in order to keep the for structure constant, so this will also do,

currenciesUnique.forEach((item, _, set) => {
  console.log(item, set);
});

*/

/// ////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

/*
function checkDogs(dogsJulia, dogsKate) {
  // copy the data array of julia
  // let dogsJuliaCpy = [...dogsJulia];
  // remove the cat ages 0, 3 and 4 indexes
  // dogsJuliaCpy.splice(0, 1);
  // dogsJuliaCpy.splice(-2);
  const dogsJuliaCpy = dogsJulia.slice(1, 3);
  [...dogsJuliaCpy, ...dogsKate].forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/

// ******************** map, filter and reduce **********************

/// ////////////////////////////////////

// Introduction to map,filter and reduce

// map

// map creates a brand new array based on the original array.
// It simply takes an array, loops through that array, in each iteration, applies a callback function and returns the newly created array.

// filter

// filter the elements out from the original array that satisfies some conditions.
// Only elements with condition results true is added to the final array.

// reduce

// reduces all array elements to one single value (eg: elements added together)
// There is an accumulator element at start, as it loops through the array, it adds the current element(or its modified form) to the accumulator, finally returns the accumulator.
// snowball that gets bigger and bigger as its rolls down the hill.

// Eg practice

// 1. map method

/*

// The movements array contain money transactions in US dollars
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// lets convert dollars to indian rupees to display, todays rate is
// 1 USD is 73.64 INR
const usdToInr = 73.64;

// use the map function to return a new array contains the converted values.

const movementsINR = movements.map(function (mov) {
  return mov * usdToInr;
});

// using arrow fn. simplifies it a lot.
// const movementsINR = movements.map((val) => val * usdToInr);
console.log(movementsINR);
// [14728, 33138, -29456, 220920, -47866, -9573.2, 5154.8, 95732]

// map method also got access to the index and the whole array other than the current element.

// const movementsSTR = movementsINR.map((val, i, arr) => {
//   if (val > 0) {
//     return `Movement ${i + 1}: You deposited ${val}`;
//   }
//   return `Movement ${i + 1}: You withdraw ${Math.abs(val)}`;
// });

// OR simplify it with strings,

const movementsSTR = movementsINR.map(
  (val, i) =>
    `Movement ${i + 1}: You ${val > 0 ? 'deposited' : 'withdrawn'} ${Math.abs(
      val
    )}`
);

console.log(movementsSTR);

// The idea of side effects, using forEach to do this thing (to log it to the console in each iteration) causes side effects, which is simply actions that causes inefficiency, in map the entire array after processing is logged at once, better efficient code.
*/

// ******************** Filter method **********************

/// ////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Filter deposits(movements that are above zero)
const deposit = movements.filter((trans) => trans > 0);

console.log(deposit);

// And for withdrawals
const withdraw = movements.filter((trans) => trans < 0);
console.log(withdraw);
*/

// ******************** reduce method **********************

/// ////////////////////////////////////

/*
// Using reduce lets add up all the elements in the movements array.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const total = movements.reduce((accu, curr, i) => {
  console.log(`Iteration ${i + 1}: ${accu} + ${curr}`);
  return accu + curr;
}, 0);
console.log(total);
// 3840

// reduce accepts a callback function and a return value(inital), the return value gets modified in the call back function for every iteration, finally it gets returned.

// The call back function accepts up to 4 arguments(previous value, current value, current index, whole array), previous value is nothing but the modified return value of each preceding iteration, ie for the first iteration it is the initial one given.\
// current value is the current element from the array,
// The previous value, current value and the initial return value are mandatory to run a reduce method.
// In the sum example, in each iteration the current value gets added to the previous value, and the final value (ie the sum) gets returned at the end of the iteration.
*/

// To find the maximum value of an array using reduce
// Logic set the initial value, in each iteration if a larger value encountered, set that instead. return the final one after traversing.

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// reduce to maximum value
const maxValue = movements.reduce((a, c) => (a > c ? a : c), movements[0]);
console.log(maxValue);
*/

/// ////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

function calcAverageHumanAge(ages) {
  // dog age in human years
  const agesToHuman = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));

  // Filter out 18+ human year dogs
  const adultFilter = agesToHuman.filter((age) => age >= 18);

  // Average human age
  const avgHumanAge =
    adultFilter.reduce((a, c) => a + c, 0) / adultFilter.length;

  return avgHumanAge;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]).toFixed(2));
