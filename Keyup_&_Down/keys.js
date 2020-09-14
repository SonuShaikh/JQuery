$('#user_text').keyup(function(){
	user_text = $(this).val();
	$('#user_feedback_text').html(user_text).fadeIn(2000);
});