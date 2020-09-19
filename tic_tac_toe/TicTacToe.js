// Win cases
// cells [0-9],
// win if equal, 123, 456, 789, 147, 258, 369, 159, 357


// For controlling game play
var gamePlay;

var board = (function() {

  var cellValues = [];

  var fetchBoard = function(){
    cellValues[0] = 'VALUE'
    cellValues[1] = document.getElementById("one").textContent;
    cellValues[2] = document.getElementById("two").textContent;
    cellValues[3] = document.getElementById("three").textContent;
    cellValues[4] = document.getElementById("four").textContent;
    cellValues[5] = document.getElementById("five").textContent;
    cellValues[6] = document.getElementById("six").textContent;
    cellValues[7] = document.getElementById("seven").textContent;
    cellValues[8] = document.getElementById("eight").textContent;
    cellValues[9] = document.getElementById("nine").textContent;
  }

  return {
    boardNow: function() {
      fetchBoard();
      return cellValues;
    },

    clear: function(){
      var cells = document.querySelectorAll("td");
      console.log(cellValues);
      console.log(cells);
      cells.forEach(function (item) {
        item.textContent = "";
      });
      console.log(cellValues);
      document.getElementById("head1").textContent = `Welcome to Tik Tak Toe!`;
      // both player turns hidden
      document.getElementById("player-1").style.visibility = "hidden";
      document.getElementById("player-2").style.visibility = "hidden";
      gamePlay = true;
    }
  }
})();

// Game function
var gamePlayers = (function() {
  // Set the player Markers
  var player1_mark = "X";
  var player2_mark = "O";

  var player = 1;

  return {
    // Turn players
    turnPlayer: function (event) {
      var cell = event.target;
      // Indicate each players turn
      if (cell.textContent === ''){
        if (player === 1) {
          cell.textContent = player1_mark;
          player = 2;
          // Show the player 2 turn text ie hide the player 1 visible player 2
          document.getElementById('player-1').style.visibility = 'hidden';
          document.getElementById('player-2').style.visibility = 'visible';

        } else if (player === 2) {
          cell.textContent = player2_mark;
          player = 1;

          document.getElementById("player-1").style.visibility = "visible";
          document.getElementById("player-2").style.visibility = "hidden";
        }
      }
    },

    // display winner
    winner: function() {
      var winner = player === 1? 2 : 1
      document.getElementById("head1").textContent = `Player ${winner} wins`;
      gamePlay = false;
    },

    // Display Draw
    draw: function() {
      document.getElementById("head1").textContent = "It's a Draw!";
      gamePlay = false;
    }
  };
})();


var mainGame = (function(game, board) {

  // Setup Event listener
  var setUpEventListener = function() {
    document.getElementById("b").addEventListener("click", board.clear);

    document.querySelector("table").addEventListener("click", playGame);
  }

  // Function to check Three cells
  var checkCells = function(cellArray){
    // Verify the cells contain 'X' or 'O' marks.
    console.log(cellArray);
    if (cellArray.includes("X") || cellArray.includes("O")){
      // Check the cells equal or not
      console.log(cellArray[0]);
      console.log(cellArray[1]);
      console.log(cellArray[2]);
      return cellArray[0] === cellArray[1] && cellArray[1] === cellArray[2];
    }
  }

  // Check if draw function(check after winner check)
  var checkDraw = function() {
    var cells, draw;
    cells = document.querySelectorAll("td");

    draw = true;
    cells.forEach(function (item) {
      // turn off draw if any cell contain blank space
      if (item.textContent === ''){
        draw = false;
      };
    });
    return draw;
  }

  // check for win
  var checkForWin = function() {
      // 147, 258, 369, 159, 357
      var now = board.boardNow();
      if (
        checkCells([now[1], now[2], now[3]]) ||
        checkCells([now[4], now[5], now[6]]) ||
        checkCells([now[7], now[8], now[9]]) ||
        checkCells([now[1], now[4], now[7]]) ||
        checkCells([now[2], now[5], now[8]]) ||
        checkCells([now[3], now[6], now[9]]) ||
        checkCells([now[1], now[5], now[9]]) ||
        checkCells([now[3], now[5], now[7]])) {
          return true
      }
      return false
  };

  var playGame = function(e) {
    if (gamePlay){
      game.turnPlayer(e);
      console.log(checkForWin());
      if (checkForWin()) {
        game.winner();
        console.log(checkDraw());
      } else if (checkDraw()) {
        game.draw();
      }
    }
  };

  return {
    init: function() {
      board.clear();
      setUpEventListener();
    }
  }

})(gamePlayers, board);

mainGame.init();
