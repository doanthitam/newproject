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
 $("#js-menu").toggle();
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

// // Anchor
// $('a[href^="#"]').click(function(){
//   var hasttop = $(this.hash).offset().top;
//   var hasttopNew = hasttop - 104;
//   $('html, body').animate({
//     scrollTop: hasttopNew
//   }, 500);
//   return false;
// });
