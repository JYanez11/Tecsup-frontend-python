import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export function useAuth() {
  const [user, setUser] = useState(null)


  // guarda la sesion para evitar que el usuario vuelva alogear si refresca la pagina
  useEffect(() => {
    const getInitialSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      setUser(data.session)
    }

    getInitialSession() //ejecuta funcion
  }, [])


// escucha cambios en tiempo real
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session)
      }
    )

    return () => subscription.unsubscribe() //evita que siga consumiendo memoria
  }, [])

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) throw error

    console.log(data, data.session)

    setUser(data?.session ?? null)
  }

  const logout = async () => {
    await supabase.auth.signOut()

    setUser(null)
  }

  return {
    user,
    login,
    logout
  }
}