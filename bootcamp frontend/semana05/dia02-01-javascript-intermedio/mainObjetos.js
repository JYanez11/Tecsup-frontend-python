


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




// TODO: Ejercicio con objetos- Manejos de las frutas

const frutas = [
  { nombre: "manzana", precio: 2, cantidad: 10 },
  { nombre: "banana", precio: 1, cantidad: 0 },
  { nombre: "naranja", precio: 1.5, cantidad: 5 },
  { nombre: "kiwi", precio: 3, cantidad: 2 },
  { nombre: "uva", precio: 2.5, cantidad: 20 }
]



// 1. includes → ¿tenemos "kiwi"?
// 1. Mapea el array de objetos para obtener solo los nombres (cadenas).

// forma simplificada
// const nombresDeFrutas = frutas.map(fruta => fruta.nombre);
// console.log(nombresDeFrutas)

const nombresDeFrutas = frutas.map(function(fruta) {
    // Solo retornamos el nombre de la fruta actual
    return fruta.nombre;
});
  console.log(nombresDeFrutas)

// 2. Usa includes() en el array de cadenas.
const tenemosKiwi = nombresDeFrutas.includes("kiwi");

console.log(`¿Tenemos kiwi? ${tenemosKiwi}`); 
// Salida: ¿Tenemos kiwi? true





// 2. map → obtener solo los precios

const listaPrecios = frutas.map (function (a) {
  return a.precio
})

console.log(listaPrecios)




// 3. filter → frutas con stock disponible

const frutasDisponibles = frutas.filter(function (fruta) {
  // La condición debe ser: ¿la cantidad de la fruta actual es mayor que 0?
  return fruta.cantidad > 0; 
});

console.log(frutasDisponibles);



// 4. reduce → calcular el valor total del inventario


const valorInventario = frutas.reduce(
  function (acumulador, xxx) {
    // 1. Calcula el valor total de la fruta actual: precio * cantidad
    const valorDeLaFruta = xxx.precio * xxx.cantidad; 
    
    // 2. Suma este valor al acumulador (el total parcial)
    return acumulador + valorDeLaFruta; 
  }, 
  0 // El 0 es el valor inicial del acumulador
);

console.log(valorInventario);



// 5. every → ¿todas las frutas tienen precio mayor a 0?

const todasLasFrutasTienenPrecioMAyorCero = frutas.every (
  function (frutaxx) {
    return frutaxx.precio > 0 
  }

)

console.log (todasLasFrutasTienenPrecioMAyorCero
)

// 6. some → ¿hay alguna fruta sin stock?

const hayFrutaSinStock = frutas.some (
  function (frutaxx) {
    return frutaxx.cantidad > 0 
  }

)

console.log (hayFrutaSinStock
)
