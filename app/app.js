// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-game').on('click', gameEvents.onNewGame)
  $('#create-game').hide()
  $('.game-board').hide()
})

$('#sign-in').on('submit', () => {
  $('#create-game').show()
})
$('#create-game').on('click', () => {
  $('.game-board').show()
})
