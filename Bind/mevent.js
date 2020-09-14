/* $('#link').mouseenter(function(){
	$(this).addClass('bold');
}).mouseleave(function(){
	$(this).removeClass('bold');
}); */
$('#link').bind('mouseenter mouseleave',function(){
	$(this).toggleClass('bold');
});