const pTag = document.getElementById("p-tag");
axios.post("action.php", "action=listClasses").then(({ data, status }) => {
  if (status === 200) {
    data.forEach((x) => {
      console.log(x.name);
    });
  }
});
