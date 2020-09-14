<?php

 include 'init.php';
  
    if(!isset($_POST['name'])){
	  
		$name = mysql_real_escape_string(htmlentities($_POST['name']));
		 if(!empty($name)){
			$update = "UPDATE `users` SET `names`='$name' WHERE `id`=".$_SESSION['user_id'];	
			$query_run = mysql_query($update);
			if($query_run == true){
				echo 'Your setting has been updated.';
			}else if($query_run == false){
				echo 'There is an error to update settion.';
			} 
		 } else{
			 echo 'provide an input.';
		 }   	
 
	} else{
		echo 'Fuck Off..!';
	}
?>