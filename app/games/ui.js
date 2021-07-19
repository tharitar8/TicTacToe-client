'use strict'

// const store = require('./../store')
const onNewGameSuccess = (response) => {
  $('#message').text("Let's Go")
  $('#sign-in').hide()
  $('#change-pw').hide()
  $('#sign-up').hide()
  $('#create-game').trigger('reset')
  console.log(response)
}

const onNewGameFailure = () => {
  $('#message').text('Create Game Failed')
  $('#create-game').trigger('reset')
}

const onShowGameSuccess = (response) => {
  $('#message').text(response.games.length)
}

const onShowGameFailure = () => {
  $('#message').text('Show Game Failed')
}


module.export = {
  onNewGameSuccess,
  onNewGameFailure,
  onShowGameSuccess,
  onShowGameFailure
}
