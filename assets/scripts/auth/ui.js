'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#sign-up-message-success').alert()
  $('#sign-up-message-success').fadeTo(1500, 500).slideUp(500, () => {
    $('#sign-up-message-success').slideUp(500)
  })
  $('#sign-up').trigger('reset')
}

const signUpFailure = (error) => {
  console.error(error)
  $('#sign-in').trigger('reset')
  $('#sign-up-message').alert()
  $('#sign-up-message').fadeTo(1500, 500).slideUp(500, () => {
    $('#sign-up-message').slideUp(500)
  })
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.sign-in-message').empty()
  $('.sign-up-message').empty()
  $('.new-game').show()
  $('.new-game-banner').text('Click New Game to start')
  $('#sign-in').trigger('reset')
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('#change-password').show()
}

const signInFailure = (error) => {
  console.error(error)
  $('#sign-in-message').alert()
  $('#sign-in-message').fadeTo(1500, 500).slideUp(500, () => {
    $('#sign-in-message').slideUp(500)
  })
}

const signOutSuccess = (data) => {
  store.user = null
  $('.new-game').hide()
  $('.total-stats').empty()
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
  $('#password-message-placeholder-success').alert()
  $('#password-message-placeholder-success').fadeTo(1500, 500).slideUp(500, () => {
    $('#password-message-placeholder-success').slideUp(500)
  })
  $('#change-password').trigger('reset')
  $('#change-password').hide()
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('#password-message-placeholder-error').alert()
  $('#password-message-placeholder-error').fadeTo(1500, 500).slideUp(500, () => {
    $('#password-message-placeholder-error').slideUp(500)
  })
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
