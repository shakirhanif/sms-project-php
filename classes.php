<?php require "partials/header.php"; ?>
<link rel="stylesheet" href="css/table.css">
<div class="header-class">
    <div>Classes Section</div>
    <div class="button">
        <button type="submit" name="submit">Add Classes</button>
    </div>
</div>
<div>
<table class="responstable">
      <tr>
        <th>Main driver</th>
        <th data-th="Driver details"><span>First name</span></th>
        <th>Surname</th>
        <th>Date of birth</th>
        <th>Relationship</th>
      </tr>

      <tr>
        <td><input type="radio" /></td>
        <td>Steve</td>
        <td>Foo</td>
        <td>01/01/1978</td>
        <td>Policyholder</td>
      </tr>

      <tr>
        <td><input type="radio" /></td>
        <td>Steffie</td>
        <td>Foo</td>
        <td>01/01/1978</td>
        <td>Spouse</td>
      </tr>

      <tr>
        <td><input type="radio" /></td>
        <td>Stan</td>
        <td>Foo</td>
        <td>01/01/1994</td>
        <td>Son</td>
      </tr>

      <tr>
        <td><input type="radio" /></td>
        <td>Stella</td>
        <td>Foo</td>
        <td>01/01/1992</td>
        <td>Daughter</td>
      </tr>
    </table>
</div>
<script src="./js/axios.js"></script>
<script src="./js/classes.js"></script>
<?php require "partials/footer.php"; ?>