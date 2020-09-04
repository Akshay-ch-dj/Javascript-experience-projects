
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
        },
        // to set id based on array length.
        idGen: function(type) {
            var currItem = this.allItems[type];
            if (currItem.length > 0) {
                // ID = last-obj-ID + 1
                return currItem[currItem.length - 1].id + 1;
            }
            return 0;
        }
    };

    // Create a public module, so that other modules can access and add data in.
    return {
        // To add anew data: type(inc/exp),
        addItem: function(type, des, amount) {
            var newItem, ID;

            // Generate id
            ID = data.idGen(type);

            // create a new object for every entry with the constructor.
            if (type === 'inc') {
                newItem = new Income(ID, des, amount);
            } else if (type === 'exp') {
                newItem = new Expense(ID, des, amount);
            }

            // Add the newly created object to expected array,
            data.allItems[type].push(newItem);
            // raise the net totals
            data.totals[type] += parseInt(amount);

            // return the new item created.
            return newItem;
        },

        // For testing only
        testing: function() {
            console.log(data);
        },
    };

})();



// UI CONTROLLER:- For controlling UI elements
var UIController = (function() {

    // classes assigned
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        btnOK: '.add__btn',
        itemDescription: '.item__description',
        itemContainer: '.clearfix',
        itemValue: '.item__value',
        itemPercentage: '.item__percentage',
        incomeList: '.income__list',
        expenseList: '.expenses__list'
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

        // The newly created object is in newItem variable
        addListItem: function(obj, type) {
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

            // Add the modified templates
            parList.appendChild(templateItems);
            console.log(parList);
            // Replace the placeholder with the actual data received

            // Insert the html into the DOM
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
        var input, newItem

        // 1. Get the filled input data as an object
        input = UICtrl.getInput();

        // 2. Add the item to the budget control for calcs.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Modify the UI
        UICtrl.addListItem(newItem, input.type);

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