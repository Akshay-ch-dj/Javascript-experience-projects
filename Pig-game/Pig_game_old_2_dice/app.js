'use strict';

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// ************** Declaring Global variables ************** //

var scores, roundScore, activePlayer, gamePlaying, prvDice1, prvDice2, targetVal;

/************* Functions **********************/

function resetGame() {

    gamePlaying = true;
    // Use an array to store scores:- [player1, player2]
    scores = [0, 0];

    // For round score: the score that gets added up each time dice rolls before holding
    roundScore = 0;

    // keep the track of current active player, 0-first, 1-second
    activePlayer = 0;

    // Hide the dice by setting its display property to none.
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    [0, 1].forEach((num) => {
        // Set the initial values of players scores to zero
        document.getElementById(`score-${num}`).textContent = '0';
        document.getElementById(`current-${num}`).textContent = '0';

        // Set the player names to original.
        document.getElementById(`name-${num}`).textContent = `Player ${num + 1}`;

        document.querySelector(`.player-${num}-panel`).classList.remove('winner');
        document.querySelector(`.player-${num}-panel`).classList.remove('active');
    });

    document.querySelector(`.player-0-panel`).classList.add('active');

    document.querySelector('.dice1').classList.add('animate1');
    document.querySelector('.dice2').classList.add('animate1');

    // Set the target
    var tempVal = document.getElementById('target').value;
    targetVal = tempVal >= 10 ? tempVal : 100;
    document.querySelector('.target-show').textContent = `Target Score: ${targetVal}`;
}

function playerChange() {
    // Next player, activePlayer changes from 0 -> 1, using turnery operator
    activePlayer = activePlayer === 1 ? 0 : 1;
    // Need to set the roundScore back to zero,
    roundScore = 0;
    // Set the round score back to zero again on window/display.
    document.getElementById(`current-0`).textContent = roundScore;
    document.getElementById(`current-1`).textContent = roundScore;
    // Visually change the appearance to next player, add the active class
    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}


// GAME STARTS

resetGame();


// *************  Event Listeners ****************

// Adding the roll button click-event listener,
document.querySelector('.btn-roll').addEventListener('click', function() {

    // For the animation class
    document.querySelector('.dice1').classList.toggle('animate1');
    document.querySelector('.dice1').classList.toggle('animate2');
    document.querySelector('.dice2').classList.toggle('animate1');
    document.querySelector('.dice2').classList.toggle('animate2');

    if(gamePlaying) {

        // 1. When ROLL DICE is clicked, random number(b/w 1-6) generated.
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. Get the dice image corresponding to that number
        var diceDOM1 = document.querySelector('.dice1');
        var diceDOM2 = document.querySelector('.dice2');

        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        // The dice images are named accordingly, change the src attribute to change the img
        diceDOM1.src = `../images/dice-${dice1}.png`;
        diceDOM2.src = `../images/dice-${dice2}.png`;

        // 3. Update the roundScore if the number is not 1
        if (dice1 !== 1 && dice2 !== 1) {
            // Check for repeated 6
            if (dice1 + prvDice1 === 12 || dice2 + prvDice2 === 12) {
                playerChange();
                prvDice1 = 0;
                prvDice2 = 0;
            } else {
                // Add score
                var dice = dice1 + dice2;
                roundScore += dice;
                document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
                // Store the dice value
                prvDice1 = dice1;
                prvDice2 = dice2;
            }

        } else {
            playerChange();
        }
    }
});

// EventListener for the hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        // Add the current score to global score
        scores[activePlayer] += roundScore;
        // Update the UI
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
        // Check if player won the game

        if (scores[activePlayer] >= targetVal) {
            // Add winner class to the player active panel
            document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            gamePlaying = false;
        } else {
            // If not Change the player
            playerChange();
        }

    }
});

// EventListener for the New game button
document.querySelector('.btn-new').addEventListener('click', resetGame);


/*
3 Challenges

1. A player looses his entire Score when he rolls two 6 in a row, after that, its the next
players turn. (separate variable to save prv. dice roll)
2. Add an input field to the HTML where players can set the winning score, to change the predefined
score of 100. (Hint: use the 'value' property in js)
3. Add another dice to the game, there are two dices now. The player looses his current score when
one of them is a 1.
*/