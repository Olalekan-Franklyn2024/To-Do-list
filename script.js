let tasks = [];

// Buttons
document.getElementById("addLastBtn").addEventListener("click", addLast);
document.getElementById("addFirstBtn").addEventListener("click", addFirst);
document.getElementById("removeFirstBtn").addEventListener("click", removeFirst);
document.getElementById("removeLastBtn").addEventListener("click", removeLast);
document.getElementById("countBtn").addEventListener("click", countTasks);
document.getElementById("clearBtn").addEventListener("click", clearTasks);


// Add task to end
function addLast() {

    let task = document.getElementById("taskInput").value;

    if(task.trim() === "") {
        alert("Enter a task");
        return;
    }

    tasks.push(task);

    renderTasks();

    document.getElementById("taskInput").value = "";
}


// Add task to beginning
function addFirst() {

    let task = document.getElementById("taskInput").value;

    if(task.trim() === "") {
        alert("Enter a task");
        return;
    }

    tasks.unshift(task);

    renderTasks();

    document.getElementById("taskInput").value = "";
}


// Remove first task
function removeFirst() {

    if(tasks.length > 0) {

        tasks.shift();

        renderTasks();
    }
}


// Remove last task
function removeLast() {

    if(tasks.length > 0) {

        tasks.pop();

        renderTasks();
    }
}


// Count tasks
function countTasks() {

    alert("Total Tasks: " + tasks.length);
}


// Clear all tasks
function clearTasks() {

    tasks = [];

    renderTasks();
}


// Display tasks
function renderTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    for(let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = tasks[i];

        let actions = document.createElement("div");
        actions.className = "task-actions";


        // Replace Button
        let replaceBtn = document.createElement("button");
        replaceBtn.textContent = "Replace";
        replaceBtn.className = "replace-btn";

        replaceBtn.onclick = function() {

            let newTask = prompt("Enter replacement task");

            if(newTask && newTask.trim() !== "") {

                tasks.splice(i, 1, newTask);

                renderTasks();
            }
        };


        // Remove Button
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        removeBtn.onclick = function() {

            tasks.splice(i, 1);

            renderTasks();
        };


        actions.appendChild(replaceBtn);
        actions.appendChild(removeBtn);

        li.appendChild(span);
        li.appendChild(actions);

        taskList.appendChild(li);
    }
}