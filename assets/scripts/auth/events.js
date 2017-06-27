'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

// the following functions allow a game player to sign-up, sign in, change their password
// and sign out by retrieving the data input by the player and making
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
// players X and O. Also some t/f variables to generate or stop click actions
let gameBoard = ['', '', '', '', '', '', '', '', '']
let playerSymbol = 'X'
let moveCount = 0
let keepPlaying = true
let winner = false
let id = null
const gameData =
  {
    'game': {
      'cell': {
        'index': id,
        'value': playerSymbol
      },
      'over': winner
    }
  }

const onGameStats = function () {
  event.preventDefault()
  api.getGame()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

// determineWinner function handles the logic for the 8 win combos by comparing the symbol
// in the symbol in the indexes of the gameboard array to determine T or F, also displays
// the winner
const determineWinner = function (gameBoard, playerSymbol) {
  if (
     ((gameBoard[0] === playerSymbol) && (gameBoard[1] === playerSymbol) && (gameBoard[2] === playerSymbol)) ||
     ((gameBoard[3] === playerSymbol) && (gameBoard[4] === playerSymbol) && (gameBoard[5] === playerSymbol)) ||
     ((gameBoard[6] === playerSymbol) && (gameBoard[7] === playerSymbol) && (gameBoard[8] === playerSymbol)) ||
     ((gameBoard[6] === playerSymbol) && (gameBoard[3] === playerSymbol) && (gameBoard[0] === playerSymbol)) ||
     ((gameBoard[7] === playerSymbol) && (gameBoard[4] === playerSymbol) && (gameBoard[1] === playerSymbol)) ||
     ((gameBoard[8] === playerSymbol) && (gameBoard[5] === playerSymbol) && (gameBoard[2] === playerSymbol)) ||
     ((gameBoard[6] === playerSymbol) && (gameBoard[4] === playerSymbol) && (gameBoard[2] === playerSymbol)) ||
     ((gameBoard[8] === playerSymbol) && (gameBoard[4] === playerSymbol) && (gameBoard[0] === playerSymbol))) {
    winner = true
    $('.intro').text(playerSymbol + ' ' + 'wins!')
  }
}

// onClickBoard function disables refresh, assigns the playerSymbol to the
// corresponding index in the gameBoard array, calls the determineWinner function,
// toggles between X and O
const onClickBoard = function () {
  if (keepPlaying === true) {
    event.preventDefault()
    if (($(this).text()) === ' ') {
      id = $(this).attr('id')
      gameBoard[id] = playerSymbol
      determineWinner(gameBoard, playerSymbol)
      $(this).text(playerSymbol)
      gameData.game.cell.value = playerSymbol
      if (playerSymbol === 'X') {
        playerSymbol = 'O'
      } else {
        playerSymbol = 'X'
      }
      gameData.game.cell.index = id
      gameData.game.over = winner
      stopClicks()
      updateGame()
      moveCount++
      tieGame(moveCount, winner)
    }
  }
}
// determines if a game is tied and displays a tie game on the web page
const tieGame = function (moveCount, winner) {
  if (moveCount === 9 && winner === false) {
    $('.intro').text('Tie Game')
  }
}
// logic to determine if game board is 'full', or if there is a winner,
// if so reassign keepPlaying to false which will stop click actions
const stopClicks = function () {
  if (moveCount >= 9) {
    keepPlaying = false
  } else if (winner === true) {
    keepPlaying = false
  }
}
// this function handles starting a new game in the api and calls the clearBoard
// function which sets the board and all associated variables to their pregame
// state
const onNewGame = function (event) {
  event.preventDefault()
  $('.game-board').show()
  $('.intro').show()
  $('.game-stats').show()
  $('.sign-out').show()
  $('.change-password').show()
  clearBoard()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const clearBoard = function () {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  playerSymbol = 'X'
  moveCount = 0
  keepPlaying = true
  winner = false
  id = null
  $('.intro').text('Tic Tac Toe')
  $('#0').text(' ')
  $('#1').text(' ')
  $('#2').text(' ')
  $('#3').text(' ')
  $('#4').text(' ')
  $('#5').text(' ')
  $('#6').text(' ')
  $('#7').text(' ')
  $('#8').text(' ')
  $('.total-stats').text(' ')
}
const updateGame = function () {
  api.updateGame(gameData)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
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
  $('#game-stats').on('click', onGameStats)
}

module.exports = {
  addHandlers
}
