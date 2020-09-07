
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

