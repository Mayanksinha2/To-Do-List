function addTask() {
    const tInput = document.getElementById('taskInput');
    const tList = document.getElementById('taskList');

    if (tInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = tInput.value;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        tList.removeChild(li);
    };

    li.appendChild(removeBtn);
    tList.appendChild(li);

    tInput.value = '';
}