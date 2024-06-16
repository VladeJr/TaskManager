const apiUrl = '/api/tasks';

async function addTask(event) {
  event.preventDefault(); 
  const form = document.querySelector('#taskForm');
  const formData = new FormData(form);

  const taskTitle = formData.get('title');
  const taskDescription = formData.get('description');

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: taskTitle, description: taskDescription, status: 'pending' }),
  });

  if (response.ok) {
    loadTasks();
  } else {
    console.error('Erro ao adicionar tarefa');
  }

  form.reset();
}


async function loadTasks() {
  const response = await fetch(apiUrl);
  const tasks = await response.json();
  const taskList = document.querySelector('#taskList');
  taskList.innerHTML = tasks
    .map((task) => `<li id="${task._id}"><h2>${task.title}</h2><p>${task.description}</p><button onclick="deleteTask('${task._id}')">Excluir</button></li>`)
    .join('');
}

async function deleteTask(id) {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    loadTasks();
  } else {
    console.error('Erro ao excluir tarefa');
  }
}

window.addEventListener('DOMContentLoaded', loadTasks);
