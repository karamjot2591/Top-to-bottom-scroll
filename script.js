$(document).ready(function(){
 var duration =500

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('#topBtn').fadeIn(duration);
    } else{
      $('#topBtn').fadeOut(duration);
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},100);
  });
});
