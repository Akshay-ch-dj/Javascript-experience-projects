// let i = 45;
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);


// let firstName = 'Akshay';
// let lastName = 'Chandran';
// const yearOfBirth = 1995;

// function calcAge(year) {
//     return 2020 - yearOfBirth;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in '
// + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.
// Today, he is ${calcAge(yearOfBirth)} years old.`)

// const name = `${firstName} ${lastName}`;

// console.log(name.startsWith('J'));
// console.log(name.endsWith('n'));

// // in between the string, There is `includes()`
// console.log(name.includes(' ')); // checks if there is any space

// // To repeat the string
// console.log(`${firstName} `.repeat(3));

// ES6 Arrow Functions

// const years = [1990, 1965, 1982, 1937];

// // ES5 (using map function)
// var ages5 = years.map(function(el) {
//     return 2020 - el;
// });
// console.log(ages5);

// // ES6 - less code & clean code

// let ages6 = years.map(el => 2020 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
// console.log(ages6);

// // More actions
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);

// Arrow Functions: Lexical 'this' keyword.

// // ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         // button with class="green"
//         document.querySelector('.green'). addEventListener('click',
//         function() {
//             var str = 'This is the box number ' + self.position + ' and it is '
//                 + self.color;
//             alert(str);
//         });
//     }
// }
// box5.clickMe(); // "This is the box number undefined and it is undefined"

// // ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         // button with class="green"
//         document.querySelector('.green').addEventListener('click',
//             () => {
//                 const str = `This is the box number ${this.position} and ${''
//                 }it is ${this.color}`;
//                 alert(str);
//             });
//     }
// }
// box6.clickMe(); // "This is the box number 1 and it is green"

// ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         // button with class="green"
//         document.querySelector('.green').addEventListener('click',
//             () => {
//                 const str = `This is the box number ${this.position} and ${''
//                     }it is ${this.color}`;
//                 alert(str);
//             });
//     }
// }
// box6.clickMe(); // "This is the box number 1 and it is green"

// Function constructor with ES6

// function Person(name) {
//     this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 =
//     function(friends) {
//         var arr = friends.map(function(el) {
//             return this.name + ' is friends with ' + el;
//         });
//         console.log(arr);
//     }

// var friends = ['Bob','Jhon', 'Marks', 'Sweet'];
// new Person('Jane').myFriends5(friends);

// Here also the name is not defined cz, of the same reason, the main prototype
// function have access to the 'this' keyword, but the function inside the map
// function doesn't.

// In ES5, there is also a common workaround (This issues are well known ones),
// ie, to use the `bind()` method to make a copy with the `this` variable set to
// `this` of the main `prototype`.

// Person.prototype.myFriends5 =
//     function (friends) {
//         var arr = friends.map(function (el) {
//             return this.name + ' is friends with ' + el;
//         }.bind(this));

//         console.log(arr);
//     }

// var friends = ['Bob', 'Jhon', 'Marks', 'Sweet'];
// new Person('Jane').myFriends5(friends);

// // ES6
// Person.prototype.myFriends5 =
//     function (friends) {
//         var arr = friends.map(el => {
//             return this.name + ' is friends with ' + el;
//         });
//         console.log(arr);
//     }

// var friends = ['Bob', 'Jhon', 'Marks', 'Sweet'];
// new Person('Jane').myFriends5(friends);

// // Destructuring.

// // ES5

// var john = ['John', 25];
// // var name = john[0];
// // var age = john[1];

// // ES6

// const [name, year] = ['John', 25];
// console.log(name);  // John
// console.log(year);  // 25

// // Also with objects
// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// // Destructuring (variable names match the keys)
// const {firstName, lastName} = obj;
// console.log(firstName);  // John
// console.log(lastName);  // Smith

// // If need a separate variable name
// const { firstName: a, lastName: b } = obj;
// console.log(a);  // John
// console.log(b);  // Smith

// // Practical application of destructuring, To return multiple values from
// // a function

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1994);
// console.log(age);
// console.log(retirement);


// Arrays in ES6

// const boxes = document.querySelectorAll('.box');

// // To traverse through the nodelist returned in ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// // To change all box colors to blue (ES5)
// boxesArr5.forEach(function(curr) {
//     curr.style.backgroundColor = 'dodgerblue';
// });

// // In ES6 - It can be done in a single line of code

// Array.from(boxes).forEach(curr => curr.style.backgroundColor = 'pink');

// Loops

// When we need looping through an array, we use `forEach` or `map` method,
// But the problem with both of them is, we can't `break` from them or use the
// `continue` statement, for that we need to go back to conventional for loop,
// But for simple loops it is more code and variables