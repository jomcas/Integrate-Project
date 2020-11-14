<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "integratives";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

$lesson_name = mysqli_real_escape_string($conn, $_POST['lesson_name']);
$score = mysqli_real_escape_string($conn, $_POST['score']);
$passing_score = mysqli_real_escape_string($conn, $_POST['passing_score']);
$no_of_items = mysqli_real_escape_string($conn, $_POST['no_of_items']);
$status = mysqli_real_escape_string($conn, $_POST['status']);

$sql = "INSERT INTO science_table (Lesson_Name,Score,Passing_Score,No_Items,Status)
VALUES ('$lesson_name', '$score', '$passing_score', '$no_of_items','$status')";

if ($conn->query($sql) === TRUE) {
    echo "Score saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>