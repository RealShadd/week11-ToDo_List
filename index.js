const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");
function createTask() {
  const taskText = taskInput.value;
  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    taskList.append(newTask);
    taskInput.value = "";
  } else {
    alert("Введите задачу");
  }
}
function checkTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}

addButton.addEventListener("click", createTask);
taskList.addEventListener("click", checkTask);
