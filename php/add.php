<?php

session_start();

include_once("config.php");


if(isset($_POST['Submit'])){
    $Last_Name = $_POST['Last_Name'];
    $First_Name = $_POST['First_Name'];
    $Birthday = $_POST['Birthday'];
    $Age = $_POST['Age'];
    $Guard_Name = $_POST['Guardian_Name'];
    $Email = $_POST['Email'];
    $Phone_Num = $_POST['Phone_No'];
    $Username = $_POST['Username'];
    $Password = $_POST['Password'];

    $user_check_query = "SELECT * FROM reg_stud WHERE Username='$Username' LIMIT 1";
    $result = mysqli_query($mysqli, $user_check_query);
    $user = mysqli_fetch_assoc($result);

    if ($user) { // Checks if username exists
        if ($user['Username'] === $Username) {
        echo "<script>alert('Username Already Exists!'); window.location.href ='http://localhost/Integrate-Project/php/Registration.php'</script>";
        }
    }else{
        mysqli_query($mysqli, "INSERT INTO reg_stud (Last_Name,First_Name,Birthday,Age,Guard_Name,Email,Phone_Num,Username,Password) VALUES('$Last_Name','$First_Name','$Birthday','$Age','$Guard_Name','$Email','$Phone_Num','$Username','$Password')");
        header('Location: http://localhost/Integrate-Project/html/loadingReg.html');
        exit();
    }

    
          
}
?>
