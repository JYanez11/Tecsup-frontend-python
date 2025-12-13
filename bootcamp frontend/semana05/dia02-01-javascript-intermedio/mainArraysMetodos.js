

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

const nombresConAsterisco = languages.map(function(yyy) {
  return yyy + '*coco*'
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




console.log('copia original', copiaDeLenguajes)
console.log('nuevo de copia con sort', ordenandoLenguajes)

console.log("original", leguajesDeProgramacion)
console.log('nuevo de original con tosort', ordenandoLanguajesMejorado)



// ejemplo con numeros, los consider por codigo ascii


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





// ejercicios

// EJERCICIO: Eliminar duplicados 
// Usando filter() + indexOf() nos quedamos solo con la primera aparición.
const nombres = ["Ana", "Luis", "Ana", "Pedro", "Luis"];


// Usamos filter() para crear un nuevo array sin duplicados
const nombresSinDuplicados = nombres.filter((valor, index, array) => {
  // La condición es: el índice actual (index) debe ser igual
  // al índice de la primera aparición del valor (array.indexOf(valor))
  return array.indexOf(valor) === index;
});

console.log(nombresSinDuplicados); // Salida: ["Ana", "Luis", "Pedro"]
// Resultado esperado: ["Ana", "Luis", "Pedro"]




// EJERCICIO: Validar si todos los correos contienen “@” y quedarte solo con los válidos

const correos = ["test@gmail.com", "infohotmail.com", "admin@outlook.com"];

// Usamos filter() para crear un nuevo array
const correosValidos = correos.filter((correo) => {
  // La condición de filtro: verificar si el string 'correo' incluye el símbolo "@"
  return correo.includes("@");
});

console.log(correosValidos);
// Salida esperada: ["test@gmail.com", "admin@outlook.com"]



// EJERCICIO: Encontrar el primer número mayor a 100 y verificar si hay varios
// Combina: find + some + filter

const nums2 = [10, 55, 120, 80, 200];

const limite = 100;

const primerMayorA100 = nums2.find((numero) => {
  return numero > limite;
});


console.log(`1. Primer número mayor a ${limite}: ${primerMayorA100}`);
// Salida: 1. Primer número mayor a 100: 120






