'use strict';

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points or the point sets on GLOBAL score wins the game

*/
// UI controller
const UI = (() => {
    const DOM = {
        dice: document.querySelector('.dice'),
        // roll dice button
        btnRoll: document.querySelector('.btn-roll'),
        // hold button
        btnHold: document.querySelector('.btn-hold'),
        // new button
        btnNew: document.querySelector('.btn-new'),
        // total score
        score: (player) => document.getElementById(`score-${player}`),
        // current score
        currScore: (player) => document.getElementById(`current-${player}`),
        // player name
        plName: (player) => document.getElementById(`name-${player}`),
        // player area
        plArea: (player) => document.querySelector(`.player-${player}-panel`),
        // target score input
        scoreTarget: document.getElementById('target'),
        // target score show txt
        showTarget: document.getElementById('target-text'),
    };

    const resetPlayer = (player) => {
        // Player scores to zero
        DOM.score(player).textContent = 0;
        DOM.currScore(player).textContent = 0;
        // player names to original.
        DOM.plName(player).textContent = `Player ${player + 1}`;
        // remove winner and active classes
        DOM.plArea(player).classList.remove('winner', 'active');
    };

    return {
        resetUI: function() {
            resetPlayer(0);
            resetPlayer(1);
            DOM.plArea(0).classList.add('active');
            DOM.dice.style.display = 'none';
        },
        playerUIChange: function(player) {
            DOM.plArea(player).classList.add('active');
            // compliment of the current player
            DOM.plArea(1 - player).classList.remove('active');
            // score of curr. non-active player set to zero.
            DOM.currScore(1 - player).textContent = 0;
        },
        rollDice: function() {
            DOM.dice.classList.remove('animate');
            setTimeout(() => {
                DOM.dice.classList.add('animate');
            }, 10);
        },
        gameWinner: function(player) {
            DOM.plName(player).textContent = 'Winner!';
            DOM.dice.style.display = 'none';
            DOM.plArea(player).classList.add('winner');
            DOM.plArea(player).classList.remove('active');
        },
        DOMElements: DOM
    };

})();


const gameControl = ((UI) => {

    const DOM = UI.DOMElements;

    /************* Event Listeners **********************/
    const setupEventListeners = () => {
        DOM.btnRoll.addEventListener('click', diceRoll);
        DOM.btnHold.addEventListener('click', holdGame);
        DOM.btnNew.addEventListener('click', resetGame);
    };

    let scores, roundScore, activePlayer, gamePlaying, targetVal;

    /************* Functions **********************/

    const playerChange = () => {
        // activePlayer changes
        activePlayer = activePlayer === 1 ? 0 : 1;
        // roundScore back to zero,
        roundScore = 0;
        UI.playerUIChange(activePlayer);
    };

    const resetGame = () => {
        gamePlaying = true;
        scores = [0, 0];
        // cumulative score in one turn
        roundScore = 0;
        // active player, 0-first, 1-second
        activePlayer = 0;
        // Set the target
        const target = DOM.scoreTarget.value;
        targetVal = target >= 10 ? target : 100;
        DOM.showTarget.textContent = `${targetVal}`;

        UI.resetUI();
    };

    const diceRoll = () => {
        UI.rollDice();
        if (gamePlaying) {
            // random number(b/w 1-6) generated.
            const dice = Math.floor(Math.random() * 6) + 1;
            // dice image corresponding to that number
            DOM.dice.style.display = 'block';
            // The dice images are named accordingly, change the src attribute to change the img
            DOM.dice.src = `../images/dice-${dice}.png`;
            // Update the roundScore if the number is not 1
            if (dice !== 1) {
                // Add score
                roundScore += dice;
                DOM.currScore(activePlayer).textContent = roundScore;
            } else {
                playerChange();
            }
        }
    };

    const holdGame = () => {
        if (gamePlaying) {
            // Add current score to global score
            scores[activePlayer] += roundScore;
            // Update the UI
            DOM.score(activePlayer).textContent = scores[activePlayer];
            // Check if player won the game
            if (scores[activePlayer] >= targetVal) {
                // Add winner class to the player active panel
                UI.gameWinner(activePlayer);
                gamePlaying = false;
            } else {
                // If not Change the player
                playerChange();
            }
        }
    };

    return {
        init: () => {
            resetGame();
            setupEventListeners();
        }
    };

})(UI);

gameControl.init();