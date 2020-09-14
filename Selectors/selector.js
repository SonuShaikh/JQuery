function element_count(){
	var count = $('#area').find('input').length;
	alert('Total Number Of Element On Page '+count);
}
$('#sbmit').click(function(){
    element_count();	
});