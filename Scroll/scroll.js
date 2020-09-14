 $('#some_text').scroll(function(){
	var scroll_pos = $(this).scrollTop();
	$('#feedback').text('Currently Scrolling At '+scroll_pos).css('color','blue');
}); 

