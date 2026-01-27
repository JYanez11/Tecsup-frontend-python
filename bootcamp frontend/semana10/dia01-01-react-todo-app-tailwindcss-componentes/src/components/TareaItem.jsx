


const TareaItem = ({ tarea, onCompletado, onRemover }) => {
  return (
    <li className="flex justify-between">
      <div className="flex gap-2">
        <input
          type="checkbox"
          onChange={() => onCompletado(tarea.id)}
          checked={tarea.completado}
        />

        {/* Aplicamos clase condicional para el tachado */}
        <span className={tarea.completado ? "line-through text-gray-400" : ""}>
          {tarea.titulo}
        </span>
      </div>

      <button
        className="cursor-pointer hover:scale-110 transition-transform"
        onClick={() => onRemover(tarea.id)}
      >
        ❌
      </button>
    </li>
  );
};

export default TareaItem