
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