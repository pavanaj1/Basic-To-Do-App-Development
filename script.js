// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Function to add a task
    function addTask() {
        const taskValue = taskInput.value;
        const dateValue = taskDate.value;

        if (taskValue.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskValue} <small>${dateValue}</small></span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        // Mark task as completed
        listItem.querySelector('span').addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // Edit task
        listItem.querySelector('.edit').addEventListener('click', () => {
            const newTask = prompt('Edit your task:', taskValue);
            if (newTask !== null) {
                listItem.querySelector('span').childNodes[0].nodeValue = newTask + ' ';
            }
        });

        // Delete task
        listItem.querySelector('.delete').addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
        taskDate.value = '';
    }

    // Event listener for adding tasks
    addTaskButton.addEventListener('click', addTask);
});
