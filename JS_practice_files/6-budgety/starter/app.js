
// BUDGET CONTROLLER:- For controlling Data
var budgetController = (function () {

    // Data storing medium, object with descriptions, values and id
    // Constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    // For income
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // All income and expense objects created stored in separate arrays, in a data object
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

})();



// UI CONTROLLER:- For controlling UI elements
var UIController = (function() {

    // classes assigned
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        btnOK: '.add__btn'
    };

    // (2). Public functions
    return {
        getInput: function() {
            return {
                // 3 i/p to read: i) income/expense, ii) description iii) amount
                // resp. classes: 'add__type', 'add__description', 'add__value'
                // Assigned to DOMStrings
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



// GLOBAL APP CONTROLLER:- For Interconnecting the independent modules, passed as arguments
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        // Fetched the DOM strings
        var DOM = UICtrl.getDOMStrings();

        // (1). The listener for the add button(tick_mark):- that adds new data
        document.querySelector(DOM.btnOK).addEventListener('click', ctrlAddItem);

        // (1).a For the key_press on the add button (Enter button), use the
        // Keypress event, listens when any key is pressed(except:- shift & some fn. keys)
        document.addEventListener('keypress', function (event) {
            // keycode:- console.log(event)-for enter:- '13', 'event.which' for the older browsers.
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        })
    }

    var ctrlAddItem = function() {
        // 1. Get the filled input data as an object
        var input = UICtrl.getInput();
        // 2. Add the item to the budget control for calcs.

        // 3. Modify the UI

        // 4. Calculate the budget

        // 5. Display the budget on top UI.
    }

    // create a public 'init'(initialization) function to call event-listeners
    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);
// The above are the real parameters passed

// Initializes all event listeners
controller.init();