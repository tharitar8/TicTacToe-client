// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events')
const gameEvents = require('./games/events')
// const store = require('./store')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-game').on('click', gameEvents.onNewGame)
  $('#create-game').hide()
  $('.game-board').hide()
  $('.box').on('click', gameEvents.onUpdateGame)
  $('.game-board').on('click', gameEvents.onWinnerCheck)
})

$('#sign-in').on('submit', () => {
  $('#create-game').show()
})
$('#create-game').on('click', () => {
  $('.game-board').show()
})
