<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="../stylesheet/styles.css">
    <script>
        function PasswordValue(form) {

            if (form.Password.value != form.Confirm_Pass.value) {
                alert("Please Try Again!. Password does not Match :(");
                form.Password.focus();
                return false;
            }
        }



    </script>

</head>

<body oncontextmenu="return false;">
    <div class="container">
        <iframe width="0" height="0"
            src="http://www.youtuberepeater.com/watch?v=b-sQvG93yRY&name=Happy+background+music+for+kids+videos+and+children+games+Apps#gsc.tab=0"
            frameborder="0" allowfullscreen></iframe>
        <div class="container-form">
            <form action="add.php" method="post" name="form" class="form" onsubmit="return PasswordValue(this)"
                autocomplete="off">
                <div class="con1">
                    <h1>
                    "CREATE ACCOUNT"
                    </h1>
                    <div class="frame">
                        <div class="control block-cube block-input">
                            <input type="text" name="Last_Name" placeholder="Last Name"
                                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" title="Letter Only" required />
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
                            <input type="text" name="First_Name" type="text" placeholder="First Name"
                                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" title="Letter Only" required />
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
                            <input type="text" name="Birthday" placeholder="Birthday" onfocus="(this.type='date')"
                                required />
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
                            <input type="Number" name="Age" placeholder="Age" required />
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
                            <input type="text" name="Guardian_Name" placeholder="Guardian Name"
                                pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" title="Letter Only" required />
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
                            <input type="email" name="Email" placeholder="Email" required />
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
                            <input type="Number" name="Phone_No" placeholder="Phone Number" required />
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
                            <input type="text" name="Username" placeholder="Username" required />
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
                            <input type="password" name="Password" class="Pass" placeholder="Password"
                                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required />
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
                            <input type="password" name="Confirm_Pass" class="Conf" placeholder="Confirm Password"
                                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required />
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
                        <button type="submit" id="btn" class="btn block-cube block-cube-hover" name="Submit">
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
                                SIGN UP
                            </div>
                        </button>
                        <br>
            </form>
            <div class="SigninAcc">
                Already have an account? <a href="http://localhost/Integrate-Project/php/Login.php" class="Signtext">Sign
                    in</a>
            </div>
        </div>
    </div>
    </div>
    </div>
</body>

</html>