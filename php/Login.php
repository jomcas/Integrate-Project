<?php include('LoginServer.php')

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../stylesheet/style.css">

</head>

<body>
    <div class="container">
        <iframe width="0" height="0"
            src="http://www.youtuberepeater.com/watch?v=b-sQvG93yRY&name=Happy+background+music+for+kids+videos+and+children+games+Apps#gsc.tab=0"
            frameborder="0" allowfullscreen></iframe>

        <div class="container-form">
            <form action="LoginServer.php" name="form" method="POST" class="form" autocomplete="off">
                <div class="con1">
                    <h1>
                        "Login"
                    </h1>
                    <div class="frame">
                        <div class="control block-cube block-input">
                            <input name="usernameLogin" type="text" placeholder="Username" required />
                            <div class="bg-top">
                                <div class="bg-inner"></div>
                            </div>
                            <div class="bg-right">
                                <div class="bg-inner"></div>
                            </div>
                            <div class="bg">
                                <div class="bg-inner"></div>
                            </div>
                        </div>
                        <div class="control block-cube block-input">
                            <input name="passwordLogin" type="password" placeholder="Password" required />
                            <div class="bg-top">
                                <div class="bg-inner"></div>
                            </div>
                            <div class="bg-right">
                                <div class="bg-inner"></div>
                            </div>
                            <div class="bg">
                                <div class="bg-inner"></div>
                            </div>
                        </div>
                        <button name="submit" class="btn block-cube block-cube-hover">
                            <div class="bg-top">
                                <div class="bg-inner"></div>
                            </div>
                            <div class="bg-right">
                                <div class="bg-inner"></div>
                            </div>
                            <div class="bg">
                                <div class="bg-inner"></div>
                            </div>
                            <div class="text">
                                SIGN IN
                            </div>
                        </button>
                        <br>
            </form>
            <div class="CreatAcc">
                Don't have an account? <a href="http://localhost/Integrate-Project/php/Registration.php"
                    class="Signtext">Create Account</a>
            </div>
        </div>
    </div>
    </div>


    </div>
    </div>

</body>

</html>