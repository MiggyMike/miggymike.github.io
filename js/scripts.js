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
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    });
    // your code goes here
   // Smooth Scrolling
     var $root = $('html, body');
     $('#navbar-example a').click(function(event) {
       var href = $.attr(this, 'href');
       if (href != undefined && href != '#') {
         $root.animate({
           scrollTop: $(href).offset().top
         }, 500, function () {
           window.location.hash = href;
         });
       }
       event.preventDefault();
     });

   // Tooltips
     $ (function () {
       $('resume').tooltip();
     });

     $(function () {
       $('[data-toggle="tooltip"]').tooltip();
     });

     // Textarea background color
     $(".message-box").css("background-color", "#e8f3ff");

     //Message box character count
     $(".message-box").on("keyup", function() {
         var charCount = $(".message-box").val().length; //here we set the length of the content of the textarea to a variable// in here is where the rest of our code for this Exercise will go
         console.log("keyup happened");
          $("#char-count").html(charCount); // here we show a running character count to the user
          if(charCount > 100) {
            $('#char-count').css('color', 'red');
          } else {
            $('#char-count').css('color', 'black');
          };
     });

     // Contact Submission
     $('#button').on('click', function() {
         var comment = $('.message-box').val();
         var prefix = "Thank you, "
         var suffix = ". We have received your message!"
         var name = $('.text-box1').val();
         var email = $('.email-box').val()

         if (comment === "") {
             console.log("message not caputred");
             $(".message-box").css("border", "2px solid red");
         } else {
               console.log("message caputred");
               $(".message-box").css("border", "");
         } if (name === "") {
             console.log(" name not caputred");
             $(".text-box1").css("border", "2px solid red");
         } else {
               console.log("name caputred");
             $(".text-box1").css("border", "");
         } if (email === "") {
             console.log(" email not caputred");
             $(".email-box").css("border", "2px solid red");
         } else {
              console.log("email caputred");
             $(".email-box").css("border", "");
             $('.text-box1').hide();
             $('.text-box2').hide();
             $('.phone-box').hide();
             $('.email-box').hide();
             $('.message-box').hide(); // maybe keep the message box to show the viewer their message?
             $('#char-count').hide();
             $('#visible-salutation').html(prefix+name+suffix);
             $('#visible-comment').html(comment);
        }
         return false;
     });
});
