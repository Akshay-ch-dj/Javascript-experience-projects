I'm coming from python background, got some questions

1) How to break to a new line in javascript, to get rid of linting   issues(similar to what "\" does in python).

2) Why typeof() on arrays and objects returns "object".

3) is there any native method available to round off decimals(like ":.2f" in python)

4) I know backticks (``) in strings are a feature of ES6, is there any problem of using it as normal(found it comfortable that it resembles the fstring method in python)

I only started javascript today, picking up is easy (found it as a mixture of python + C), but with the introduction of objects and "this" (I think it is of similar concept as of python OOP objects and self keyword) it really takes a turn.

below is my solution any suggestions for improvement welcome,

// For rounding off the decimal by two places(from stackoverflow)
// , don't know what it does if someone explains, it will be awesome

```javascript
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}


// challenge
var mark = {
    fullName: 'Mark Mathayi',
    mass: 65,
    height: 1.60,
    calcBMI: function() {
        this.BMI = this.mass/(this.height**2);
        return roundToTwo(this.BMI);
    }
};

var john = {
    fullName: 'John Thommi',
    mass: 77,
    height: 1.64,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return roundToTwo(this.BMI);
    }
};

mark.calcBMI();
john.calcBMI();

function displayBMI(person1, person2) {
    if (person1.BMI > person2.BMI) {
        var bmiChampion = {
            winner: person1.fullName, 
            BMI: person1.BMI
        };
    } else if (person1.BMI < person2.BMI) {
        var bmiChampion = {
            winner: person2.fullName, 
            BMI: person2.BMI
        };
    } else {
        var bmiChampion = {
            winner: `Both ${person1.fullName} and ${person2.fullName} BMI 
            are same.`,
            BMI: person1.BMI
        };
    }

    console.log(`Highest BMI: ${bmiChampion.winner}\nBMI value: ${roundToTwo(bmiChampion.BMI)}`)
}

displayBMI(mark, john); 
```
ANS1:\
Hello Akshay

1) You can continue writing code in the next line without any problems most of the time, for example, this is valid code
```
var
  obj
=
    {}
;
```
Be careful about the return statement, you cannot move code to the next line, like that

// Bad code
```
function test() {
  return
  "Hello";
}
```
because JavaScript will automatically insert a semicolon after the return statement, which will terminate it. This is called Automatic Semicolon Insertion (ASI).

2) In JavaScript, arrays are objects. They are constructed with a built-in Array constructor. That's why you can access properties and methods on them, for example, the forEach() method

```
var arr = [1, 2, 3];

arr.forEach(function(el) {
  console.log(el);
});
```
Functions are objects as well. That's why we say that JavaScript has first-class functions. Functions are basically treated as other values (because they are objects), so they can be assigned to variables, passed as arguments or returned from functions.

1) There is the toFixed() method, but it returns a string. If you want to get a rounded number, this is probably the most accurate way
```
Math.round((num + Number.EPSILON) * 100) / 100
```
4) I don't think there is a problem, although back-tics suggest that the string contains some variable/expression that will be processed

JavaScript and Python have many similarities, but be careful about the inheritance model. JavaScript inheritance is based on prototypes, whereas in Python it's based on classes. Although JavaScript has classes, it's just a syntax on top of the prototype-base inheritance.

Also, two arrays or two objects are never equal in JavaScript, even if they contain the same elements/properties. That's because it doesn't really compare objects but rather references to these objects in memory.

* QUESTION
Thanks, a lot for this good answer, give me lot of insights,

just another doubt, I often forgot to add "var" before declaring variables and ';' at the end, but the code works, are they not mandatory??

I'm using VScode, any plugins that instruct me to to write clean code in javascript

One more, I started learning javascript after hearing about typescript and ES6, can i learn it directly after this course, does the Typescript contains all the ES6 features, can it used directly on console or does it act as replacement for js everywhere.

* ANSWER
Variables declared without the var statement (or let/const shown later in the course) will be declared as global variables no matter the scope. It's rather a bad practice, although it works. Semicolons are optional most of the time because JavaScript has a mechanism that automatically inserts semicolons where it finds right. This can also lead to problems as shown in my example with the return statement
```
// Bad code
function test() {
  return              // JavaScript will insert semicolon at the end of this line
  "Hello";
}
```
You will learn ES6 later in this course. As for the TypeScript, it's a superset of JavaScript. It should have all the features of regular JS + types and some additional features. You will never use the TypeScript code directly. You write TypeScript and then compile it to JavaScript, and execute the regular js file.

QUESTION

Just got these doubts, and some random notes

Whats my basic understanding till now,

Js creates an execution context object for every function called , that contains 3 things

i) variable object:- that stores all the variable declared, inner functions   declared in the function(hoisting) and also the arguments passed.

ii) scope chain:- it is the pointer to the locations of variable objects - the function got access to,

iii) 'this' variable

when a function gets called its execution context gets added to the execution stack, and removed when execution gets completed.

About JS closure, my doubts are,

