
// const LIMIT = 10
let page = 1
// let totalPages = 6
// let count = 0

// paso 1 : fetch trae la info del api
const fetchDragon = async (page = 1) => {
  // const OFFSET = (page - 1) * LIMIT

  // const API_URL = `https://dragonball-api.com/api/characters`;
  // const API_URL = `https://dragonball-api.com/api/characters?limit=${LIMIT}&offset=${OFFSET}`
  const API_URL = `https://dragonball-api.com/api/characters?page=${page}`
  const response = await fetch(API_URL);
  const data = await response.json();

  // IMPORTANTE coco: Guardamos el total de páginas que nos dice la API
   totalPages = data.meta.totalPages;

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

  dragonslist.innerHTML = elements; 
  
}; // <-- Faltaba cerrar la función

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






