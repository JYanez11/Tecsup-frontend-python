import { useState } from "react"

const App = () => {
  const DEFAULT_TAREAS = [
    {
      id: '1',
      titulo: 'Aprender Javascript',
      completado: true
    },
    {
      id: '2',
      titulo: 'Aprender CSS',
      completado: false
    },
    {
      id: '3',
      titulo: 'Aprender React.js + Tailwind CSS',
      completado: false
    },
  ]

  const [tareas, setTareas] = useState(DEFAULT_TAREAS)
  const [input, setInput] = useState('')

  // TODO: renderizar la lista de tareas del estado tareas (tip: usar el map sobre el arreglo en el ul)

  const handleSubmit = (event) => {
    event.preventDefault()

    // TODO: 01 - Crear una nueva tarea en el estado tareas
    
    const nuevaTarea = {
      id: crypto.randomUUID(),
      titulo: input,
      completado: false
    }
    console.log(nuevaTarea)

    setTareas([...tareas, nuevaTarea])

    setInput('')
  }

  const handleRemover = (event) => {
    // TODO: Remover la tarea seleccionada al presionar el botón de la ❌
  }

  // TODO: Actualizar el estado de la tarea a completado
   
  return (
    <main className="flex flex-col gap-4">
      <h1>Todo App + React + Tailwind</h1>

      <form
        className="flex gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="border p-1"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <input
          type="submit"
          value="Añadir"
          className="bg-blue-400 p-2"
        />

        {input}
      </form>

      <section className="bg-blue-200 flex justify-between p-4">
        <span>0 de 0 completadas</span>

        <button
          className="bg-green-400 p-2"
        >
          Limpiar completadas
        </button>
      </section>

      <ul className="flex flex-col gap-2 p-4">
        {tareas.map(tarea => {
          return (
            <li className="flex justify-between" key={tarea.id}>
              <div className="flex gap-2">
                <input type="checkbox" />

                <span>
                  {tarea.titulo}
                </span>
              </div>

              <button
                className="cursor-pointer"
                onClick={handleRemover}
              >
                ❌
              </button>
            </li>
          )
        })}
      </ul>

      <pre>{JSON.stringify(tareas, null, 2)}</pre>
    </main>
  )
}

export default App