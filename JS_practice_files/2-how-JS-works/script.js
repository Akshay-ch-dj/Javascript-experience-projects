'use strict';

// JShint settings default
// https://github.com/jshint/jshint/blob/4c2d091b7e50ce2681ee48a104578bb969c189ae/examples/.jshintrc#L79

//
/*
jsHint settings in VSCode
"jshint.options": {
    // to set document, window, etc.. as global and use in browser mode, there
    is also node mode.
    "browser": true,
    // Use the 'use strict' globally
    "globalstrict": true,
    // developer on, othervise console.log..etc will show some error
    "devel": true,
    // use ES6
    "esversion": 6
 }

*/

// /////////////////////////////////////
// // Lecture: Hoisting

// calculateAge(1995);

// function calculateAge(year) {
//     console.log(2020 - year);
// }

// // yearRet(1995);

// var yearRet = function(year) {
//     console.log(65 - (2020 - year));
// }

// // In variables
// console.log(age);  // Trying to use the variable before declaring
// var age = 23;
// console.log(age);

// // Scope of variable

// function foo() {
//     console.log(age);
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

// Scope of a variable

// var x = 'Hello';

// first();

// // lexical scoping
// function first() {
//     var y = ' local';
//     second();
//     function second() {
//         var z = ' and nested';
//         console.log(x + y + z);
//     }
// }

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();
//     function second() {
//         var c ='Hey!';
//         third();
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }

// // The 'this' keyword

// console.log(this)
// calcAge(1990);
// function calcAge(year) {
//     console.log(2020 - year);
//     console.log(this);
// }

