<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <link rel="stylesheet" href="../css/main.css">
    <link rel="shortcut icon" href="../images/logo.png" type="image/png">
    <title>main</title>
</head>

<body>
    <div class="board">
        <img src="../images/asset.svg" alt="pic.svg" class="board">
        <div class="welcome">
            <center>
                <h1>Hello!</h1>
                <h2><?php echo $_SESSION['First_Name']; ?></h2>
            </center>
        </div>
    </div>
    <div class="progress">
        <div>
            <a href="../html/subject_topic.html">
                <img src="../images/pencil_subjects.svg" alt="pic.svg" class="subject"><br>
            </a>
        </div>
        <br>
        <div>
            <a href="http://localhost/Integrate-Project/php/accounts.php">

                <a href="../php/accounts.php">
                    >>>>>>> pr/2
                    <img src="../images/pencil_accounts.svg" alt="pic.svg" class="account"><br>
                </a>
        </div>
        <br>
        <div>
            <a href="http://localhost/Integrate-Project/html/subject_result.html">
                <a href="../html/subject_result.php">
                    <img src="../images/pencil_results.svg" alt="pic.svg" class="results"><br>
                </a>
        </div>
        <br>
        <div>
            <a href="http://localhost/Integrate-Project/html/game.html">
                <a href="../html/game.html">
                    <img src="../images/pencil_minigames.svg" alt="pic.svg" class="mini"><br>
                </a>
        </div>
        <br>
        <div>
            <a href="http://localhost/Integrate-Project/html/subject_progress.html">
                <a href="../html/subject_progress.html">
                    <img src="../images/pencil_progress.svg" alt="pic.svg" class="themes"><br>
                </a>
        </div>
        <br>
        <div>
            <a href="http://localhost/Integrate-Project/php/logout.php">
                <img src="../images/pencil_logout.svg" alt="pic.svg" class="settings"><br>
            </a>
        </div>

    </div>

</body>

</html>