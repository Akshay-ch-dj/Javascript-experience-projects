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

// // here, we only call IIFE once cz it is not assigned to any variable,
// // But here IIFE used not to create reusable code, but to escape the global
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

/*
Just got these doubts, and some random notes

Whats my basic understanding till now, Js creates an execution context for
every function called , that contains 3 things

i) variable object:- that stores all the variable declared, inner functions   
declared in the function(called hoisting) and also the arguments passed.

ii) scope chain:- it is a pointer to the location of variable objects - the fn.
got access to, simply the var. objects of current functions and all of its
parents(up to the global context).

iii) 'this' variable:- in a regular fn. call this points to the global
object(window object), in a method call this points to the parent object.

when a function gets called its execution context gets added to the execution
stack, and removed when execution gets completed. In this lecture about
JS closure, I don't completely understands what happening, doubts are,

1) The execution context of main function(here the retirement() fn.) get
closed,does that means cleared from cache/memory, then how it's scope stays
and its variable object remains intact (these are parts of the execution
context object(ie. I think a js object)), when the object gets cleared how its
parameters stays ?

2) Does the closure works on all functions, or if js identifies the functions
with return functions, and holds the vo and scope of those functions .,
expecting the call.

3) By the definition of scope chain, it is clear that the return function
scope will gets pointed to the parent function( ie the retirement() fn here),
is that is why  it not gets removed..

function retirement(retireAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retireAge - age) + a);
    }
}

var retireUS = retirement(66);

Some one says, one of the best way to find a solution is to collect all the
information you got and write it down, your brain will process it
automatically and gives you a better logical answer...that's what I'm doing
now( doing it here cz someone may find it helpful....or some one with better
idea can answer this one..),

what i got up finally is, When a Js script runs,
the parser checks the code.Then it moves to the process of creating execution
context, the first one is the Global context, all lines in the script gets
executed, the functions and variables are hoisted before the execution starts.
scope chain created lexical scoping(parent-children positioning).Every time a
inner(child) function calls new scope chain created in its ex. context.

The execution stack is another JS object(I think...). Which keeps track of the
currently executing function, Individual execution contexts get pushed to
execution stack when a function gets called and popped out, when it completes
the execution.(there is always the global context at the index-0 - until
program closes).

The scope chain is created every time function gets called,
it gets added to the scope chain object, if a variable called doesn't find in
its own scope, it just moves up to look the parent scope. for the return
function in the code, its scope chain includes the parent fun.

scope and the
values for 'a' and 'retireAge' pointing to the variable object of the parent
function, but the parent object is closed its execution, now where to look for
the data...??
my assumptions from above,

1) the parent execution context only removed from the execution stack object,
but it is still in memory, as the pointer is to this location it can be
recovered.

2) There may be some special closure method/function to store this bonded
data, (as said above the complexity is reduced by typing this much, now the
only question how exactly it stored..) (I typed this much cz.. it is asked in
every JS job interview what a closure is? ) But who cares in the deep how
closure works....as for me, I only cares about its practicality, below is the
widely used practical application of closure..

var add = (function () {
    var counter = 0;
    return function () {
            counter += 1;
            return counter;
        }
})();

add();
add();
add();

console.log(add());
console.log(add());
// the counter is now 5

This one uses previously covered IIFE(immediately invoked functions)..
explanations

> The self invoking function only runs once [ '()' at end ], it sets the
counter to zero, also returns a function expression that's get assigned to
'add' variable.

> The returned function(child function) can access it's parent variable
( here the 'counter') and can modify it.

> Now add() is the return function,
every time it called it iterates and return the new counter value

This is the
best way to implement a counter function, cz if we assign the 'counter'
variable as global, it can be accessed by all others and hard to manage in a
large script, Here the scope of the parent function can be called protected by
its child-return function, it is the only function that got the pointer in its
scope chain to the 'counter' variable or simply the only one bound by closure.

*/

// // Counter

// var add = (function () {
//     var counter = 0;
//     return function () { counter += 1; return counter }
// })();

// add();
// add();
// add();

// console.log(add());
// console.log(add());
// // the counter is now 5


// // Bind, Call and Apply

// // This methods allows one to call a function and set the this variable manually.

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal') {
//             console.log('Good ' + timeOfDay + ', Ladies and gentleman!, I\'m ' + this.name
//              + ' I\'m a ' + this.job + ', and I\'m ' +  this.age + ' years old.')
//         } else if (style === 'friendly') {
//             console.log(`Hey! What\'s up?, I\'m ${this.name}, I\'m a
//             ${this.job}, and I\'m ${this.age} years old. Have a nice ${timeOfDay}.`)
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 34,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');

// // USing call method for getting the presentation:- to set the this variable

// john.presentation.call(emily, 'friendly', 'evening');

// // Now all the 'this' in the john method replaced with emily, this is method
// // borrowing,

// // A similar method exists, called 'apply' method, difference is here
// // the arguments passed as an array.

// // john.presentation.apply(emily, ['friendly', 'afternoon']);

// // The bind method, set the 'this' variable explicitly, it not instantly calls
// // the function but instead generate a copy of the function, we can store it
// // somewhere
// // useful to create function with preset arguments,

// var johnFriendly =
// john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// // What's interesting is can use to borrow methods too

// var emilyFormal =
// john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

