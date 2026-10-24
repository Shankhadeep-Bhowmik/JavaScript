const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
let tasks = []; // here I will keep task

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  enterTask();
  displayTask();
});

taskInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    e.preventDefault();
    enterTask();
    displayTask();
  }
})

function enterTask(){
  let userTask = taskInput.value;
  if(userTask.trim() === ""){
    alert("Enter the task!");
    return;
  }
  tasks.push(userTask.trim());
  taskInput.value = "";
}

function displayTask(){
  // this will erase the lists of task from html
  taskList.innerHTML = ""; 
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = task;
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑"
    deleteBtn.addEventListener("click",()=>{
      tasks.splice(index,1);
      displayTask();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}