'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

// the following functions retrieve the data input by the player and makes
// requests to the server (see api.js) for the appropriate HTTP requests
const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password button works')

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// instansiated variables to be used in game winner logic and toggling between
// players X and O
let gameBoard = ['', '', '', '', '', '', '', '', '']
let playerSymbol = 'X'
let moveCount = 0

// determineWinner function handles the logic for the 8 win combos by comparing the symbol
// in the symbol in the indexes of the gameboard array to determine T or F, also displays
// the winner
const determineWinner = function (gameBoard, playerSymbol) {
  if (
     (gameBoard[0] === playerSymbol && gameBoard[1] === playerSymbol && gameBoard[2] === playerSymbol) ||
     (gameBoard[3] === playerSymbol && gameBoard[4] === playerSymbol && gameBoard[5] === playerSymbol) ||
     (gameBoard[6] === playerSymbol && gameBoard[7] === playerSymbol && gameBoard[8] === playerSymbol) ||
     (gameBoard[6] === playerSymbol && gameBoard[3] === playerSymbol && gameBoard[0] === playerSymbol) ||
     (gameBoard[7] === playerSymbol && gameBoard[4] === playerSymbol && gameBoard[1] === playerSymbol) ||
     (gameBoard[8] === playerSymbol && gameBoard[5] === playerSymbol && gameBoard[2] === playerSymbol) ||
     (gameBoard[6] === playerSymbol && gameBoard[4] === playerSymbol && gameBoard[2] === playerSymbol) ||
     (gameBoard[8] === playerSymbol && gameBoard[4] === playerSymbol && gameBoard[0] === playerSymbol)) {
    $('.intro').text(playerSymbol + ' ' + 'wins!')
  }
}
// onClickBoard function disables refresh, assigns the playerSymbol to the
// corresponding index in the gameBoard array, calls the determineWinner function,
// toggles between X and O
const onClickBoard = function () {
  event.preventDefault()
  if ($(this).text() === ' ') {
    const id = $(this).attr('id')
    gameBoard[id] = playerSymbol
    determineWinner(gameBoard, playerSymbol)
    $(this).text(playerSymbol)
    if (playerSymbol === 'X') {
      playerSymbol = 'O'
    } else {
      playerSymbol = 'X'
    }
    moveCount++
    console.log(moveCount)
  }
}
// this function handles starting a new game
// currently only the click handling works. No logic yet
const onNewGame = function (event) {
  event.preventDefault()
  console.log('new game responds')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// click handlers
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#0').on('click', onClickBoard)
  $('#1').on('click', onClickBoard)
  $('#2').on('click', onClickBoard)
  $('#3').on('click', onClickBoard)
  $('#4').on('click', onClickBoard)
  $('#5').on('click', onClickBoard)
  $('#6').on('click', onClickBoard)
  $('#7').on('click', onClickBoard)
  $('#8').on('click', onClickBoard)
  $('#new-game').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
