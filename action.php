<?php
require "class/School.php";
$sch = new School();
//List classes
if(isset($_POST['action']) && $_POST['action']=='listClasses'){
    $sch->listClasses();
}
//Add classes
if(isset($_POST['action']) && $_POST['action']=='addClasses'){
    $sch->addClasses($_POST['name'],$_POST['section_id'],$_POST['teacher_id']);
}
//List Sections
if(isset($_POST['action']) && $_POST['action']=='listSections'){
    $sch->listSections();
}
//List Teachers
if(isset($_POST['action']) && $_POST['action']=='listTeachers'){
    $sch->listTeachers();
}

?>