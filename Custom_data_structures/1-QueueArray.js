'use strict';
// object
class QueueArray {
  constructor(size, defElement) {
    this.queueArray = new Array(size);
    this.queueArray.fill(undefined);

    if (Array.isArray(defElement)) {
      if (defElement.length <= size) {
        for (let i = 0; i < size; i++) {
          this.queueArray[i] = defElement[i];
        }
      } else {
        throw 'Error: defined array size is large';
      }
    } else if (typeof(defElement) === 'string' ||
                typeof(defElement) === 'number' ||
                typeof(defElement) === 'boolean') {
      this.queueArray.fill(defElement);
    } else if (defElement) {
      throw 'Error: default element type not accepted';
    }

    Object.seal(this.queueArray);
    console.log(this.queueArray);
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
      console.log(this.queueArray);
    } else if (order === 'ascending') {
      this.queueArray.sort((a, b) => a - b);
    }
  }
}

const reg = new QueueArray(5);
reg.enter(6);
reg.enter(7);
reg.enter(1);
reg.enter(9);

reg.sortQueue('ascending');
console.log(reg);


// As an extension to this data structure, I've thought of a Sorted Q array,
// (also to get practice with JS OOP)
// Custom obj, can be name SQueueArray.
// 1. It is a QueueArray with values sorted(only for numbers..)
// 2. It accepts an additional argument 'order' that represents the sorting
// order(ascending or descending)
// 3. The aim is to store top higher or lower elements always.

class SQueueArray extends QueueArray {
  constructor(size, defElement, order) {
    super(size, defElement);
    this.order = order;

    // Sort the array based on the order given
    if (order === 'ascending') {
      this.queueArray.sort((a, b) => b - a);
      console.log(this.queueArray);
    } else if (order === 'descending') {
      this.queueArray.sort((a, b) => a - b);
    }
  }
}

const sreg = new SQueueArray(5, 4, 'ascending');

sreg.enter(6);
sreg.enter(5);
sreg.enter(3);
sreg.enter(8);
sreg.enter(1);

console.log(sreg);

const sample = [3, 5, 6, 2, 7];

sample.sort((a, b) => b - a);

console.log(sample);
