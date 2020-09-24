var circles = $('svg')
var backupCircles = circles
var nextColor = 'blue'
$('#player1').css('background',nextColor)
$('#player2').css('background','grey')

function clearBoard() {
  backupCircles = circles
  nextColor = 'blue'
  $('#player1').css('background',nextColor)
  $('#player2').css('background','grey')
  $('#player1').css('background',nextColor)
  for (var i = 0; i < 36; i++) {
    $('circle').eq(i).css('fill','grey')
  }
}

$('#resetbtn').click(function(){
  clearBoard()
  $('#board').slideDown(1000)
  $('#players').slideDown(1000)
})

circles.each(function(){
  $(this).click(function(){
    var clickedIndex = circles.index(this)
    if (gameOn()) {
      colorFunc(clickedIndex)
    } else {
      $('#player1').css('background','grey')
      $('#player2').css('background','grey')
      nextColor = 'grey'
      console.log("Game Ended!");
    }
  })
})

function colorFunc(clickedIndex) {
  var removeIndex = 0
  var columnImpacted = clickedIndex % 6

  for (var i = clickedIndex; i < 36; i += 6) {
    if (backupCircles.is(circles.eq(i))) {
      circles.eq(i).find('circle').css('fill',nextColor)
      removeIndex = i
    }
  }

  if (backupCircles.is(circles.eq(clickedIndex))) {
    switchPlayers()
    backupCircles = backupCircles.not(circles.eq(removeIndex))
    checkWinner()
  }

  for (var i = clickedIndex; i < 36; i += 6) {
    if (backupCircles.is(circles.eq(i))) {
      circles.eq(i).find('circle').css('fill','grey')
    }
  }

}

function gameOn() {
  if (backupCircles.length == 0) {
    return false
  }
  return true
}

function switchPlayers() {
  if (nextColor == 'blue') {
    nextColor = 'yellow'
    $('#player2').css('background',nextColor)
    $('#player1').css('background','grey')
  } else {
    nextColor = 'blue'
    $('#player1').css('background',nextColor)
    $('#player2').css('background','grey')
  }
}

function checkWinner() {
  for (var i = 35; i >= 0; i--) {
    // console.log("i=" + i);
    var c0 = circles.eq(i).find('circle').css('fill')
    var c1 = circles.eq(i+1).find('circle').css('fill')
    var c2 = circles.eq(i+6+1).find('circle').css('fill')
    var c3 = circles.eq(i+6).find('circle').css('fill')
    var c4 = circles.eq(i+6-1).find('circle').css('fill')
    var c5 = circles.eq(i-1).find('circle').css('fill')
    var c6 = circles.eq(i-6-1).find('circle').css('fill')
    var c7 = circles.eq(i-6).find('circle').css('fill')
    var c8 = circles.eq(i-6+1).find('circle').css('fill')

    // rgb(255, 255, 0) yellow
    // rgb(0, 0, 255) blue

    if (c0==c1 && c0==c2 && c0==c3 && c0 != 'rgb(128, 128, 128)') {
      winner(c0)
      break
    } else if (c0==c3 && c0==c4 && c0==c5 && c0 != 'rgb(128, 128, 128)') {
      winner(c0)
      break
    } else if (c0==c5 && c0==c6 && c0==c7 && c0 != 'rgb(128, 128, 128)') {
      winner(c0)
      break
    } else if (c0==c7 && c0==c8 && c0==c1 && c7 != 'rgb(128, 128, 128)') {
      winner(c0)
      break
    } else if (backupCircles.length ==0) {
      console.log("Match Draw!");
      break
    } else {
      continue
    }
  }
}

function winner(color) {
  if ( color=='rgb(0, 0, 255)' ) {
    console.log('Player-I wins!');
  } else if (color=='rgb(255, 255, 0)') {
    console.log('Player-II wins!');
  }
}
