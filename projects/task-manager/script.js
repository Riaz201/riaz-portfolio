const form = document.querySelector("#task-form");
const input = document.querySelector("#task-name");
const list = document.querySelector("#task-list");
const count = document.querySelector("#task-count");

let tasks = JSON.parse(localStorage.getItem("studyTasks") || "[]");

function saveAndRender() {
  localStorage.setItem("studyTasks", JSON.stringify(tasks));
  list.replaceChildren();

  if (tasks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = "No tasks yet.";
    list.appendChild(empty);
  }

  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    if (task.completed) item.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Mark ${task.name} as complete`);
    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveAndRender();
    });

    const name = document.createElement("span");
    name.textContent = task.name;

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "delete";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveAndRender();
    });

    item.append(checkbox, name, remove);
    list.appendChild(item);
  });

  count.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = input.value.trim();
  if (!name) return;
  tasks.push({ name, completed: false });
  input.value = "";
  saveAndRender();
  input.focus();
});

saveAndRender();
