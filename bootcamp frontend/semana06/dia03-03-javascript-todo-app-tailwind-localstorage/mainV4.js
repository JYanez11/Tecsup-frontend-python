const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

let tasks = JSON.parse(localStorage.getItem('TASKS_LS')) ?? []

function saveTasksInLocalStorage(tasks = []) {
  localStorage.setItem('TASKS_LS', JSON.stringify(tasks))
}

function renderTasks(tasks = []) {
  let lista = ''
  tasks.forEach(task => {
    lista += `
      <li class="flex gap-4 py-2 items-center justify-center border-b border-gray-100">
        <input
          type="checkbox"
          data-id="${task.id}"
          ${task.completed ? 'checked' : ''}
          class="cursor-pointer"
        />
        <div class="w-full ${task.completed ? 'line-through text-red-500' : ''}">
          ${task.title}
        </div>
        <div class="flex gap-2">
          <button
            class="task-item__edit border border-green-700 text-green-700 px-1 py-1 rounded-lg hover:bg-green-700 hover:text-white duration-300 cursor-pointer w-8 h-8"
            data-id="${task.id}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
          <button
            class="task-item__remove border border-red-700 text-red-700 px-1 py-1 rounded-lg hover:bg-red-700 hover:text-white duration-300 cursor-pointer w-8 h-8"
            data-id="${task.id}"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
          </button>
        </div>
      </li>
    `
  })
  taskList.innerHTML = lista
}

// Agregar tarea
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const value = event.target.value.trim()
    if (value === "") return 

    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }

    tasks.push(newTask)
    renderTasks(tasks)
    saveTasksInLocalStorage(tasks)
    event.target.value = ''
  }
})

// Delegación de eventos en la lista
taskList.addEventListener('click', (event) => {
  const target = event.target
  const id = target.closest('[data-id]')?.dataset.id

  // 1. Eliminar
  const buttonRemove = target.closest('.task-item__remove')
  if (buttonRemove) {
    tasks = tasks.filter(task => task.id !== id)
  }

  // 2. Editar
  const buttonEdit = target.closest('.task-item__edit')
  if (buttonEdit) {
    const taskToEdit = tasks.find(t => t.id === id)
    const newTitle = prompt("Edita tu tarea:", taskToEdit.title)
    if (newTitle && newTitle.trim() !== "") {
      taskToEdit.title = newTitle.trim()
    }
  }

  // 3. Checkbox (Completar)
  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    const index = tasks.findIndex(task => task.id === id)
    tasks[index].completed = !tasks[index].completed
  }

  // Renderizar y guardar después de cualquier cambio
  renderTasks(tasks)
  saveTasksInLocalStorage(tasks)
})

// Limpiar completadas
taskClear.addEventListener('click', () => {
  tasks = tasks.filter(task => !task.completed)
  renderTasks(tasks)
  saveTasksInLocalStorage(tasks)
})

// Carga inicial
renderTasks(tasks)