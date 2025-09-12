<?php

// Connect to a database

$conn = mysqli_connect("localhost", "root", "", "ajaxtest");

// Check for GET variable
if(isset($_POST["name"])){
    $name = mysqli_real_escape_string($conn, $_POST["name"]);

    $query = "INSERT INTO users(name) VALUES('$name')";

    if(mysqli_query($conn, $query)){
        echo "User Added";
    }else{
        echo "ERROR: ". mysqli_error($conn);
    }
}

// Check for POST variable
/*
if(isset($_POST["name"])){
    echo "POST: Your name is ". $_POST["name"];
}
*/
