'use strict'

const store = require('./store')

const signUp = (data) => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-in',
    method: 'POST',
    data: data
  })
}
const signOut = () => {
  return $.ajax({
    url: 'https://tic-tac-toe-api-development.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut
}
