'use strict'

const store = require('../store')
// const { onUpdateGame } = require('./events')
// const store = require('./../store')

const onNewGameSuccess = (response) => {
  store.game = response.game
  $('#message').text('!READY!')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#create-game').trigger('reset')
  // console.log(response)
}

const onNewGameFailure = () => {
  $('#message').text('Create Game Failed')
  $('#create-game').trigger('reset')
}

const onUpdateGameSuccess = (response) => {
  // $('#message').text('')
  store.game = response.game
  $('.box').each(i => {
    $($('.box')[i]).text(response.game.cells[i])
    // console.log(response.game.cells[i])
    // console.log($($('.box')[i]))
  })
  // console.log('this is the update game \n', store.game)

  // store.cells = response.cells
}
const onUpdateGameFailure = () => {
  $('#message').text('Failed to Update')
}
const printWin = (player) => {
  $('#message').text('Congrats ! ' + player + ' you win!')
  // $('#message').css('font-size', 60)
}
// const printTie = () => {
//   $('#message').text("You're TIE")
// }

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  printWin
  // printTie
}
