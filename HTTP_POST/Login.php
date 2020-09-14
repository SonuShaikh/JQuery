<DOCTYPE html>
<html>
  <head>
     <meta charset='utf-8' />
	 <title>jQuery POST</title>
  </head>
 <body>
    <form >
	   <label id='label_uname'>Username:</label><br/>
	   <input type='text' id='username' /> <br/>
       <label id='label_pass'>Password:</label> <br/>
	   <input type='password' id='pass'/><br/>
	   <input type='button' value='Login' id='submit'/>	   
	</form>
	 <div id='feedback'></div>
	<script type='text/javascript' src='../jquery.js'></script>
	<script type='text/javascript' src='post.js'></script>
 </body>
</html>
<?php
  session_start();
  ob_start();
   mysql_connect('localhost','root','');
   mysql_select_db('net_banking');
   if(isset($_POST['name'],$_POST['pass'])){
	   $name     = $_POST['name'];
	   $password = md5($_POST['pass']);
    if(!empty($name)){
		if(!empty($password)){
		  $query = "SELECT `id` FROM `Login_tbl` WHERE `user_name` = '$name' AND `password`= '$password'";
		  if($query_run = mysql_query($query)){
			  $query_num_rows = mysql_num_rows($query_run);
			  if($query_num_rows == 0){
				  echo 'invalid username/password combination.';
			  }else if($query_num_rows >= 1){
				  $query_result = mysql_result($query_run,0,'id');
				  $_SESSION['user_id'] = $query_result;
				  header('Location: index.php');
				  
			  }
		  }else{
			  echo mysql_error();
		  }
		}else{
			echo 'Enter Your Password';
		}
	}else{
		echo 'Enter Your User Name.';
	}   
   }
  
?>
