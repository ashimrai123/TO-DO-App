// Array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
  const newTaskInput = document.getElementById("newTask");
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText !== "") {
    tasks.push({ text: newTaskText, completed: false });
    displayTasks();
    newTaskInput.value = "";
  }
}

// Event listener for pressing Enter in the input field
document.getElementById("newTask").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  

// Function to toggle the completion status of a task
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function displayTasks(taskArray = tasks) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    if (taskArray.length === 0) {
      const message = document.createElement("li");
      message.textContent = "No completed tasks.";
      taskList.appendChild(message);
      return;
    }
  
    // Add each task to the list
    taskArray.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <label class="${task.completed ? 'completed' : ''}">
          ${task.text}
          <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleComplete(${index})"/>
          <span class="checkmark"></span>
        </label>`;
      taskList.appendChild(listItem);
    });
  }
  


// Function to filter tasks based on the search input
function searchTask() {
    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput.value.trim().toLowerCase();
  
    const filteredTasks = tasks.filter((task) => {
      return task.text.toLowerCase().includes(searchText);
    });
  
    displayTasks(filteredTasks);
  }
  
  // Event listeners for the list items 

  document.getElementById("faireNav").addEventListener("click", function () {
    displayTasks(tasks);
  });
  
  document.getElementById("completedNav").addEventListener("click", function () {
    const completedTasks = tasks.filter((task) => task.completed);
    displayTasks(completedTasks);
  });

  document.getElementById("remainingNav").addEventListener("click", function () {
    const remainingTasks = tasks.filter((task) => !task.completed);
    displayTasks(remainingTasks);
  });

  document.getElementById("homeNav").addEventListener("click", function () {
    displayTasks(tasks);
  });

  var navItems = document.querySelectorAll(".headingTop__nav li");


  navItems.forEach(function (item) {
    item.addEventListener("click", function () {
      navItems.forEach(function (navItem) {
        navItem.style.color = "#fff"; 
      });
  
      item.style.color = "#4499cc"; 
    });
  });
  