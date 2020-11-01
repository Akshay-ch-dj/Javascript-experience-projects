'use strict'
// console.log('hello world');

// let firstName = 'Johnas';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 30;

// '$' and "_" can be used to start a variable name

// alert for data input

// var lastName = prompt('What is his last name');
// console.log(lastName)

// operators

// var year, yearJohn, yearMark;
// year = 2020;
// yearJohn = year - 28;
// yearMark = year - 34;

// // console.log(`John's DOB: ${yearJohn}`);

// // The typeof operator

// console.log(typeof yearJohn)  // number
// var x;
// var y = null;
// console.log(typeof x);
// console.log(typeof y);

// operator precedence

// var now = 2020;
// var yearJohn = 1989;
// var fullAge = 20;

// var isFullAge = now - yearJohn >= fullAge;
// // '-' executed first cz it got more operator precedence
// // USE grouping '()' arithmetic, cz it got the highest precedence

// x = (3-5)*4 - 6;
// console.log(x);
// console.log(isFullAge);

// // Multiple assignments

// var x, y;
// x = y = (3/5)-6+(3*5);

// // Assignment operator works from right to left

// console.log(x, y);


// challenge1

// BMI = mass/(height**2)

// var massOfMark = 70;

// console.log(typeof massOfMark)

// var massOfJohn = 78;
// var heightOfMark = 1.65;
// var heightOfJohn = 1.64;

// function BMIcalc(mass, height) {
//     return mass/(height**2)
// }

// var BMIofMark = BMIcalc(massOfMark, heightOfMark);
// var BMIofJohn = BMIcalc(massOfJohn, heightOfJohn);

// console.log(`BMI of Mark: ${BMIofMark} \nBMI of John: ${BMIofJohn}`)
// console.log(`Is Mark's BMI higher than John's? ${BMIofMark > BMIofJohn}`)

// // if - else

// var firstName = 'Akshay';
// var civilStatus = 'single';

// var isMarried = false;

// if (civilStatus === 'married') {
//     console.log(firstName + 'is married');
// } else {
//     console.log(firstName + ' misaries will end soon :)')
// }

// if (isMarried) {
//     console.log(firstName + 'is married');
// } else {
//     console.log(firstName + ' misaries will end soon :)')
// }

// Boolean logic &&-AND, ||-OR, !-NOT

// // Ternary operator
// // if-else in one line

// var firstName = 'Akshay';
// var age = 25;

// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// // Either beer or juice as result

// console.log(`Yes ${firstName} drinks ${drink}`)

// // switch statement

// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// // Truthy and Falsy Values

// // falsy values:- null, 0, '', NaN
// // They turn out to be false when evaluated on an If else condition.
// // Truthy values:- Not falsy values

// var height = 0; // '0' is also a falsy value, need to consider the occurance
// // of zero in every if-else block--> it may simply trip em all.
// // Even check the empty strings in cases that affects.(|| height === '')

// if (height || height === 0 ) {
//     console.log('variable is defined');
// } else {
//     console.log('variable has NOT been defined');
// }

// Type coercion:- js tries to type convert things, more of trap than a help.

// Coding challenge

// Johnes team score in last 3 cricket matches. 89, 120, 103 runs.(10 over matches)
//  Mikes's team scores : - 116, 94 and 123

// 1) calc. tha avg of each team
// 2) declare which team wins in avg. colnsole.log winner with avg score.
// 3) change scores to show different winners. Consider draw too.

// 4) Mathew also playes cricket his team scored 97, 134 and 105 points.
// compare this three and log the average winner.

// function avgCalc(score1, score2, score3) {
//     return (score1 + score2 + score3)/ 3
// }

// function roundToTwo(num) {
//     return +(Math.round(num + "e+2") + "e-2");
// }

// avgJohnes = roundToTwo(avgCalc(101, 120, 103));
// avgMikes = roundToTwo(avgCalc(101, 120, 103));
// avgMathew = roundToTwo(avgCalc(102, 120, 103));

