var formValidations = {

  init: function() {
    $('input[type=text]').on("input", $.proxy(this.fieldCounter, null, '#text-field-counter', 32));
    $('textarea').on("input", this.fieldCounter('#textarea-counter', 140));

  },

  fieldCounter: function(_, counterId, maxChars, e) {
    // var counterId = e.data.counterId;
    // var maxChars = e.data.maxChars;
    console.log(arguments)
    var chars = $(e.target).val().length;
    var $counter = $(counterId);
    if (chars > 0) {
      $counter.text(maxChars - chars + " characters remaining.");
    } else {
      $counter.hide();
    }
  }

}

$(document).ready(function(){
  formValidations.init()
});