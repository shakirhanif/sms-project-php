<?php
    session_start();
    require "config.php";
    class School extends Config{
        private $Conn=false;
        public function __construct(){
            if (!$this->Conn) {
                $this->dbConfig();
                try {
                    $this->Conn = new PDO("mysql:host=$this->host;dbname=$this->dbname;",$this->user,$this->pass);
                    $this->Conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                } catch (\PDOException $th) {
                    echo $th->getMessage();
                }
            }
        }


        public function adminLoginstatus(){
            if (!isset($_SESSION['email'])) {
                header("location: login.php");
            }
        }

        public function isLoggedIn(){
            if (isset($_SESSION['email'])) {
                return true;
            }else{
                return false;
            }
        }

        public function adminLogin(){
            if (isset($_POST['submit'])) {
                if ($_POST['email']=='' OR $_POST['password']=='') {
                  echo 'no field should be empty';
                }else{
                  $email=$_POST['email'];
                  $pass=$_POST['password'];
                  $login = $this->Conn->prepare("select * from users where email='$email'");
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
//List classes
        public function listClasses(){
            $conn=$this->Conn;
            $query=$conn->prepare("select * from classes");
            $query->execute();
            $rows=$query->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($rows);
        }
//add classes
        public function addClasses($name,$sectionId,$teacherId){
            $conn=$this->Conn;
            $query=$conn->prepare("insert into classes (name,section,teacher_id) values(:name,:section,:teacher_id)");
            $query->execute([
                ':name'=>$name,
                ':section'=>$sectionId,
                ':teacher_id'=>$teacherId,
            ]);
            $id=$conn->lastInsertId();
            echo $id;
        }
// get sections
        public function listSections(){
            $conn=$this->Conn;
            $query=$conn->prepare("select * from sections");
            $query->execute();
            $rows=$query->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($rows);
        }
// get Teachers
        public function listTeachers(){
            $conn=$this->Conn;
            $query=$conn->prepare("select * from teachers");
            $query->execute();
            $rows=$query->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($rows);
        }
    }
?>