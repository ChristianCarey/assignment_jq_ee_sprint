var formValidations = {

  init: function() {
    $('input[type=text]').on("input", this.textFieldCounter('this'));
  },

  textFieldCounter: function(e){
    var chars = $(e.target).val().length;
    var $counter = $('#field-counter')
    if (chars > 0) {
      $counter.text(32 - chars + " characters remaining.");
    } else {
      $counter.hide()
    }
  }

}

$(document).ready(function(){
  formValidations.init()
});