// Asynchronous Javascript

// Syn. javascript code (present style.)

const second = () => {
    setTimeout(() => {
        console.log('Async, Hey there!');
    }, 2000)
}

const first = () => {
    console.log('Hey There');
    second();
    console.log('The End');
}

first();

// Adding Asynchronous code using `setTimeout` function, in the second function.
