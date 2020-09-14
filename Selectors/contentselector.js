$(document).ready(function(){
	$('#search_name').keyup(function(){
		search_name = $(this).val();
		$('#name li').removeClass('highligth');
		if(jQuery.trim(search_name) != ''){
		   $("#name li:contains('"+ search_name +"')").addClass('highligth');	
		}
	});
});