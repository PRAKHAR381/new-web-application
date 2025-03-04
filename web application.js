function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${taskText}</span>
            <button onclick="toggleComplete(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function toggleComplete(button) {
    const task = button.parentElement;
    task.classList.toggle('completed');
}

function removeTask(button) {
    const task = button.parentElement;
    task.remove();
}
