
// BUDGET CONTROLLER:- For controlling Data
var budgetController = (function () {

})();



// UI CONTROLLER:- For controlling UI elements
var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        btnOK: '.add__btn'
    };

    // (2). Public function:- To read data from the input fields
    return {
        getInput: function() {
            return {
                // 3 i/p to read: i) income/expense, ii) description iii) amount
                // resp. classes: 'add__type', 'add__description', 'add__value'
                type: document.querySelector(DOMStrings.inputType).value, // values
                // 'inc' and 'exp'.
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };
         },
        //  Expose DOMStrings to public.
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();



// GLOBAL APP CONTROLLER:- For Interconnecting the independent modules,
// pass them as arguments
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMStrings();

    var ctrlAddItem = function() {
        // 1. Get the filled input data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add the item to the budget control for calcs.

        // 3. Modify the UI

        // 4. Calculate the budget

        // 5. Display the budget on top UI.
    }

    // (1). The listener for the add button(tick_mark):- that adds new data
    document.querySelector(DOM.btnOK).addEventListener('click', ctrlAddItem);

    // (1).a For the key_press on the add button (Enter button), use the
    // Keypress event, listens when any key is pressed(except:- shift & some fn. keys)
    document.addEventListener('keypress', function(event) {
        // identify the keycode using:- console.log(event)-for enter:- '13'
        // 'event.which' for the older browsers.
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);
// The above are the real parameters passed