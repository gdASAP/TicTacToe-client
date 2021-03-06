'use strict'
const store = require('./../store')

if (store.user === null) {
$('#sign-out-form').hide()
$('#start-game-button').hide()
$('#view-complete-games').hide()
$('#view-incomplete-games').hide()

}

const onSignUpSuccess = function(response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
}
const onSignUpFailure = function(error) {
$('#message').text('Sign up failed. Try again ')
}

const onSignInSuccess = function(response) {
  store.user = response.user
  $('#message').text('Sign in Successful ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#change-pw-form').show()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#sign-out-form').show()
  $('#start-game-button').show()
  $('#view-games').show()
    //console.log('user data is: ',store.user)
}
const onSignInFailure = function(error) {
$('#message').text('Sign in failed. Try again ')
}

const onChangePwSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#change-pw-form').trigger('reset')
  //console.log('changePasswordSuccess ran and nothing was returned!')
}

const onChangePwFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  //console.error('changePasswordFailure ran. Error is :', error)
}

const onSignOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
  $('#sign-in-form').show()
  $('#sign-up-form').show()
  $('#sign-out-form').hide()
  $('#change-pw-form').hide()
  $('#view-games').hide()
  $('#playerMessage').text('')
  $('#gameMessage').text('')
  //console.log('signOutSuccess ran and nothing was returned!')
  store.user = null

  //store.game = null
  $('.container').hide()
  $('#start-game-button').hide()
}

const onSignOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  //console.error('signOutFailure ran. Error is :', error)
}


module.exports = {
onSignUpSuccess,
onSignUpFailure,
onSignInSuccess,
onSignInFailure,
onSignOutSuccess,
onSignOutFailure,
onChangePwSuccess,
onChangePwFailure
}
