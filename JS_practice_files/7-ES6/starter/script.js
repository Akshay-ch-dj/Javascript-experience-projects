// let i = 45;
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);


// let firstName = 'Akshay';
// let lastName = 'Chandran';
// const yearOfBirth = 1995;

// function calcAge(year) {
//     return 2020 - yearOfBirth;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in '
// + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.
// Today, he is ${calcAge(yearOfBirth)} years old.`)

// const name = `${firstName} ${lastName}`;

// console.log(name.startsWith('J'));
// console.log(name.endsWith('n'));

// // in between the string, There is `includes()`
// console.log(name.includes(' ')); // checks if there is any space

// // To repeat the string
// console.log(`${firstName} `.repeat(3));

// ES6 Arrow Functions

// const years = [1990, 1965, 1982, 1937];

// // ES5 (using map function)
// var ages5 = years.map(function(el) {
//     return 2020 - el;
// });
// console.log(ages5);

// // ES6 - less code & clean code

// let ages6 = years.map(el => 2020 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
// console.log(ages6);

// // More actions
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);

// Arrow Functions: Lexical 'this' keyword.

// ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        // button with class="green"
        document.querySelector('.green'). addEventListener('click',
        function() {
            var str = 'This is the box number ' + this.position + ' and it is '
            + this.color;
            alert(str);
        });
    }
}
box5.clickMe(); // "This is the box number undefined and it is undefined"
