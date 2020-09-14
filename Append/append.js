$('#button').click(function(){
	var name = $('#name').val();
	$('#sentence').append(name)+'';
});
$('#append').click(function(){
	$('#span').clone().appendTo('#para')
});