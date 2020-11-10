'use strict';

// JShint settings default
// https://github.com/jshint/jshint/blob/4c2d091b7e50ce2681ee48a104578bb969c189ae/examples/.jshintrc#L79

//
/*
jsHint settings in VSCode
"jshint.options": {
    // to set document, window, etc.. as global and use in browser mode, there is also node mode.
    "browser": true,
    // Use the 'use strict' globally
    "globalstrict": true,
    // developer on, othervise console.log..etc will show some error
    "devel": true,
    // use ES6
    "esversion": 6
 }

*/

///////////////////////////////////////
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


///////////////////////////////////////
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



///////////////////////////////////////
// Lecture: The this keyword

// Scoping practice

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `You are ${firstName} age ${age}, born in ${birthYear}`;
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
