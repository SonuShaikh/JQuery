<?php
   if(isset($_POST['email']) And !empty($_POST['email'])){
	   $email = $_POST['email'];
	   if(filter_var($email,FILTER_VALIDATE_EMAIL) == false){
		   echo 'That doesn\'t appear as valid email address.';
	   }else{
		   echo 'Great.! valid Email.';
	   }
   }
?>