'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('.sign-in-error').hide()
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.new-game').show()
  $('.sign-in-error').text('')
  $('.new-game-banner').text('Click New Game to start')
}

const signInFailure = (error) => {
  console.error(error)
  $('.sign-in-error').text('You need to set up an account to login')
}

const signOutSuccess = (data) => {
  // store.user = null
}

const signOutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {

}

const changePasswordFailure = (error) => {
  console.error(error)
}

const newGameSuccess = (data) => {
  store.game = data.game
  $('.sign-in-error').text('')
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
  $('.total-stats').text('Total Games You have played is: ' + data.games.length)
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
