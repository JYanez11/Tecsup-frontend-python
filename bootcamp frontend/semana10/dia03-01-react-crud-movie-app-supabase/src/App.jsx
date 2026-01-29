import { useEffect } from "react"
import { supabase } from "./lib/supabase"

const App = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await supabase.from('movies').select('*')

      console.log(response)
    }  

    fetchMovies()
  }, [])

  return (
    <div>App</div>
  )
}

export default App