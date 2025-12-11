// FUNCIONES (Son bloques de código que podemos reutilizar)

// Declaración
function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar y las que vamos a reutlizar
  console.log('Hola soy una función')
  console.log('Soy un bloque de código')
}

// Ejecutar, estamos llamando a la función
nombreDeLaFuncion()
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('¡Hola soy Victor!')
  console.log('Y soy fullstack')
}

imprimirMiNombre()

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre, nivel = 'el mejor') {
  // if (!nivel) { ❌
  //   nivel = 'el mejor'
  // }

  console.log('¡Hola soy ' + nombre + '!')
  console.log('Y soy ' + nivel)
}

imprimirUnNombre() // ¡Hola soy undefined! ❓
imprimirUnNombre('David', 'Fullstack') // ¡Hola soy David! Y soy Fullstack 😎
imprimirUnNombre('Diego') // ¡Hola soy Diego! Y soy el mejor 😎

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor o menor de edad mostrando 'Mayor de edad' o 'Menor de edad.

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) { // si es true se ejecuta
    console.log('Mayor de edad')
  } else { // si es false se ejecuta
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(39) // Mayor de edad
esMayorOMenorDeEdad(8)  // Menor de edad
esMayorOMenorDeEdad(17)  // Menor de edad

// 2. Retornar true si un numero es primo sino devolver false
// Pista: un numero primo es divisible por sí mismo y por 1

// 7 -> 1 (2 3 4 5 6) 7

function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false
  }

  for (let posibleDivisor=2; posibleDivisor < numero; posibleDivisor++) {
    console.log('esNumeroPrimo', numero)
    if (numero % posibleDivisor === 0) {
      return false
    }
  }

  return true
}

console.log(esNumeroPrimo(7)) // true
console.log(esNumeroPrimo(10)) // false
console.log(esNumeroPrimo(15)) // false

console.log(esNumeroPrimo(21)) // prueba coco


// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdadSinRetorno(edad) {
  if (edad >= 18) { // si es true se ejecuta
    console.log('Mayor de edad')
  } else { // si es false se ejecuta
    console.log('Menor de edad')
  }

  // FUNCION QUE NO RETORNA NADA === undefined
}

