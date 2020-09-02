
// Module 1:- For controlling Data
var budgetController = (function () {
    var x = 23;

    var add = function (a) {
        return x + a;
    }

    return {
        // This method can be used outside
        publicTest: function (b) {
            console.log(add(b));
        }
    }
})();

// Module 2:- For controlling UI elements
var UIController = (function() {
    // Some code
})();

// Module 3:- For Interconnecting the independent modules, pass them as arguments
var controller = (function(budgetCtrl, UIctrl) {

    var z = budgetCtrl.publicTest(5);

})(budgetController, UIController);
// The above are the real parameters passed