<?php 

session_start();

include_once("config.php");

if(isset($_POST['submit'])){
    $Username = mysqli_real_escape_string($mysqli,$_POST['Username']);
    $oldpass = mysqli_real_escape_string($mysqli,$_POST['oldpass']);
    $newpass = mysqli_real_escape_string($mysqli,$_POST['newpass']); 
    $confpass = mysqli_real_escape_string($mysqli,$_POST['confpass']);
    
    
    $results = mysqli_query($mysqli, "SELECT * FROM reg_stud WHERE Username = '$Username'");

    if(mysqli_num_rows($results) > 0){
      while($row = mysqli_fetch_assoc($results)){
              $Username = $row['Username'];
              $oldpass = $row['Password'];
              mysqli_query($mysqli,"UPDATE reg_stud SET Password ='$newpass' WHERE Username='$Username'");
              echo "<script>alert('Your Password Has Been Changed. Please Login Again!'); window.location.href ='http://localhost/Integrate-Project/php/Login.php'</script>";
              session_destroy();
              exit(); 
   }
  
  }else{
    echo "<script>alert('Wrong Credentials. Please Try Again!'); window.location.href ='http://localhost/Integrate-Project/php/accounts.php'</script>";
    exit();
    
   }

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../stylesheet/accounts.css">
    <title>User Account</title>
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
<body oncontextmenu = "return false;">
    <div class="profile">
        
        <img src="../images/child.svg" class="child" height="250px" width="750px">
        <h2>"MY PROFILE"</h2>
    </div>
    <div class="personal">
        <center>
        <h1>"Personal Background"</h1>
        
        <div class="container">
        <form>
        <tr> 	
				<label>Last Name:</label>
				<input class="form-control"  id="lname" type="text" name="Last_Name" value="<?php echo $_SESSION['Last_Name'];?>" readonly>
			</tr>
			<tr> <br>
				<label>First Name:</label>
				<input class="form-control"  id="fname" type="text" name="First_Name" value="<?php echo  $_SESSION['First_Name'];?>" readonly>
			</tr>
			<tr> <br>
				<label>Birthday:</label>
				<input class="form-control"  id="bday" type="date" name="Birthday" value="<?php echo $_SESSION['Birthday'];?>" readonly>
            </tr>
            <tr> <br>
				<label>Age:</label>
				<input class="form-control"  id="age" type="number" name="Age" value="<?php echo  $_SESSION['Age'];?>" readonly>
            </tr>
            <tr> <br>
				<label>Guardian:</label>
				<input class="form-control"  id="guard" type="text" name="Guard_Name" value="<?php echo $_SESSION['Guard_Name'];?>" readonly>
            </tr>
            <tr> <br>
				<label>Email:</label>
				<input class="form-control"  id="email" type="email" name="Email" value="<?php echo $_SESSION['Email'];?>" readonly>
            </tr>
            <tr> <br>
				<label>Phone No:</label>
				<input class="form-control"  id="phone" type="number" name="Phone_Num" value="<?php echo  $_SESSION['Phone_Num'];?>" readonly>
            </tr>
            <tr> 
        </form>
    </div>
    </center>
    </div>
    <div class="acc">
        <center>
        <h1>"Account"</h1>
        
        <div class="container">
        <form method="POST" onsubmit="return checkForm(this)" >
        <tr> 	
				<label>Username:</label>
				<input class="form-control" id="Username" type="text" name="Username" value="<?php echo $_SESSION['User'];?>" readonly>
			</tr>
			<tr> <br>
				<label>Old Password:</label>
				<input class="form-control-Pass" id="oldPass" type="password" name="oldpass" pattern=".{8,}" autocomplete="off">
			</tr>
			<tr> <br>
				<label>New Password:</label>
				<input class="form-control-Pass" id="newPass" type="password" name="newpass" pattern=".{8,}" autocomplete="off">
            </tr>
            <tr> <br>
				<label>Confirm Pass:</label>
                <input class="form-control-Pass" id="Confpass" type="password" name="confpass" pattern=".{8,}" autocomplete="off">
            <div class="btncontainer">
            <button name="submit" value="submit">Change Password</button>
            <a href="http://localhost/Integrate-Project/php/main.php" class="cancel">Cancel</a>
            </div>
        </form>
    </div>
    </center>

    </div>
    
</body>
</html>