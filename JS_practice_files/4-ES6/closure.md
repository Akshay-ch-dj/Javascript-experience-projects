# Closure in JS

---

## Working of a normal function

---

* Let a normal function called secureBooking executes as shown below,

```javascript
const secureBooking = function () {
  let passengerCount = 0;

  // The return function
  return function () {
    passengerCount += 1;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
```

* At the start of running this code there is secureBooking function in the global execution context, its scope(global scope) contains that function address only.
* Then the secureBooking is executed, new exe. cnxt and scopes created, the new scope only contains the passengerCount variable,(but the global scope is always accessible),
* In the next line a new function is returned and it is stored in the booker variable,(address)
* Now the secureBooking function is finished and its exe. context returns.
![closure example 1](./images/closure-1.png)

* Now call the booker function, lets call it three times
* Each time the function executes it updates the passesngerCount and prints to the console,

```javascript
`1 passengers`
`2 passengers`
`3 passengers`
```

* But isn't the function that contains the VE of passengerCount closed already ie its execution context is left the stack already, now where the value is taken.???? how comes the return function access the value of passengerCount???? There comes the closure

* The environment that creates the return function is already gone, but the function(now stored in booker, so booker()) got access to the variable inside it. That's what the closure does, It remembers all the variables for the functions that is **bound by closure**.
* So to explain this one need to add the idea of closure with the scope chain. lets go through stepwise what's happening

### ---

* When the `booker()` function is called, new exe. cntxt is created in the call stack, it VE contains no elements as no one present in the function
* The fun. is a child function of the global context, so is a child scope of global scope as shown.
* So how does the function access the passengerCount variable.

> Any function always have access to the variable environment of the execution context in which the function was created

![closure example 2]

* Here the booker() fn. was born in the execution context of the secureBooking function, which is closed already but it's got the access to the VE of that function that contains the passengerCount variable..\
That connection is closure.
