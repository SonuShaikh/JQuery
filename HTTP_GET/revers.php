<?php
   if(isset($_POST['input']) && isset($_POST['input2'])){
	   $name = $_POST['input'];
	   $pass = $_POST['input2'];
	   if( !empty($name) && !empty($pass)){
		   echo "User Name : $name <br/> Password : $pass";
	   } else{
		   echo 'Enter in text field';
	   }
   }
?>