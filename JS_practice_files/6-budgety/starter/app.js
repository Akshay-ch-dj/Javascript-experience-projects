
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
        budget: 0,
        // No percent initially:- doesn't exists
        percentage: -1,
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

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function(current) {
            sum += current.value;
        });
        // Store the total
        data.totals[type] = sum;
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

            // return the new item created.
            return newItem;
        },

        // return function for deletion of data
        deleteDataItem: function (type, itemID) {
            var listSelect = data.allItems[type];
            for (var i = 0; i < listSelect.length; i++) {
                if (listSelect[i].id === itemID) {
                    listSelect.splice(i, 1);
                }
            }
        },

        calculateBudget: function() {

            // Total income & Total Expenses
            calculateTotal('exp');
            calculateTotal('inc');

            // calculate budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Percentage of income spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
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
        template: '.item-template',
        itemContainer: '.item',
        itemValue: '.item__value',
        itemPercentage: '.item__percentage',
        incomeList: '.income__list',
        expenseList: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        templateContainer: '.container'
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
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
         },

        // The newly created object is in newItem variable
        addListItem: function(obj, type) {
            var parList, selectTemplate, templateItems, description, itemValue,
                container, percentage;

            selectTemplate = document.querySelector(DOMStrings.template);
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
                container.id = `inc-${obj.id}`; // id change
                percentage.remove(); // remove percentage for income

                parList = document.querySelector(DOMStrings.incomeList); // select the income-list parent

            } else if (type === 'exp') {
                itemValue.append(obj.value);
                container.id = `exp-${obj.id}`;
                percentage.remove(); // add percentage for expense

                parList = document.querySelector(DOMStrings.expenseList); // select the expenses-list parent
            }

            // Add the modified templates to list
            parList.appendChild(templateItems);
        },

        // To clear the html input fields
        clearFields: function() {
            var inputFields, inputArray;

            inputFields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
            // Call the slice method to convert to an array, from the Array obj. prototype
            inputArray = Array.prototype.slice.call(inputFields);

            inputArray.forEach(function(current, index, array) {
                // Set empty string to all items
                current.value = "";
            });
            // Sets the focus back to first element
            inputArray[0].focus();
        },

        displayBudget: function(obj) {
            // obj contains total inc, exp, budget and percentage
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp;
            document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage;

            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },

        deleteUIItem: function(Item, type) {
            //Grab the template

            // Remove the template
        },

        //  Expose DOMStrings to public.
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
})();



// GLOBAL APP CONTROLLER:- For Interconnecting the independent modules, passed as arguments
var controller = (function(budgetCtrl, UICtrl) {

    // The event listeners here
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
        });

        document.querySelector(DOM.templateContainer).addEventListener('click', ctrlDeleteItem);
    }

    var updateBudget = function() {

        // 4. Calculate the budget
        budgetCtrl.calculateBudget();

        // 5. Returns the budget
        var budget = budgetCtrl.getBudget();

        // 6. Display the budget on top UI.
        UICtrl.displayBudget(budget);
    };

    // Add input content when clicked
    var ctrlAddItem = function() {
        var input, newItem

        // 1. Get the filled input data as an object
        input = UICtrl.getInput();

        // Add input validators(isNaN -true when input is not a number-here number needed)
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget control for calcs.
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Modify the UI
            UICtrl.addListItem(newItem, input.type);
            // clear the fields
            UICtrl.clearFields();

            // 7. calculate and update budget
            updateBudget();
        }
    };

    // Function to delete item when clicked, event is the callback property of click,
    // console.log(event.target) ==> gives the current mouse target, in the event delegation
    // by looking up the target it revels from where the event comes from,
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, objID

        // identify the clicked item

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        // Use regex or something to verify the ID(that it contains income tag)
        if (itemID) {
            // Need to extract number(ID) and type part from the ID("inc-1" or "exp-1")
            // Can use the split() method of string.
            splitID = itemID.split('-');
            type = splitID[0];
            objID = parseInt(splitID[1]);

            // Return the "type" and "ID" to the BudgetController and UIController
            budgetCtrl.deleteDataItem(type, objID);
            // Update the new budget

        }


        // delete the item from object

        // delete the item from UI

    };

    // create a public 'init'(initialization) function to call event-listeners
    return {
        init: function() {
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };

})(budgetController, UIController);
// The above are the real parameters passed

// Initializes all event listeners
controller.init();