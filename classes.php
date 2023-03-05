<?php require "partials/header.php"; ?>
<link rel="stylesheet" href="css/table.css">
<div class="header-class">
    <div class="classTitle">Classes Section</div>
    <div class="button">
        <button type="submit" name="submit"><i class='bx bx-plus-medical'></i></button>
    </div>
</div>
<div>
<table class="responstable" id="classTable">
      <tr>
        <th>ID</th>
        <th data-th="Driver details"><span>Name</span></th>
        <th>Section</th>
        <th>class Teacher</th>
        <th></th>
        <th></th>
      </tr>

      <tr>
        <td>1</td>
        <td>Steve</td>
        <td>Foo</td>
        <td>01/01/1978</td>
        <td>
            <div class="button update">
                <button type="submit" name="submit"><i class='bx bxs-edit-alt'></i></button>
            </div>
        </td>
        <td>
            <div class="button delete">
                <button type="submit" name="submit"><i class='bx bxs-trash'></i></button>
            </div>
        </td>
      </tr>
    </table>
</div>
<script src="./js/axios.js"></script>
<script src="./js/classes.js"></script>
<?php require "partials/footer.php"; ?>