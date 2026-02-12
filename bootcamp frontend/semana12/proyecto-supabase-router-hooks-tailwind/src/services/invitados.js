import { supabase } from "../lib/supabase";


// Obtener registros
export const fetchInvitados = async () => {
  const { data, error } = await supabase
    .from('invitadosApp')
    .select('*');

  if (error) {
    console.error("Error fetching Invitados:", error.message);
    return null;
  }

  return data;
};


// Crear registros (Insertar)
export const createInvitados = async (payload) => {
    const { data, error } = await supabase
    .from('invitadosApp')
    .insert(payload) 
    .select();       

  if (error) {
    console.error("Error creating Invitado:", error.message);
    throw error; 
  }

  return data;
};


// Borrar un registro por ID
export const deleteInvitado = async (id) => {
  const { data, error } = await supabase
    .from('invitadosApp')
    .delete()
    .eq('id', id); 

  if (error) {
    console.error("Error deleting Invitado:", error.message);
    throw error;
  }

  return data;
};


// Actualizar un registro
export const updateInvitado = async (id, updates) => {
    const { data, error } = await supabase
    .from('invitadosApp')
    .update(updates)
    .eq('id', id)  
    .select();    

  if (error) {
    console.error("Error updating Invitado:", error.message);
    throw error;
  }

  return data;
};



