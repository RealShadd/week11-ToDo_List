const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");
function createTask() {
  const taskText = taskInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;
  taskList.append(newTask);
  taskInput.value = "";
}
function checkTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}

addButton.addEventListener("click", createTask);
taskList.addEventListener("click", checkTask);
