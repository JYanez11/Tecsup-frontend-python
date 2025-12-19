const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

let tasks = [
  {
    id: 'tarea-1',
    title: 'Estudiar javascript',
    completed: false
  },
  {
    id: 'tarea-2',
    title: 'Salir al receso',
    completed: true
  },
  {
    id: 'tarea-3',
    title: 'Resolver el reto de la semana',
    completed: false
  }
]

function renderTasks(tasks = []) {
  // console.log('Renderizando tasks...', tasks)
  let lista = ''

  tasks.forEach(task => {
    // console.log(task)

    // lista = lista + '<li>' + task.title + ' </li>'
    lista = lista + `
      <li class="flex gap-4 py-2 items-center justify-center">
        <input type="checkbox" />
        <div class="w-full">
          ${task.title}
        </div>
        <div class="flex gap-2">
          <button
            class="border border-green-700 font-medium text-sm text-green-700 px-2 py-1 rounded-lg hover:bg-green-700 hover:text-white duration-300 cursor-pointer"
          >
            Editar
          </button>
          <button
            class="border border-red-700 font-medium text-sm text-red-700 px-2 py-1 rounded-lg hover:bg-red-700 hover:text-white duration-300 cursor-pointer"
            data-id="${task.id}"
          >
            Remover
          </button>
        </div>
      </li>
    `
  })

  console.log(lista)
  taskList.innerHTML = lista
}

// TODO - 01 Al presionar enter en la caja de texto debemos agregr una nueva tarea a la lista

taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Lógica para agregar una nueva tarea

    // const value = event.target.value
    const { value } = event.target // target es un objeto

    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }

    console.log(newTask)

    tasks.push(newTask)

    renderTasks(tasks)

    taskInput.value = ''
  }
})

taskList.addEventListener('click', (event) => {
  const { target } = event

  if (target.tagName === 'BUTTON' && target.textContent.includes('Remover')) {
    console.log('Eliminando tarea...')
    const { id } = target.dataset // Id que queremos eliminar en data-id

    console.log(id)

    tasks = tasks.filter(task => task.id !== id)

    renderTasks(tasks)
  }

  // TODO: Al presionar el check debe completarse la tarea en el arreglo de tasks
})

// TODO: Al hacer click en el botón 'Limpiar tareas completadas' debemos remover todas las tareas completadas. Hay que llamar al método render también.

renderTasks(tasks)