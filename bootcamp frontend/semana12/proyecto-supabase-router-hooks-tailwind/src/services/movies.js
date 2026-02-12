import { supabase } from "../lib/supabase";


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
    const { data, error } = await supabase
    .from('invitadosApp')
    .insert(payload) 
    .select();       

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
    .eq('id', id); 

  if (error) {
    console.error("Error deleting movie:", error.message);
    throw error;
  }

  return data;
};


// Actualizar un registro
export const updateMovie = async (id, updates) => {
    const { data, error } = await supabase
    .from('invitadosApp')
    .update(updates)
    .eq('id', id)  
    .select();    

  if (error) {
    console.error("Error updating movie:", error.message);
    throw error;
  }

  return data;
};



