$('document').ready(function(){

  var $tagger = $('.tagging-cursor');

  // $('img').mouseenter(function(e) {
  //   $('body').append($tagger);
  //   // $tagger.css({ left: e.pageX, top: e.pageY });
  // })

  // $('img').mouseleave(function(e) {
  //   $tagger.remove();
  // })

  $('img').mousemove(function(e) {
    console.log('moved')
    $tagger.css({ left: e.pageX - 60, top: e.pageY - 70});
  })
})