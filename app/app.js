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
  $('.winning-message').hide()
  // $('winning-message').show(gameEvents.takeWin)
})
// $(() => {
//   let currentPlayer = '✕'
//   // Our box click event handler
//   const onBoxClick = (event) => {
//     console.log('click')
//     store.player = currentPlayer
//     // Select the box that was clicked, event.target
//     const box = $(event.target)
//     box.text(currentPlayer)
//     // Change the current player
//     currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
//   }
//   $('.box').on('click', onBoxClick)
// })

$('#sign-in').on('submit', () => {
  $('#create-game').show()
  $('h2').hide()
})
$('#create-game').on('click', () => {
  $('.game-board').show()
})
$('#create-game').on('click', () => {
  $('.box').empty()
})
