$(document).ready(function(){
	$('#combine').click(function(){
	
	var comb_text = '';
	var failed = false;
	$('input[type="text"]').each(function(){
		if($(this).val() == ''){
			failed = true;
		} else{
			comb_text += $(this).val()+' ';
		}
	});
	
	if(failed == true){
		alert('please fill in the filleds');
	} else if(failed == false){
		$('#feedback').text(comb_text).css('color','blue');
	}
	
   });
});