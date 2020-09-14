$(document).ready(function(){
	$('input[type="text"]').focus(function(){
		minlen = $(this).attr('minlen');
		
		if(minlen !=0 && minlen > 0 && $(this).val().length < minlen){
			$(this).after('<span> '+minlen+' characters require.</span>');
		}
	}).keyup(function(){
		
		if($(this).val().length >= minlen){
			$(this).next().remove();
		}
	}).blur(function(){
		$(this).next().remove();
	});
});