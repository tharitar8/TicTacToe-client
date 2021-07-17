'use strict'

const store = require('./store')

const onSignUpSuccess = (response) => {
  $('#message').text(`Thank you for signing up ${response.user.email}`)
  console.log(response)
  $('#sign-up').trigger('reset')
}
const onSignUpFailure = () => {
  $('#message').text('Sign up failure')
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = (response) => {
  $('#message').text(`Welcome back ${response.user.email}`)
  store.token = response.user.token
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
}
const onSignInFailure = () => {
  $('#message').text('Sign in failure')
  $('#sign-in').trigger('reset')
}
const onSignOutSuccess = () => {
  $('#message').text('Sign out Success')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
}
const onSignOutFailure = () => {
  $('#message').text('Sign out failure')
}

const onChangePWSuccess = () => {
  $('#message').text('Your password change is successful')
  $('#message').trigger('reset')
}

const onChangePWFailure = () => {
  $('#message').text('Password is incorrect')
  $('#message').trigger('reset')
}
module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePWSuccess,
  onChangePWFailure
}
