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

// const squaresPlayed = []

// log the square that was clicked
// $('.gameBoard').on('click', '.boardPiece', function (event) {
  // registers the current click
  // const currentClick = $(event.currentTarget)
  // gets the index of the square that was just clicked
  // const indexOfSquare = $('.boardPiece').index(currentClick)
  // gets the X or O
  // const stringInHTML = $(currentClick).html()
  // if (stringInHTML === 'X') {
  //   squaresPlayed.push('X')
  // } else {
  //   squaresPlayed.push('O')
  // }
  // console.log('X or O in the DOM?:', stringInHTML)
  // console.log('indexOfSquare is: ', indexOfSquare)
// })
