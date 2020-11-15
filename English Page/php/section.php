<?php

include_once "../../connection/connection.php";
$con = connection();

if(isset($_POST['unlock'])) {
    
    $sql = "UPDATE `progress` SET `unlocked` = `unlocked` + 1";

    $con->query($sql) or die($con->error);
    $con->close();

    echo header("index.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <form action"" method="POST">
        <a href="index.php" class="back-btn">Back</a>
        <input type="submit" class="done-btn" value="Unlock" name="unlock" onclick="alert('Unlocked!')">
    </form>
    
    <script src="script.js"></script>
</body>
</html>