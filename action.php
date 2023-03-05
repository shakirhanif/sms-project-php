<?php
require "class/School.php";
$sch = new School();
if(isset($_POST['action']) && $_POST['action']=='listClasses'){
    $sch->listClasses();
}

?>