$('#singup_form').submit(function(){
	var user_email = $(this).val();
	$('#singup_feedback').html('Thanks '+user_email+' has been sing up.');
});