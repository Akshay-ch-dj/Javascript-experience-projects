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
    * A common practice to overcome this behavior is to assign the this keyword to a temporary variable in the
7.