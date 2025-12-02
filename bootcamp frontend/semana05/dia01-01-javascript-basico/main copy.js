

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// Salida: La suma de sus cifras elevada al cubo (13³): 2197

const numero = 841;

// 1. Extraer las cifras
const unidades = numero % 10;
const decenas = Math.floor(numero / 10) % 10;
const centenas = Math.floor(numero / 100);

// 2. Calcular la suma
const sumaCifras = centenas + decenas + unidades;

// 3. Elevar la suma al cubo
const resultado = sumaCifras ** 3;

// Mostrar el resultado
console.log(`El número es: ${numero}`);
console.log(`La suma de sus cifras (${centenas} + ${decenas} + ${unidades}) es: ${sumaCifras}`);
console.log(`La suma de sus cifras elevada al cubo (${sumaCifras}³): ${resultado}`);


// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

// --- Monto y Porcentajes ---
const montoTotal = 5000;

const porcentajeSocioA = 0.30; // 30%
const porcentajeSocioB = 0.20; // 20%
const porcentajeSocioC = 0.60; // 60%

// --- Cálculos ---
const parteSocioA = montoTotal * porcentajeSocioA;
const parteSocioB = montoTotal * porcentajeSocioB;
const parteSocioC = montoTotal * porcentajeSocioC;

const totalDistribuido = parteSocioA + parteSocioB + parteSocioC;

// --- Muestra de Resultados ---
console.log(`Monto Total: $${montoTotal.toFixed(2)}`);
console.log('--- Distribución ---');

console.log(`Socio A (30%): $${parteSocioA.toFixed(2)}`); // 5000 * 0.30 = 1500
console.log(`Socio B (20%): $${parteSocioB.toFixed(2)}`); // 5000 * 0.20 = 1000
console.log(`Socio C (60%): $${parteSocioC.toFixed(2)}`); // 5000 * 0.60 = 3000

console.log('--- Verificación ---');
console.log(`Total Distribuido (Suma de las partes): $${totalDistribuido.toFixed(2)}`);
// Salida: $5500.00 (el 110% del monto total)

if (totalDistribuido > montoTotal) {
    console.warn('¡Advertencia! El total distribuido ($5500) es mayor que el monto total ($5000). Los porcentajes suman más del 100%.');
}

// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const edadPersona = 39

if (edadPersona >= 18) {
  console.log('EJERCICIO 1', 'Mayor de edad')
} else {
  console.log('EJERCICIO 1', 'Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1

// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
