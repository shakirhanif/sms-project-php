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
