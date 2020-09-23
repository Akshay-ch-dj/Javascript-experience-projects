# ES6 JavaScript Changes
---

1. ### `var` replace with `const` and `let`.
   * `var` is function scoped but, `let` & `const` are block scoped, (block is a block of code wrapped between parenthesis, eg: if, for, while loops..)
   * ```javascript
     let i = 45;
     for (let i = 0; i < 5; i++) {
         console.log(i);
     }
     console.log(i);
     // output
     // 4
     // 45
     ```
3. ### Blocks and IIFEs
   * In ES6 the block scoped variables, give a new way of defining IIFEs
      ```javascript
      {
          let a = 56;
          const b = 34;
          var c = 36;
      }
      console.log(a + b);  // Gives an error
      console.log(c);  // 3
      ```

4. ### Strings in ES6
    * Strings can be written in ES^ using the new "*template literals*",
      ```javascript
      let firstName = 'John';
      let lastName = 'Marques';
      const yearOfBirth = 1995;

      function calcAge(year) {
          return 2020 - yearOfBirth;
      }

      // ES5
      console.log('This is ' + firstName + ' ' + lastName + '. He was born in '
      + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')

      // ES6
      console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.
      Today, he is ${calcAge(yearOfBirth)} years old.`)
      ```
    * `startsWith` method,
        ```javascript
        const name = `${firstName} ${lastName}`;
        console.log(name.startsWith('J'));
        console.log(name.endsWith('n'));
        // Returns boolean, (case sensitive)
        // in between the string, There is `includes()`
        console.log(name.includes(' ')); // checks if there is any space
        ```
    * To repeat strings, `repeat`
        ```javascript
        console.log(`${firstName} `.repeat(3));

        // Gives 'John John John'
        ```

5. ### Arrow Functions
    * Using map function to calculate present age,
        ```javascript
        const years = [1990, 1965, 1982, 1937];

        // ES5
        var ages5 = years.map(function(el) {
            return 2020 - el;
        });
        console.log(ages5);

        // ES6 - uses less code & clean code
        let ages6 = years.map(el => 2020 - el);
        console.log(ages6);

        // With multiple arguments
        ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);

        // More actions
        ages6 = years.map((el, index) => {
            const now = new Date().getFullYear();
            const age = now - el;
            return `Age element ${index + 1}: ${age}.`
        });
        ```
    * Arrow Functions: Lexical 'this' keyword. Arrow functions share the surrounding `this` keyword [*"They use the `this` keyword of the function they are written in"*], to understand this in ES5,
        ```javascript
         var box5 = {
         color: 'green',
         position: 1,
         clickMe: function() {
             // button with class="green"
             document.querySelector('.green'). addEventListener('click',
             function() {
                 var str = 'This is the box number ' + this.position + ' and it is ' + this.color;
                 alert(str);
             });
           }
         }
         box5.clickMe(); // "This is the box number undefined and it is undefined"
        ```
    * The above result happens("values not read") because, `this` keyword actually points to the object only in a method call, in an inner function(or any other function) call, `this` points to global object (*"For a browser it is the window object"*).
    * A common practice to overcome this behavior is to assign the `this` keyword to a temporary variable in the method first then use the variable in the nested functions.
    * With ES6,
        ```javascript
        // ES6

        const box6 = {
            color: 'green',
            position: 1,
            clickMe: function () {
                // button with class="green"
                document.querySelector('.green').addEventListener('click',
                    () => {
                        const str = `This is the box number ${this.position} and ${''}it is ${this.color}`;
                        alert(str);
                    });
            }
        }
        box6.clickMe(); // "This is the box number 1 and it is green"

        // The ${''} is used as a hack to line brake, can use the "+" sign [`something` + `another`] also for the line brakes without extra spaces on large strings.
        ```
    * But if the method on its own is replaced with arrow functions,
        ```javascript
        clickMe: () => {
        // button with class="green"
        document.querySelector('.green').addEventListener('click',
            () => {
                const str = `This is the box number ${this.position} and ${''
                    }it is ${this.color}`;
                alert(str);
            });
        }
        ```
        It gives the same "undefined" error because, The `this` keyword passed to the arrow function at first is from the surrounding *global context*.
    * Function constructor with ES6, First trying the same with ES5,
        ```javascript
        function Person(name) {
            this.name = name;
        }

        // ES5
        Person.prototype.myFriends5 =
            function(friends) {
                var arr = friends.map(function(el) {
                    return this.name + ' is friends with ' + el;
                });
                console.log(arr);
            }

        var friends = ['Bob','Jhon', 'Marks', 'Sweet'];
        new Person('Jane').myFriends5(friends);
        ```
        Here also the name is not defined cz, of the same reason, the main prototype function have access to the 'this' keyword, but the function inside the map function doesn't, it gets the global `this`.
    * In ES5, there is also a common workaround (This issues are well known ones), ie, to use the `bind()` method to make a copy with the `this` variable set to `this` of the main `prototype`.
        ```javascript
        Person.prototype.myFriends5 =
        function (friends) {
            var arr = friends.map(function (el) {
                return this.name + ' is friends with ' + el;
            }.bind(this));
        }
        ```
    * In ES6, using arrow function, don't need this workaround,
        ```javascript
          Person.prototype.myFriends6 =
          function (friends) {
              var arr = friends.map(el => {
                  return `${this.name} is friends with ${el}`;
              });
          }
        ```
        Notice, here also, if the main function is assigned as arrow function, `this` will not works as normal `this`....
7. ### Destructuring.
    * Convenient way to extract data from objects or an array, for ES5 it is like,
        ```javascript
        var john = ['John', 25];
        var name = john[0];
        var age = john[1];

        // ES6

        const [name, year] = ['John', 25];
        console.log(name);  // John
        console.log(year);  // 25

        // Also with objects
        const obj = {
            firstName: 'John',
            lastName: 'Smith'
        };

        // Destructuring (variable names match the keys)
        const {firstName, lastName} = obj;
        console.log(firstName);  // John
        console.log(lastName);  // Smith

        // If need a separate variable name
        const { firstName: a, lastName: b } = obj;
        console.log(a);  // John
        console.log(b);  // Smith
        ```
        Practical application of destructuring, To return multiple values from a function
        ```javascript
        function calcAgeRetirement(year) {
            const age = new Date().getFullYear() - year;
            return [age, 65 - age];
        }

        const [age, retirement] = calcAgeRetirement(1994);
        console.log(age); // 26
        console.log(retirement); // 39
        ```
8. ### Arrays in ES6
    * ES6 introduced new array methods for simplifying things like,
        ```javascript
        const boxes = document.querySelectorAll('.box');

        // To traverse through the nodelist returned in ES5
        var boxesArr5 = Array.prototype.slice.call(boxes);

        // To change all box colors to blue (ES5)
        boxesArr5.forEach(function(curr) {
        curr.style.backgroundColor = 'dodgerblue';
        });
        ```
    * In ES6, It can be done in a single line of code
        ```javascript
        Array.from(boxes).forEach(curr => curr.style.backgroundColor = 'pink');
        ```
9. ### Loops in ES6
    * When we need looping through an array, we use `forEach` or `map` method, But the problem with both of them is, we can't `break` from them or use the `continue` statement, for that we need to go back to conventional `for` loop, But for simple loops it is more code and variables.
10.