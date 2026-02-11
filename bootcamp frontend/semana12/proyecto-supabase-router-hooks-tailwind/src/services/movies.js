import { supabase } from "../lib/supabase";

export const fetchMovies = async () => {
  const response = await supabase.from('invitadosApp').select('*')

  return response.data
}