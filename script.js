const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
  }
});
