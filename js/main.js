
/*slider*/

$(document).ready(function (){
  $('.faceSlider').slick({
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    swipe: false,
    appendArrows: $('.sliderButton')
  });

  /* modal window*/

  $('#modalBtn').click(function(){
    $('.overlay').fadeIn();
    $('.window').fadeIn();
    $('.modal').fadeIn();
  });
  $('#close').click(function(){
    $('.modal').fadeOut();
  });
  $('.overlay').click(function(){
    $('.modal').fadeOut();
  });
});

