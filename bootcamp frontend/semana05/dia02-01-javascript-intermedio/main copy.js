// ejercicios

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





// TODO: Ejercicio con objetos- Manejos de las frutas

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
