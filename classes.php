<?php require "partials/header.php"; ?>
<link rel="stylesheet" href="css/table.css">
<div class="header-class">
    <div class="classTitle">Classes Section</div>
    <div class="button">
        <button id="addButton" ><i class='bx bx-plus-medical'></i></button>
    </div>
</div>
<div id="addModal" class="add-modal">
  <div class="add-modal-content">
    <span class="addClose"><i class='bx bx-x-circle'></i></span>
    <!-- form start -->
    <h1>Add Class</h1>

<form class="survey-form">
  <div class="form-group">
    <label
      >Class Name
      <input
        id="name"
        type="text"
        placeholder="Enter Your Name..."
        required
    /></label>
  </div>
  <div class="form-group">
    <label>
      Sections
      <select id="dropdown">
        <option>(Select one)</option>
        <option>Student</option>
        <option>Full time Role</option>
        <option>Part time Role</option>
        <option>Other</option>
      </select>
    </label>
  </div>
  <div class="form-group">
    <label>
      Assign Class Teacher
      <select id="dropdown">
        <option>(Select one)</option>
        <option>Student</option>
        <option>Full time Role</option>
        <option>Part time Role</option>
        <option>Other</option>
      </select>
    </label>
  </div>
  <div class="form-group">
    <button id="submit">Add Class</button>
  </div>
</form>
    <!-- form end -->
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