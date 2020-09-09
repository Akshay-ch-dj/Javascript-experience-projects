
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
        this.percentage = -1;
    };

    // Prototype for expense object
    Expense.prototype.expPercentage = function() {
        if (data.budget > 0) {
            this.percentage = Math.round((this.value / data.totals.inc) * 100);
        }
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
        },
        updateExpPercentage: function() {
            // Select all exp items
            this.allItems.exp.forEach(function(item) {
                // Call its 'expPercentage' function
                item.expPercentage();
            });
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
                newItem.expPercentage();
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

        dynamicPercentageCalc: function() {
            // call the updatePercentage method in data object
            data.updateExpPercentage();
            // Now the percentage data of each object updated.
            // return the objects
            return data.allItems.exp
        },

        // For testing only
        testing: function() {
            console.log(data);
            console.log(data.allItems.exp[0].expPercentage());
            console.log(data.allItems.exp[0].percentage);
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
        templateContainer: '.container',
        dateLabel: '.budget__title--month',
        inputBtn: '.ion-ios-checkmark-outline'
    };

    // Private Function

    // Number formatting, number to be formatted and its type
    var formatNumber = function(num, type) {
        var numPart, intPart, decPart;

        // 2 decimals fix
        num = Math.abs(num).toFixed(2);

        // split to integer and decimal parts
        numPart = num.toString().split('.');
        intPart = numPart[0];
        decPart = numPart[1];

        // integer part splits to an array.
        intPart = intPart.split('');

        // adds the ',' separation
        var i = intPart.length - 3;
        while (i > 0) {
            intPart.splice(i, 0, ",");
            i -= 2;
        };

        // rejoin back to string
        intPart = intPart.join('');

        // Add rupees &'+' / '-' for the type

        return `${type === 'inc' ? '+' : '-'} ₹ ${intPart}.${decPart}`;

    };

    // Traverse and call
    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
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

            itemValue.append(formatNumber(obj.value, type)); // add amount

            if (type === 'inc') {
                container.id = `inc-${obj.id}`; // id change
                percentage.remove(); // remove percentage for income

                parList = document.querySelector(DOMStrings.incomeList); // select the income-list parent

            } else if (type === 'exp') {
                container.id = `exp-${obj.id}`;
                // add percentage for expense
                if (obj.percentage > 0) {
                    percentage.textContent = obj.percentage + '%';
                } else {
                    percentage.textContent = '___';
                };

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
            var type;
            type = obj.budget >= 0 ? 'inc' : 'exp';

            // obj contains total inc, exp, budget and percentage
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage;

            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },

        deleteUIItem: function(itemID) {
            // Grab the template from the entire ID passed(eg: "inc-2")
            // Using the removeChild method (opposite of appendChild)
            // var el = document.getElementById(itemID);
            // el.parentNode.removeChild(el);
            document.getElementById(itemID).remove();
            // Remove the template
        },

        displayMonth: function() {
            var now, year, month;
            now = new Date();

            months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMStrings.dateLabel).textContent = `${months[month]} ${year}`;
        },

        changeType: function() {

            var fields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue
            );

            nodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
        },

        // 'obj' is the updated exp objects from budgetController
        dynamicPercentage: function(obj) {

            // Match the id and select items from DOM
            obj.forEach(function(curr) {
                var item = document.getElementById(`exp-${curr.id}`);
                percentage = item.querySelector(DOMStrings.itemPercentage);
                if (curr.percentage > 0) {
                    percentage.textContent = curr.percentage + '%';
                } else {
                    percentage.textContent = '___';
                };
            });
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

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
    };

    var updateBudget = function() {

        // 4. Calculate the budget
        budgetCtrl.calculateBudget();

        // 5. Returns the budget
        var budget = budgetCtrl.getBudget();

        // 6. Display the budget on top UI.
        UICtrl.displayBudget(budget);

        // 7. Dynamic exp percentages
        UICtrl.dynamicPercentage(budgetCtrl.dynamicPercentageCalc());
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
        // itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        itemID = event.target.closest('.item').id

        // Use regex to verify the ID(that it contains expected tag: avoid collision with other id)
        if (itemID && /inc|exp/.test(itemID)) {
            // Need to extract number(ID) and type part from the ID("inc-1" or "exp-1")
            // Can use the split() method of string.
            splitID = itemID.split('-');
            type = splitID[0];
            objID = parseInt(splitID[1]);

            // Return the "type" and "ID" to the BudgetController and UIController
            budgetCtrl.deleteDataItem(type, objID);
            // For UIController return full ID (itemID) for deletion.
            UICtrl.deleteUIItem(itemID);

            // Update the new budget (There is already the function to calc. and disp.
            // the. current available data.)
            updateBudget();
        }
    };

    // create a public 'init'(initialization) function to call event-listeners
    return {
        init: function() {
            UICtrl.displayMonth();
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