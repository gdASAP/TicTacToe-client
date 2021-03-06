const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onPageLoad = function (event) {
  //console.log('window is loaded')
  $('#sign-out-form').hide()
  $('#change-pw-form').hide()
  $('.container').hide()
  $('#start-game-button').hide()
  $('#view-games').hide()
}



const onStartGame = function (event) {
 event.preventDefault()
$('#0').text('')
$('#1').text('')
$('#2').text('')
$('#3').text('')
$('#4').text('')
$('#5').text('')
$('#6').text('')
$('#7').text('')
$('#8').text('')
$('#gameMessage').text('')
store.newGame = true
store.gameOver = false
//console.log('new game ', newGame)
api.startGame()
.then(ui.onStartGameSuccess)
.catch(ui.onStartGameFailure)
}

const onUpdateGame = function (event) {
 event.preventDefault()
// console.log('Player Move Made')
api.updateGame()
.then(ui.onUpdateGameSuccess)
.catch(ui.onUpdateGameFailure)
}


const onShowGame = function(event) {
  event.preventDefault()
  api.showGame()
  .then(ui.onShowGameSuccess)
  .catch(ui.onShowGameFailure)
}

const onViewGames = function(event) {
  event.preventDefault()
  api.viewGames()
  .then(ui.onViewGamesSuccess)
  .catch(ui.onViewGamesFailure)
}




module.exports = {
  onUpdateGame,
  onShowGame,
  onStartGame,
  onViewGames,
  onPageLoad
}
