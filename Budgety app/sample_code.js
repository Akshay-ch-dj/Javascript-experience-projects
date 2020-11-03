
// // Looking back at IIFE
// var budgetController = (function () {
//     var x = 23;

//     var add = function (a) {
//         return x + a;
//     }

//     return {
//         // This method can be used outside
//         publicTest: function (b) {
//             return (add(b));
//         }
//     }
// })();

// // calling the publicTest
// budgetController.publicTest(4);

// // Module 3:- For Interconnecting the independent modules, pass them as arguments
// var controller = (function (budgetCtrl, UIctrl) {

//     var z = budgetCtrl.publicTest(5);

//     return {
//         anotherPublic: function() {
//             console.log(z);
//         }
//     }

// })(budgetController, UIController);
// // The above are the real parameters passed

// NOTES:
// 1. Add an input valid to the keypress event listener

// Jonas method for adding template content
// addListItem: function(obj, type) {
//     var html, newHtml, element;
//     // Create HTML string with placeholder text

//     if (type === 'inc') {
//         element = DOMstrings.incomeContainer;

//         html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
//     } else if (type === 'exp') {
//         element = DOMstrings.expensesContainer;

//         html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
//     }

//     // Replace the placeholder text with some actual data
//     newHtml = html.replace('%id%', obj.id);
//     newHtml = newHtml.replace('%description%', obj.description);
//     newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

//     // Insert the HTML into the DOM
//     document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
// },

// For the deletion process, using event delegation- The parent html is the one
// ie, both parent to income and expenses, The "container" class is selected,

// The event.target of the ctrlDeleteItem is the "X" icon. It needed to delete the
// Whole template containing the item. therefore the whole parent div element and its
// id are the actual needed item when clicking the icon.

// var ctrlDeleteItem = function (event) {
//     // identify the clicked item
//     console.log(event.target);
//     // delete the item from object

//     // delete the item from UI

// };

// Need to move up in the DOM from the icon to the actual target ie, the div container
// This is called DOM Traversing.
/*The target property returns the html element in the node.
then the "event.target.parentNode", it just goes to the adjacent parent element, here it is the
class="item__delete--btn", but on counting it, actually need the 5th top parent element.
Gonna chain the "parentNode" property until reaches the desired parent.
"event.target.parentNode.parentNode.parentNode.parentNode",
we need it's ID, so,
"event.target.parentNode.parentNode.parentNode.parentNode.id",
returns - "inc-0", "inc-1"..."exp-0", "exp-1".as each list item got unique ID.
(jonas logic is funny, he doesn't added any other id elements in the html, so there not need to be
worried about other id's and other clicks, but I'm worried, We need universal methods that can be applied to
other projects )
Things to clear UP,
1.) The hardcoded parentNodes
2.) Add an if condition to validate the id fetching(if needed regex then with it).
*/

// The modification part
/*
// identify the clicked item
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    Using the closest() method ie,
    eg: // Starting from the inner most level
        var start = document.getElementById("source");

        start.closest(".something1").classList.add("dropCap");
        {The 'something1' class is 5 level up of the start}

    itemID = event.target.closest('.item').id
    console.log(itemID);

    "That One Works!...Yoo"

    Which also solves the Issue of hitting wrong id's.

    // But a little practice in regex is always appreciated
    // console.log(/"^inc|^exp"/.exec("inc-5"));

    // function myFunction() {
    //     var str = "ell-5";
    //     var patt = new RegExp("inc|exp");
    //     var res = patt.exec(str);
    //     console.log(res);
    // }

    // myFunction();

    // // console.log(new RegExp("inc|exp").exec("inc-5"));
    // console.log(/inc|exp/.exec("i5c-5"));

    // if (/inc|exp/.exec("i5c-5")) {
    //     console.log("Yes");
    // } else {
    //     console.log("No");
    // }

    // use test() in place of exec(), if needed a boolean result only(exec also works with if -else)

    // if (/inc|exp/.test("inc-5")) {
    //     console.log("Yes");
    // } else {
    //     console.log("No");
    // }
*/

/*
Adding the Delete method to budget control app,
my method,
// return function for deletion of data
        deleteDataItem: function (type, itemID) {
            var listSelect = data.allItems[type];
            for (var i = 0; i < listSelect.length; i++) {
                if (listSelect[i].id === itemID) {
                    listSelect.splice(i, 1);
                }
            }
        },

passed an id = 3,
// data.allItems[type][id] ==> It will select index item three

Using map instead of a for loop, Jonas method
var idList, index;

idList = data.allItems[type].map(function(current) {
    return current.id;
});

index = ids.indexOf(id); // Returns the index of current needed object in the List
// index = -1, if the item is not found in the array

if (index !== -1) {
    data.allItems[type].splice(index, 1);
}

In applying there is 1 bug 1) the id need to be converted to int,
(use the testing function for testing)
Going with my method- less code less worry,

// Deleting the item from UI:

Jonas Method:
// Using the removeChild method (opposite of appendChild)
var el = document.getElementById(itemID);
el.parentNode.removeChild(el);

Trying using:
document.getElementById(itemID).remove();

// For Updating the budget
there is the updateBudget() method: that calculates the budget, totalInc, totalExp, percentage


*/

// Part 3-------
/*
1. Add the percentage in the box side.
 --- For that need to modify the budgetCtrl.calculateBudget() and UICtrl.displayBudget(budget)
paths in creating
create a separate function ----> create a prototype in expense object.

// Prototype for expense object
    Expense.prototype.expPercentage = function() {
        if (data.totals.inc > 0) {
            this.percentage = Math.round((this.value / data.totals.inc) * 100);
        }
    };

// If expense item gets deleted the percentage also gets deleted... no worries.

//  Adding to the UI.

*/

