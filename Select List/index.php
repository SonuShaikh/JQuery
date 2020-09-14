 <!DOCTYPE html>
<html>
  <head>
      <meta charset='utf-8'/>
      <title> JQuery Example </title>
	  <link rel='stylesheet' href='main.css'/>
  </head>
<body>
   	 <!--<form action="index.php" method="POST">-->
			<select id="list">
			  <option>Select City</option>
			  <option value="Auangabad">Auangabad</option>
			  <option value="Latur">Latur</option>
			  <option value="Pune">Pune</option>
			  <option value="Mumbai">Mumbai</option>
			  <option value="NewYork">NewYork</option>
			  <option value="Delhi">Delhi</option>			  
			</select>
			<input type="button" id="submit" value="Submit" />
	<!-- </form>-->
    <script type='text/javascript' src='../jquery.js'></script>
    <script type='text/javascript' src='SelectList.js'></script>
</body>
</html>
<?php
  if(isset($_POST['list']) && !empty($_POST['list'])){
     $list = $_POST['list'];
     echo $list;	 
  }
?>