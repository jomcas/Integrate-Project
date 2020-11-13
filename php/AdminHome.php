<?php
session_start();

include_once("config.php");

$result = mysqli_query($mysqli, "SELECT * FROM reg_stud ORDER BY id DESC");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../stylesheet/admin.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title>Admin Page</title>
</head>
<body>

<nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
        <header class="avatar">
            <img src="../images/administrator.svg" />
            <h2>Administrator</h2>
        </header>
        <ul>
            <a href="http://localhost/main/php/AdminHome.php"><li tabindex="0" class="Users"><span>Users</span></li></a>
            <li tabindex="0" class="Audit"><span>Audit Log</span></li>
            <a href="http://localhost/main/php/Changepass.php"><li tabindex="0" class="Password"><span>Password</span></li></a>
            <a href="http://localhost/main/php/logout.php"><li tabindex="0" class="Logout"><span>Logout</span></li></a>
        </ul>
    </nav>
<center>
<div class="main">
<div class="w3-container">
<table class="w3-hoverable">
<thead>
<tr>
    <th>Last Name</th>
    <th>First Name</th>
    <th>Birthday</th>
    <th>Age</th>
    <th>Guardian Name</th>
    <th>Email</th>
    <th>Phone No.</th>
    <th>Username</th>
    <th>Action</th>
</tr>
</thead>
<?php 
//while($res = mysql_fetch_array($result)) { // mysql_fetch_array is deprecated, we need to use mysqli_fetch_array 
while($res = mysqli_fetch_array($result)) { 		
    echo "<tr>";
    echo "<td>".$res['Last_Name']."</td>";
    echo "<td>".$res['First_Name']."</td>";
    echo "<td>".$res['Birthday']."</td>";	
    echo "<td>".$res['Age']."</td>";	
    echo "<td>".$res['Guard_Name']."</td>";
    echo "<td>".$res['Email']."</td>";
    echo "<td>".$res['Phone_Num']."</td>";
    echo "<td>".$res['Username']."</td>";				
    echo "<td><a href=\"edit.php?id=$res[id]\" onClick=\"return confirm('Are you sure you want to update?')\" class='btn btn-success'>Edit</a> | <a href=\"delete.php?id=$res[id]\" onClick=\"return confirm('Are you sure you want to delete?')\" class='btn btn-danger'>Delete</a></td>";		
}
?>
</table>
</div>
</div>
</center>
</body>
</html>

