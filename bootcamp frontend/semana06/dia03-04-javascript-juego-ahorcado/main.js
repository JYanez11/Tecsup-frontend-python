const elPalabra = document.querySelector(".ahorcado__palabra");
const elBotones = document.querySelector(".ahorcado__botones");
const elResultado = document.querySelector(".ahorcado__resultado");
const elReiniciar = document.querySelector(".ahorcado__reiniciar");

// elPalabra.textContent = 'HOLA'

const PALABRA_RESPUESTA = "JAVA";

let letrasAdivinadas = "";

// creando el alfabeto

const ALFABETO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Arreglo

// es solo un bloque
const renderizarAlfabeto = () => {
  ALFABETO.forEach((letra) => {
    const boton = document.createElement("button");

    boton.textContent = letra;

    boton.className =
      "bg-blue-500 p-2 text-white font-bold text-2xl cursor-pointer hover:bg-blue-600 duration-300 rounded";

    
     // crea botonera en arreglo
     elBotones.appendChild(boton);
    
      // paso 1 - analizando botones y acciones

    boton.addEventListener("click", (event) => {
      letrasAdivinadas += letra;

      elPalabra.textContent = PALABRA_RESPUESTA.split("")
        .map((letra) => (letrasAdivinadas.includes(letra) ? letra : "#"))
        .join("");
      // separa la palabra respuesta para compararla con la letraadivinada e incorprar la letra adivinada
      // crea '_' para poder colocar el ganaste y el comienza nuevamente, que es complemento del las _ del html

      if (!elPalabra.textContent.includes("#")) {
        console.log("GANASTE!");

        elResultado.classList.toggle("hidden");
        elReiniciar.classList.toggle("hidden");
      }
    });

   
  });

  // paso 2- reiniciar

  elReiniciar.addEventListener("click", (event) => {
    letrasAdivinadas = "";
    elPalabra.textContent = "___________";
    elResultado.classList.toggle("hidden");
    elReiniciar.classList.toggle("hidden");
  });
};

renderizarAlfabeto();
