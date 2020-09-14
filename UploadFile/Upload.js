$(document).ready(function(){
	$('#photo').change(function(){
		file = $(this).val();
	});
	
	$('#upload_btn').click(function(){
		$.post('index.php',{file:file},function(data){
			alert(data);
		});
	});
}); 