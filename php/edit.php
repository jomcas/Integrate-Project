<?php 
include_once("config.php");

if(isset($_POST['update'])){	
	$id = $_POST['id'];
	$Last_Name = $_POST['Last_Name'];
	$First_Name = $_POST['First_Name'];
    $Birthday = $_POST['Birthday'];	
    $Age = $_POST['Age'];
    $Guard_Name = $_POST['Guard_Name'];
    $Email = $_POST['Email'];
    $Phone_Num = $_POST['Phone_Num'];
    $Username = $_POST['Username'];
	
	$user_check_query = "SELECT * FROM reg_stud WHERE Username='$Username' LIMIT 1";
    $result = mysqli_query($mysqli, $user_check_query);
    $user = mysqli_fetch_assoc($result);

    if ($user) { // Checks if username exists
        if ($user['Username'] === $Username) {
		echo "<script>alert('Username Already Exists!'); window.location.href ='http://localhost/Integrate-Project/php/edit.php'</script>";
            
        }
    }else{
        //updating the table
		$result = mysqli_query($mysqli, "UPDATE reg_stud SET Last_Name='$Last_Name',First_Name='$First_Name',Birthday='$Birthday' ,Age='$Age' ,Guard_Name='$Guard_Name' ,Email='$Email' ,Phone_Num='$Phone_Num' ,Username='$Username'WHERE id=$id");
		//redirectig to the display page. In our case, it is index.php
		header("Location: AdminHome.php");
    }
	
}

if(isset($_POST['cancel'])){
	header('Location: http://localhost/Integrate-Project/php/AdminHome.php');
}
?>
<?php
//getting id from url
$id = $_GET['id'];

//selecting data associated with this particular id
$result = mysqli_query($mysqli, "SELECT * FROM reg_stud WHERE id=$id");

while($res = mysqli_fetch_array($result))
{
    $Last_Name = $res['Last_Name'];
	$First_Name = $res['First_Name'];
    $Birthday = $res['Birthday'];	
    $Age = $res['Age'];
    $Guard_Name = $res['Guard_Name'];
    $Email = $res['Email'];
    $Phone_Num = $res['Phone_Num'];
    $Username = $res['Username'];
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../stylesheet/update.css">
    <title>Document</title>
</head>
<body>
<div class="container-form">
<form name="form1" method="post" action="edit.php">
		<!-- <table border="0"> -->
			<tr> 	
				<label>Last Name:</label>
				<td><br/><input class="form-control" type="text" name="Last_Name" value="<?php echo $Last_Name;?>"></td>
			</tr>
			<tr> 
				<label>First Name:</label>
				<td><br/><input class="form-control" type="text" name="First_Name" value="<?php echo $First_Name;?>"></td>
			</tr>
			<tr> 
				<label>Birthday:</label>
				<td><br/><input class="form-control" type="date" name="Birthday" value="<?php echo $Birthday;?>"></td>
            </tr>
            <tr> 
				<label>Age:</label>
				<td><br/><input class="form-control" type="number" name="Age" value="<?php echo $Age;?>"></td>
            </tr>
            <tr> 
				<label class="Guardian">Guardian Name</label>
				<td><br/><input class="form-control" type="text" name="Guard_Name" value="<?php echo $Guard_Name;?>"></td>
            </tr>
            <tr> 
				<label>Email:</label>
				<td><br/><input class="form-control" type="email" name="Email" value="<?php echo $Email;?>"></td>
            </tr>
            <tr> 
				<label>Phone Number:</label>
				<td><br/><input class="form-control" type="number" name="Phone_Num" value="<?php echo $Phone_Num;?>"></td>
            </tr>
            <tr> 
				<label>Username:</label>
				<td><br/><input class="form-control" type="text" name="Username" value="<?php echo $Username;?>"></td>
			</tr>
			<tr>
				<td><input type="hidden" name="id" value=<?php echo $_GET['id'];?>></td>
				<center>
				<input class="btn btn-success" type="submit" name="update" value="Update">
				<input class="btn-cancel" type="submit" name="cancel" value="Cancel">
				</center>
				
			</tr>
		<!-- </table> -->
	</form>
</div>
    
</body>

</html>