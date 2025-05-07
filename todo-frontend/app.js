const API_URL = 'http://127.0.0.1:8000';

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.access_token);
        alert('Login successful!');
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('todo-container').style.display = 'block';
        getTodos();
    } else {
        alert('Login failed!');
    }
}

async function addTodo() {
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const token = localStorage.getItem('token');

    const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, description })
    });

    if (response.ok) {
        alert('Todo added!');
        getTodos();
    } else {
        alert('Failed to add todo');
    }
}

async function getTodos() {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/todos`, {
        headers: { 'Authorization': `Bearer ${token}` }
    });

    if (response.ok) {
        const todos = await response.json();
        const list = document.getElementById('todo-list');
        list.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.textContent = `${todo.title} - ${todo.description}`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => deleteTodo(todo.id);
            li.appendChild(deleteBtn);
            list.appendChild(li);
        });
    }
}

async function deleteTodo(id) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
    });

    if (response.ok) {
        alert('Todo deleted!');
        getTodos();
    } else {
        alert('Failed to delete todo');
    }
}
