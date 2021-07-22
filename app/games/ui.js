'use strict'

const store = require('../store')
const { onUpdateGame } = require('./events')

// const store = require('./../store')
const onNewGameSuccess = (response) => {
  store.game = response.game
  $('#message').text(`${store.game.player}`)
  $('#sign-in').hide()
  // $('#create-game').show('.box')
  $('#sign-up').hide()
  $('#create-game').trigger('reset')
  $('#create-game').remove('')
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
  $('.box').each(i => {
    $($('.box')[i]).text(response.game.cells[i])
    // console.log(response.game.cells[i])
    // console.log($($('.box')[i]))
  })
  console.log('this is the update game \n', store.game)

  // store.cells = response.cells
}
const onUpdateGameFailure = () => {
  $('#message').text('Failed to Update')
}

const takeWin = (response) => {
  $('#message').text('Congrats!')
  $('.box').on('click', onUpdateGame)
  store.game = response.game
  $('#message').text('Congrats!')
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
