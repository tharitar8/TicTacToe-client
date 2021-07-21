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
    // [0] [1] [2]
    // [3] [4] [5]
    // [6] [7] [8]
*/

const takeWin = () => {
  let winner = false
  if (store.game.cells[0] === store.game.cells[1] && store.game.cells[0] === store.game.cells[2] && store.game.cells[0] !== '') {
    winner = true
  } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[3] === store.game.cells[5] && store.game.cells[3] !== '') {
    winner = true
  } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[6] === store.game.cells[8] && store.game.cells[6] !== '') {
    winner = true
  } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[0] === store.game.cells[6] && store.game.cells[0] !== '') {
    winner = true
  } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[1] === store.game.cells[7] && store.game.cells[1] !== '') {
    winner = true
  } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[2] === store.game.cells[8] && store.game.cells[2] !== '') {
    winner = true
  } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[0] === store.game.cells[8] && store.game.cells[0] !== '') {
    winner = true
  } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[2] === store.game.cells[6] && store.game.cells[2] !== '') {
    winner = true
  } else {
    winner = false
  }
  return winner
}

// const resultWinner = () => {
//   const winCombinations = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]
//   winCombinations.forEach(function (win) {
//     if (
//       win.every((index) => {
//         return store.game.cells[index] === 'x'
//       })
//     ) {}
//       return true
//     }

//     if (
//       win.every((index) => {
//         return store.game.cells[index] === 'o'
//       })
//     ) {
//       return true
//     }
//   })

// if () {
//   store.game.over = true
//   winner.innerText = 'Congrats' + winner
//   console.log(store.game.over)
// }
// const gameTie = !store.game.cells.includes('')
// if (gameTie) {
//   $('#message').html('TIE!')
//   store.game.over = false
// }
//   return false
// }

module.exports = {
  onNewGame,
  // onShowGame,
  onUpdateGame,
  takeWin
}
