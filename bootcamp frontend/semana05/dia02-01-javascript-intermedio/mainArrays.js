


// TIPOS DE DATOS NO PRIMITIVOS (ARRAYS, OBJECTS)

// ARRAYS

// Un arreglo va a contener elementos de cualquier tipo de dato: cadenas, números, booleans, null, undefined, funciones, arrays, objetos, etc.

// Declarar un arreglo
const arregloVacio = []
const arregloConNombres = ['Victor', 'Liliana', 'Marcial', 'Mariana']
const listaConValores = [1, 2, 3, 'Victor', 'Villazón', true, null, undefined, [6, 7, 8]]

const listaConFunciones = [
  function () {
    console.log('Hola función')
  },
  'edad',
  123
]

console.log(arregloVacio)
console.log(arregloConNombres)
console.log(listaConValores)
console.log(listaConFunciones)

// Lectura de los elementos de un arreglo

console.log(arregloConNombres[0]) // Victor
console.log(arregloConNombres[3]) // Mariana

console.log(listaConValores[0]) // 1
console.log(listaConValores[4]) // Villazón
console.log(listaConValores[5]) // true
console.log(listaConValores[100]) // undefined
console.log(listaConValores[8]) // (3) [6, 7, 8] -> Devolvio un arreglo
console.log(listaConValores[8][1]) // 7 -> Así accedemos a un elemento de un arreglo dentro de otro arreglo

console.log(listaConFunciones[0]) // Aquí devuelve la declaración de la función sin ejecutarla
console.log(listaConFunciones[0]()) // Estamos ejecutando la función que está en el índice 0 del arreglo

// ¿Cómo sabemos la longitud de un arreglo?

console.log(arregloConNombres.length) // 4 elemento
console.log(listaConValores.length) // 9 elementos

// Escritura en arreglos

console.log(listaConValores[0]) // 1
listaConValores[0] = 'Grethel'
console.log(listaConValores[0]) // ['Grethel', ...]

// OPERACIONES SOBRE LOS ARREGLOS

// Insertar nuevos elementos al final del arreglo

arregloConNombres.push('Javascript')
arregloConNombres.push('CSS')

console.log(arregloConNombres)

// Remover elementos del final del arreglo

arregloConNombres.pop()

console.log(arregloConNombres)

// Insertar un elemento en una posición determinada

const arreglo = [...arregloConNombres] // Copia o Clone del arregloNombres

console.log(arreglo)
arreglo.splice(1, 0, 'HTML')
console.log(arreglo)
console.log(arregloConNombres) // Queda intacto

// Eliminar un elemento

console.log(arregloConNombres)
arregloConNombres.splice(2, 1)
console.log(arregloConNombres)

// Otras funciones: slice (Investiguen)

/// EJERCICIOS

// EJERCICIO: Lista de Invitados

// Tienen un arreglo con los nombres de las personas invitadas a una fiesta.

// 01 - Declara el arreglo con 5 nombres.
let invitados = ["Ana", "Luis", "María", "Pedro", "Carla"];

// 02 - Muestra en consola todos los nombres.
console.log(invitados)

// 03 - Agrega un nuevo invitado al final de la lista.
invitados.push("Paolita" )
console.log(invitados)

// 04 - Inserta un invitado al inicio de la lista.
invitados.unshift( "Zeus") // 04 - Inserta un invitado al inicio de la lista.
console.log(invitados)


// 05 - Elimina al último invitado de la lista.
invitados.pop()
console.log(invitados)


// 06 - Elimina al primer invitado de la lista.
invitados.splice(0,1)
console.log(invitados)

// 07 - Muestra cuántos invitados hay actualmente.
console.log(invitados.length)

// 08 - Reemplaza el segundo invitado de la lista por otro nombre.

invitados[1] = 'coco'
console.log(invitados)


// 09 - agrega 2 nombre en las posiciones 2 y 3 dé la lsita)

invitados.splice(2, 0, "Sofía", "Javier");
console.log(invitados)


// EJERCICIOS DE ALGORITMOS

// 1. Encontrar el mayor número
// Dado un arreglo de números, encuentra el número más grande sin usar Math.max.

const valores = [3, 10, 2, 8]

function encontrarMayor(numeros) {
  let mayor = numeros[0]

  for(let i = 0; i < numeros.length; i++) {
    // console.log(i, numeros[i]) no es necesario, puede estar en blanco
    if (numeros[i] > mayor) {
      mayor = numeros[i]
    }
  }

  
  return mayor
}

console.log(encontrarMayor(valores)) // 10




// 2. Contar pares e impares
// Dado un arreglo de números, muestra cuántos son pares y cuántos son impares.


function contarParesImpares(numeros) {
  let pares = 0 // Acumulador
  let impares = 0 // Acumulador

  for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // Es un numero par
      pares = pares + 1
    } else {
      impares = impares + 1
    }
  }

  console.log(pares, impares)
  return [pares, impares]
}

console.log(contarParesImpares(valores)) // [3, 1]

// 3. Invertir un arreglo
// Dado un arreglo, crea otro arreglo con los elementos en orden inverso sin usar .reverse().
// 👉 Pista: usa un bucle desde el final hacia el inicio.



