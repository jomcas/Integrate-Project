<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Subject Results</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="shortcut icon" href="../images/logo.png" type="image/png">

    <link rel="stylesheet" href="../css/result_english.css">


</head>

<body>
    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        // $dbname = "db_integ"; database name ko 
        $dbname = "integratives";

        $conn = new mysqli($servername, $username, $password, $dbname); // Create connection
        if ($conn->connect_error) {     // Check connection
            die("Connection failed: " . $conn->connect_error);
        } 

        $sql = "SELECT CONCAT(Score,'/',No_Items) AS totalScore, id, Lesson_Name, Status FROM english_table";
        $result = $conn->query($sql);
    ?>


    <a href="../html/subject_result.php" class="button">BACK</a>

    <div class="table-wrapper">

        <div class="table-title">
            <div class="row">
                <div>
                    <p>English Results</p>
                </div>
            </div>
        </div>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Lesson</th>
                    <th>Topics</th>
                    <th>Score</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>

                <?php
            // Populate Table
            while($row = $result->fetch_assoc()) {
                    echo '<tr>';
                    echo '<td>' .$row['id']. '</td>';
                    echo '<td>' .$row['Lesson_Name']. '</td>';
                    echo '<td>' .$row['totalScore']. '</td>';
                    echo "<td><span class='label label-success' style='background-color: #332393;'>" .$row['Status']. '</td>';
            }

            $conn->close();
            ?>

            </tbody>
        </table>
    </div>
    <!-- <script src="../javascript.js"></script> -->

</body>

</html>
