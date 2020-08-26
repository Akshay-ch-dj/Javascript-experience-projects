/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// ************** Declaring Global variables ************** //

var scores, roundScore, activePlayer, gamePlaying;

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
    document.querySelector('.dice').style.display = 'none';

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
    document.querySelector('.dice').classList.add('animate1');
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

    // document.querySelector('.dice').style.display = 'none';
}


// GAME STARTS

resetGame();


// *************  Event Listeners ****************

// Adding the roll button click-event listener,
document.querySelector('.btn-roll').addEventListener('click', function() {

    document.querySelector('.dice').classList.toggle('animate1');
    document.querySelector('.dice').classList.toggle('animate2');
    
    
    if(gamePlaying) {
        // 1. When ROLL DICE is clicked, random number(b/w 1-6) generated.
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2. Get the dice image corresponding to that number
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        // The dice images are named accordingly, change the src attribute to change the img
        diceDOM.src = `dice-${dice}.png`;

        // 3. Update the roundScore if the number is not 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
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
        if (scores[activePlayer] >= 20) {
            // Add winner class to the player active panel
            document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
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




// ***************** DOM Manipulation ****************** /
// Use querySelector to select the classes and styles as in CSS, 
// Withe help of activePlayer variable: "setter"
// document.querySelector(`#current-${activePlayer}`).textContent = dice; 
// document.querySelector(`#current-${activePlayer}`).innerHTML = 
// `<em>${dice}<em>`

// // To read the value of the content: "getter"
// var x = document.querySelector('#score-0').textContent;