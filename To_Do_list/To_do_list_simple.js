// #################  GET ITEMS/QUERY SELECTORS ###########

// To grab the user input 
const newTask = document.querySelector('#new-task-input'); 
// To interact with the "+" button
const addTaskBtn = document.querySelector('.add-task-btn');
// To interact with the "clear complete" button
const clearCompleteBtn = document.querySelector('.clear-completed-btn');
// grab the task list ul element(it is needed to add the template)
const taskList = document.querySelector('.task-list');
// finally, getting the template add content
const taskTemplate = document.querySelector('#task-template');

// ################# Global Variables & const. #############
// Need an id assigned for each task element created, start with id=1
let id = 1;
// global var. for local storage array
let localList;

// ############ Event Listeners #############

// Event listener for page loading
document.addEventListener('DOMContentLoaded', getFromLocal);

// Event-listener for a keypress(enter) and "+"

/* If pressed key is enter and the input is valid(validation for
    only blank line, fn. below), then add task (fn. below)*/
newTask.addEventListener('keypress', (e) => {
   if (e.key === 'Enter' && inputValid()){
    addTask();
   } 
});

// Adding event listener to the "+" button too
addTaskBtn.addEventListener('click', () => {
    if (inputValid()){
        addTask();
    }
});

// To clear the completed taskList items
clearCompleteBtn.addEventListener('click', () => {
    /* All list template elements with class task, create an array and loop 
    through each, check the input-checked/not, remove the checked ones */
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
        const checked = task.querySelector('input').checked;
        if (checked) {
            removeFromLocal(task);
            task.remove();
        }
    })
});

// ################# Functions ###################

// The addTask function- The main fun.
function addTask() {
    /* the taskElement const. set up with a new task element(template), 
    If set false only top level element(here <li></li>)- gets pulled, 
    "true" pulls the entire content(every level after the first level) */ 
    const taskElement = document.importNode(taskTemplate.content, true);
    // select the checkbox and set it's "id" to current "id"(initial=1) 
    const checkbox = taskElement.querySelector('input');
    checkbox.id = id;
    // select the label element and set its 'for' attribute to current "id"
    const label = taskElement.querySelector('label');
    label.htmlFor = id;
    // value of the input(whatever typed in..) going to append to label
    // The append() can add DOMstring, text nodes to parent
    label.append(newTask.value);
    // add the modified template content(taskElement) to the ul(taskList)
    // appendChild adds a new node as child element to given node
    taskList.appendChild(taskElement); 

    // local saving
    saveToLocal(newTask.value);

    // empty the input box(newTask) to take in a new task
    newTask.value = '';
    // increment the id++;
    id++;
}


// For validating the input(only blank line check..add more checks further)
function inputValid(){
    // if input not equal to "empty-string" return true
    return newTask.value !== ''
}


//$$$$$$$$$$$$$ Adding the local storage feature  $$$$$$$$$$$
 
// Check for local storage(helper fun.)
function checkForLocal() {
    if (localStorage.getItem('localList') === null){
        // If no item named 'localList' setup an empty array
        localList = [];
    } else {
        localList = JSON.parse(localStorage.getItem('localList'));
    }
}

// SAVE to local storage
function saveToLocal(InputValue) {
    // check
    checkForLocal();
    localList.push(InputValue);
    localStorage.setItem('localList', JSON.stringify(localList));
}

// RETRIEVE from local storage
function getFromLocal() {
    checkForLocal();
    localList.forEach(listItem => {
        // Need to replicate the add functionality
        const taskElement = document.importNode(taskTemplate.content, true); 
        const checkbox = taskElement.querySelector('input');
        checkbox.id = id;
        const label = taskElement.querySelector('label');
        label.htmlFor = id;
        
        label.append(listItem);
        
        taskList.appendChild(taskElement);
        id++;
    });
}
// DELETE from local storage
function removeFromLocal(task) {
    /* task is the single list item, grab only the text from it, then reverse
       search for to get the index and remove the element using that index.*/
    const taskIndex = localList.indexOf(task.children[1].innerText.slice(3));
    localList.splice(taskIndex, 1);
    // Set the modified array to local storage
    localStorage.setItem('localList', JSON.stringify(localList));
}
