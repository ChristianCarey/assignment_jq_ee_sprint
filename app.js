var formValidations = {

  init: function() {

    $('input[type=text]').on("input", function(e){
      var chars = $(e.target).val().length;
      formValidations.fieldCounter("#text-field-counter", 32, chars);
    });
    $('textarea').on("input", function(e){
      var chars = $(e.target).val().length;
      formValidations.fieldCounter("#textarea-counter", 140, chars);
    });
    $('#password').on("input", function(e){
      var chars = $(e.target).val().length;
      formValidations.fieldCounter("#password-counter", 16, chars);
    });
    $('#password-confirmation').on("input", function(e){
      var chars = $(e.target).val().length;
      formValidations.fieldCounter("#password-confirmation-counter", 16, chars);
    });
    $('#password-confirmation').on("input", this.checkPasswordMatch);
    $('form').submit(this.trySubmit);
  },

  fieldCounter: function(counterId, maxChars, chars) {
    var $counter = $(counterId);
    if (chars > 0) {
      $counter.text(maxChars - chars + " characters remaining.");
    } else {
      $counter.hide();
    }
  },

  checkPasswordMatch: function() {
    if ($passwordField.val() !== $passwordConfirmation.val() && $passwordConfirmation.val().length > 0) {
      $passwordMatch.show();
      $passwordMatch.text("Password confirmation doesn't match password.");
    } else {
      $passwordMatch.hide();
    }
  },

  trySubmit: function(e){
    console.log(formValidations);
    if (!formValidations.validateInput) {
      e.preventDefault;
      formValidations.renderErrors();
    }
  },

  validateInput: function(){
    // validate each length
    var valid = true;
    this.validateLength($textField, 4, 32);
    this.validateLength($textarea, 4, 140);
    this.validateLength($passwordField, 6, 16);
    this.validatePasswordMatch();
    return valid;
    // prevent default and render errors if wrong
  },

  validateLength: function(field, min, max) {
    if (field.val().length < min || field.val().length > max) {
      valid = false;
    }
  },

  validatePasswordMatch: function(){
    if ($passwordField.val() !== $passwordConfirmation.val()) {
      valid = false;
    }
  },

  renderErrors: function(){
    $textarea.hide();
  }
}

$(document).ready(function(){
  var $textField = $('input[type=text]');
  var $textarea = $('textarea');
  var $passwordField = $('#password');
  var $passwordConfirmation = $('#password-confirmation');
  var $passwordMatch = $('#password-match');
  formValidations.init()
});