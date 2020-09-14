$('#name_text').focusin(function(){
	$('#name_span').html('Please Enter Your full name.');
});
$('#name_text').focusout(function(){
	$('#name_span').html('');
});


$('#age_text').focusin(function(){
	$('#age_span').html('Enter Your Current Age.');
}).focusout(function(){
	$('#age_span').html('');
});
