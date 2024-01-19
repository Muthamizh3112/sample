<?php
if(!isset($_POST['submit'])){
    $username=$_POST['loginmail'];
    $password=$_POST['loginpassword'];
    $con=mysqli_connect('localhost','root','','myproject');
    $sql="SELECT * from signupform WHERE Mail='$username' AND Password='$password' ";
    $result=mysqli_query($con,$sql);
    $resultcheck=mysqli_num_rows($result);
    if($resultcheck> 0){
        echo nl2br("Login successful \n\nPlease wait couple of second !");
        // Redirect to another page after 3 seconds
        header("refresh:3;url=index.html");
        exit();
    }else{
        echo nl2br("Mail or Password Incorrect \n\n Please Check Entered Details ! \n\n And Retry To Login");
        header("refresh:3;url=login.html");
        exit();
    }
}
?>