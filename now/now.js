$(document).ready(function(){
	   
	 setInterval(function(){
		var time = jQuery.now()/1000;
		$('#feedback').text(time);
	},1); 
});