function valoresInvertidos () {

let valoresInvertidos= []

for(let i= valores.length -1; i >= 0 ; i--) {
  valoresInvertidos.push(valores[i]) 
  }

  return valoresInvertidos

}

console.log(valoresInvertidos(valores))

// 4. Buscar un elemento
// Pide un nombre y verifica si está en el arreglo de invitados.
// Si está, muestra el índice donde se encuentra; si no, indica que no existe.

const listaInvitados = ['coco', 'pao', 'gabi', 'ana'];
console.log("Lista de invitados:", listaInvitados);

function estasEnLista() {
    let nombreUsuario = prompt("Por favor, introduce tu nombre:");

    // Inicio del primer IF: verifica si el usuario introdujo un nombre
    if (nombreUsuario !== null && nombreUsuario !== "") {
        
        let nombreBuscado = nombreUsuario.toLowerCase();
        
        let indice = listaInvitados.indexOf(nombreBuscado);

        // Inicio del segundo IF: verifica si el nombre está en la lista
        if (indice !== -1) {
            return `¡Sí! ${nombreBuscado} está en la lista de invitados con índice número ${indice}.`;
            
        } else {
            return `Lo siento, ${nombreBuscado} no está en la lista de invitados.`;
        }
        // Fin del primer IF (Aquí se cerraba incorrectamente en tu código)
    } else {
        // ELSE del primer IF (Se ejecuta si el usuario cancela o deja vacío)
        return "Búsqueda cancelada o nombre no introducido.";
    }
}

const resultadoBusqueda = estasEnLista();
console.log(resultadoBusqueda);


// 5. Eliminar duplicados
// Dado un arreglo con nombres repetidos, crea un nuevo arreglo sin duplicados.
// 👉 Pista: usa un arreglo auxiliar y verifica antes de insertar.

// 5. Eliminar duplicados
// Dado un arreglo con nombres repetidos, crea un nuevo arreglo sin duplicados.

let nom_duplicados = ['Javier', 'Amanda', 'Ariel', 'Grace', 'Amanda', 'Javier'];

function eliminarDuplicados(nombres_duplicados) {
    let nombres_oficial = [];

    for (let i = 0; i < nombres_duplicados.length; i++) {
        // Verifica si el nombre actual (nombres_duplicados[i]) NO está ya en el arreglo auxiliar (nombres_oficial)
        if (!nombres_oficial.includes(nombres_duplicados[i])) {
            nombres_oficial.push(nombres_duplicados[i]);
        } // ! es una negacion , include output es true o false
    }
    // Solo devolvemos el array limpio.
    return nombres_oficial; 
}

console.log("Array Original:", nom_duplicados);
console.log("Array Sin Duplicados:", eliminarDuplicados(nom_duplicados));
// Salida esperada: ['Javier', 'Amanda', 'Ariel', 'Grace']

// 6. Palíndromo con arreglos
// Verifica si una palabra es palíndroma (se lee igual al derecho y al revés).
// 👉 Pista: conviértela en arreglo de letras y compárala con su inverso.


function EsPalindromoConciso(palabra) {
    // 1. split('') -> Convierte el string en array de letras.
    // 2. reverse() -> Invierte el array (muta el array).
    // 3. join('') -> Vuelve a unir el array invertido en un string.
    let palabraInvertida = palabra.split('').reverse().join('');
    
    // 4. Compara el original con el invertido.
    if (palabra === palabraInvertida) {
        return `"${palabra}" SÍ es palíndromo.`;
    } else {
        return `"${palabra}" NO es palíndromo.`;
    }
}

console.log("\n// --- Prueba Concisa 1 ---");
console.log(EsPalindromoConciso("anitalavalatina"));

console.log("\n// --- Prueba Concisa 2 ---");
console.log(EsPalindromoConciso("javascript"));



// 7. Suma de todos los elementos
// Dado un arreglo de números, calcula la suma total de sus elementos sin usar reduce.

const elemento = [50, 30, 100, 700];

function SumaDeElementos(sum_elemento) {
    let suma = 0;

    for (let i = 0; i < sum_elemento.length; i++) {
        // Acumulación de la suma
        suma = suma + sum_elemento[i];
    }
    
    // Se elimina el console.log interno
    // Devolvemos solo la suma (o la suma y el array, como en el original, pero más limpio)
    return { arrayOriginal: sum_elemento, sumaTotal: suma };
    //return devuelve 2 valores arrayoriginal y suma total
}

const resultadoSuma = SumaDeElementos(elemento);

console.log("Array a sumar:", resultadoSuma.arrayOriginal);
console.log("La Suma de todos los elementos es:", resultadoSuma.sumaTotal);

// 8. Número más repetido
// Dado un arreglo de números, encuentra cuál aparece más veces.
// 👉 Pista: usa un contador para cada número.

// 9. Ordenar un arreglo (básico)
// Ordena un arreglo de números de menor a mayor sin usar .sort().
// 👉 Pista: algoritmo de burbuja (intercambiar elementos si están desordenados).

// 10. Intercalar dos arreglos
// Dado dos arreglos [1,2,3] y ['a','b','c'], crea uno nuevo: [1,'a',2,'b',3,'c'].
// 👉 Pista: usa un for que recorra en paralelo.


// TODO: Investiguen cada uno de los métodos de arreglos que muestro en la siguiente línea

