$(document).ready(function(){
  $('#display').click(function() {
    $('#dropdown').slideToggle(1000);
  });
  $('li').click(function(e){
    $('#display').html( $(e.target).text() + "&darr;" )
    $('#selected-language').val( $(e.target).text() )
    $('#dropdown').slideUp(500);
  });

})