'use strict'
// const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('../store')
let turn = true

const onNewGame = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  // console.log('hey new game', ui)
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
  turn = true
  return turn
}

const onUpdateGame = (event) => {
  event.preventDefault()

  const target = event.target
  const cellIndex = $(target).attr('id')
  const player = turn ? 'x' : 'o'
  if (store.game.cells[cellIndex] !== '') {
    return
  }
  if (store.game.over === true) {
    return
  }
  // make variable from store.game but with new move and test if anybody won
  if (takeWin()) {
    // console.log('123')
    return
  }

  store.prevPlayer = player
  store.prevIndex = cellIndex
  store.game.cells[cellIndex] = player
  const game = {
    cell: {
      index: cellIndex,
      value: player
    },
    over: takeWin()
  }
  // console.log(game.over)
  // if (game.over) { return }

  api.updateGame(game)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
  turn = !turn
  return turn
}
/* Indexes within the board
    // [0] [1] [2] top row
    // [3] [4] [5] middle row
    // [6] [7] [8] bottom row
*/

const takeWin = () => {
  // console.log(store)
  let winner = false
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    console.log('here')
    ui.printWin(store.game.cells[0])
    winner = true
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
    ui.printWin(store.game.cells[3])
    winner = true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
    ui.printWin(store.game.cells[6])
    winner = true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
    ui.printWin(store.game.cells[0])
    winner = true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
    ui.printWin(store.game.cells[1])
    winner = true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
    ui.printWin(store.game.cells[2])
    winner = true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
    ui.printWin(store.game.cells[0])
    winner = true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
    ui.printWin(store.game.cells[2])
    winner = true
  } else if (store.game.cells.every((cell) => cell !== '')) {
    winner = true
    $('#message').text('DRAW!')
    return winner
  }
}

module.exports = {
  onNewGame,
  onUpdateGame,
  takeWin
}