// function showWinner(avgJohnes, avgMikes, avgMathew) {
//     if (avgJohnes > avgMikes && avgJohnes > avgMathew) {
//         return (`Jones team is the winner with avg score ${avgJohnes}`);
//     } else if (avgMikes > avgMathew) {
//         return (`Mikes team is the winner with avg score ${avgMikes}`);
//     } else if (avgMikes < avgMathew) {
//         return (`Mathew\'s team is the winner with avg score ${avgMathew}`);
//     } else {
//         var drawTeam;
//         if (avgJohnes === avgMikes && avgJohnes === avgMathew) {
//             drawTeam = 'All';
//         } else if (avgJohnes === avgMikes) {
//             drawTeam = 'Mike\'s and Johne\'s'
//         } else if (avgMikes === avgMathew) {
//             drawTeam = 'Mike\'s and Mathew\'s'
//         } else {
//             drawTeam = 'Johne\'s and Mathew\'s'
//         }
//         return (`${drawTeam} teams are in draw`)
//     }
// }

// console.log(showWinner(avgJohnes, avgMikes, avgMathew));

// // Functions

// function calcAge(birthYear) {
//     return 2020 - birthYear;
// }

// function yearsUntilRetairment(year, firstName) {
//     var age = calcAge(year);
//     var retirement = 65-age;
//     console.log(`${firstName} retires in year ${2020 + retirement}`)
// }

// yearsUntilRetairment(1995, 'Akshay')

// function statements and expressions


// // Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaching now';
//         case 'driver':
//             return firstName + ' drives a cab';
//         case 'designer':
//             return firstName + ' designs some websites';
//         default:
//             return firstName + ' got no job';
//     }
// }

// console.log(whatDoYouDo('noJob', 'Akshay'));

// // Expressions always produce a value other than declarations(usual function
// // declarations)

// //  Arrays

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1992, 1994, 1995);

// console.log(names[2]); // No negative indexes

// // Length of the array

// console.log(names.length);

// names[1] = 'Ben';

// names[5] = 'Mary';  // Got two empty cells then "mary"
// console.log(names);

// // Can hold different data types

// var john = ['John', 'Smith', 1990, 'teacher', false]

// // Array methods

// john.push('blue');  // Add element to the end of the array
// john.unshift('Mr.');  // Add element to the start of the array
// console.log(john);

// john.pop() // Removes the last element
// john.pop()
// console.log(john);

// john.shift()  // Removes the first element

// console.log(john);

// console.log(john.indexOf(1990));


// challenge 3


// // Different restaurant bills $124, $48 and $268.

// // Tip calculator: likes to tip 20% of the bill when the bill is less than
// // $50, 15% when the bill is between $50 and $200, and 10% if the bill is
// // more than $200.

// // in the end needs an array with all the three tips and another one with
// // all the final paid amounts(bill + tip).

// function roundToOne(num) {
//     return +(Math.round(num + "e+1") + "e-1");
// }

// var tip = function(bill) {
//     if (bill < 50) {
//         return roundToOne(0.2 * bill);
//     } else if (bill <= 200 && bill >= 50) {
//         return roundToOne(0.15 * bill);
//     } else if (bill > 200) {
//         return roundToOne(0.1 * bill);
//     }
// }

// function billDisplay(bill1, bill2, bill3) {
//     tipList = [tip(bill1), tip(bill2), tip(bill3)];
//     amountList = [tipList[0] + bill1, tipList[1] + bill2, tipList[2] + bill3];
//     console.log(`The list of tips: ${tipList}\n\The list of total amounts: ${amountList}`);
// }

// billDisplay(124, 48, 268)

// // objects and properties

// var akshay = {
//     firstName: 'Akshay',
//     lastName: 'Chandran',
//     dob: 1995,
//     family: ['Jane', 'Mark', 'Bob'],
//     job: 'No-Job',
//     isMarried: false
// };

// console.log(akshay.firstName);  // Direct approach
// console.log(akshay['lastName']);  // string approach

// x = 'dob';

// console.log(akshay[x]);

// // change data

// akshay.job = 'not going for a job';
// akshay['isMarried'] = true;
// console.log(akshay)

