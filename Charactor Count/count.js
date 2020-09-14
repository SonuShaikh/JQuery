$(document).ready(function(){
	var maxlen = 55;
	$('#area_feedback').html(maxlen+' character reamaing.');
	$('#user_text').keyup(function(){
		var text_length = $('#user_text').val().length;
		var remaining_char = maxlen - text_length;
		$('#area_feedback').html(text_length+' text_length / remaining'+remaining_char);
		//$('#area_feedback').html(remaining_char+' character remaining.').css('color','blue');
	});
});