'use strict'
// const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('../store')
let turn = true

const onNewGame = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  console.log('hey new game', ui)
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
$(() => {
  let currentPlayer = '✕'
  // Our box click event handler
  const onBoxClick = (event) => {
    console.log('click')
    store.player = currentPlayer
    // Select the box that was clicked, event.target
    const box = $(event.target)
    box.text(currentPlayer)
    // Change the current player
    currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
  }
  $('.box').on('click', onBoxClick)
})

const onUpdateGame = (event) => {
  event.preventDefault()
  const target = event.target
  const player = turn ? 'x' : 'o'
  const cellIndex = $(target).attr('id')
  const game = {
    cell: {
      index: cellIndex,
      value: player
    },
    over: false
  }
  api.updateGame(game)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
  turn = !turn
  return turn
}
/* Indexes within the board
    // [0] [1] [2]
    // [3] [4] [5]
    // [6] [7] [8]
*/
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const resultWinner = (i) => {
  let winner = false
  winCombinations.forEach((win) => {
    if (
      store.game[win[0]] === i &&
      store.game[win[1]] &&
      store.game[win[2]] === i
    ) {
      winner = true
      alert('Congrats! Winner')
      console.log(win)
    }
  })
  return winner
}

// const checkWinner = () => {
//   for (let i = 0 i < winCombinations.length i++) {
//     if (player[winCombinations[i][0]] != null) {
//       if (player[winCombinations[i][0]] === player[winCombinations[i][1]] && player[winCombinations[i][1]] === player[winCombinations[i][2]]) {
//         return 'Winner: ' + player[winCombinations[i][0]]
//       }
//     }
//   }
//   api.checkWinner()
//     .then(ui.onCheckWinner)
//     .catch(ui.onCheckWinner)
// }
module.exports = {
  onNewGame,
  // onShowGame,
  onUpdateGame,
  // checkWinner
  resultWinner
}

// const onTieCheck = () => {
//   if (
//     (store.cells[0] === 'X' || store.cells[0] === 'O') &&
//     (store.cells[1] === 'X' || store.cells[1] === 'O') &&
//     (store.cells[2] === 'X' || store.cells[2] === 'O') &&
//     (store.cells[3] === 'X' || store.cells[3] === 'O') &&
//     (store.cells[4] === 'X' || store.cells[4] === 'O') &&
//     (store.cells[5] === 'X' || store.cells[5] === 'O') &&
//     (store.cells[6] === 'X' || store.cells[6] === 'O') &&
//     (store.cells[7] === 'X' || store.cells[7] === 'O') &&
//     (store.cells[8] === 'X' || store.cells[8] === 'O')
//   ) {
//     ui.resultTieCheck()
//     return true
//   }
//   return false
// }
