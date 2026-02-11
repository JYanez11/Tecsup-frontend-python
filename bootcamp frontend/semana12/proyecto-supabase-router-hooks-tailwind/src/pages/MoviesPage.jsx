import { useEffect, useState } from "react";
// 1. IMPORTA todas las funciones necesarias
import { fetchMovies, createMovies, updateMovie, deleteMovie } from "../services/movies";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  // 2. DECLARA el estado para el input
  const [newMovieName, setNewMovieName] = useState("");

  useEffect(() => {
    fetchMovies().then((data) => {
        if(data) setMovies(data);
    });
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newMovieName.trim()) return;

    try {
      const data = await createMovies({ name: newMovieName });
      if (data) {
        // Supabase insert devuelve un array, por eso usamos spread
        setMovies([...movies, ...data]); 
        setNewMovieName(""); 
      }
    } catch (error) {
      alert("Error al crear");
    }
  };

  // 3. DEFINE handleDelete
  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar este registro?")) {
      try {
        await deleteMovie(id);
        setMovies(movies.filter((m) => m.id !== id));
      } catch (error) {
        alert("Error al eliminar");
      }
    }
  };

  // 4. DEFINE handleUpdate
  const handleUpdate = async (id, currentName) => {
    const nuevoNombre = window.prompt("Editar nombre:", currentName);
    if (nuevoNombre && nuevoNombre !== currentName) {
      try {
        await updateMovie(id, { name: nuevoNombre });
        setMovies(movies.map(m => m.id === id ? { ...m, name: nuevoNombre } : m));
      } catch (error) {
        alert("Error al actualizar");
      }
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl mb-4 font-bold">Lista de invitados a la fiesta de año nuevo</h1>

      <form onSubmit={handleCreate} className="flex gap-2 mb-8">
        <input
          type="text"
          value={newMovieName}
          onChange={(e) => setNewMovieName(e.target.value)}
          placeholder="invitado..."
          className="flex-1 border p-2 rounded shadow-sm"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Agregar
        </button>
      </form>

      <ul className="space-y-3">
        {movies.map((movie) => (
          <li key={movie.id} className="flex justify-between items-center p-3 bg-white border rounded shadow-sm">
            <span className="text-lg">{movie.name}</span>
            
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdate(movie.id, movie.name)}
                className="text-blue-500 hover:text-blue-700"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(movie.id)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;