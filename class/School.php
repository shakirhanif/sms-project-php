<?php
    session_start();
    require "config.php";
    class School extends Config{
        private $conn=false;
        public function __construct(){
            if (!$this->conn) {
                $this->dbConfig();
                try {
                    $this->conn = new PDO("mysql:host=$this->host;dbname=$this->dbname;",$this->user,$this->pass);
                    $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                } catch (\PDOException $th) {
                    echo $th->getMessage();
                }
            }
        }
        public function adminLogin(){
            if (isset($_POST['submit'])) {
                if ($_POST['email']=='' OR $_POST['password']=='') {
                  echo 'no field should be empty';
                }else{
                  $email=$_POST['email'];
                  $pass=$_POST['password'];
                  $login = $this->conn->prepare("select * from users where email='$email'");
                  $login->execute();
                  $row = $login->FETCH(PDO::FETCH_ASSOC);
                  if ($login->rowCount()>0) {
                      if (password_verify($pass,$row['password'])) {
                      $_SESSION['email']=$row['email'];
                      $_SESSION['first_name'] = $row['first_name']; 
                      $_SESSION['last_name'] = $row['last_name']; 
                      header("location: index.php");
                    } 
                  }
                }
              }
        }
    }
?>