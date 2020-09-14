<!DOCTYPE html>
<html>
  <head>
      <meta charset='utf-8'/>
      <title> JQuery Example </title>
	  <link rel='stylesheet' href='main.css'/>
	 
  </head>
<body>
         <form id='upload' action="index.php" method="post" enctype="multipart/form-data">
            <input type="file" name="file" id='photo'/>
            <input type="submit" value='upload' id='upload_btn'>			
		</form>
	<script type='text/javascript' src='../jquery.js'></script>
    <script type='text/javascript' src='Upload.js'></script>
</body>
</html>
