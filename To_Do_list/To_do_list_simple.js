const newTask = document.querySelector('#new-task-input'); 
/* To grab the user input[can be used to change the placeholder in the box, 
    later 2nd phase] */

// To interact with the "+" button
const addTaskBtn = document.querySelector('.add-task-btn');
// To interact with the "clear complete" button
const clearCompleteBtn = document.querySelector('.clear-completed-btn');
// grab the task list ul element(it is needed to add the template)
const taskList = document.querySelector('.task-list');
// finally, grabbing the template add content
const taskTemplate = document.querySelector('#task-template');

// Need an id assigned for each task element created, start with id=1
let id = 1;

// Take newTask(the input) add an event-listener for a keypress(enter) and "+"

/* If pressed key is enter(keycode = 13) and the input is valid(validation for
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
            task.remove();
        }
    })
});

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
