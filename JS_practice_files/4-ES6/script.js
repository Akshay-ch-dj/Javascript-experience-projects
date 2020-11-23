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

// To traverse through the nodelist returned in ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// // To change all box colors to blue (ES5)
// boxesArr5.forEach(function(curr) {
//     curr.style.backgroundColor = 'dodgerblue';
// });

// // In ES6 - It can be done in a single line of code

// Array.from(boxes).forEach(curr => curr.style.backgroundColor = 'dodgerblue');

// console.log('kjds');

// function narcissistic(value) {
//     let sum = 0;
//     Array.from(String(value), Number).forEach(num => sum += num ** String(value).length);
//     return sum === value
// }
// console.log(narcissistic(7));
// console.log(narcissistic(371));
// console.log(narcissistic(153));
// console.log(narcissistic(45));

// // Loops

// When we need looping through an array, we use `forEach` or `map` method,
// But the problem with both of them is, we can't `break` from them or use the
// `continue` statement, for that we need to go back to conventional for loop,
// But for simple loops it is more code and variables.

// ie, in the ES5 way,
// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to Blue';
// }

// In ES6 to overcome this issue a new loop called `for of` loop, introduced
// const boxesArr6 = Array.from(boxes);

// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to Blue';
// }

// ES5

// var  ages = [12, 17, 16, 14, 19, 15, 11];

// // To determine the index of the ages which are greater than or equal to 18

// var full = ages.map(function(cur) {
//     return cur >= 18
// })

// console.log(full);

// // Which one is full age
// console.log(full.indexOf(true));

// // to find the exact year
// console.log(ages[full.indexOf(true)]);

// // In ES6, index, find methods

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

// // The spread operator

// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 21, 34, 23);
// console.log(sum1);

// // If the numbers are in an array,
// // ES5

// var ages = [18, 21, 34, 23];

// // 'bind', 'call' and 'apply' methods, need 'this'(here don't any use so 'null')
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // In ES6, the `spread` operator simplifies it all,
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// // A spread operator denoted by `...`(three dots), the operator just expands
// // the array in to its components.
// // It got more use cases, eg: for joining arrays.

// // const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];

// const bigFamily = [...familySmith, ...familyMiller, 'lilly'];

// // As explained the `spread` operator just expands the array and put there, so
// // it gives the output of two arrays combined.text-content
// console.log(bigFamily);

// It can be applied not just on an array but also on nodelists.

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');

// Rest parameters

// // ES5

// function isFullage5() {
//     console.log(arguments);
//     var argsArray = Array.prototype.slice.call(arguments);

//     argsArray.forEach(function(cur) {
//         console.log((2020 - cur) >= 18);
//     })
// }

// // in ES5, to receive an undefined number of arguments, don't define any
// // parameters for a function, then just use the `arguments` variable(which is
// // similar to `this` in which every execution context get access to.)

// isFullage5(1990, 1995, 1996, 2013, 1997);
// // It returns not exactly an array(does not got an Array, function constructor)
// // but an object, For to loop through it, use the ES5 hack to convert it to an
// // array

// // ES6, by making use of rest parameters

// function isFullage6(...years) {
//     years.forEach(cur => console.log((2020 - cur) >= 18));
// }

// isFullage6(1990, 1995, 1996, 2013, 1997);

// // The difference between the spread operator and the rest parameter is actually
// // the place where we use it each, `spread` is used in a function call, and
// // `rest` operator is in a function declaration to accept an arbitrary number
// // of parameters

// ES5, modifying it by giving a limit, at which age the person will got full
// age

// function isFullage5(limit) {
//     var argsArray = Array.prototype.slice.call(arguments, 1);

//     console.log(argsArray); // outs after omitting the first number

//     argsArray.forEach(function (cur) {
//         console.log((2020 - cur) >= limit);
//     })
// }

// // But there is a problem, the `limit` will also be part of the arguments, like
// isFullage5(21, 1990, 1995, 1996, 2013, 1997);

// // In ES5, the problem is overcome using the same slice method, (they basically
// // used to cut a piece of an array)

// // In ES6, there is not that much complication to add an extra argument
// function isFullage6(limit, ...years) {
//     years.forEach(cur => console.log((2020 - cur) >= limit));
// }

// isFullage6(17, 1990, 1995, 1996, 2003, 1997);

// Default Parameter

// To Preset one or more parameters of a function(if needed a default value)

// // The ES5 way of adding default parameter.

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);

// // Here we only specify the first two arguments required, js assigned undefined to the
// // other two values.

// console.log(john);

// // But if added a default for the last name and nationality, it can be solved, in ES5 it can be added
// // using if-else statements or turnery operators,

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality = nationality === undefined ? 'Indian' : nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// console.log(john);

