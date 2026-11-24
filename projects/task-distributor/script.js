const taskInput = document.querySelector("#task-count");
const runButton = document.querySelector("#run-button");
const result = document.querySelector("#result");
const nodeOneStatus = document.querySelector("#node-one-status");
const nodeTwoStatus = document.querySelector("#node-two-status");
const nodeOneBar = document.querySelector("#node-one-bar");
const nodeTwoBar = document.querySelector("#node-two-bar");

runButton.addEventListener("click", () => {
  const total = Math.min(12, Math.max(1, Number(taskInput.value) || 1));
  taskInput.value = total;

  const nodeOneTasks = Math.ceil(total / 2);
  const nodeTwoTasks = Math.floor(total / 2);

  runButton.disabled = true;
  nodeOneStatus.textContent = `Processing ${nodeOneTasks} tasks`;
  nodeTwoStatus.textContent = `Processing ${nodeTwoTasks} tasks`;
  nodeOneBar.style.width = "0";
  nodeTwoBar.style.width = "0";
  result.textContent = "Tasks are being distributed...";

  requestAnimationFrame(() => {
    nodeOneBar.style.width = "100%";
    nodeTwoBar.style.width = "100%";
  });

  window.setTimeout(() => {
    nodeOneStatus.textContent = `Completed ${nodeOneTasks} tasks`;
    nodeTwoStatus.textContent = `Completed ${nodeTwoTasks} tasks`;
    result.textContent = `${total} tasks completed across 2 worker nodes.`;
    runButton.disabled = false;
  }, 900);
});
