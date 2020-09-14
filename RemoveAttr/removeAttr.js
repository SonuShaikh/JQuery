$(document).ready(function(){
	$('#agree').change(function(){
		stat = $(this).val();
		if(stat == 'on') {
			$('#button').removeAttr('disabled');
		} else if(stat == 'on'){
			$('#button').attr('disabled','disabled');
		}
	});
});