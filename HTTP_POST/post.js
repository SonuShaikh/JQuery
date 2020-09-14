$(document).ready(function(){
	$('#submit').click(function(){
		username = $('#username').val();
		pass     = $('#pass').val();
		$.post('Login.php',{name:username,pass:pass},function(data){
			$('#feedback').text(data);
		});
	});
});