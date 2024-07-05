class Task {
    constructor(description) {
        this.description = description;
    }

    render() {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = this.description;
        li.appendChild(span);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            li.remove();
        };
        li.appendChild(deleteBtn);

        return li;
    }
}

class ToDoApp {
    constructor() {
        this.taskList = document.getElementById('taskList');
        this.taskInput = document.getElementById('taskInput');
    }

    addTask() {
        const taskValue = this.taskInput.value.trim();
        if (taskValue) {
            const task = new Task(taskValue);
            this.taskList.appendChild(task.render());
            this.taskInput.value = '';
        }
    }
}

const toDoApp = new ToDoApp();