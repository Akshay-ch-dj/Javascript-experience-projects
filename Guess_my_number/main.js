'use strict';

// The UI controller
const UI = (() => {
  const DOMElement = {
    guessedNum: document.querySelector('.guess'),
    checkButton: document.querySelector('.check'),
    message: document.querySelector('.message'),
    score: document.querySelector('.score'),
    highScore: document.querySelector('.highscore'),
    againButton: document.querySelector('.again'),
    number: document.querySelector('.number'),
    mario: document.querySelector('.mario'),
  };

  let score = 20;

  const highScores = [];

  const getHighScore = () => {
    // put the current score to array
    highScores.push(score);
    // sort the array
    highScores.sort((a, b) => b - a);
    // make it store only 5 scores max
    if (highScores.length > 5) highScores.pop();

    return highScores[0];
  };

  return {
    changeMessage: function (text) {
      DOMElement.message.textContent = text;
    },
    reduceScore: function () {
      score -= 1;
      DOMElement.score.textContent = score;
    },
    checkHighScore: function () {
      DOMElement.highScore.textContent = getHighScore();
    },
    displayNum: function (num) {
      DOMElement.number.textContent = num;
    },
    resetUI: function () {
      this.clearInput();
      // set score back to 20
      score = 20;
      DOMElement.score.textContent = 20;
      // background back to black.
      document.body.style.backgroundColor = '#222';
      DOMElement.mario.classList.remove('mario--jump-flip');
      // enable the check button
      DOMElement.checkButton.disabled = false;
      // reset the number display
      DOMElement.number.textContent = '?';
      // reset the message
      this.changeMessage('Start guessing...');
    },
    gameWin: function () {
      // change background
      document.body.style.backgroundColor = '#60b347';
      // add mario jump-flip
      DOMElement.mario.classList.add('mario--jump-flip');
      // win message
      this.changeMessage('🎇 Match Found');
      // change highScore
      this.checkHighScore();
      DOMElement.checkButton.disabled = true;
    },
    clearInput: function () {
      DOMElement.guessedNum.value = '';
    },
    marioJump: function () {
      DOMElement.mario.classList.remove('mario--jump');
      setTimeout(() => {
        DOMElement.mario.classList.add('mario--jump');
      }, 10);
    },
    DOMElements: DOMElement,
  };
})();

const controller = ((UI) => {
  // setup event listeners fun.active
  const DOM = UI.DOMElements;
  const setupEventListeners = () => {
    // For the check button
    DOM.checkButton.addEventListener('click', checkForMatch);
    // For again button
    DOM.againButton.addEventListener('click', resetGame);
  };

  let randNum = 0;

  // Generate random number between 1 and 20 (2 to 19)
  const generateRandNum = () => {
    randNum = Math.floor(Math.random() * 18) + 2;
  };

  const checkForMatch = () => {
    UI.marioJump();
    // get the number input
    const guessedNum = Number(DOM.guessedNum.value);
    UI.displayNum(guessedNum);
    // check the number input
    if ((guessedNum && guessedNum < 2) || guessedNum > 19) {
      UI.changeMessage('😈 Number out of the range!');
      UI.reduceScore();
    } else if (guessedNum && guessedNum < randNum) {
      UI.changeMessage('😩 Number is lower!');
      UI.reduceScore();
    } else if (guessedNum > randNum) {
      UI.changeMessage('😲 Number is higher!');
      UI.reduceScore();
    } else if (guessedNum === randNum) {
      UI.gameWin();
    }
    // clear the input field
    UI.clearInput();
  };

  // reset game
  const resetGame = () => {
    generateRandNum();
    UI.resetUI();
  };

  return {
    init: function () {
      // reset game at start and call event listeners
      resetGame();
      setupEventListeners();
    },
  };
})(UI);

controller.init();
