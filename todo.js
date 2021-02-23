console.log(this);

let enterTaskBox = document.getElementById("enterTaskBox");
let btnSubmit = document.getElementById("btnSubmit");
let pendingUL = document.getElementById("pendingUL");
let completedUL = document.getElementById("completedUL");

btnSubmit.addEventListener("click", function () {
  console.log(this);

  let newTask = enterTaskBox.value;

  let listItem = document.createElement("li");

  let checkedTaskBox = document.createElement("input");
  checkedTaskBox.setAttribute("type", "checkbox");
  checkedTaskBox.addEventListener("change", function () {
    if (this.checked) {
      console.log(this.parentElement);
      completedUL.appendChild(this.parentElement);
    } else return listItem;
  });

  let taskLabel = document.createElement("label");
  taskLabel.innerHTML = newTask;
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";

  removeButton.addEventListener("click", function () {
    console.log(this);
    console.log(this.parentElement);
    pendingUL.removeChild(this.parentElement);
  });

  listItem.appendChild(checkedTaskBox);
  listItem.appendChild(taskLabel);
  listItem.appendChild(removeButton);
  pendingUL.appendChild(listItem);
});
