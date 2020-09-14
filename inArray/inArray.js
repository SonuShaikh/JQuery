$(document).ready(function(){
	var names = ['Anita','Sonu','Sony','Shaikh','Sahil','Jayeshri','Jayeshri','Tushar'];
	
	 $('#username').keyup(function(){
		name = $(this).val();
		if(jQuery.inArray(name,names) !='-1'){
			$('#feedback').text(name+' Already Exist.').css('color','red');
		}else{
			//names.push(name);
			$('#feedback').text('Good').css('color','blue');
		}
		
	}); 
});