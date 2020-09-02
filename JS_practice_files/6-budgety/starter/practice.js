
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