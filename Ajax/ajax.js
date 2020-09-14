$('#Load').click(function(){
	var name = $('#name').val();
	$.ajax({
		type: 'POST',
		url: 'page1.php',
		statusCode:{
			404: function(){
				$('#feedback').html('Page Did not found.');
			},
			000: function(){
				$('#feedback').html('Page not found');
			}
		},
		data:'name='+name,
		success: function(data){
			$('#feedback').html(data);
		}
	
	});
});