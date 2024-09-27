const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  const taskText = taskInput.value;
  const newTask = document.createElement("li");
  newTask.textContent = taskInput.value;
  taskList.append(newTask);
  taskInput.value = "";
});
