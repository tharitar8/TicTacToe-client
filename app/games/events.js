'use strict'
// const getFormFields = require('../../lib/get-form-fields')
const ui = require('../games/ui')
const api = require('./api')
// const store = require('./../store')

const onNewGame = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  console.log('hey new game')
  // firstPlayer = 'X'
  api.newGame().then(ui.onNewGameSuccess).catch(ui.onNewGameFailure)
}
const onShowGame = (event) => {
  event.preventDefault()
  api.showGame().then(ui.onShowGameSuccess).catch(ui.onShowGameFailure)
}
const onUpdateGame = (event) => {
  event.preventDefault()
}
// let firstPlayer = 'X'

module.exports = {
  onNewGame,
  onShowGame,
  onUpdateGame
  // firstPlayer
}