// var aks = new Object();  // new object syntax.

// // Methods in object

// var akshay = {
//     firstName: 'Akshay',
//     lastName: 'Chandran',
//     dob: 1995,
//     family: ['Jane', 'Mark', 'Bob'],
//     job: 'No-Job',
//     isMarried: false,
//     calcOwnAge: function() {
//         this.age = 2020 - this.dob;         // The 'this' keyword first appearance
//     },
// };

// // console.log(akshay.calcAge(1995));
// console.log(akshay.calcOwnAge());

// // akshay.age = akshay.calcOwnAge();
// // console.log(akshay.age);  // This can be done directly inside the object
// console.log(akshay);

// Coding challenge 4

// The first challenge(BMI) with objects

// // For rounding off the decimal by two places(from stackoverflow)
// function roundToTwo(num) {
//     return +(Math.round(num + "e+2") + "e-2");
// }


// // challenge
// var mark = {
//     fullName: 'Mark Mathayi',
//     mass: 65,
//     height: 1.60,
//     calcBMI: function() {
//         this.BMI = this.mass/(this.height**2);
//         return roundToTwo(this.BMI);
//     }
// };

// var john = {
//     fullName: 'John Thommi',
//     mass: 77,
//     height: 1.64,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return roundToTwo(this.BMI);
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// function displayBMI(person1, person2) {
//     if (person1.BMI > person2.BMI) {
//         var bmiChampion = {
//             winner: person1.fullName,
//             BMI: person1.BMI
//         };
//     } else if (person1.BMI < person2.BMI) {
//         var bmiChampion = {
//             winner: person2.fullName,
//             BMI: person2.BMI
//         };
//     } else {
//         var bmiChampion = {
//             winner: `Both ${person1.fullName} and ${person2.fullName} BMI
//             are same.`,
//             BMI: person1.BMI
//         };
//     }

//     console.log(`Highest BMI: ${bmiChampion.winner}\nBMI value: ${roundToTwo(bmiChampion.BMI)}`)
// }

// displayBMI(mark, john);

// // Loops

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var akshay = ['Akshay', 'Chandran', 1998, 'designer', false];

// for (var i = 0; i < akshay.length; i++) {
//     console.log(akshay[i]);
// }

// i = 0;
// while(i < akshay.length) {
//     console.log(akshay[i]);
//     i++;
// }


// // Break and continue
// var akshay = ['Akshay', 'Chandran', 1998, 'designer', false];

// for (var i = 0; i < akshay.length; i++) {
//     if (typeof(akshay[i]) !== 'string') continue;
//     console.log(akshay[i]);
// }
//  for (var i = 0; i < akshay.length; i++) {
//      if (typeof(akshay[i]) == 'number') break;
//      console.log(akshay[i]);
//  }


// // Challenge 5:- Advanced Tip calculator

// // John and family goes to 5 different locations.
// //  billList = [124, 48, 268, 180, 42];
// // 20% when bill is less than $50, 15% => 50 <= bill < 200, 10% bill >= 200
// // use objects and loops
// // object with array for bill value, method to calc. tip, iterate and calc
// // the tip
// // o/p. create a new array containing all tips, array containing final paid
// // amounts (bill + tip).

// // Extra: -  Marks family also gone for a trip, 4 different restaurants,
// // bills, $- 77, 375, 110, 45
// // Marks way of tip, 20% => bill < 100,  10% => 100 - 300, 25% - bill > 300
// //  use a function to calculate tha avg. of given array of tips
// //  Calculate the average tip for each family.
// //  log on which family paid the highest tip in average.


// var john = {
//     name: 'Jhon Kurishinkal',
//     bills: [124, 48, 268, 180, 42],
//     calcTip: function(b = this.bills) {
//         this.tipList = [];
//         this.totalList = [];
//         for (var i = 0; i < b.length; i++) {
//             if (b[i] < 50) {
//                 this.tipList.push(b[i] * 0.2);
//             } else if (b[i] >= 50 && b[i] < 200) {
//                 this.tipList.push(b[i] * 0.15);
//             } else {
//                 this.tipList.push(b[i] * 0.1);
//             }
//             // The length of two arrays will be same(no need another iteration)
//             this.totalList.push(this.tipList[i] + b[i])
//         }