esMayorOMenorDeEdadSinRetorno(39)

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) { // si es true se ejecuta
    return 'Mayor de edad'
  } else { // si es false se ejecuta
    return 'Menor de edad'
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(39)

console.log('RESULTADO:', resultado)

// MÉTODOS DE CADENAS

const welcome = ' Hola Javascript '

console.log(welcome)
console.log(welcome.length)
console.log(welcome.toUpperCase())
console.log(welcome.toLowerCase())
console.log(welcome.trim()) // Remueve los espacios en blanco al inicio y al final de la cadena

const avatar = 'Hola @me'

console.log(avatar)
console.log(avatar.concat('victorvzn')) // Hola @mevictorvzn
console.log(avatar.replace('me', 'victorvzn')) // Hola @victorvzn
console.log(avatar.slice(0, 5)) // Retorno una parte de la cadena tomando la posición/índice de inicio y final en los parámetros
console.log(welcome.indexOf('script')) // 10

// Split y join para cadenas

console.log('frutas'.split('')) // Convierte en un arreglo y separa cada letra de la cadena
console.log('frutas'.split('').join(','))
console.log('frutas'.split('').join(''))


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

// MÉTODOS DE ARREGLOS (includes, map, filter, reduce, every, some, flat, flatMap, sort,forEach, etc.)

// Método INCLUDES, verifica si exise cierto valor(tipo de dato) en un arreglo y devuelve un resultado booleano(true o false).


const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(languages)

console.log('INCLUDES', languages.includes('java')) // true
console.log('INCLUDES', languages.includes('cobol')) // false
console.log('INCLUDES', languages.includes('PYTHON')) // false
console.log('INCLUDES', languages.includes('python')) // true

// Método FILTER, nos ayuda a ubicar un elemeneto dentro de un arreglo usando una condicion y devuelve un nuevo arreglo con los resultados.

const lenguajesFiltrados = languages.filter(
  function(lenguaje) {
    // return false
    // return lenguaje === 'java'
    // return lenguaje === 'python'
    // return lenguaje === 'Python'
    // return lenguaje.includes('c') || lenguaje.includes('C')
    return lenguaje.toLowerCase().includes('c') 
  }
)

console.log('FILTER', lenguajesFiltrados) // ['javascript', 'C', 'c++']
console.log(languages)

// TODO: EJERCICIO - Busca solo las personas cuyo nombre empieza con una vocal 

const lista = ["Ana", "Luis", "Oscar", "Elena", "Pedro"];
console.log(lista)

const nombresInicionConVocales = lista.filter (
  function(x) {
    return x.toLowerCase().includes('a', 'e' ,'i', '0', 'u')
  }
)

console.log(nombresInicionConVocales) // Resultado esperado: ["Ana", "Oscar", "Elena"]

// Método MAP, devuelve un arreglo y modifica cada elemento pasando una función(callback)
// El map siempre devuelve un arreglo nuevo

const nombresConAsterisco = languages.map(function(lenguaje) {
  return lenguaje + '*'
})

console.log('MAP', nombresConAsterisco)
console.log(languages)

// EJERCICIO: Análisis de compras
// Tienes un arreglo con los nombres de productos que un cliente compró en una tienda:

const compras = [
  "manzana",
  "pan",
  "leche",
  "manzana",
  "queso",
  "huevo",
  "pan",
  "jugo",
  "manzana"
];

// Resuelve lo siguiente:

// includes: Verifica si el cliente compró "queso".
console.log(compras.includes('queso')) // true
// filter: Crea un nuevo arreglo que contenga solo las manzanas que se compraron.
console.log(compras.filter(function(producto) {
  return producto === 'manzana'
}))
// map: Convierte cada producto en un arreglo que contenga: El nombre del producto y La cantidad de letras que tiene. Por ejemplo: "pan" → ["pan", 3]
console.log(compras.map(function(producto) {
  return [producto, producto.length]
}))
// reduce: Cuenta cuántos productos en total compró el cliente.
console.log()

// Método REDUCE, nos ayuda a tomar los valores de un arreglo y sumarlos.

const numeros = [3, 40, 100, 7, 50] // 200

let acumulador = 0

for(let i=0; i < numeros.length; i++) {
  console.log(i, numeros[i])
  acumulador = acumulador + numeros[i]
}

console.log(acumulador)

// Vamos a usar reduce

const sumatoria = numeros.reduce(
  function(acumulador, valorActual) {
    return acumulador + valorActual
  }, 0
)

console.log(sumatoria)

// Método SORT y TOSORTED, nos ayuda a ordenar un arreglo de elementos.
// SORT: ⚠ ⚠ ⚠ Mute el arreglo original. Ordena cadenas de texto.

// [...leguajesDeProgramacion]: esta sintáxis copia el arreglo original en un nuevo arreglo

const leguajesDeProgramacion =  ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

const copiaDeLenguajes = [...leguajesDeProgramacion]
const ordenandoLenguajes = copiaDeLenguajes.sort()

const ordenandoLanguajesMejorado = leguajesDeProgramacion.toSorted()

console.log(ordenandoLenguajes)
console.log(copiaDeLenguajes)
console.log(ordenandoLanguajesMejorado)
console.log(leguajesDeProgramacion)

const edades = [25, 12, 10, 89, 32, 81, 3]

console.log(edades.sort()) // [10, 12, 25, 3, 32, 81, 89]

const ordenandoEdadesAsc = [...edades].sort(
  function(a, b) {
    // Si el resultado es negativo -> a va antes que b
    // Si el resultado es positivo -> b va antes que a
    // Si es 0 -> son iguales -> ni a ni b se intercambian
    return a - b
  }
)

const ordenandoEdadesDesc = [...edades].sort(
  function(a, b) {
    return b - a
  }
)

console.log(ordenandoEdadesAsc)
console.log(ordenandoEdadesDesc)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningún retorno de datos

const miArreglo = []

languages.forEach(
  function(language, index) {
    console.log(index, language)
    if (index > 3) {
      miArreglo.push('hola--' + language)
    }
  }
)

console.log(miArreglo)

// TODO: Investigar los métodos indexOf, find, every, some, findIndex, flat

// EJERCICIO: Eliminar duplicados 
// Usando filter() + indexOf() nos quedamos solo con la primera aparición.
const nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis"];

// Resultado esperado: ["Ana", "Luis", "Pedro"]

// EJERCICIO: Validar si todos los correos contienen “@” y quedarte solo con los válidos

const correos = ["test@gmail.com", "infohotmail.com", "admin@outlook.com"];

// Resultado esperado: ["test@gmail.com", "admin@outlook.com"]

// EJERCICIO: Encontrar el primer número mayor a 100 y verificar si hay varios
// Combina: find + some + filter

const nums2 = [10, 55, 120, 80, 200];


// OBJETOS, Tipo de dato no primitivo

/*
  {
    key: value,
    key1: value1,
    key2: value2,
  }
*/

const miObjetoVacio = {} // 👁 Esto es un objeto

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'verde',
  edad: 39,
  esMayorDeEdad: true,
  coloresFavoritos: ['azúl', 'rojo', 'morado'],
  'mi edad': 44,
  cursos: [
    {
      nombre: 'Matemática',
      nota: 18
    }, {
      nombre: 'Algoritmos',
      nota: 14
    }
  ],
  devolverCursosAprobados: function () {
    return this.cursos.filter(function(curso) {
      return curso.nota > 14
    })
  }
}

