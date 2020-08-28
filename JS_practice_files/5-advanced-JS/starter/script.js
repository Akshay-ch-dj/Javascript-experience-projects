// // Function Constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'free'
// };

// // Blueprint: using a function Constructor
// // Standard way in JS

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// // instance using 'new' operator: called Instantiation

// var john = new Person('John', 1990, 'teacher');

/* 'new' operator, creates a new empty object, after the constructor function 
is called with the arguments specified, calling a function creates new 
execution context that also has a 'this' variable, for a regular function call
'this' variable points to global object, but with this function constructor, 
new operator takes care of it makes sure function 'this' points to the empty
object that was created at the beginning.

Then set the properties to the empty object, the new empty object now got the
properties that are defined. Finally it is assigned to the john variable.

An object is created using a function constructor.
*/

// // Add inheritance

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calcAge = function() {
//         console.log(2020 - this.yearOfBirth);
//     }
// }

// var john = new Person('John', 1990, 'teacher');

// john.calcAge();

// var jane = new Person('Jane', 1995, 'No Job');

// var mark = new Person('Mark', 1997, 'designer');

// // All the above created objects got calcAge attached with them, for large 
// // Functions its like that much copies, so it need to be added to the 
// // constructors "prototype" property/

// Adding all the properties and methods that need to be inherited into the
// // constructors "prototype" property.

// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calcAge = function () {
//     console.log(2020 - this.yearOfBirth);
// }

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1995, 'No Job');
// var mark = new Person('Mark', 1997, 'designer');

// john.calcAge();
// jane.calcAge();
// mark.calcAge();

// // The method is not anymore in the constructor but one can use it, cz it is 
// // in the prototype property of the function constructor. 

// // This is a more common practice to attach functions to prototype, but one can
// // also add properties too to the prototype(not really common.)

// Person.prototype.lastName = 'Smith';

// console.log(john.lastName);