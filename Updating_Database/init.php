<?php
 session_start();
 $_SESSION['user_id'] = '1';
 
mysql_connect('localhost','root','') or ('Could not connected to server');
mysql_select_db('sonu_monu') or ('Could not connected to Database');
?>