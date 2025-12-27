const elPalabra = document.querySelector(".ahorcado__palabra");
const elBotones = document.querySelector(".ahorcado__botones");
const elResultado = document.querySelector(".ahorcado__resultado");
const elReiniciar = document.querySelector(".ahorcado__reiniciar");

const PALABRAS_POSIBLES = ["JAVA", "FRONTEND", "LOGICA", 'PYTHON', 'HTML', 'CSS'];
let palabraRespuesta = "";
let letrasAdivinadas = "";

const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Función para iniciar o reiniciar el estado del juego
const iniciarJuego = () => {
  letrasAdivinadas = "";
  // Seleccionamos palabra nueva
  const indice = Math.floor(Math.random() * PALABRAS_POSIBLES.length);
  palabraRespuesta = PALABRAS_POSIBLES[indice];
  // console.log(Math.random() * PALABRAS_POSIBLES.length)
  
  // Dibujamos los guiones iniciales según el largo de la palabra elegida
  elPalabra.textContent = "_".repeat(palabraRespuesta.length);
  
  // Ocultamos mensajes de victoria
  elResultado.classList.add("hidden");
  elReiniciar.classList.add("hidden");

  // Opcional: Si deshabilitaste botones, aquí deberías habilitarlos todos de nuevo
};

const renderizarAlfabeto = () => {
  elBotones.innerHTML = ""; // Limpiamos botones previos si existen
  ALFABETO.forEach((letra) => {
    const boton = document.createElement("button");
    boton.textContent = letra;
    boton.className = "boton bg-blue-500 p-2 text-white font-bold text-2xl cursor-pointer hover:bg-blue-600 duration-300 rounded";
    elBotones.appendChild(boton);
  });
};

elBotones.addEventListener("click", (event) => {
  if (event.target.tagName === 'BUTTON') {
    // CORRECCIÓN: Usar .textContent para obtener la letra
    let letraPresionada = event.target.textContent; 
    
    if (!letrasAdivinadas.includes(letraPresionada)) {
      letrasAdivinadas += letraPresionada;
    }

    // Actualizar visualización
    const progreso = palabraRespuesta.split("")
      .map((l) => (letrasAdivinadas.includes(l) ? l : "_"))
      .join("");
    
    elPalabra.textContent = progreso;

    // Verificar victoria
    if (!progreso.includes("_")) {
      elResultado.textContent = "¡GANASTE!";
      elResultado.classList.remove("hidden");
      elReiniciar.classList.remove("hidden");
    }
  }
});

elReiniciar.addEventListener("click", iniciarJuego);

// Ejecución inicial
renderizarAlfabeto();
iniciarJuego();