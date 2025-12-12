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





