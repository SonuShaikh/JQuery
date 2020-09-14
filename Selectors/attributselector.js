function name(){
	var name_default = 'Enter a name please..';
	$('input[type="text"]').attr('value',name_default).focus(function(){
		if($(this).val() == name_default) {
			$(this).attr('value','');
		}
	}).blur(function(){
		if($(this).val() == ''){
			$(this).attr('value',name_default);
		}
	});
}
function email(){
	var email_default = 'Enter an email address...';
	$('input[type="email"]').attr('value',email_default).focus(function(){
		if($(this).val() == email_default) {
			$(this).attr('value','');
		}
	}).blur(function(){
		if($(this).val() == ''){
			$(this).attr('value',email_default);
		}
	});
}
$(document).ready(function(){
	name();
	email();
});
$('#name,#email').focusin(function(){
	$(this).css('backgroundColor','yellow').css('color','Green');
});
$('#name,#email').blur(function(){
	$(this).css('backgroundColor','white').css('color','black');
});