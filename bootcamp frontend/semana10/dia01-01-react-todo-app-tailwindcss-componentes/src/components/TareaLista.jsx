// TODO: Crear un componente con solo el LI del UL le llamaremos <TareaItem /> e identificar las propiedades o las funciones que se pasarán al componente.
import TareaItem from "./TareaItem";

const TareaLista = ({ tareas, onCompletado, onRemover }) => {
  return (
    <ul className="flex flex-col gap-2 p-4">
      {tareas.map((tarea) => (
        <TareaItem
          key={tarea.id}
          tarea={tarea}
          onCompletado={onCompletado} 
          onRemover={onRemover}
        />
      ))}
    </ul>
  );
};

export default TareaLista