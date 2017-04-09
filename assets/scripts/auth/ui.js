'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.log(error)
}

const signOutSuccess = (data) => {
  console.log('Signed out. Data is: ', data)
  // store.user = null
}

const signOutFailure = (error) => {
  console.log('Failed to sign out. Data is: ', error)
}

const changePasswordSuccess = (data) => {
  console.log('password changed successfully. Data is: ', data)
  // store.user = data.user
}

const changePasswordFailure = (error) => {
  console.log('password change failed. error is : ', error)
}

const newGameSuccess = (data) => {
  store.game = data.game
  console.log('new game. Data is:', data)
}

const newGameFailure = (error) => {
  console.log('new game failed. error is: ', error)
}

const updateGameSuccess = (data) => {
  console.log('update game success data is: ', data)
}

const updateGameFailure = (error) =>{
  console.log('error is: ', error)
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
  updateGameFailure
}
