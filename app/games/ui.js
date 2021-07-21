'use strict'

const store = require('../store')

// const store = require('./../store')
const onNewGameSuccess = (response) => {
  store.game = response.game
  $('#message').text(`${store.game._id}`)
  $('#sign-in').hide()
  $('#change-pw').hide()
  $('#sign-up').hide()
  $('#create-game').trigger('reset')
  console.log(response)
}

const onNewGameFailure = () => {
  $('#message').text('Create Game Failed')
  $('#create-game').trigger('reset')
  $('#creat-game').empty()
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

const resultWinnerCheck = (response) => {
  $('#message').text('Congrats!')
  store.game = response.game
}
const resultTieCheck = () => {
  $('message').text('Tie')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  // onShowGameSuccess,
  // onShowGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  resultWinnerCheck,
  resultTieCheck

  // onCheckWinner
}
