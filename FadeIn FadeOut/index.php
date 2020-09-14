<!DOCTYPE html>
<html>
  <head>
      <meta charset='utf-8'/>
      <title> JQuery Example </title>
	  <link rel='stylesheet' href='main.css'/>
	  <style>
	      #image{
			  width:1280px;
			  height:600px;
		  }
	  </style>
  </head>
<body>
    <input type='button' value='hide/show' id='hide_show'/> <br/>
   	<input type='button' value='Show' id='show'/><label>  </label><input type='button' value='Hide' id='hide'/>
	<img src='Dog.png' alt='Dog_Image' id='image' style='display:none'/>
	<div id='a_div'>
	</div>
    <script type='text/javascript' src='../jquery.js'></script>
    <script type='text/javascript' src='Fade.js'></script>
</body>
</html>