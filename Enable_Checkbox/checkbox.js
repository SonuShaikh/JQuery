$(document).ready(function(){
	$('#hide').hide();
	$('#agree').attr('disabled','disabled');
	$('#span').mouseover(function(){
		$('#hide').show(3000,'linear');
	}).mouseout(function(){
		$(this).css('color','black');
	});
	
	$('#terms').scroll(function(){
		var textarea_height = $(this)[0].scrollHeight;
		var scroll_height   = textarea_height - $(this).innerHeight();
		
		var scroll_top = $(this).scrollTop();
		if(scroll_top == scroll_height) {
			$('#agree').removeAttr('disabled');
			$('#atext').css('color','blue');
		}
	});
});