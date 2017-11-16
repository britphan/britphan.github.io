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
        scrollTop: 700},
        'slow');
});
$(".nav-skills").click(function() {
    $('html,body').animate({
        scrollTop: 1650},
        'slow');
});

$(".nav-exp").click(function() {
    $('html,body').animate({
        scrollTop: 2700},
        'slow');
});
$(".nav-contact").click(function() {
    $('html,body').animate({
        scrollTop: 3700},
        'slow');
});
$(".right .one .text").hover(function(){
	$('.info-one').fadeIn('fast');
}, function(){
	$('.info-one').fadeOut('fast')
})

$(".left .two .text").hover(function(){
	$('.info-two').fadeIn('fast');
}, function(){
	$('.info-two').fadeOut('fast')
})


$(".right .three .text").hover(function(){
	$('.info-three').fadeIn('fast');
}, function(){
	$('.info-three').fadeOut('fast')
})

$(".left .four .text").hover(function(){
	$('.info-four').fadeIn('fast');
}, function(){
	$('.info-four').fadeOut('fast')
})
