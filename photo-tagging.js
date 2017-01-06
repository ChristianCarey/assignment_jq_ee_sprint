$('document').ready(function(){

  var $tagger = $('.tagging-cursor'),
      $img = $('img'),
      imgPos = $('img').offset(),
      imgLeft = imgPos.left,
      imgTop = imgPos.top;
      console.log(imgLeft);

  // $('img').mouseenter(function(e) {
  //   $('body').append($tagger);
  //   // $tagger.css({ left: e.pageX, top: e.pageY });
  // })

  // $('.img-container').mouseleave(function(e) {
  //   console.log("left");
  //   $tagger.hide();
  // })
  $('.img-container').hover(function(e){
    $tagger.addClass("showing");
    $tagger.css({ left: e.pageX - 60, top: e.pageY - 70});
  }, function(e){
    $tagger.removeClass("showing");
  })

  $($tagger).mousemove(function(e) {
    if (e.pageX < imgLeft || e.pageX > imgLeft + $img.width() || 
        e.pageY < imgTop || e.pageY > imgTop + $img.height()) {
      $tagger.removeClass("showing")
    } else {
      $tagger.css({ left: e.pageX - 60, top: e.pageY - 70});
    }
  })

  $('.img-container').click(function(){
    $('.img-container').off("hover");
    $tagger.off("mousemove");
  });
})