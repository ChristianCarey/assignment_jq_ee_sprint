var formValidations = {

  init: function() {

    $textField.$obj.on("input", function(e){
      var chars = $(e.target).val().length;
      formValidations.fieldCounter($textField, chars);
    });
    $textarea.$obj.on("input", function(e){
      var chars = $(e.target).val().length;
      formValidations.fieldCounter($textarea, chars);
    });
    $passwordField.$obj.on("input", function(e){
      var chars = $(e.target).val().length;
      formValidations.fieldCounter($passwordField, chars);
    });
    $passwordConfirmation.$obj.on("input", this.checkPasswordMatch);
    $('form').submit(this.trySubmit);
  },

  fieldCounter: function(field, chars) {
    $tip = field.$obj.siblings(".tip");
    if (chars > 0) {
      $tip.show();
      $tip.text(field.constraints.length.max - chars + " characters remaining.");
    } else {
      $tip.hide();
    }
  },

  checkPasswordMatch: function() {
    if ($passwordField.$obj.val() !== $passwordConfirmation.$obj.val() && $passwordConfirmation.$obj.val().length > 0) {
      $passwordConfirmation.errorP.show();
      $passwordConfirmation.errorP.text("Password confirmation doesn't match password.");
    } else {
      $passwordConfirmation.errorP.hide();
    }
  },

  trySubmit: function(e){
    var validationObject = formValidations.validateInput();
    for(validation in validationObject) {
      if (!validationObject[validation]) {
        e.preventDefault();
        break;
      }
    }
  },

  validateInput: function(){
    // validate each length
    var validatedFields = {
      textField: $textField.validateLength(),

      textarea: $textarea.validateLength(),

      passwordField: $passwordField.validateLength(),

      passwordConfirmation: this.validatePasswordMatch()
    }
    return validatedFields;
  },

  validatePasswordMatch: function(){
    var valid  = ($passwordField.$obj.val() === $passwordConfirmation.$obj.val());
    if (!valid) {
      $passwordConfirmation.$obj.css("border", "1px solid red");
      $passwordConfirmation.errorP.text($passwordConfirmation.errorMessage);
    }
    return valid;
  }
}

function FormField($obj, errorMessage, constraints) {
  this.$obj = $obj,
  this.errorMessage = errorMessage,
  this.constraints = constraints,
  this.errorP = this.$obj.siblings('.error'),
  this.validateLength = function(){
    var valid = !(this.$obj.val().length < this.constraints.length.min || this.$obj.val().length > this.constraints.length.max);
    if (!valid) {
      this.$obj.css("border", "1px solid red");
      this.errorP.text(this.errorMessage); 
    }
    return valid;
  };
}
  
var $textField,
    $textarea,
    $passwordField,
    $passwordConfirmation;


$(document).ready(function(){
  $textField = $('input[type=text]');
  $textarea = $('textarea');
  $passwordField = $('#password');


  $textField = new FormField(
    $('input[type=text]'),
    'Text field must be between 4-32 characters',
    { 
      length: {
        min: 4,
        max: 32
      }
    }
  );

  $textarea = new FormField(
    $('textarea'),
    'Textarea must be between 4-140 characters',
    { 
      length: {
        min: 4,
        max: 140
      }
    }
  );

  $passwordField = new FormField(
    $('#password'), 
    'Password must be between 6-16 characters',
    { 
      length: {
        min: 4,
        max: 16
      }
    }
  );

  $passwordConfirmation = new FormField(
    $('#password-confirmation'), 
    'Confirmation must match password'
  );
  formValidations.init()
});