/*
// Prototype for expense object
Expense.prototype.expPercentage = function() {
    if (data.budget > 0) {
        this.percentage = Math.round((this.value / data.totals.inc) * 100);
    }
};

budgetControls addItem functions expense part.

if (type === 'inc') {
    newItem = new Income(ID, des, amount);
} else if (type === 'exp') {
    newItem = new Expense(ID, des, amount);
    newItem.expPercentage();
}


*/

/*
// Income formatting
1. All numbers need a decimal part 2 places, also Equally alligned
2. Positive numbers have '+' sign, negative got '-' sign.
3. Comma separator for the numbers, 1,000

// Mine extra - add rupees symbol
Use AltGr + $ with language set to ENG INDIA. ₹
*/

/*
// To round the numbers in to two

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

*/

// function roundToTwo(num) {
//     return +(Math.round(num + "e+2") + "e-2");
// }

/*
var num = -4;

// For fixing any number up to 2 decimals.
num = Math.abs(num);
num = num.toFixed(2);

console.log(num);
console.log(4.94566.toFixed(2));

*/

// To add comma

// 1. Split the number to integer and decimal(after fixing the two decimal)
// var num, intPart;

// num = -100000000;

// num = Math.abs(num).toFixed(2);
// console.log(num);

// // toString() method converts to string
// intPart = Math.floor(num).toString().split('');
// console.log(intPart);

// var i = intPart.length - 3;

// console.log(i);

// while (i > 0) {
//     intPart.splice(i, 0, ",");
//     i -= 2;
// };

// // intPart.splice(i, 1, ",");
// console.log(intPart.join(''));

// // Use the join() method and splice() to add items

// Current Date using date object constructor

// Use Change Events
/*
To change the color of input fields acc to inc and exp
add an event listener for a change event to happen in the +/- input field
*/

// Traverse through array and call the given function
// var nodeListForEach = function (list, callback) {
//     for (var i = 0; i < list.length; i++) {
//         callback(list[i], i);
//     }
// };

// Final considerations

// 1. Clear the problem with blank percentages if added later
// 2. Add Local Storage

/*
Algo. for dynamic percentages

// On budget controller
1. select all exp items
2. call its proto method for each item add

// UI
1. select all exp items, ie child to exp parent
2. update its percentage by matching id/ calling budjet function


*/

// // Trying childNodes
// var childes;
// childes = document.querySelector('.expenses__list').childNodes;

// console.log(childes);

// // Explaining this Traverse and call
// var nodeListForEach = function (list, callback) {
//     for (var i = 0; i < list.length; i++) {
//         callback(list[i], i);
//     }
// };

// if the list given is the updated expense list

// Done but not using any child node or children


/*
var localBudget;

/ Check for local storage(helper fun.)
    function checkForLocal() {
        if (localStorage.getItem('localBudget') === null) {
            // If no item named 'localBudget' setup the data object.
            localBudget = data;
        } else {
            localBudget = JSON.parse(localStorage.getItem('localBudget'));
        }
    }

    // **********************  Local Storage *************************
        // Save to localStorage
        saveToLocal: function() {
            localBudget = data;
            localStorage.setItem('localBudget', JSON.stringify(localBudget));
        },

        // Retrieve from localStorage
        getFromLocal: function() {
            checkForLocal();
            data = localBudget;
            // return data.allItems;
        },

        // For delete from localStorage after deleting the element from
        // main data structure, call the saveToLocal()
        // *****************************************************************

        var updateBudget = function() {
            // 8. Save to local storage
            budgetCtrl.saveToLocal();
        }

        return {
        init: function() {
            ctrlRetrieveItem();
            updateBudget();
            UICtrl.displayMonth();
            // UICtrl.displayBudget({
            //     budget: 0,
            //     totalInc: 0,
            //     totalExp: 0,
            //     percentage: -1
            // });
            setupEventListeners();
        }

        Then it strikes me, this will not load any items because, the items in the data object needed
        adding again using the UIController.addListItem(object, type) method (can rewrite the code, to always
        load data from the object, than direct inputting), as a fix Add the below function to main controller

        var ctrlRetrieveItem = function() {
            var allItems, incItems, expItems;
            allItems = budgetCtrl.getFromLocal();
            incItems = allItems.inc;
            expItems = allItems.exp;
            // Retrieve 'inc' items, add to UI call addListItem(obj, type)
            incItems.forEach(function(item) {
                UICtrl.addListItem(item, 'inc');
            });
            // Retrieve 'exp' items, add to UI
            expItems.forEach(function (item) {
                UICtrl.addListItem(item, 'exp');
            });
        };
        Then called this function in init().

        then comes the Problem 2; the inc and exp objects retrieved from local storage are just data
        in JSON format, to get the prototype property in exp objects, it needs to be added again as
        Expense object.

        SO in order to do that
        */






// The Local storage addition part

/*
    1. Add item to local storage.

    copied the data object to local storage..
    but the in built functions don't get copied.
    removed the functions..
    then the budget tags get added but the lists wont come back.
    2. Delete item from local storage
    3. Retrieve item from local storage at start
    Adding a refreshItems function to UI. to call with updateitems
*/

// The problem with my method of local storage is the objects prototype, methods
// cannot be saved or retrieved, from the storage

// So I needed to again go through the addition process as an object to reattain the
// prototype methods



// For delete from localStorage after deleting the element from
// main data structure, call the saveToLocal()
// *****************************************************************

// Function to add back the JSON data from local storage as real objects
// convertToObject: function() {

// },