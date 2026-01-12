

const fetchPokemons = async () => {

  const API_URL = 'https://pokeapi.co/api/v2/pokemon'
 

  const response = await fetch(API_URL) // Devuelve una promesa

  const data = await response.json() // Convierte la respuesta en formato JS Object

  return data
      
  }

  
const renderPokemons = (pokemons = []) => {
  const pokemonsList = document.querySelector('#pokemonList')

  let elements = ''


  pokemons.forEach(pokemon => {
    elements += `
      <article class="pokemon-item">
        <h2>${pokemon.name}</h2>
        
       </article>
        
    `
  })

  pokemonsList.innerHTML = elements

  
}

fetchPokemons()
  .then(data => {
    console.log(data.results)
    renderPokemons(data.results)
  })