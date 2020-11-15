<?php 
session_start();

include_once("config.php");

if(isset($_POST['submit'])){
    $uname = mysqli_real_escape_string($mysqli,$_POST['usernameLogin']);
    $password = mysqli_real_escape_string($mysqli,$_POST['passwordLogin']);


    $results = mysqli_query($mysqli, "SELECT * FROM reg_stud where Username='$uname' AND Password='$password'");
    $Adminresults = mysqli_query($mysqli, "SELECT * FROM admin where Username='$uname' AND Password='$password'"); 

    if(mysqli_num_rows($results) > 0){
        while($row = mysqli_fetch_assoc($results)){
               $uname = $row['Username'];
               $password = $row['Password'];
               $_SESSION['User'] = $uname;
               $_SESSION['First_Name'] = $row['First_Name'];
               $_SESSION['User_Id'] = $row['id']; 
               header('location: ../html/loadingMain.html');
               exit();

    }
    }else if(mysqli_num_rows($Adminresults) > 0){
        while($row = mysqli_fetch_assoc($Adminresults)){
               $uname = $row['Username'];
               $password = $row['Password'];
               $_SESSION['AdminUser'] = $uname;
               header('location: http://localhost/Integrate-Project/php/AdminHome.php');
               exit();
    }
    }else{

        echo "<script>alert('Wrong Username and/or Password :('); window.location.href ='http://localhost/Integrate-Project/php/Login.php'</script>";
        exit();

    }

 
}    

 ?>

 

 