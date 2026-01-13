
const LIMIT = 2
let page = 1
let totalPages = 0

// paso 1 : fetch trae la info del api
const fetchDragon = async (page = 1) => {
  const OFFSET = (page - 1) * LIMIT

  // const API_URL = `https://dragonball-api.com/api/characters`;
  const API_URL = `https://dragonball-api.com/api/characters?limit=${LIMIT}&offset=${OFFSET}`
  const response = await fetch(API_URL);
  const data = await response.json();

  // La API devuelve los personajes en data.items
  return data.items; 
};

// paso 2 : render , inserta grupo de personajes
const renderDragon = (dragons = []) => {
  const dragonslist = document.querySelector('#pokemonList');
  let elements = '';

  // Usamos el nombre correcto de la variable: dragons
  dragons.forEach(dragon => {
    elements += `
      <article class="pokemon-item">
        <h2>${dragon.name}</h2>
        <img src="${dragon.image}" alt="${dragon.name}" width="100">
      </article>
    `;
  }); // <-- Faltaba cerrar el forEach

  dragonslist.innerHTML = elements; // <-- Se asigna al final, fuera del bucle
}; // <-- Faltaba cerrar la función

// paso 3 : ejecucion inicial
fetchDragon()
  .then(data => {
    console.log(data); // Ahora verás el array de personajes
    renderDragon(data);
  })
  .catch(error => console.error("Error al cargar:", error));
