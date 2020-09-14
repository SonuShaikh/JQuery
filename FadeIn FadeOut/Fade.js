$(document).ready(function(){
	$('#show').click(function(){
		$('#image').fadeIn(3000,'linear',function(){
			$('#a_div').html('Image Loaded.');
		});
	});
	
	$('#hide').click(function(){
		$('#image').fadeOut(3000,'linear',function(){
			$('#a_div').html('Image Unloaded.');
		});
	});
	
	$('#hide_show').click(function(){
		$('#image').fadeToggle(1000);
	});
});
