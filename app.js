function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskValue = taskInput.value.trim();
    
    if (taskValue) {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = taskValue;
        li.appendChild(span);

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}