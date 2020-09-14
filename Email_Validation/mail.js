$(document).ready(function(){
	function email_valid(email){
		$.post('mail.php',{email:email},function(data){
			$('#mail_feedback').text(data).css('color','blue');
		})
	}
	
	$('#mail').focusin(function(){
		if($('#mail').val() == ''){
			$('#mail_feedback').text(' Go ahead, Enter and valid email valid').css('color','blue');
		} else {
			email_valid($('#mail').val());
		}
	}).blur(function(){
		$('#mail_feedback').text('');
	}).keyup(function(){
		email_valid($('#mail').val());
	});
});