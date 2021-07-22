'use strict'

const store = require('./store')

const onSignUpSuccess = (response) => {
  $('#error-message').text('')
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  $('#sign-up').trigger('reset')
  console.log(response)
}
const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
  console.log('error')
}
const onSignInSuccess = (response) => {
  $('#error-message').text('')
  console.log(response)
  $('#message').text(`Hey  Welcome Back ${response.user.email}`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}
const onSignInFailure = () => {
  $('#message').text('Sign in failure')
  $('#sign-in').trigger('reset')
  console.log('error')
}
const onSignOutSuccess = (response) => {
  $('#error-message').text('')
  console.log(response)
  $('#message').text('Sign out Success')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('.game-board').hide()
  $('#create-game').hide()
}
const onSignOutFailure = () => {
  $('#message').text('Sign out failure')
  console.log('error')
}
// const onFailure = (error) => {
//   $('#success-message').text('')
//   $('#error-message').text(`Error making request: ${error.status}`)
//   $('form').trigger('reset')
//   $('#message').removeClass('success-message')
// }

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutSuccess,
  onSignOutFailure
  // onFailure
}
