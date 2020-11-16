<?php

$databaseHost = 'localhost';
$databaseName = 'integratives';
$databaseUsername = 'root';
$databasePassword = '';

$mysqli = mysqli_connect($databaseHost, $databaseUsername, $databasePassword, $databaseName); 
 
function connection() {
    
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "integratives";

    $con = new mysqli($host, $username, $password, $database);

    if($con->connect_error) {
        echo $con->connect_error;
    } else {
        return $con;
    }

    $con->close();
}

?>
