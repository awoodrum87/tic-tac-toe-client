'use strict'

const store = require('../store.js')

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
  console.log('new game failed. error is: ', error)
}

const updateGameSuccess = (data) => {
  store.game = data.game
}

const updateGameFailure = (error) => {
  console.error(error)
}

// need to finish this.
const getGameSuccess = (data) => {
  // store.game = data.games
  // $('total-stats').text(data.games.length)
}
// need to finish this.
const getGameFailure = (error) => {
  console.log('get game error is:', error)
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
