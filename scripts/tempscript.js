
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
