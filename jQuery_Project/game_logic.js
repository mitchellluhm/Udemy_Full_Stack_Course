
// 0 : not yet played
// 1 : player 1 chip placed
// 2 : player 2 chip placed
var board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

// selected row and column
// changed by on click for tr and td
var sRow = 0;
var sCol = 0;
var turn = 1;
var color = 'red';

function isValidMove() {
  // var valid_move = false;

  for (var i = 5; i > -1; i--) {
    if ( board[i][sCol] === 0 ) {
      sRow = i;
      return true;
    }
  }
  return false;

}

$('td').click(function () {
  sCol = ( ($(this).attr('id')) / 1 ) - 1;
  sRow = ( ($(this).parent().attr('id')) / 1 ) - 1;
  console.log('here');

  if ( isValidMove() ) {
    if ( turn === 1) {
      color = 'yellow'
    } else {
      color = 'red'
    }
    $('tr').eq(sRow).children().eq(sCol).css('background-color', color);
    console.log('scol: ' + sCol + ' srow: ' + sRow);
    board[sRow][sCol] = turn;
    if ( turn === 1) {
      turn = 2;
    } else {
      turn = 1;
    }
  }

})
