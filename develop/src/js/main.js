$(window).on('resize',function(){
  // resize();
})
$(window).scroll(function(){
    if ($(window).scrollTop() >= 1400) {
        $('#header').addClass('fixed-header');
    }
    else {
        $('#header').removeClass('fixed-header');

    }
});

$("#js-menuButton").on("click", function() {
 $(this).toggleClass("active");
 $("#js-menu").slideToggle(400);
 if ($(window).width() < 768) {
   $("#js-menu li").hide();
   $("#js-menu li").each(function(i) {
     $(this)
       .delay(50 * i)
       .fadeIn(500);
   });
 }
 return false;
});

	//slick
$(function() {
  $('.Slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    speed: 2000,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
  });

  /* ニューススライドショー */
  $('.Slider').slick({
    cssEase: 'ease-out',
    speed: 500,
  });
});
