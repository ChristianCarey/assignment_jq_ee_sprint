var formValidations = {
  textFieldCounter: function(e){
    
    var chars = $(e.target).val().length;
    if (chars > 0) {
      var $counter = $('<p>').text(32 - chars + " characters remaining.");
      $(e.target).parent().append($counter);
    }
  }
}

$(document).ready(function(){
  $('input[type=text]').on("input", formValidations.textFieldCounter);
});