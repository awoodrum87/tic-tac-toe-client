'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const index = require('../index.js')

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

// this is where my error is
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
let gameBoard = ['', '', '', '', '', '', '', '', '']
let playerSymbol = 'X'

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
  } else {
    console.log('nada')
  }
}
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
  }
}

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
}

module.exports = {
  addHandlers,
  onClickBoard
}
