let page = 1;
let totalPages = 1;
let dragonFavorites = JSON.parse(localStorage.getItem('dragon-favorites')) || [];

// 1. Fetch: Trae la info de la API
const fetchDragon = async (page = 1) => {
    try {
        const API_URL = `https://dragonball-api.com/api/characters?page=${page}`;
        const response = await fetch(API_URL);
        const data = await response.json();

        // Guardamos el total de páginas desde la meta información de la API
        totalPages = data.meta.totalPages;

        // Mapeamos los items para inyectarles si son favoritos o no comparando con nuestro array local
        const characters = data.items.map(character => ({
            ...character,
            isFavorite: dragonFavorites.some(fav => fav.id === character.id)
        }));

        return characters;
    } catch (error) {
        console.error("Error al cargar:", error);
        return [];
    }
};

// 2. Render: Inserta los personajes en el HTML
const renderDragon = (dragons = []) => {
    const dragonsList = document.querySelector('#pokemonList'); // Asegúrate que este ID existe en tu HTML
    let elements = '';

    dragons.forEach(dragon => {
        elements += `
      <article class="pokemon-item">
        <h2>${dragon.name}</h2>
        <img src="${dragon.image}" alt="${dragon.name}" width="100">
        <div class="pokemon-item__buttons">
          <button onclick="toggleFavorite(${dragon.id}, '${dragon.name}', '${dragon.image}')">
            <svg class="${dragon.isFavorite ? 'is-favorite' : ''}" width="24" height="24" viewBox="0 0 24 24" fill="${dragon.isFavorite ? 'gold' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873l-6.158 -3.245" />
            </svg>
          </button>
        </div>
      </article>`;
    });

    dragonsList.innerHTML = elements;
    updatePageNumber();

    document.querySelector('#numberPokemons').textContent = `Favorites: ${dragonFavorites.length}`
};

// 3. Lógica de Favoritos
window.toggleFavorite = async (id, name, image) => {
    const index = dragonFavorites.findIndex(fav => fav.id === id);

    if (index > -1) {
        // Si ya existe, lo quitamos
        dragonFavorites.splice(index, 1);
    } else {
        // Si no existe, lo agregamos
        dragonFavorites.push({ id, name, image });
    }

    // Guardar en LocalStorage
    localStorage.setItem('dragon-favorites', JSON.stringify(dragonFavorites));

    // Refrescar la vista actual para mostrar el cambio de color en la estrella
    const data = await fetchDragon(page);
    renderDragon(data);
};

// 4. Navegación
const updatePageNumber = () => {
    const currentPageButton = document.querySelector('#currentPage');
    if (currentPageButton) {
        currentPageButton.innerHTML = `Página ${page} de ${totalPages}`;
    }
};

// Función genérica para cambiar de página y evitar repetir código
const goToPage = async (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    page = newPage;
    const data = await fetchDragon(page);
    renderDragon(data);
};

// Event Listeners
document.querySelector('#nextPage').addEventListener('click', () => goToPage(page + 1));
document.querySelector('#prevPage').addEventListener('click', () => goToPage(page - 1));
document.querySelector('#firstPage').addEventListener('click', () => goToPage(1));
document.querySelector('#lastPage').addEventListener('click', () => goToPage(totalPages));

// Ejecución inicial
fetchDragon(page).then(data => renderDragon(data));
