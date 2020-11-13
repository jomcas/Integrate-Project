<?php 

session_start();

include_once("config.php");

if(isset($_POST['submit'])){
    $adminID = mysqli_real_escape_string($mysqli,$_POST['adminID']);
    $oldpass = mysqli_real_escape_string($mysqli,$_POST['oldpass']);
    $newpass = mysqli_real_escape_string($mysqli,$_POST['newpass']); 
    $confpass = mysqli_real_escape_string($mysqli,$_POST['confpass']);
    
    
    $results = mysqli_query($mysqli, "SELECT * FROM admin WHERE Username = '$adminID'");

    if(mysqli_num_rows($results) > 0){
      while($row = mysqli_fetch_assoc($results)){
              $adminID = $row['Username'];
              $oldpass = $row['Password'];
              mysqli_query($mysqli,"UPDATE admin SET Password ='$newpass' WHERE Username='$adminID'");
              echo "<script>alert('Your Password Has Been Changed. Please Login Again!'); window.location.href ='http://localhost/IntegrativeProj/php/Login.php'</script>";
              session_destroy();
              exit(); 
   }
  
  }else{
    echo "<script>alert('Wrong Credentials. Please Try Again!'); window.location.href ='http://localhost/IntegrativeProj/php/Changepass.php'</script>";
    exit();
    
   }

}

if(isset($_POST['cancel'])){
    // header('Location: http://localhost/InfoAssurance/Inventory/index.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Password</title>
    <link rel="stylesheet" href="../stylesheet/admin.css">
    <link rel="stylesheet" href="../stylesheet/changepassstyle.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script language="javascript" type="text/javascript">
    function checkForm(form) {
    if(form.newpass.value != " "){
            if(form.newpass.value.length < 8) {
            alert("Error: Password must contain at least eight characters!");
            form.newpass.focus();
            return false;
        }
        re = /[0-9]/;
      if(!re.test(form.newpass.value)) {
        alert("Error: Password must contain at least one number (0-9)!");
        form.newpass.focus();
        return false;
      }
         re = /[a-z]/;
      if(!re.test(form.newpass.value)) {
        alert("Error: Password must contain at least one lowercase letter (a-z)!");
        form.newpass.focus();
        return false;
      }
        re = /[A-Z]/;
      if(!re.test(form.newpass.value)) {
        alert("Error: Password must contain at least one uppercase letter (A-Z)!");
        form.newpass.focus();
        return false;
      }

      if(form.newpass.value != form.confpass.value) {
        alert("Error: Password and Confirm Password not the same");
        form.newpass.focus();
        return false;
      }

      if(form.newpass.value == form.oldpass.value) {
        alert("Error: Sorry You Cannot Use your Old Password");
        form.newpass.focus();
        return false;
      }
        }
 
 }


    </script>
</head>
<body oncontextmenu = "return false;" class="align">

<nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
        <header class="avatar">
            <img src="../images/administrator.svg" />
            <h2>Administrator</h2>
        </header>
        <ul>
        <a href="http://localhost/IntegrativeProj/php/AdminHome.php"><li tabindex="0" class="Users"><span>Users</span></li></a>
            <li tabindex="0" class="Audit"><span>Audit Log</span></li>
            <a href="http://localhost/IntegrativeProj/php/Changepass.php"><li tabindex="0" class="Password"><span>Password</span></li></a>
            <a href="http://localhost/IntegrativeProj/php/logout.php"><li tabindex="0" class="Logout"><span>Logout</span></li></a>
        </ul>
    </nav>
    

<div class="container">
<center>
        <h3>CHANGE PASSWORD</h3><br>
        <form method="POST" onsubmit="return checkForm(this)" >

            <div class="form__field"> 
                <input type="text" name="adminID" placeholder="Admin User" class="form__input" value="<?php echo $_SESSION['AdminUser']; ?>" readonly>
            </div>
            <br>
            <div class="form__field">
                <input type="password" name="oldpass" placeholder="Old Password" class="form__input" pattern=".{8,}" autocomplete="off">
            </div>
            <br>
            <div class="form__field">
                <input type="password" name="newpass" placeholder="New Password" class="form__input" pattern=".{8,}" autocomplete="off">
            </div>
            <br>
            <div class="form__field">
                <input type="password" name="confpass" placeholder="Confirm Password" class="form__input" pattern=".{8,}" autocomplete="off">
            </div>
            <br>
            <div class="btncontainer">
            <button name="submit" value="submit">Change Password</button>
            </div>
           
    </div>


</form>
</center>
    
</body>
</html>