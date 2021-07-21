'use strict'

const store = require('../store')

// const store = require('./../store')
const onNewGameSuccess = (response) => {
  store.game = response.game
  $('#message').text(`${store.game._id}`)
  $('#sign-in').hide()
  // $('#create-game').show('.box')
  $('#sign-up').hide()
  $('#create-game').trigger('reset')
  $('.box').removeClass('')
  console.log(response)
}

const onNewGameFailure = () => {
  $('#message').text('Create Game Failed')
  $('#create-game').trigger('reset')
}

// const onShowGameSuccess = (response) => {
//   $('#message').text(response.games.length)
// }

// const onShowGameFailure = () => {
//   $('#message').text('Show Game Failed')
// }
const onUpdateGameSuccess = (response) => {
  $('#message').text('Updated Successful')
  store.game = response.game
  console.log('this is the update game \n', store.game)
  // store.cells = response.cells
}
const onUpdateGameFailure = () => {
  $('#message').text('Failed to Update')
}

const takeWin = (response) => {
  $('#message').text('Congrats!')
  store.game = response.game
}
// const resultWinnerFail = () => {
//   $('#message').text('Fail')
// }
// const resultTieCheck = () => {
//   $('message').text('Tie')
// }

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  // onShowGameSuccess,
  // onShowGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  takeWin
  // resultWinnerSuccess,
  // resultWinnerFail,
  // resultTieCheck
  // onCheckWinner
}
