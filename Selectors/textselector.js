$(':text').focusin(function(){
	$(this).css('backgroundColor','yellow');
	$(this).css('color','blue');
});
$(':text').blur(function(){
	$(this).css('background-color','#fff').css('color','blue');
	
});