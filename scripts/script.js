$(window).scroll(function(){
	if($(window).scrollTop()>=1100){
     $('.banner').css('background-attachment', 'scroll')
     			.css('background-size','100%')
     			.css('background-position','0 -180px');

 	}
  	else{

     $('.banner').css('background-attachment', 'fixed')
     			.css('background-position','0 -110px');
  }
	if($(window).scrollTop()>=1400){
     $('.nav').addClass("white-nav",300);
		}
		else{

     $('.nav').removeClass("white-nav",300);
		}
});
$(".button").click(function() {
    $('html,body').animate({
        scrollTop: 700},
        'slow');
});
$(".nav-about").click(function() {
    $('html,body').animate({
        scrollTop: 800},
        'slow');
});
