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
      $counter.show();
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
    var validationObject = formValidations.validateInput()
    for (validation in validationObject) {
      if (!validationObject[validation]) {
        e.preventDefault();
        formValidations.renderErrors(validationObject);
        break;
      }
    }
  },

  validateInput: function(){
    // validate each length
    console.log('validate input')
    var validatedFields = {
      textField: this.validateLength($textField, 4, 32),

      textarea: this.validateLength($textarea, 4, 140),

      password: this.validateLength($passwordField, 6, 16),

      passwordConfirmation: this.validatePasswordMatch()
    }
    return validatedFields;
  },

  validateLength: function(field, min, max) {
    return !(field.val().length < min || field.val().length > max);
  },

  validatePasswordMatch: function(){
    return ($passwordField.val() === $passwordConfirmation.val());
  },

  renderErrors: function(validationObject){
    console.log('render errors');
    for (field in validationObject) {
      // began constucting
    }
  }
}

var $textField,
  $textarea,
  $passwordField,
  $passwordConfirmation,
  $passwordMatch;



$(document).ready(function(){
  $textField = $('input[type=text]');
  $textarea = $('textarea');
  $passwordField = $('#password');
  $passwordConfirmation = $('#password-confirmation');
  $passwordMatch = $('#password-match');
  formValidations.init();
});


// Constructor!
  // function FormField($obj, $tip, $errorField, errorMessage) {
  //   this.$obj = $obj
  //   this.tip = tip,
  //   this.errorField = errorField,
  //   this.errorMessage = errorMessage
  // }


  // $textField = new FormField(
  //   $('input[type=text]'), $("#text-field-counter"), $("#text-field-error"), 'Text field must be between 4-32 characters')
  // );

  // $textareaField = new FormField(
  //   $('textarea'), $("#textarea-counter"), $("#textarea-field-error"), 'Textarea must be between 4-140 characters')
  // );

  // $textareaField = new FormField(
  //   $('#password'), $("#password-counter"), $("#password-error"), 'Password must be between 6-16 characters')
  // );

  // $textareaField = new FormField(
  //   $('#password-confirmation'), $("#password-confirmation-counter"), $("#password-match"), 'Confirmation must match password')
  // );