// // In ES6,

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// Maps in ES6

// A map is a new key: value data structure in javascript,

// The difference is, one can use anything(numbers, strings, boolean or even functions and numbers)
// in place of keys.(in objects, it is limited to strings)

// Creating a map:

// const question = new Map();

// // Setting up values
// // 0 position
// question.set('question', 'What is the official name of the latest major javascript version?');

// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES 2015');
// question.set(4, 'ES 2017');

// question.set('correct', 3);

// question.set(true, 'Correct answer:D');
// question.set(false, "Wrong, please try again!");

// console.log(question);

// // To get values from it.
// console.log(question.get('question'));

// // to get length of the map
// console.log(question.size);

// // Delete data from map
// // question.delete(4);
// // // here the element with key 4, (4 => 'ES 2017') gets deleted.
// // //  if deletion done on a non-existent element.
// // question.delete(4);

// // Check if data is there with "has".
// if (question.has(4)) {
//     // question.delete(4);
//     console.log("has worked");
// }

// To clear
// question.clear();
//

// Looping through maps,

// forEach similar to other iterables, it has access to current element, key and the entire map.
// question.forEach((value, key) => console.log(`${key} and ${value}`));

// using the for of method
// for (let [key,value] of question.entries()) {
//     console.log(`${key} and ${value}`);
// }

// // Instead of printing all elements from the map, lets try to print all 4 answers
// for (let [key, value] of question.entries()) {
//     if (typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));
// Check for the correct answer, if the expression is correct it will extract the 'true' key value
// console.log(question.get(ans === question.get('correct')));

// maps are now better than object to create hash maps, use any data type as keys, maps are iterable
// // easily loop through them and to manipulate data with them, get the size of a map using the `size` property
// console.log(question.size)
// Also it is easy to add and remove data from maps

// CLASSES IN ES6

// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1995, 'teacher');
// john5.calculateAge();

// ES6, nicely structured, Easier to write syntactic sugar
// class Person6 {
//     // All classes need a constructor method
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     // prototype just added inside the class
//     calculateAge() {
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there!');
//     }
// }

// const john6 = new Person6('John', 1995, 'teacher');
// john6.calculateAge();

// Person6.greeting();

// Inheritance between classes

// // In ES5

// var Person5 = function(name, yearOfBirth, gender) {
//     // Just a default value
//     this.isHuman = true;
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.gender = gender;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// // The person5  function constructor, will be the superclass here
// // The subclass will be the athlete class

// var Athlete5 = function (name, yearOfBirth, gender, olympicGames, medals) {
//     // Just calls the parentclass or superclasss
//     Person5.call(this, name, yearOfBirth, gender);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// // Creating an instance
// var usain = new Athlete5("Usain Bolt", 1982, "Male", 4, 18);
// console.log(usain.isHuman);
// console.log(usain.yearOfBirth);
// console.log(usain.name);
// console.log(usain.olympicGames);
// console.log(usain.medals);

// // There need to call the superclass fun. constructor with the `this` keyword, cz
// // (remember with the `new` operator, it creates a new instance of the class and assign
// // the `this` keyword to it, thereby inheriting all the parent properties to the instance created,
// // also prototype methods)
// // To inherit all the properties of superclass(Person5) to the Athlete5 class, use the call method to
// // call the superclass, the `this` sets the current class as a child.
// // The call method (learnt earlier as a trio ---call, apply, bind--- methods of JS objects) accepts the first
// // argument
// var sampleObj = {num:2};

// var justAdd = function(a, b) {

//     return this.num + a + b;
// };

// // But the there is no "num" assigned to `this` function
// // To assign, use the `call` method
// var answer;
// answer = justAdd.call(sampleObj, 3, 5);
// console.log(answer);  // Gives 10

// // Here, the `justAdd` is called with the sample object (set to `this`), so `this.num = 3`

// // To use the apply method,
// var argArr = [3, 5];
// answer = justAdd.apply(sampleObj, argArr);

// console.log(answer);  // gives same answer 10
// // apply just uses an array of arguments.

// // To use the bind method
// answer = justAdd.bind(sampleObj, 3, 5);

// console.log(answer); // The answer now doesn't returns a value, but a function

// // To examine it
// console.dir(answer);
// // It is now a function with name `bound justAdd` and has "[[BoundThis]]: Object - num:2 ,[[BoundArgs]]: Array(1), 0: [3,5]"

// // It needed to pass arguments as single (not as an array)
// console.log(answer()); // Gives 10

// // But the answer now is a function, one can pass the arguments directly
// answer = justAdd.bind(sampleObj);
// console.log(answer(3, 5));

