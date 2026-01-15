
// en este archivo creamos las llamas de datos- get, post, delete
// ojo la ejecucion la colocamos en el main.hs

const url = 'http://localhost:3000/movies'

// Fetch
export const fetchMovies = async () => {
  const response = await fetch(url) // Esperar la respuesta del servidor (asincrona)

  return await response.json() // Esperar a la conversión de JSON a Objeto JS (asincrona)
}


// create
export const createMovie = async (form) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // mimetypes. Ej, json, xls, jpg, etc
    },
    body: JSON.stringify(form) // EL body siempre tiene que ser una cadena de texto
  }

  const response = await fetch(url, options) // Por defecto usa el método GET

  return await response.json()
}


// Delete

export const deleteMovie = async (id) => {
  const options = {
    method: 'DELETE'
  }

  // http://localhost:3000/movies/3
  const response = await fetch(`${url}/${id}`, options)

  return await response.json()
}