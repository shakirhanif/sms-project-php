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
  //fetch sections for form options
  let secName = document.querySelector(".addSecName");
  if (secName.children.length < 2) {
    axios.post("action.php", "action=listSections").then(({ data, status }) => {
      data.forEach((x) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(x.section));
        option.setAttribute("value", x.section_id);
        secName.appendChild(option);
      });
    });
  }
  //fetch teachers for form options
  let teacherName = document.querySelector(".addTeaName");
  if (teacherName.children.length < 2) {
    axios.post("action.php", "action=listTeachers").then(({ data, status }) => {
      data.forEach((x) => {
        let option = document.createElement("option");
        option.setAttribute("value", x.teacher_id);
        option.appendChild(document.createTextNode(x.teacher));
        teacherName.appendChild(option);
      });
    });
  }
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
  //fetch sections for form options
  let secName = document.querySelector(".updateSecName");
  if (secName.children.length < 2) {
    axios.post("action.php", "action=listSections").then(({ data, status }) => {
      data.forEach((x) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(x.section));
        secName.appendChild(option);
      });
    });
  }
  //fetch teachers for form options
  let teacherName = document.querySelector(".updateTeaName");
  if (secName.children.length < 2) {
    axios.post("action.php", "action=listTeachers").then(({ data, status }) => {
      data.forEach((x) => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(x.teacher));
        teacherName.appendChild(option);
      });
    });
  }
  // let el = event.currentTarget.parentNode.parentNode.parentNode;
  // let classId = parseInt(el.children[0].innerText);
  // console.log(typeof classId);
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
  let addSubmitBtn = document.getElementById("addClassSubmit");
  addSubmitBtn.style.cursor = "not-allowed";
  let addFormData = new FormData();
  let name = document.getElementById("addClassName").value;
  let secName = document.querySelector(".addSecName").value;
  let addTeaName = document.querySelector(".addTeaName").value;
  addFormData.append("name", name);
  addFormData.append("section_id", secName);
  addFormData.append("teacher_id", addTeaName);
  addFormData.append("action", "addClasses");
  axios.post("action.php", addFormData).then(({ data, status }) => {
    classTable.innerHTML += `<tr class="trEven">
      <td>${data}</td>
      <td>${name}</td>
      <td>${secName}</td>
      <td>${addTeaName}</td>
      <td>
          <div class="button update">
              <button id="updateButton" onclick="openModal(event)"><i class='bx bxs-edit-alt'></i></button>
          </div>
      </td>
      <td>
          <div class="button delete">
              <button type="submit" name="submit"><i class='bx bxs-trash'></i></button>
          </div>
      </td>
    </tr>`;
    let addModalForm = document.getElementById("addModal");
    addModalForm.style.display = "none";
  });
  // console.log(addFormData);
  // console.log(e.target[0].value);
}
