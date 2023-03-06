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
  let el = event.currentTarget.parentNode.parentNode.parentNode;
  let classId = parseInt(el.children[0].innerText);
  console.log(typeof classId);
  // console.log(el.children[0].innerHTML);
  // for (let i = 0; i < 4; i++) {
  //   let tdel = el.children[i].innerHTML;
  //   console.log(tdel);
  // }
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
//addform submit
document.getElementById("addForm").addEventListener("submit", addFormSubmit);
function addFormSubmit(e) {
  e.preventDefault();
  let addFormData = new FormData();
  let name = document.getElementById("addClassName").value;
  let secName = document.querySelector(".addSecName").value;
  let addTeaName = document.querySelector(".addTeaName").value;
  addFormData.append("name", name);
  addFormData.append("teacherName", addTeaName);
  addFormData.append("section", secName);
  console.log(addFormData);
  // console.log(e.target[0].value);
}
