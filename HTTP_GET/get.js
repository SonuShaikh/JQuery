$('#btn').click(function(){
	var string = $('#name').val();
	var pass = $('#pass').val();
	$.post('revers.php',{input:string,input2:pass},function(data){
		$('#feedback').html(data);
	}).success(function(){
		$('#message').append('An Error Occure');
	});
});