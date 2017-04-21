'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('.sign-up-message').text('Great! Now sign-in to start playing')
  $('.sign-in-message').text('')
  // $('.sign-up-message').fadeOut(4000)
}

const signUpFailure = (error) => {
  console.error(error)
  $('.sign-up-message').text('Please create an account')
  // $('.sign-up-message').fadeOut(4000)
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.sign-in-message').text('')
  $('.sign-up-message').text('')
  $('.new-game').show()
  $('.new-game-banner').text('Click New Game to start')
}

const signInFailure = (error) => {
  console.error(error)
  $('.sign-in-message').text('You have not entered a registered name and password. Create an account or log-in')
  // $('.sign-in-message').fadeOut(4000)
}

const signOutSuccess = (data) => {
  store.user = null
  $('.sign-out-message').text('You have signed out')
  $('.sign-out-message').fadeOut(4000)
  $('.new-game').hide()
  $('.total-stats').text('')
  $('.change-password').hide()
  $('.sign-out').hide()
  $('.game-board').hide()
  $('.intro').hide()
  $('.game-stats').hide()
  $('.sign-in').show()
  $('.sign-up').show()
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  $('.password-message-placeholder').text('You have updated your password')
  $('.password-message-placeholder').fadeOut(4000)
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('.password-message-placeholder').text('Make sure to enter your old password and a new one!')
  $('.password-message-placeholder').fadeOut(4000)
}

const newGameSuccess = (data) => {
  store.game = data.game
  $('.new-game-banner').text('')
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
