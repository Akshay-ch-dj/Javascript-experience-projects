# JS NOTES

---

## Best coding Practices ES6

---

1. A common practice when naming constants is to use all uppercase letters, with words separated by an underscore. It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).
  `const FAV_PET = "Cats";`
  `let myPet = 'sammy';`

2. Some developers prefer to assign all their variables using `const` by default, unless they know they will need to reassign the value. Only in that case, they use `let`. Remember, using the `const` declaration only prevents reassignment of the variable identifier(for arrays and objects, it only points the memory location, so the object or array itself is mutable)
3. dd

## Useful methods

---

1. `Object.freeze()` and `Object.seal()`

   To ensure the data doesn't change, JavaScript provides a function `Object.freeze()` to prevent data mutation.\
   Once the object is frozen, you can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.

      ```javascript
      function freezeObj() {
        const MATH_CONSTANTS = {
          PI: 3.14
        };
        Object.freeze(MATH_CONSTANTS);

        try {
          MATH_CONSTANTS.PI = 99;
        } catch(ex) {
          console.log(ex);
        }
        return MATH_CONSTANTS.PI;
      }
      const PI = freezeObj();
      ```

   That will produce an Error.

   There is a similar method to lock objects using `Object.seal()`, This method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

   ```javascript
   var obj = {
     prop: function() {},
     foo: 'bar'
   };

   //Works
   obj.foo = 'quux';

   // Now any changes, other than to property values,
   // will fail and throws TypeError in strict mode
   obj.quaxxor = 'the friendly duck';
   delete obj.foo;

   ```

   The difference between them is that, Existing properties in objects frozen with `Object.freeze()` are made immutable. Objects sealed with `Object.seal()` can have their existing properties changed. The object can be checked if freezed or sealed using `Object.isFrozen(obj)` & `Object.isSealed(obj)`.

2. To sum up an array using `reduce()`.

   ```javascript
   const VALUES = [1, 2, 5, 6];
   const SUM = VALUES.reduce((a, b) => a + b, 0);
   ```

3. To find max value from an array using Math.max() and spread operator.

   ```javascript
   const arr = [6, 89, 3, 45];
   const maximus = Math.max(...arr); // returns 89
   ```

## Using Modules in ES6

---

In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:

```html
<html>
  <body>

    <script type="module" src="filename.js"></script>
  </body>
</html>
```

A script that uses this module type can now use the import and export features.

If it need to a function at different places. In order to share it with these other files, you first need to export it.

```javascript
export const add = (x, y) => {
  return x + y;
}
```

The above is a common way to export a single function, but you can achieve the same thing like this:

```javascript
const add = (x, y) => {
  return x + y;
}

export { add };

// Can also be used to import multiple functions
export { add, subtract };
```

It can import in another file and use it without having to rewrite the code.\
`import` allows to choose which parts of a file or module to load. In the previous lesson, the examples exported `add` from the `math_functions.js` file. Here's how you can import it to use in another file:

`import { add } from './math_functions.js';`

Here, import will find add in `math_functions.js`, import just that function for you to use, and ignore the rest. The `./` tells the import to look for the `math_functions.js` file in the same folder as the current file. The relative file path (`./`) and file extension (`.js`) are required when using import in this way.\
Can import more than one item from the file by adding them in the import statement like this:

`import { add, subtract } from './math_functions.js';`

* Use `*` to Import Everything from a File

`import * as myMathModule from "./math_functions.js";`

The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:

Then use them like,

```javascript
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

* Using `export default`

Use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

```javascript
// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
```

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with `var`, `let`, or `const`.

* Import a Default Export

To import a `default export`, you need to use a different `import` syntax. In the following example, `add` is the default export of the `math_functions.js` file. Here is how to import it:

`import add from "./math_functions.js";`

The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the `math_functions.js` file is. You can use any name here when importing a `default`.
