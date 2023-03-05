const classTable = document.getElementById("classTable");
axios.post("action.php", "action=listClasses").then(({ data, status }) => {
  if (status === 200) {
    data.forEach((x, i) => {
      classTable.innerHTML += `<tr class=${i % 2 === 0 ? "trEven" : "trOdd"}>
      <td>${x.id}</td>
      <td>${x.name}</td>
      <td>${x.section}</td>
      <td>${x.teacher_id}</td>
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
    </tr>`;
    });
  }
});

// modal
// Get the modal
var modal = document.getElementById("addModal");

// Get the button that opens the modal
var Addbtn = document.getElementById("addButton");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("addClose")[0];

// When the user clicks on the button, open the modal
Addbtn.onclick = function () {
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