// var emilyFriendly =
// john.presentation.bind(emily);
// emilyFriendly('friendly', 'afternoon');


// // Practice on earlier example

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

// function isFullAge(limit, el) {
//     return el >= limit;
// }

// // In Japan the age limit is 20, so

// var ages = arrayCalc(years, calcAge);
// var fullAgeJapan = isFullAge.bind(this, 20);
// console.log(fullAgeJapan(calcAge(1990)));

// // OR

// var ages = arrayCalc(ages, fullAgeJapan);
// console.log(ages);

// // Practice

// function countOnline(usersObj) {
//   // Only change code below this line
//   let count = 0;
//     for (let user in usersObj) {
//         if (usersObj[user]['online']) {
//         count++;
//         }
//     }
//     return count;
//   // Only change code above this line
// }


// console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));


// Coding challenge

/* Fun quiz game in the console,
1. Function constructor called question, to describe a question, it should include,
a) question itself
b) answer from which the player can choose the correct one(in object or array)
c) correct answer (I would use a number for this)
2) create a couple of questions using the constructor
3) store them inside an array
4) select one random question and log it on the console, with the possible answers (
    each question should have a number) (as a method in question object)
5) use the prompt function to ask the user for the correct answer. The user should input
    the number of the correct answer such as you displayed it on Task 4.
6) Check if the answer is correct and print to the console whether the answer is
    correct or not (can use another method for this)
7) suppose this could be a plugin for other programmers to use in their code. So
    make sure that all your code is private and doesn't interfere with other programmers
    code (IIFE)
*/

// var Question = function(question, answerList, correctAns) {
//     this.question = question;
//     this.answerList = answerList;
//     this.correctAns = correctAns;
// }

// Question.prototype.checkCorrect = function(response) {
//     return response === this.correctAns;
// }

// Question.prototype.displayCorrect = function(response) {
//     console.log(this.checkCorrect(response));
//     if (this.checkCorrect(response)) {
//         console.log('Woohoo! Correct answer.');
//     } else {
//         console.log("Naan Naa! Wrong answer, Try again");
//     }
// }

// questionList = [];

// questionList.push(
//     new Question(
//         'Who is the co-founder and leader of Tesla motors?',
//         ['Sundar Pichai', 'Elon Musk', 'Jeff Besos'],
//         1
//     )
// );

// questionList.push(
//     new Question(
//         'Who is the american president now?',
//         ['Donald Trump', 'Barack Obama', 'Bill Clinton'],
//         0
//     )
// );

// questionList.push(
//     new Question(
//         'Who is the indian prime minister?',
//         ['Donald Trump', 'Ram Nath Kovind', 'Narendra Modi'],
//         2
//     )
// );


// function randomQues() {
//     var randNo = Math.floor(Math.random() * (questionList.length));
//     console.log(questionList[randNo].question);
//     for (var i = 0; i < 3; i++) {
//         console.log(`${i} : ${questionList[randNo].answerList[i]}\n`);
//     }
//     var response = parseInt(prompt('Open your console, enter the key of your answer.'));
//     questionList[randNo].displayCorrect(response);
// }

// randomQues();

// var askQues = (function() {

//     // Constructor for each question object.
//     var Question = function (question, answerList, correctAns) {
//         this.question = question;
//         this.answerList = answerList;
//         this.correctAns = correctAns;
//     }

//     // Prototype methods for the question object
//     Question.prototype.checkCorrect = function (response) {
//         return response === this.correctAns;
//     }

//     Question.prototype.displayCorrect = function (response) {
//         if (this.checkCorrect(response)) {
//             console.log('Woohoo! Correct answer.');
//         } else {
//             console.log("Naan Naa! Wrong answer, Try again");
//         }
//     }

//     // Array to add questions
//     questionList = [];

//     questionList.push(
//         new Question(
//             'Who is the CEO of Tesla motors?',
//             ['Sundar Pichai', 'Elon Musk', 'Jeff Bezos'],
//             1
//         )
//     );

//     questionList.push(
//         new Question(
//             'Who is the american president now?',
//             ['Donald Trump', 'Barack Obama', 'Bill Clinton'],
//             0
//         )
//     );

//     questionList.push(
//         new Question(
//             'Who is the indian prime minister?',
//             ['Donald Trump', 'Ram Nath Kovind', 'Narendra Modi'],
//             2
//         )
//     );

//     // the return function- only one got access to the constructor and the list
//     // bounded by closure.
//     return function () {
//         // randomly select a question from the list
//         var randNo = Math.floor(Math.random() * (questionList.length));
//         console.log(questionList[randNo].question);
//         for (var i = 0; i < 3; i++) {
//             // Format the display of options
//             console.log(`${i} : ${questionList[randNo].answerList[i]}\n`);
//         }
//         // prompt input connverted to integer for checking
//         var response = parseInt(prompt('Open your console, enter the key of your answer.'));
//         // check the response using inbuilt method(prototype)
//         questionList[randNo].displayCorrect(response);
//     }
// })();

// askQues();

/*
Expert or lvl 2 update to the code

1. After you display the results, display the next random question( a function
for this call it after displaying the result)

2. After task 8, the game never ends. so include the option to quit the game if
the user writes 'exit' instead of the answer, in this case don't call the function
from task 8.

3. Track the user's score to make the game more fun! each time an answer is correct
add 1 point to the score (hint: use closure)

4. Display the score in the console.

*/