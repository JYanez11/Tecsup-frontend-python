import { useState } from "react"

import TareaTitulo from "./components/TareaTitulo"
import TareaFormulario from "./components/TareaFormulario"
import TareaEstadisticas from "./components/TareaEstadisticas"
import TareaLista from "./components/TareaLista"

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

  const handleRemover = (id) => {
    // TODO: Remover la tarea seleccionada al presionar el botón de la ❌
    console.log('Remover tarea con id:', id)

    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)

    setTareas(tareasActualizadas)
  }

  const handleCompletado = (id) => {
    console.log('Actualizando tarea', id)

    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        // Aquí vamos a modificar la propiedad completado a true o a false
        return {
          ...tarea,
          completado: !tarea.completado
        }
      }

      return tarea
    })

    setTareas(tareasActualizadas)
  }

  const handleSave = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea])
  }
   
  return (
    <main className="flex flex-col gap-4">
      <TareaTitulo titulo='Todo App + React + Tailwind (Componentes)' />

      <TareaFormulario onSubmit={handleSave} />

      <TareaEstadisticas tareas={tareas} />

      <TareaLista
        tareas={tareas}
        onCompletado={handleCompletado}
        onRemover={handleRemover}
      />

      <pre>{JSON.stringify(tareas, null, 2)}</pre>
    </main>
  )
}

export default App