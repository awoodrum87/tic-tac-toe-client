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

let playerSymbol = 'X'

const onClickBoard = function () {
  event.preventDefault()
  console.log('works')
  // ^ all 9 squares log 'works'
  if ($(this).text() === ' ') {
    $(this).text(playerSymbol)
    if (playerSymbol === 'X') {
      playerSymbol = 'O'
    } else {
      playerSymbol = 'X'
    }
  }
  // this ^ if statement works - it stops a player from clicking
  // on a game square multiple times and changing the the displayed playerSymbol
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#box-0').on('click', onClickBoard)
  $('#box-1').on('click', onClickBoard)
  $('#box-2').on('click', onClickBoard)
  $('#box-3').on('click', onClickBoard)
  $('#box-4').on('click', onClickBoard)
  $('#box-5').on('click', onClickBoard)
  $('#box-6').on('click', onClickBoard)
  $('#box-7').on('click', onClickBoard)
  $('#box-8').on('click', onClickBoard)
}

module.exports = {
  addHandlers
}
