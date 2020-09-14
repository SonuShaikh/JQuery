$(document).ready(function(){
	function mov_div(){
		window_wid = $(window).width();
		window_hei = $(window).height();
		
		obj_wid = $('#verycenter').width();
		obj_hei = $('#verycenter').height();
		
		$('#verycenter').css('top',(window_hei/2) - (obj_hei/2)).css('left',(window_wid/2)- (obj_wid/2));
	}
	mov_div();
	
	$(window).resize(function(){
		move_div();
	});
});