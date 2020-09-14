$(document).ready(function(){
	$('.image').css('opacity','0.4');
	$('.image').mouseover(function(){
		$(this).fadeTo(100,1);
			$('.image').not(this).fadeTo(100,0.4);
		
	});
});