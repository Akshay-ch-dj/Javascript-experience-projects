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

// // Object.create : - Here we will first define an object that will work as the
// // Prototype, then create a new object based on the prototype.

// var personProto = {
//     calcAge: function() {
//         console.log(2020 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);

// john.name = 'John';
// john.yearOfBirth = 1995;
// john.job = 'teacher';

// var jane = Object.create(personProto, 
// {
//     name: { value: 'Jane' },
//     yearOfBirth: { value: 1971 },
//     job: { value: 'designer'}
// });

// // Object.create :- creates objects that inherits directly from the one passed
// // but with fun. constructor, the object inherits from the constructors prototype
// // property, 

// // Object.create allows one to inherit complex structures( nested objects, arrays)
// //  in an easy way.

// // Primitives vs objects

// // The big difference from variables to primitive is that variables containing
// // primitive holds the data inside the variable itself. 
// // variables associated with objects do not actually contain the objects, but 
// // contains a reference for the place in memory where the objects sits, ie, 
// // the variable just points to that object. 


// // Primitives
// var a = 43;
// var b = a;
// a = 32;
// console.log(a);
// console.log(b);

// // b and a holds its data separately, they don't reference anything

// // objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };
// var obj2 = obj1;

// obj1.age = 30;

// console.log(obj1.age);
// console.log(obj2.age);

// // They both the same, at line 138, no new copy created but only a new reference
// // which points to the first object., obj1 and obj2 holds reference that points to
// // the exact same object in memory.

// // It is the same thing that happens with functions.

// // Functions
// var age = 27;
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// };

// // Fun. to mutate the data
// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

// // The age variable is not changed, a = 30(simple copy created) the a can be 
// // changed as much, cz it is a primitive,
// // (note:- If one need to actually change the global variable assign age = 30
// // just with in the function)
// // For the object, we do not pass any real object to the function but a reference 
// // to the function, [careful about the object amendments in functions.


// // First class functions
// // Functions are also objects, fun. behave like any other object, 
// // can store functions in a variable, 
// // can pass fun. as an argument to other function. 
// // One can return a fun. from a function.

// // Because of all in js -> we got first-class functions.

// var years = [1990, 1995, 1968, 1936, 1999, 2005];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// // fn. functions, Call back functions - fn. passed into function to call later.
// function calcAge(el) {
//     return 2020 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el))  // age is the e
//     } else {
//         return -1;
//     }
// }
    

// var ages = arrayCalc(years, calcAge);
// var fullAges = arrayCalc(years, isFullAge);
// var rates =  arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(rates);

// // fn. returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// // The 'teacherQuestion' variable will now be a function now
// teacherQuestion('John');

// var designerQuestions = interviewQuestion('designer');
// designerQuestions('Madu');
// designerQuestions('Moori');
// designerQuestions('Manasu');
// designerQuestions('Mikkel');
// designerQuestions('Varun');

// // Can call it directly
// interviewQuestion('teacher')('Makri');