<?php
$name = $_POST['PersonName'];
$mail = $_POST['PersonMail'];
$pass = $_POST['PersonPassword'];

// Establish database connection
$con = mysqli_connect('localhost', 'root', '', 'myproject');

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Insert user details into the database
$sql = "INSERT INTO signupform (Name, Mail, Password) VALUES ('$name', '$mail', '$pass')";

// Execute the query
$result = mysqli_query($con, $sql);

// Check the result
if ($result) {
    echo "USER DETAILS ADDED SUCCESSFULLY";
    // Redirect to login.html after successful insertion
    header("Location: login.html");
    exit();
} else {
    echo "USER DETAILS NOT ADDED";
}

// Close the connection
mysqli_close($con);
?>
