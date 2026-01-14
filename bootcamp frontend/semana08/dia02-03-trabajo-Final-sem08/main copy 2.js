
// const LIMIT = 10
let page = 1
// let totalPages = 6
// let count = 0

let dragonFavorites = []

// paso 1 : fetch trae la info del api
const fetchDragon = async (page = 1) => {
  // const OFFSET = (page - 1) * LIMIT

  // const API_URL = `https://dragonball-api.com/api/characters`;
  
  const API_URL = `https://dragonball-api.com/api/characters?page=${page}`
  const response = await fetch(API_URL);
  const data = await response.json();

  // IMPORTANTE coco: Guardamos el total de páginas que nos dice la API
   totalPages = data.meta.totalPages;

  // La API devuelve los personajes en data.items
  return {data,
  isFavorite: Boolean(foundFavorite)
  }
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

        <div class="pokemon-item__buttons">
          <button onclick="toggleFavorite ('${dragon.id}')">
            <svg class="${dragon.isFavorite ? 'is-favorite' : '' }" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" /></svg>
          </button>

      </article>
    `;
  }); // <-- Faltaba cerrar el forEach

  dragonslist.innerHTML = elements; 
  
}; 

const toggleFavorite = async (id) => {
  console.log('toggleFavorite', id)
//   const foundDragonFavorite = dragonFavorites.items.filter(
//     favorite => favorite.id === id
//   )
//   const existDragonFavorite = foundDragonFavorite.length > 0

//   if (existDragonFavorite) {
//     // Retirar el pokemon de favoritos
//     dragonFavorites.item = dragonFavorites.item.filter(pokemon => dragon.id != id)
//   } else {
//     // Agregar el pokemon a favoritos
//     dragonFavorites.push({ id, name, image })
//   }

//   localStorage.setItem('pokemon-favorites', JSON.stringify(pokemonFavorites))

//   const data = await fetchPokemons(page)
//   renderPokemons(data.results)

//   console.log(pokemonFavorites)
// }


// paso 3 : ejecucion inicial
fetchDragon()
  .then(data => {
    console.log(data); // Ahora verás el array de personajes
    // count = data.count
    renderDragon(data);
  })
  .catch(error => console.error("Error al cargar:", error));


  // paso 4 : ejecucion con botones de  movimientos de paginas


  
const updatePageNumber = () => {
  const currentPageButton = document.querySelector('#currentPage');
  
  if (currentPageButton) {
    // Usamos `page` (tu variable actual) y `totalPages`
    currentPageButton.innerHTML = `Página ${page} de ${totalPages}`;
  }
}

const nextPageButton = document.querySelector('#nextPage')
const prevPageButton = document.querySelector('#prevPage')

const firstPageButton = document.querySelector('#firstPage')
const lastPageButton = document.querySelector('#lastPage')

nextPageButton.addEventListener('click', async (event) => {
  console.log('click next')

  page = page + 1

  if (page > totalPages) {
    page = totalPages

    return
  }

  const dataDragons = await fetchDragon(page)

  console.log(dataDragons)

  updatePageNumber()

  renderDragon(dataDragons)
})


prevPageButton.addEventListener('click', async (event) => {
  console.log('click next')

  page = page - 1

  if (page <= 0) {
    page = 1

    return
  }

  const dataDragons = await fetchDragon(page)

  console.log(dataDragons)

  updatePageNumber()

  renderDragon(dataDragons)
})

firstPageButton.addEventListener('click', async (event) => {
  console.log('click next')

  page = 1

  
  const dataDragons = await fetchDragon(page)

  console.log(dataDragons)

  updatePageNumber()

  renderDragon(dataDragons)
})


lastPageButton.addEventListener('click', async (event) => {
  console.log('click next')

  page = 6

  
  const dataDragons = await fetchDragon(page)

  console.log(dataDragons)

  updatePageNumber()

  renderDragon(dataDragons)
})

