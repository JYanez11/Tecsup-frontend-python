import { useEffect, useState } from "react"
import { fetchMovies } from "../services/movies"

const MoviesPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies()
      .then(data => setMovies(data))
  }, [])

  return (
    <div>
      <h1 className="text-3xl mb-4">Movie list</h1>

      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>{movie.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default MoviesPage