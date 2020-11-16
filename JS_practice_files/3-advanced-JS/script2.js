'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // For destructuring the names need to be matched
  orderDelivery: function({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and` +
    ` ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and
    ${ing3}`);
  },
};

// call the orderDelivery function and passing in an object
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Sol street, Mumbai',
//   mainIndex: 2,
//   starterIndex: 2,
// });

/*
// Array destructuring

const arr = [2, 3, 4];

// Destructuring assignment
const [x, y, z] = arr;
console.log(x, y, z);

// From the restaurant

// const [first, second] = restaurant.categories;
// console.log(first, second);

// Skipping (avoid extra variables)
let [main, , second] = restaurant.categories;
console.log(main, second);

// To switch values conventionally
// const temp = main;
// main = second;
// second = temp;
// console.log(main, second);

// With destructuring
[main, second] = [second, main];
console.log(main, second);

// returning multiple values from a function

// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array destructuring
const nested = [1, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const arr2 = [8, 9];
const [p = 1, q = 1, r = 1] = arr2;
console.log(p, q, r);

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// very useful when retrieving external API calls
// Assigning alternate names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Need those open parenthesis to use object assignment without let or const
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/


// Spread operator
/*
const arr = [3, 4, 5];

const newArr = [1, 2, ...arr];
console.log(newArr);

// array back to its values
console.log(...newArr);
// That is equal to
console.log(1, 2, 3, 4, 5);

// Adding to an existing array and creating a new
const newMenu = [...restaurant.mainMenu, 'Ginger Soda'];
console.log(newMenu);

// Copy array
// To make a shallow copy
const mainMenu = [...restaurant.mainMenu];
console.log(mainMenu);

// For a complex/nested array
const newArray2 = [1, 5, 8, 7, [1, 5]];
const newArray3 = [...newArray2];
// It wont work
console.log(newArray3);

// Join two arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread operator works on all iterables (arrays, strings, maps, sets,
// NOT objects)

// So it can be used on strings too
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

// Arguments that are comma separated is not expected always, it will not work
// inside a string literal"${}", or it works only inside a function argument or
// other areas that expect those

// Using Spread operator to pass arguments (real world example)

// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('ingredient 3?'),
// ];

console.log(ingredients);

restaurant.orderPasta(...ingredients);
*/

/*
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Shallow copy using spread operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/
