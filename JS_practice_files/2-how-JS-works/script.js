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
