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
  store.user = null
}

const signOutFailure = (data) => {
  console.log('Failed to sign out. Data is: ', error)
}

module.exports = {
  signUpFailure,
  signUpSuccess,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
