# Custom Data Structures and Reusable Code Snippets in JavaScript

---

1. ## Queue Array

   This is a custom `Array`, which is done to mimic the `queue` data structure, that is used mainly in the low level languages like `C`.\
   It can be used to create **FILO**(First In Last Out) queues, that are simply fixed size array but when new elements get added the last one gets popped out,
   * It got two arguments the *size* and the *default value* to fill.
   * The default value is optional and can be a number, string, boolean or an Array.
   * If the second argument is not present then the elements in the queue are `undefined` till new elements get added.
   * If it is an Array, each array element get exactly matched to queue array.
   * Throw errors when defined element array size is large or if elements other than the type defined are specified as default.

    THE CODE

    ```javascript
      class QueueArray {
          constructor(size, def_element) {
              this.queueArray = new Array(size);
              this.queueArray.fill(undefined);

              if (Array.isArray(def_element)) {
                  if (def_element.length <= size) {
                      for (let i = 0; i < size; i++) {
                          this.queueArray[i] = def_element[i];
                      }
                  } else {
                      throw "Error: defined array size is large";
                  }
              } else if (typeof(def_element) === 'string' ||
                         typeof(def_element) === 'number' ||
                         typeof(def_element) === 'boolean') {
                  this.queueArray.fill(def_element);
              } else if (def_element) {
                  throw "Error: default element type not accepted";
              }

              Object.seal(this.queueArray);
          }


          // prototype
          enter(element) {
              // the whole thing shifts right that kicks out the last element
              for (let i = this.queueArray.length-1; i >= 1; i--) {
                  this.queueArray[i] = this.queueArray[i-1];
              }
              // the element is added in first position
              this.queueArray[0] = element;
          }

          sortQueue(order) {
              if (order === 'descending') {
                  this.queueArray.sort((a, b) => b - a);
              } else if (order === 'ascending') {
                  this.queueArray.sort((a, b) => a - b);
              }
          }
      }
    ```

    * As of now, it got two prototype methods, `enter()` is used to enter new values to the QueueArray and `sortQueue` is used to sort elements inside the array

## Contributors ✨

([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/akozdev"><br /><sub><b>Aleksander Kozłowski</b></sub></a><br /><a href="#question" title="Answering Questions">💬</a><a href="#" title="Code">💻</a></td>
  </tr>
</table>
