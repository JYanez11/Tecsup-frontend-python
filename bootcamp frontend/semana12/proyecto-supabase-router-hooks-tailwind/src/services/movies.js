import { supabase } from "../lib/supabase";

// export const fetchMovies = async () => {
//   const response = await supabase.from('invitadosApp').select('*')

//   return response.data
// }



// Obtener registros
export const fetchMovies = async () => {
  const { data, error } = await supabase
    .from('invitadosApp')
    .select('*');

  if (error) {
    console.error("Error fetching movies:", error.message);
    return null;
  }

  return data;
};


// Crear registros (Insertar)
export const createMovies = async (payload) => {
  // Supabase usa .insert() para crear nuevos registros
  const { data, error } = await supabase
    .from('invitadosApp')
    .insert(payload) // payload puede ser un objeto {} o un array [{}]
    .select();       // Agregamos .select() para que devuelva el objeto creado

  if (error) {
    console.error("Error creating movie:", error.message);
    throw error; 
  }

  return data;
};


// Borrar un registro por ID
export const deleteMovie = async (id) => {
  const { data, error } = await supabase
    .from('invitadosApp')
    .delete()
    .eq('id', id); // Filtra por la columna 'id'

  if (error) {
    console.error("Error deleting movie:", error.message);
    throw error;
  }

  return data;
};


// Actualizar un registro
export const updateMovie = async (id, updates) => {
  // 'updates' debe ser un objeto con los campos a cambiar, ej: { nombre: 'Nuevo Nombre' }
  const { data, error } = await supabase
    .from('invitadosApp')
    .update(updates)
    .eq('id', id)  // Filtra por el ID del registro
    .select();     // .select() es opcional, sirve para devolver el registro ya modificado

  if (error) {
    console.error("Error updating movie:", error.message);
    throw error;
  }

  return data;
};