// // Above, done the opposite thing,ie called the Person5 fun. constructor with current one(ie the `this`), and used
// // no arguments.

// // To create the correct prototype chain(manually setting), or to inherit prototype from the parent use `Object.create`

// Athlete5.prototype = Object.create(Person5.prototype);
// // Now the prototype chains are connected,

// var usain = new Athlete5("Usain Bolt", 1982, "Male", 4, 18);

// // Testing
// usain.calculateAge(); // Returns 38

// // Can also set subclasse's(Athlete5) own prototype property,(after connecting the prototypes)
// Athlete5.prototype.wonMedal = function() {
//     this.medals++;
//     console.log(this.medals);
// }

// var usain = new Athlete5("Usain Bolt", 1982, "Male", 4, 18);
// // Testing
// usain.wonMedal(); // Returns 19

// Now to do the same in ES6,

// class Person6 {
//     // All classes need a constructor method
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     // prototype just added inside the class
//     calculateAge() {
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
// }

// // ES6 got classes (not in the same meaning as classes in other languages), with `extends` keyword,
// // the subclass "extends" from the super class.

// class Athlete6 extends Person6 {
//     constructor(name, yearOfBirth, job, olympicGames, medals) {
//         // No need to manually call the super class, everything happens behind the scenes
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedal() {
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6('John', 1985, 'swimmer', 3, 10);

// johnAthlete6.wonMedal(); // 11
// johnAthlete6.calculateAge(); // 35

// Challenges with ES6.

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

THE CHALLENGE

You got 3 parks (store them in an object, keys 1 2 3 / use maps), similarly 4 streets, store
it also in a similar data structure. all parks and streets can be

there are functions/ methods needed it can be standalone functions/ prototype functions of park object,(lets use em..)
ie for park object it needed
1. fn. to find the tree density of each park. (with no. of trees input)
2. Average Age of the parks. (with inbuilt build year, sum of all ages/no of parks)
3. Use the filter method to filter out parks that got more than 1000 trees.

For the street,
1. use a map fn to, classify and tag a street as tiny/small/normal/big/huge, (from a length input)
(default: normal), Use switch case or any ES6 feature,
2. Find the total and average length of  streets

Last log the data to console.

And finally which paradigm or approach to take, the functional approach or object oriented one

*/

// 1. Functional Approach. (MORE ES5 way)

// // How to protect data with {}, or modules
// const data = (function () {
//     const parks = [
//                     {name: 'Green Park', year: '2001', treeCount: 598, area: 2},
//                     {name: 'HWS Park', year: '1994', treeCount: 1052, area: 10},
//                     {name: 'ManGo Park', year: '1990', treeCount: 2005, area: 15}
//     ];

//     const streets = [
//                     {name: 'Michael Street', year: 1948, streetLen: 5},
//                     {name: 'Greenway Street', year: 2005, streetLen: 10},
//                     {name: 'CaveGo Street', year: 1985, streetLen: 16},
//                     {name: 'MG street', year: 1900, streetLen: 2}
//     ];

//     return {
//         park: parks,
//         street: streets
//     };
// })();

// const operations = (function (data) {
//     return {
//         // Parks operations

//         tree_density: function(park) {
//             return (park.treeCount/park.area);
//         },

//         avg_park_age: function() {
//             // Using map
//             const parkAges = data.park.map(item => {
//                 return new Date().getFullYear() - item.year;
//             })

//             // Using reduce, b = value from array, a return value of iteration
//             // '0' is the current value(initial value, which is required)
//             const ageSum = parkAges.reduce((a, b) => a + b, 0);

//             return ageSum/data.park.length;
//         },

//         find_large_parks: function() {
//             return data.park.filter(p => p.treeCount > 1000)
//         },

//         // Street operations
//         total_street_length: function() {
//             return  data.street.reduce((sum ,streetItem) => sum + streetItem.streetLen, 0);
//         },

//         avg_street_length: function() {
//             return this.total_street_length()/data.street.length;
//         },

//         classify_streets: function() {

//             // tiny: 1km or less
//             const compData = {tiny: 1, small: 3,
//                               normal: 5, big: 10, huge: 20};

//             // function that takes a street and returns its category.
//             tagStreets = (street) => {
//                 const len = street.streetLen;

//                 switch (true) {
//                     case (len <= compData.tiny):
//                         return `${street.name} built in ${street.year}, is a tiny street`;
//                     case (len > compData.tiny && len <= compData.small):
//                         return `${street.name} built in ${street.year}, is a small street`;
//                     case (len > compData.small && len <= compData.normal):
//                         return `${street.name} built in ${street.year}, is a normal street`;
//                     case (len > compData.normal && len <= compData.big):
//                         return `${street.name} built in ${street.year}, is a big street`;
//                     case (len > compData.big && len <= compData.huge):
//                         return `${street.name} built in ${street.year}, is a huge street`;
//                     case (len > compData.huge):
//                         return `${street.name} built in ${street.year}, is out of state boundary`;
//                     default:
//                         return `${street.name} built in ${street.year}, is a normal street`;
//                 }
//             }

//             // attach tag street function to each streets
//             return data.street.map(tagStreets);
//         }
//     }
// })(data);

// console.log("----------PARKS REPORT----------");
// console.log(`Our three parks have an average of ${operations.avg_park_age()} years`);

// data.park.forEach((p) => {
//     console.log(`${p.name} has a tree density of ${operations.tree_density(p)} trees per sq. km`);
// })

// const largeParks = operations.find_large_parks();
// console.log(`${largeParks.map(p => p.name).join(",")} got more than 1000 trees`);

// console.log("------------Streets Report----------");
// console.log(`Our four streets have a total length of ${operations.total_street_length()} km with an average of ${operations.avg_street_length()} km.`);

// const streetClassifyData = operations.classify_streets();
// streetClassifyData.forEach((s) => {
//     console.log(s);
// })

/*
// 2. Class or OOP based approch.active

// The park object constructor
class Park {
  constructor(name, year, treeCount, area) {
    this.name = name;
    this.year = year;
    this.treeCount = treeCount;
    this.area = area;
  }

  // Park object prototype methods
  tree_density() {
    return this.treeCount / this.area;
  }

  calc_age() {
    return new Date().getFullYear() - this.year;
  }

  is_large_park() {
    return this.treeCount > 1000;
  }
}

// The street object constructor (which extends from the park, also got the calc_age function )
class Street extends Park {
  constructor(name, year, streetLen) {
    super(name, year);
    this.streetLen = streetLen;
  }

  // Street object prototype properties
  classify_street() {
    const compData = { tiny: 1, small: 3, normal: 5, big: 10, huge: 20 };
    const len = this.streetLen;

    switch (true) {
      case len <= compData.tiny:
        return `${this.name} built in ${this.year}, is a tiny street`;
      case len > compData.tiny && len <= compData.small:
        return `${this.name} built in ${this.year}, is a small street`;
      case len > compData.small && len <= compData.normal:
        return `${this.name} built in ${this.year}, is a normal street`;
      case len > compData.normal && len <= compData.big:
        return `${this.name} built in ${this.year}, is a big street`;
      case len > compData.big && len <= compData.huge:
        return `${this.name} built in ${this.year}, is a huge street`;
      case len > compData.huge:
        return `${this.name} built in ${this.year}, is out of state boundary`;
      default:
        return `${this.name} built in ${this.year}, is a normal street`;
    }
  }
}

// Creating park objects and storing them in a map object
const parks = new Map();

parks.set(1, new Park('Green Park', '2001', 598, 2));
parks.set(2, new Park('HWS Park', '1994', 1052, 10));
parks.set(3, new Park('ManGo Park', '1990', 2005, 15));

const streets = new Map();

streets.set(1, new Street('Michael Street', 1948, 5));
streets.set(2, new Street('Greenway Street', 2005, 10));
streets.set(3, new Street('CaveGo Street', 1985, 16));
streets.set(4, new Street('MG street', 1900, 2));

// Global functions

// 1. Avg park age
avg_park_age = () => {
  const parkAges = [];
  for (const [key, value] of parks.entries()) {
    parkAges.push(value.calc_age());
  }

  const ageSum = parkAges.reduce((a, b) => a + b, 0);
  return ageSum / parks.size;
};

// 2. Total Street length.
total_street_length = () => {
  const streetLengths = [];
  for (const [key, value] of streets.entries()) {
    streetLengths.push(value.streetLen);
  }

  return streetLengths.reduce((a, b) => a + b, 0);
};

// 3. Average Street Length
avg_street_length = () => {
  return total_street_length() / streets.size;
};

console.log('----------PARKS REPORT----------');
console.log(
  `Our ${parks.size} parks have an average of ${avg_park_age()} years`
);

const largeParksKey = [];
parks.forEach((value, key) => {
  console.log(
    `${
      value.name
    } has a tree density of ${value.tree_density()} trees per sq. km`
  );

  if (value.is_large_park()) {
    largeParksKey.push(key);
  }
});

console.log(
  `${largeParksKey
    .map((k) => parks.get(k).name)
    .join(', ')} got more than 1000 trees`
);

console.log('------------Streets Report----------');
console.log(
  `Our four streets have a total length of ${total_street_length()} km with an average of ${avg_street_length()} km.`
);

streets.forEach((value, key) => {
  console.log(value.classify_street());
});
*/
