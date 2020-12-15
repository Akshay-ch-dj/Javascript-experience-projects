'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Akshay Chandran',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Walter White',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Bojack Horseman',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Jimmy Cliff',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Number formatting, number to be formatted and its type(deposit, withdrawal)
const formatNumber = function (num, type) {
  // 2 decimals fix
  const ModNum = Math.abs(num).toFixed(2);

  // split to integer and decimal parts
  const numPart = ModNum.toString().split('.');
  // eslint-disable-next-line prefer-const
  let [intPart, decPart] = numPart;

  // integer part splits to an array.
  intPart = intPart.split('');

  // adds the ',' separation
  let i = intPart.length - 3;
  while (i > 0) {
    intPart.splice(i, 0, ',');
    i -= 2;
  }

  // rejoin back to string
  intPart = intPart.join('');

  // Add rupees &'+' / '-' for the type

  return `${type === 'deposit' ? '' : '-'} ₹ ${intPart}.${decPart}`;
};

// Display the movement array to DOM
const displayMovements = function (movements) {
  // Empty the container before adding elements(all html)
  containerMovements.innerHTML = '';

  console.log(movements);
  movements.forEach((amount, i) => {
    // Deposit or withdrawal
    const type = amount > 0 ? 'deposit' : 'withdrawal';

    // Dirty but straightforward direct html injection
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${formatNumber(amount, type)}</div>
        </div>`;

    // Insert using insertAdjacentHTML to the movement container
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// LECTURES
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['RS', 'Indian Rupee'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
*/

// Compute username for each of four users

// eg for 'Walter White' => ww, 'Jimmy Cliff' => 'jc'

const createUsername = function (accs) {
  // modifies each account to add a username
  accs.forEach((acc) => {
    // generate the username grabbing the first letters of names
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((n) => n[0])
      .join('');
  });
};

createUsername(accounts);

accounts.forEach((acc) => {
  console.log(acc.username);
});
