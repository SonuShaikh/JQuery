$('.hover').mousemove(function(e){
	hovertext = $(this).attr('hovertext');
	$('#hoverover').text(hovertext).show();
	$('#hoverover').css('top',e.clientY+15).css('left',e.clientX+15);
}).mouseout(function(){
	$('#hoverover').hide();
});