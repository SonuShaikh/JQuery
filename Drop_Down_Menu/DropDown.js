$('.link').click(function(){
	var link_value = $(this).text();
	$('#list').append('<option>'+link_value+'</option>');
});