// // this in an object
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     calculateAge: function() {
//         console.log(this);
//         console.log(2020 - this.yearOfBirth);

//         /*
//         function innerFunction() {
//             console.log(this);
//         }
//         innerFunction();
//         */
//     }
// }

// john.calculateAge();

// var mike = {
//     name: 'Mike Tyson',
//     yearOfBirth: 1994,

// }

// mike.calculateAge = john.calculateAge;
// mike.calculateAge();

// /////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the difference between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/

// /////////////////////////////////////
// Lecture: The this keyword

// Scoping practice

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `You are ${firstName} age ${age}, born in\
//                                                      ${birthYear}`;
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millennial = true;
//             const firstName = 'Steven';
//             const str = `Oh, and you're a millennial, ${firstName}`;
//             console.log(str);

//             // function add(a, b) {
//             //     return a + b;
//             // }
//         }

//         // console.log(str);
//         // console.log(millennial);
//     }
//     printAge();

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// Hoisting in practice

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Akshay';
// let job = 'No Job';
// const year = 1991;

// The bad side of var

// console.log(undefined);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

//
// console.log(window);

// The 'this' Keyword

// console.log(this);
// // Window object

// const calcAge = function(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
//   // because of the strict mode it will be undefined.
// };

// calcAge(1991);

// // If the function is an arrow function..

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
//   // As arrow function got lexical this(borrows this from parent)
//   // It is now window function.
// };

// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function() {
//     console.log(this);
//     // this represent the object jonas
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 1996,
// };

// matilda.calcAge = jonas.calcAge;
// //  This is called method borrowing

// matilda.calcAge();
// // that gives 41 (ie 2037 - 1996(this.year)), note that now the this.year is
// // 1996, or the this points to matilda. this keyword is dynamic.

// // now if we bring the function out of the object,

// const f = jonas.calcAge;
// f();

// Configure ESlint
/*
- install ESlint VScode extension
- install Eslint for the current project only using - `npm install eslint` or
globally using `npm install eslint -g` (look for the path in which it is
    installing, if you are using github, you need to add the "\node_modules\"
     to `.gitignore` )
- setting up ESlint configuration, for local install run
`./node_modules/.bin/eslint --init` for global  run `eslint --init`
 from the terminal.
- https://dev.to/devdammak/setting-up-eslint-in-your-javascript-project-with-vs-code-2amf
- https://javascript.info/coding-style

*/

// Regular function VS Arrow function

/*

// var firstName = 'Matilda';

// The window object
console.log(this);

// The object doesn't creates its own scope (block scope, its just the way an
// object is defined with those "{}")
const akshay = {
  firstName: 'Akshay',
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => {
    // Also the window object, cz arrow takes it lexically.
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

akshay.greet();

*/
// if there is a var function in the main window with the same firstName(up)
// var creates properties in the window object.

// The Error can be avoided using, regular functions

/*  */
/*
const akshay = {
  firstName: 'Akshay',
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 - this.year);

    const self = this;
    const isMillenial = function() {
      // console.log(this);
      console.log(self); // Use this self instead of `this`.
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    // This is a regular function call, 'this' keyword sets undefined.
    isMillenial();
    // using a bind() method.
    // isMillenial.bind(this.calcAge)();
  },

  greet: function() {
    // Also the window object, cz arrow takes it lexically.
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

// akshay.greet();
akshay.calcAge();
 */

// Function inside a method, look at the isMillenial function, which is a
// normal function, in a regular function call - `this` is undefined
// Can use a self variable outside thats set to `this`, or by using a bind
// function with the call.

// But if it is an arrow function, it inherits the `this` from parent.

/*
const jonas = {
  firstName: 'jonas',
  year: 1991,
  calcAge: function() {
    console.log(2037 - this.year);

    const isMillenial = function() {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    // This is a regular function call, 'this' keyword sets undefined.
    // isMillenial();
    // using a bind() method.
    // isMillenial.bind(this)();
  },
};

jonas.calcAge();

*/


// Arguments keyword only available for regular function.

/*
const addExpr = function(a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 4);

// But the arrow function not get this arguments value, instead it uses rest
// parameters

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 4, 6);
*/

// Modern JS use rest parametrs


// Primitives VS objects

/*
const me = {
  name: 'Akshay',
  age: 30,
};

// Created a copy of the object
const friend = me;

// Changed the copy
friend.age = 27;

console.log('Friend:', friend);

// Now the original object also changed
console.log('ME:', me);
*/

/*
// What if there really needs to copy an object?

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// To copy an object

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Manu';

console.log(jessicaCopy);
console.log(jessica);

// But there is a problem with this approach, that is it only creates a shallow
// copy of the object, ie only the first level copy, so the inner objects get
// assigned to the old address

const jessicaNested = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  children: ['pappu', 'soori'],
};

// Created a shallow copy
const jessicaCopy2 = Object.assign({}, jessicaNested);
console.log(jessicaCopy2);

// changed the nested object(an array)
jessicaCopy2.children.push('kuttappayi');

// changed the top level
jessicaCopy2.lastName = 'Fernandas';

// Both levels changed
console.log(jessicaCopy2);

// But here also the inner array changed (that we didn't made)
console.log(jessicaNested);

*/

// To make a deep clone of object we use an external library

// 1. No straight method exist as an object contains, methods, properties,

/*
Using object.create

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  children: ['Martin', 'Stevan'],
};

const jessicaFullcpy = Object.create(jessica);
console.log(jessicaFullcpy);


jessicaFullcpy.children.push('Maria');
jessicaFullcpy.lastName = 'Fernandez';

console.log(jessicaFullcpy);
console.log(jessica);

That also creates a shallow copy.
*/

// 1. Using JSON.parse(JSON.stringify(object))

// Don't copies Date objects, functions/methods, undefined, regExp or Infinity
// within the target object.

// It is slower to that it involves two conversions.

/*
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  children: ['Martin', 'Stevan'],
};

const jessicaFullcpy2 = JSON.parse(JSON.stringify(jessica));

// Before
console.log(jessica);
console.log(jessicaFullcpy2);


jessicaFullcpy2.children.push('Maria');
jessicaFullcpy2.lastName = 'Fernandez';

// After
console.log(jessicaFullcpy2);
console.log(jessica);
*/

// 2. A solution from stackoverflow using recursion

/*
function clone(obj) {
  let copy;

  // Handle the 3 simple types, and null or undefined
  if (null == obj || 'object' != typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (const attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }

  throw new Error('Unable to copy obj! Its type isn\'t supported.');
}


const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  children: ['Martin', 'Stevan'],
};

const jessicaFullcpy3 = clone(jessica);

// Before
console.log(jessica);
console.log(jessicaFullcpy3);


jessicaFullcpy3.children.push('Maria');
jessicaFullcpy3.lastName = 'Fernandez';

// After
console.log(jessicaFullcpy3);
console.log(jessica);

*/

const str = 'Jonas';
const jonasCharacters = ['J', 'o', 'n', 'a', 's'];
console.log([...str]);
console.log(jonasCharacters);
console.log([...str] === jonasCharacters);
