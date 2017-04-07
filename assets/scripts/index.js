'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
const authEvents = require('./auth/events.js')

// on document ready
$(() => {
  authEvents.addHandlers()
})

const squaresPlayed = []

// log the square that was clicked
$('.gameBoard').on('click', '.boardPiece', function (event) {
  // registers the current click
  const currentClick = $(event.currentTarget)
  // gets the index of the square that was just clicked
  // const indexOfSquare = $('.boardPiece').index(currentClick)
  // gets the X or O
  const stringInHTML = $(currentClick).html()
  if (stringInHTML === 'X') {
    squaresPlayed.push('X')
  } else {
    squaresPlayed.push('O')
  }
  console.log('X or O in the DOM?:', stringInHTML)
  // console.log('indexOfSquare is: ', indexOfSquare)
})
const determineWinner = function (gameBoard, playerSymbol) {
// logic to determine winners
  if (
     (gameBoard[0] === playerSymbol && gameBoard[1] === playerSymbol && gameBoard[2] === playerSymbol) ||
     (gameBoard[3] === playerSymbol && gameBoard[4] === playerSymbol && gameBoard[5] === playerSymbol) ||
     (gameBoard[6] === playerSymbol && gameBoard[7] === playerSymbol && gameBoard[8] === playerSymbol) ||
     (gameBoard[6] === playerSymbol && gameBoard[3] === playerSymbol && gameBoard[0] === playerSymbol) ||
     (gameBoard[7] === playerSymbol && gameBoard[4] === playerSymbol && gameBoard[1] === playerSymbol) ||
     (gameBoard[8] === playerSymbol && gameBoard[5] === playerSymbol && gameBoard[2] === playerSymbol) ||
     (gameBoard[6] === playerSymbol && gameBoard[4] === playerSymbol && gameBoard[2] === playerSymbol) ||
     (gameBoard[8] === playerSymbol && gameBoard[4] === playerSymbol && gameBoard[0] === playerSymbol)) {
    console.log('we have a winner')
  }
}
module.exports = {
  determineWinner
}
