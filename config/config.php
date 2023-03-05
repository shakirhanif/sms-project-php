<?php
    try {
        $host = "localhost";
        $user = "root";
        $pass = "apollomoon";
        $dbname = "smsi";
        $conn = new PDO("mysql:host=$host;dbname=$dbname;",$user,$pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (\PDOException $th) {
        echo $th->getMessage();
    }
?>