//     }

// }

// var mark = {
//     name: 'Mark Kaduvakkunnel',
//     bills: [77, 375, 110, 45],
//     calcTip: function (b = this.bills) {
//         this.tipList = [];
//         this.totalList = [];
//         for (var i = 0; i < b.length; i++) {
//             if (b[i] < 100) {
//                 this.tipList.push(b[i] * 0.2);
//             } else if (b[i] >= 100 && b[i] < 300) {
//                 this.tipList.push(b[i] * 0.1);
//             } else {
//                 this.tipList.push(b[i] * 0.25);
//             }
//             // The length of two arrays will be same(no need another iteration)
//             this.totalList.push(this.tipList[i] + b[i])
//         }

//     }

// }

// john.calcTip();
// mark.calcTip();

// function averageBill(list) {
//     var sum = 0;
//     for (i = 0; i < list.length; i++) {
//         sum += list[i];
//     }
//     return sum/list.length;
// }

// var families = [john, mark];

// function displayBills(families) {
//     for (var i = 0; i < families.length; i++) {
//         console.log(`Holiday Expense of ${families[i].name}'s family:
//         Avg tip given: \$${averageBill(families[i].tipList)}
//         Avg Total bill: \$${averageBill(families[i].totalList)}`);
//     }

// }

// displayBills(families);

// console.log((averageBill(john.tipList) > averageBill(mark.tipList)? john.name
// : mark.name) + ' spent more more average tip ' );








/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/



/*****************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/



/*****************************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yeahMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older tha John');
var x;
console.log(typeof x);
*/



/*****************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/



/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/



/*****************************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}
*/



/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/



/*****************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

(if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/



/*****************************
* Truthy and Falsy values and equality operators
*/
/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}
*/



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var scoreJohn = (189 + 120 + 103) / 3;
var scoreMike = (129 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}


if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}
*/



/*****************************
* Functions
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/



/*****************************
* Function Statements and Expressions
*/
/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/



/*****************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/



/*****************************
* Objects and properties
*/
/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/



/*****************************
* Objects and methods
*/
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/



/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
*/



/*****************************
* Loops and iteration
*/

/*
// for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/



/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

/*
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
*/


// New coding challenge in the course version 2
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 😀
*/

// DEBUGGING CODING CHALLENGE

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
// Use the problem-solving framework: Understand the problem and break it up into sub-problems!
// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4];


// What is the problem?
// - make a function to take an array and log its values to the console in a specific format.

// Breaking down the problem.
// 1. Need to loop through the array (a for loop will do).
// 2. Take each data and log in the ºC format also with the number of days iterating.
// 3. Need to concatenate the string in each loop.

// The pseudo function
/*
function forecastTemp(TempArray)
    initial string = '';
    for each item in array
        (concatenate to the init string)

        return final string
*/

// Result
// function forecastTemp(tempArray) {
//     let tempStr = '';
//     tempArray.forEach((temp, index) => {
//         tempStr += `... ${temp}ºC in ${index + 1} days `
//     })

//     return tempStr
// }

// console.log(forecastTemp([17, 21, 23]));
// console.log(forecastTemp([12, 5, -5, 0, 4]));

// One liner
// const forecastTemp = tempArray => "... " + tempArray.map((temp, index) => `${temp}ºC in ${index + 1} days`).join(' ... ');

// console.log(forecastTemp([17, 21, 23]));
// console.log(forecastTemp([12, 5, -5, 0, 4]));

// const tempArray = [17, 21, 23];

// tempArray.reduce((str, currStr) => str + currStr, '');

// console.log(tempArray.reduce((str, currTemp, index) => str + `... ${currTemp}ºC in ${index + 1} days `, ''));



// const forecastTemp = tempArray => tempArray.reduce((str, currTemp, index) => str + `... ${currTemp}ºC in ${index + 1} days `, '');

// console.log(forecastTemp([12, 5, -5, 0, 4]));