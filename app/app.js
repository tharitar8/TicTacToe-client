// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gameEvents = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#sign-out').on('click', gameEvents.onSignOut)
  $('#change-pw').on('submit', gameEvents.onChangePW)
})
