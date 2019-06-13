$(document).ready(function() {
    $(window).scroll(function() {
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 175);
    });
    $(window).scroll(function() {
      if($(this).scrollTop() > 175){
        $('.nav-cc').addClass('nav-color');
      } else {
        $('.nav-cc').removeClass('nav-color');
      }
    });
});
