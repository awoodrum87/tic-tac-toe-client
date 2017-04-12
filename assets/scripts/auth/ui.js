'use strict'

const store = require('../store.js')
const getFormFields = require('../../../lib/get-form-fields')

const signUpSuccess = (data) => {
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
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

// need to finish this.
const getGameSuccess = (data) => {
  store.gamesPlayed = data.game
  console.log('data is:', data)
  console.log(data.games.length)
  $('.total-stats').text('Total Games You have played: ' + ' is' + data.games.length)
}
// need to finish this.
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
