/* $(document).ready(function(){
	$('#file').change(function(){
		value = $(this).val();
		$('#submit').attr('disabled',false);
	});
}); */

$(document).ready(function(){
	$('input[type="file"]').change(function(){
		$(this).next().removeAttr('disabled');
	}).next().attr('disabled','disabled');
});