console.log(miObjetoVacio)
console.log(miObjeto)

// Leer los campos de un objeto (notación de punto y de corchete)

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // 39

// console.log(miObjeto.mi edad) // BAD ❌ Uncaught SyntaxError: missing ) after argument list
console.log(miObjeto['mi edad']) // OK ✅ -> 44

console.log(miObjeto.coloresFavoritos) // ['azúl', 'rojo', 'morado']
console.log(miObjeto.coloresFavoritos[1]) // rojo

console.log(miObjeto.cursos)
console.log(miObjeto.cursos[1]) // {nombre: 'Algoritmos', nota: 14}
console.log(miObjeto.cursos[1].nombre) // Algoritmos
console.log(miObjeto.cursos[1].nota) // 14
console.log(miObjeto.cursos[1]['nota']) // 14

console.log(miObjeto.devolverCursosAprobados) // Nos devuelve la definición de la función
console.log(miObjeto.devolverCursosAprobados())

// ELIMINAR PROPIEDADES DE UN OBJETO

const copiaDeMiObjeto = {...miObjeto}

delete copiaDeMiObjeto.colorFavorito
delete copiaDeMiObjeto.cursos
delete copiaDeMiObjeto['mi edad']

console.log(copiaDeMiObjeto) // Si cambia por que hemos eliminado las propiedades en este objeto clonado
console.log(miObjeto) // Se mantiene igual por que es el arreglo original

// Otra forma de eliminar el valor de un objeto

copiaDeMiObjeto.esMayorDeEdad = undefined // Estamos marcando la propiedad como que ya no la vamos a usar

console.log(copiaDeMiObjeto)

// Insertar una nueva propiedad a un objeto

miObjeto.platilloFavorito = 'Ceviche de conchas negras'
miObjeto['juegos$favoritos'] = ['Crash Tean Racing', 'Mario', 'Minecraft']

console.log(miObjeto)

// TODO: Ejercicio - Manejos de las frutas

const frutas = [
  { nombre: "manzana", precio: 2, cantidad: 10 },
  { nombre: "banana", precio: 1, cantidad: 0 },
  { nombre: "naranja", precio: 1.5, cantidad: 5 },
  { nombre: "kiwi", precio: 3, cantidad: 2 },
  { nombre: "uva", precio: 2.5, cantidad: 20 }
]

// 1. includes → ¿tenemos "kiwi"?

// 2. map → obtener solo los precios

// 3. filter → frutas con stock disponible

// 4. reduce → calcular el valor total del inventario

// 5. every → ¿todas las frutas tienen precio mayor a 0?

// 6. some → ¿hay alguna fruta sin stock?