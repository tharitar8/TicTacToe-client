'use strict'

const config = require('../config')
const store = require('../store')

const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
const showGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
module.exports = {
  newGame,
  showGame
}
