$(':text').focusin(function(){
	$(this).css('backgroundColor','yellow').blur(function(){
		$(this).css('backgroundColor','#FFF');
	});;
});
$(':button').click(function(){
	$(this).attr('value','please wait');
	$(this).attr('disabled',true);
});