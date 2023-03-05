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
              <button id="updateButton" onclick="openModal(event)" data-class-id=${
                x.id
              }><i class='bx bxs-edit-alt'></i></button>
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

// add modal
var addModal = document.getElementById("addModal");
var Addbtn = document.getElementById("addButton");
var closeBtn = document.getElementsByClassName("addClose")[0];
Addbtn.onclick = function () {
  addModal.style.display = "flex";
};
closeBtn.onclick = function () {
  addModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == addModal) {
    addModal.style.display = "none";
  }
};
//update button
function openModal(event) {
  var el = event.target;
  console.log(el.dataset.classId);
  var updateCloseBtn = document.getElementsByClassName("updateClose")[0];
  var updateModal = document.getElementById("updateModal");
  updateModal.style.display = "flex";
  updateCloseBtn.onclick = function () {
    updateModal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == updateModal) {
      updateModal.style.display = "none";
    }
  };
}
