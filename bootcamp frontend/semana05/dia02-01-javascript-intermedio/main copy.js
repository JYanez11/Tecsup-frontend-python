/// 8. Número más repetido
// Dado un arreglo de números, encuentra cuál aparece más veces.
// 👉 Pista: usa un contador para cada número.




const numerosAarreglar = [1,2,3,3,3,3,4,4,5];

function numeroMasRepetidoCORREGIDO(numerosARevisar) {
    // Usa un objeto para mapear números (claves) a sus frecuencias (valores)
    const frecuencias = {};
    let masRepetido;
    let maxFrecuencia = 0;

    // 1. Contar frecuencias
    for (let i = 0; i < numerosARevisar.length; i++) { // CORRECCIÓN: Sintaxis del for
        const numero = numerosARevisar[i]; // El número actual
        
        // CORRECCIÓN: Uso eficiente de mapa
        frecuencias[numero] = (frecuencias[numero] || 0) + 1;

        // 2. Comprobar si la frecuencia actual es el máximo
        if (frecuencias[numero] > maxFrecuencia) {
            maxFrecuencia = frecuencias[numero];
            masRepetido = numero;
        }
    }
    
    // El resultado final que encontramos mientras contábamos
    return masRepetido; 
}

console.log(`El número más repetido (corregido) es: ${numeroMasRepetidoCORREGIDO(numerosAarreglar)}`);





