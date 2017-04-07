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
  const indexOfSquare = $('.boardPiece').index(currentClick)
  // gets the X or O
  const stringInHTML = $(currentClick).html()
  if (stringInHTML === 'X') {
    squaresPlayed.push('X')
  } else {
    squaresPlayed.push('O')
  }
  console.log(squaresPlayed)
  console.log('X or O in the DOM?:', stringInHTML)
  console.log('indexOfSquare is: ', indexOfSquare)
  console.log(winner())
})
const winner = function () {
  const boxZero = $('#box-0').html()
  const boxOne = $('#box-1').html()
  const boxTwo = $('#box-2').html()
  const boxThree = $('#box-3').html()
  const boxFour = $('#box-4').html()
  const boxFive = $('#box-5').html()
  const boxSix = $('#box-6').html()
  const boxSeven = $('#box-7').html()
  const boxEight = $('#box-8').html()
// logic to determine winners
  if (boxZero !== '' && (boxZero === boxOne) && (boxZero === boxTwo)) {
    return 'row 1 is winners'
  } else if (boxThree !== '' && (boxThree === boxFour) && (boxThree === boxFive)) {
    return 'row 2 is winner'
  } else if (boxSix !== '' && (boxSix === boxSeven) && (boxSix === boxEight)) {
    return 'row 3 is winner'
  } else if (boxZero !== '' && (boxZero === boxThree) && (boxZero === boxSix)) {
    return 'collumn 1 is winner'
  } else if (boxOne !== '' && (boxOne === boxFour) && (boxOne === boxSeven)) {
    return ('collumn 2 is winner')
  } else if (boxTwo !== '' && (boxTwo === boxFive) && (boxTwo === boxEight)) {
    return 'collumn 3 is winner'
  } else if (boxZero !== '' && (boxZero === boxFour) && (boxZero === boxEight)) {
    return 'diagonal right is winner'
  } else if (boxTwo !== '' && (boxTwo === boxFour) && (boxFour === boxSix)) {
    return 'diagonal left is winner'
  } else {
    return 'try again'
  }
}
