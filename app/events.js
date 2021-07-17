'use strict'

const getFormFields = require('../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data).then(ui.onSignUpSuccess).catch(ui.onSignUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data).then(ui.onSignInSuccess).catch(ui.onSignInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()
  const token = store.token
  api.signOut(token).then(ui.onSignOutSuccess).catch(ui.onSignOutFailure)
}

const onChangePW = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const token = store.token
  api.changePW(data, token).then(ui.onChangePWSuccess).catch(ui.onChangePWFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePW
}