1) The execution context of main function(here the retirement() fn.) gets closed, does that mean it's cleared from cache/memory, then how the variable object remains intact (it is a parameter of the execution context object(ie. I think a js object)), when the object gets cleared how its parameters stays ?

(I looked in the web for an answer, some of them saying global variables bound to the functions also by closure, the point is global object never get's closed..its variable object is always in the stack..so it's got the point and clear.., but here in case of return function, the parent execution is completed..)

2) How js identifies the functions with return functions, and holds the VO of those functions .,expecting the call.

3) By the definition of scope chain, it is clear that the return function scope will gets pointed to the parent function( ie the retirement() fn here), does js identifies that or is that is why  it not gets removed..

```
function retirement(retireAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retireAge - age) + a);
    }
}

var retireUS = retirement(66);
```

Once I heard, one of the best way to find a solution is to collect all the information you got and write it down, your brain will process it automatically and gives you a better logical answer...that's what I'm doing now( doing it here cz someone may find it helpful(or future me)....or some one with better idea come up with better explanations than this..), (I must say it works, the questions are way more rubbish first..got a better after typing these all)

what i got up finally is,

When a Js script runs, the parser checks the code.Then it moves to the process of creating execution context, the first one is the Global context,

All lines in the script gets read, the functions and variables are hoisted before the execution starts. scope chain created based on lexical scoping(parent-children positioning).Every time a inner(child) function calls new scope chain created in its execution context.

The execution stack is another JS object(I think...). Which keeps track of the currently executing function,

Individual execution contexts get pushed to execution stack when a function gets called and popped out, when it completes the execution.(there is always the global context at the index-0 - until program closes).

The scope chain object is created every time a function gets called, it contains its own scope + the scopes of its parents, thereby, if a variable called does't find in its own scope, it just moves up to look the parent scope and can be accessed, the most nested function got the largest scope chain object.

for the return function in the code, its scope chain includes the parent fun. scope and the values for 'a' and 'retireAge' pointing to the variable object of the parent function, but the parent object is popped out after its execution, now where to look for the data...??my assumptions from above are,

1) the parent execution context only removed from the execution stack object, but it is still in memory, as the pointer is to this location- it can be recovered. That is simply called closure.

2) There may be some special closure method/function to store this bonded data,

(By typing this much, the complexity is somewhat reduced now the only question how exactly it stored..)

(I typed/cared this much cz.. it is asked in every JS job interview what a closure is?? )

But who cares in the deep how closure works....as for me, I only cares about its practicality, below is the widely used practical application of closure..The counter...

```
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
```

This one uses previously covered IIFE(immediately invoked functions)..

explanations..

> The self invoking function only runs once [ '()' at end ], it sets the counter to zero, also returns a function expression that's get assigned to 'add' variable.

> The returned function(child function) can access it's parent variable( here the 'counter') and can modify it.

> Now add() is the return function, every time it called it iterates and return the new counter value

This is the best way to implement a counter function, cz if we assign the 'counter' variable as global, it can be accessed by all others and hard to manage in a large script,

Here the scope of the parent function can be called protected by its child-return function, it is the only function that got the pointer in its scope chain to the 'counter' variable or simply the only one bound by closure.

QUESTION

Instead of using HTML as a string in js, going with the more usual way of using html templates(not complete), is there any way to improve this, any other better methods..

html template(same-code)
```
<template id="item-template">
            <div class="item clearfix" id="expense-0">
                <div class="item__description">
                    <!-- description data -->
                </div>
                <div class="right clearfix">
                    <div class="item__value">
                        <!-- amount  -->
                    </div>
                    <div class="item__percentage">
                        <!-- percentage  -->
                    </div>
                    <div class="item__delete">
                        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                    </div>
                </div>
            </div>
</template>
```
JS function to add template(instead of using string method), the code is larger, mention areas for improvement

```
function(obj, type) {
         var parList, selectTemplate, templateItems, description, itemValue,
             container, percentage;

         selectTemplate = document.getElementById('item-template');
         // Selects all child elements under the template
         templateItems = document.importNode(selectTemplate.content, true);

         // Select items to modify
         description = templateItems.querySelector(DOMStrings.itemDescription);
         itemValue = templateItems.querySelector(DOMStrings.itemValue);
         container = templateItems.querySelector(DOMStrings.itemContainer);
         percentage = templateItems.querySelector(DOMStrings.itemPercentage);
         // Modify the templates
         description.append(obj.description); // add description

         if (type === 'inc') {
             itemValue.append(obj.value); // add amount
             container.id = `income-${obj.id}`; // id change
             percentage.remove(); // remove percentage for income

             parList = document.querySelector(DOMStrings.incomeList); // select the income-list parent

         } else if (type === 'exp') {
             itemValue.append(obj.value);
             container.id = `expense-${obj.id}`;
             percentage.remove(); // add percentage for expense

             parList = document.querySelector(DOMStrings.expenseList); // select the expenses-list parent
         }

         // Add the modified templates to list
         parList.appendChild(templateItems);
     }
```

