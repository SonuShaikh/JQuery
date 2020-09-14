function change_font(tag,size){
	var current = parseInt(tag.css('font-size'));
	if(size == 'smaller'){
		var new_size = current - 2;
	} else if(size == 'bigger'){
		var new_size = current + 2;
	}
	tag.css('font-size',new_size+'px');
}
$('#smaller').click(function(){
	change_font($('p'),'smaller');
	
});
$('#bigger').click(function(){
	change_font($('p'),'bigger');
	
});