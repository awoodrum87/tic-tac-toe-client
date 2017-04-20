'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('.sign-in-message').hide()
  $('.sign-up-message').text('Great! Now sign-in to start playing')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.sign-in-message').text('Please create an account')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.sign-in-message').text('')
  $('.new-game').show()
  $('.new-game-banner').text('Click New Game to start')
}

const signInFailure = (error) => {
  console.error(error)
  $('.sign-up-message').hide()
  $('.sign-in-message').text('You have not entered a registered name and password. Create an account or log-in')
}

const signOutSuccess = (data) => {
  store.user = null
  $('.sign-out-message').text('You have signed out')
  $('.game-board').hide()
  $('.new-game').hide()
  $('.password-message-placeholder').hide()
  $('.game-stats').hide()
  $('.sign-in-message').show()
  $('.sign-up-message').show()
  $('.intro').hide()
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.sign-in').show()
  $('.sign-up').show()
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  // $('.password-message-placeholder').fadeOut('You have updated your password', 1000)
  $('.password-message-placeholder').text('You have updated your password')
  $('.password-message-placeholder').fadeOut(2000)
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('.password-message-placeholder').text('Make sure to enter your old password and a new one!')
}

const newGameSuccess = (data) => {
  store.game = data.game
  $('.sign-in-message').text('')
  $('.new-game-banner').text('')
  $('.sign-up-message').hide()
}

const newGameFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = (data) => {
  store.game = data.game
}

const updateGameFailure = (error) => {
  console.error(error)
}

const getGameSuccess = (data) => {
  store.gamesPlayed = data.game
  $('.total-stats').text('You have played a total of ' + data.games.length + ' games.')
}

const getGameFailure = (error) => {
  console.error(error)
}
module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGameSuccess,
  getGameFailure
}
