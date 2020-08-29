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
//         return Math.round(206.9 - (0.67 * el))  // age is the el
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


// Practice first class functions

// function countdown(callback) {
//     // setTimeout function: to set intervals for execution
//     // setTimeout(function, 2000) :- wait for two second, then execute the fun.
//     setTimeout(callback(), 2000);
// }

// function createMultiplier(multiplierValue) {
//     return function (value) {
//         return value * multiplierValue;
//     }
// }

// var doubler = createMultiplier(2);
// var tripler = createMultiplier(3);
// console.log(doubler(4));
// console.log(tripler(4));


// // IIFE: - Immediately invoked functions

// If we need declare a variable that is not visible globally, one way is to 
// declare it inside a function

// function game() {
//     var score = Math.random() * 10; // (0 - 9, incl. decimals)
//     console.log(score >= 5);
// }

// game();

// // With using IIFE, 

// (function () {
//     var score = Math.random() * 10; // (0 - 9, incl. decimals)
//     console.log(score >= 5);
// })();

// // Using the parenthesis- "(fun..)", it just trick the js parser- it didn't 
// // think as function. (the things inside the '()' cannot be a function.
// // It should be treated as a expression, not as a fun. declaration. the variable
// // "score" cannot be accessed from outside, data privacy.

// // console.log(score); // which is undefined

// // Passing arguments to IIFE,

// (function (goodLuck) {
//     var score = Math.random() * 10; // (0 - 9, incl. decimals)
//     console.log(score >= 5 - goodLuck);
// })(5);

// // We can only call IIFE once cz it is not assigned to any variable,
// // But we are not using IIFE to create reusable code, but to escape the global 
// // scope/Data privacy.


// // JS CLOSURES


// // fn. to calculate how many years left until retirement

// function retirement(retirAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirAge - age) + a);
//     }
// }

// // The retire age differs for country to country

// var retireUS = retirement(66);
// retireUS(1995);

// // or

// retirement(60)(1994);

// // There is probably unnoticed thing happens, ie. var a, and the retirAge 
// // parameter are accessible to the anonymous return function.
// // By the execution stack workflow, a function gets popped out from the stack
// // after its execution, with the first call with 'retirement(66)', fun. runs 
// // and returns (here another fun.) value to retireUS, its running completed and 
// // gets kick out from the stack, but somehow the values are available again to 
// // use on the retireUS(inner Function) at the time we call it.
// // 
// // THIS IS THE CLOSURE.
// // summary:- An inner function has always access to the variables and 
// // parameters of its outer function, even after the outer function has 
// // returned.
// // The secret to closure is even after a function returns and its ex. context
// // get closed, but it didn't get removed from the scope chain.
// // ie the var. object and the scope chain doesn't gone. its still in memory 
// // and can be accessed.
// // (the ex. context consists of three main parts. 
// // Variable Object (VO), Scope chain, 'this variable')
// // When we call retireUS it puts a new execution context on the stack. In the 
// // scope chain, since inner function to the retirement written lexically, it got
// // gets access to its scope.
// // Since the variable object of the retirement function is still there, the scope
// // chain stays intact, ie. it keeps working, so one can access the variables 
// // that are created in the retirement function long after the fun. completes its 
// // execution.(after its execution context is gone).
// // The current execution context has closed in on the outer variable object(
// // of retirement), it can use it, thats why its called closure, the scope chain 
// // always stays intact.
// // We don't create a closure manually, its a setting/feature built in to js, 

// // SUMMARY: An inner function has always access to the variables and parameters
// // of its outer function, even after the outer function has returned.
// // 
// // 


// function retirement(retirAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirAge - age) + a);
//     }
// }

// // The retire age differs for country to country

// var retireUS = retirement(66);
// var retireGermany = retirement(65);
// var retireIndia = retirement(63);

// retireUS(1995);
// retireGermany(1995);
// retireIndia(1995);

// // Challenge - interview question function with closure

// function interviewQuestions(job) {
//     return function(name) {
//         switch (job) {
//             case 'designer':
//                 console.log(`${name} can you please explain what UX design is`);
//                 break;
//             case 'teacher':
//                 console.log(`What subject do ypu teach, ${name}?`);
//                 break;
//             default:
//                 console.log(`Hello ${name}, what do you do?`);
//                 break;
//         }
//     }
// }

// var teacherAppl = interviewQuestions('teacher');
// teacherAppl('sandhya');