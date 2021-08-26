$(window).scroll(function (){
  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    }else{
      $(this).removeClass('fadeUp');
    }
   });
});

$(window).scroll(function (){
  $('.fadeLeftTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeLeft');
    }else{
      $(this).removeClass('fadeLeft');
    }
   });
});

$(window).scroll(function (){
  $('.fadeRightTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeRight');
    }else{
      $(this).removeClass('fadeRight');
    }
   });
});

$('#page-link a[href^="#"]').click(function () {
  var elmHash = $(this).after('');
  var pos = $(elmHash).offset().top;
  $('body,html').anime({scrollTop: pos},500);
  return false;
});