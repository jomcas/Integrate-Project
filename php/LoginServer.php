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
               $_SESSION['id'] = $row['id'];
               $_SESSION['Last_Name'] = $row['Last_Name'];
               $_SESSION['First_Name'] = $row['First_Name'];
               $_SESSION['Birthday'] = $row['Birthday'];
               $_SESSION['Age'] = $row['Age'];
               $_SESSION['Guard_Name'] = $row['Guard_Name'];
               $_SESSION['Email'] = $row['Email'];
               $_SESSION['Phone_Num'] = $row['Phone_Num'];
               header('location: ../html/loadingMain.html');
               exit();

    }
    }else if(mysqli_num_rows($Adminresults) > 0){
        while($row = mysqli_fetch_assoc($Adminresults)){
               $uname = $row['Username'];
               $password = $row['Password'];
               $_SESSION['id'] = $row['id'];
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