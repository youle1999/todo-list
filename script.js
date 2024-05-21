document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');
        listItem.textContent = todoText;
        listItem.className = 'todo-item';
        todoList.appendChild(listItem);
        todoInput.value = '';
    }
});

document.getElementById('todo-list').addEventListener('click', function(event) {
    if (event.target.classList.contains('todo-item')) {
        event.target.remove();
    }
});

