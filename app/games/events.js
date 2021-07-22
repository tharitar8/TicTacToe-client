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
}

const onUpdateGame = (event) => {
  event.preventDefault()
  if (takeWin()) {
    // console.log('123')
    return
  }
  const target = event.target
  const player = turn ? 'x' : 'o'
  store.prevPlayer = player
  const cellIndex = $(target).attr('id')
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
  let winner = false
  if (store.game.cells.every(cell => cell !== '')) {
    winner = true
    $('#message').text('TIE!')
    return winner
  }
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
  $('#message').text('You Win!')
  return winner
}
// const onWinner = () => {
//   if (takeWin() === true) {
//     $('#message').text('You win!')
//   } else if (takeWin() === false) {
//     $('#message').text('TIE!')
//   }
// }
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
  // onWinner
}
