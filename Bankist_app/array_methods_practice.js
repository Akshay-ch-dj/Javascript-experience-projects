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
