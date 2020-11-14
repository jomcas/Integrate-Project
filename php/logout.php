<?php

session_start();

$_SESSION = array();
 
session_destroy();
header('Location: http://localhost/Integrate-Project/php/Login.php');
exit;

?>