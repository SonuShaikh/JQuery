$('#list').change(function(){
	list_value = $(this).val();
	$('#list_feedback').html('You\'re In Love With '+list_value);
});