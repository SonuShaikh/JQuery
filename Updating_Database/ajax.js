$('#save_btn').click(function(){
	// grab the value
	name = $('#name').val();
	
	// show the loading text
	$('#save_status').text('Loading...');
	
	//perform http request
	$.post('setting.php','{name: name}',function(data){
		$('#save_status').text(data);
	});
});
$(document).ready(function(){
	$('#Drag').draggable();
});