QUESTION

After getting a grasp about delegation, I think I can do the rest of deletions myself and after when cross checking with Jonas's solution, thought some part of mine is worth sharing (and can also get a better idea of anything wrong or not).

For deleting from the data structure, I did't use a map function (I don't know it at that time), but thinks it is straight forward..(may be, to introduce map(), he does so)
```
deleteDataItem: function (type, itemID) {
            var listSelect = data.allItems[type];
            for (var i = 0; i < listSelect.length; i++) {
                if (listSelect[i].id === itemID) {
                    listSelect.splice(i, 1);
                }
            }
        },
```
I don't know...can anyone tell for UI, whats wrong with the simple "remove()" method.(don't even need to call as a seperate function)

```
deleteUIItem: function(itemID) {
            document.getElementById(itemID).remove();
        },
```

For the main delete function, instead of chaining "parentNodes", used "closest()" (first stackoverflow result take me to this), and it is more safe cz, no need to worry about other string+number ID's

[Before getting the closest() , with the influence from python used regex to check for the matches(takes some more time to get used to JS regex-- I must say it is a super handy tool to have)].

```
var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, objID

    // identify the clicked item
    itemID = event.target.closest('.item').id

    // Use regex to verify the ID(that it contains expected tag: avoid collision with other id)
    if (itemID && /inc|exp/.test(itemID)) {
        // Need to extract number(ID) and type part from the ID("inc-1" or "exp-1")
        splitID = itemID.split('-');
        type = splitID[0];
        objID = parseInt(splitID[1]);

        // Return the "type" and "ID" to the BudgetController and UIController
        budgetCtrl.deleteDataItem(type, objID);
        // For UIController return full ID (itemID) for deletion.
        UICtrl.deleteUIItem(itemID);

        // Update the new budget
        updateBudget();
    }
};
```
If any wrong attempts in the code please get me know..

QUESTION

/*** This is how I add the local storage feature to the project, it is a newbie code, just sharing it to the community. **/

After Finishing this awesome project,

The first immediate expansion thing come to my mind was adding the local storage feature.

Thought it was comparatively easy cz, the 'data' object is readily available, all it needs is add it to local storage and retrieve it from there, so added this code to the budgetController module.

```
var localBudget;

// Check for local storage(private helper fun.)
function checkForLocal() {
    if (localStorage.getItem('localBudget') === null) {
        // If no item named 'localBudget' setup the data object.
        localBudget = data;
    } else {
        localBudget = JSON.parse(localStorage.getItem('localBudget'));
    }
}

// **********************  Local Storage ************************
// Save to localStorage
saveToLocal: function() {
    // save the current data object
    localBudget = data;
    localStorage.setItem('localBudget', JSON.stringify(localBudget));
},

// Retrieve from localStorage
getFromLocal: function() {
    checkForLocal();
    data = localBudget;
},
And this to, main controllers updateBudget function( which is one function called every time a change happens).

var updateBudget = function() {
     // 8. Save to local storage
     budgetCtrl.saveToLocal();
}
then called them in init() function,

return {
    init: function() {
        budgetCtrl.getFromLocal();
        updateBudget();
        UICtrl.displayMonth();
        setupEventListeners();
    }
};
```

But It just not worked,  looking at the console realized two problems,

problem 1: The UI inc/exp items don't loads the data from the object directly, but it is added through the UIController.addListItem(object, type) method.

Problem 2: The local storage just stores the main data object and the inner inc&exp objects in JSON formats, it doesn't stores the object methods or prototype methods, so they needs to be added again as new objects to use them as usual.

Changed the retrieving function,

```
// Retrieve from localStorage
getFromLocal: function() {
    checkForLocal();
    return localBudget.allItems;
},
```
Then add a new function to the main controller, to restore the UI and original data object using the existing methods,

```
// Function to add back the JSON data from local storage as real objects
// To retrieve items back to UI
var ctrlRetrieveItem = function() {
    var allItems, incItems, expItems, newItem;
    allItems = budgetCtrl.getFromLocal();
    incItems = allItems.inc;
    expItems = allItems.exp;
    // Retrieve 'inc' items, add to UI call addListItem(obj, type)
    incItems.forEach(function (item) {
        newItem = budgetCtrl.addItem('inc', item.description, item.value);
        UICtrl.addListItem(newItem, 'inc');
    });
    // Retrieve 'exp' items, add to UI
    expItems.forEach(function (item) {
        newItem = budgetCtrl.addItem('exp', item.description, item.value);
        UICtrl.addListItem(item, 'exp');
    });
};
```
Then called it in init function,
```
return {
    init: function() {
        ctrlRetrieveItem();
        updateBudget();
        UICtrl.displayMonth();
        setupEventListeners();
    }
};
```
Then it works, ... :)

(go to console --> Applications --> local storage, to view the saved items)

Can check my version here

(considering a redesign after ES6)

I know it is not a neat solution, but the community can make it better, any suggestions improvements...welcome