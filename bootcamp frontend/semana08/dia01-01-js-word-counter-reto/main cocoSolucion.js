// Seleccionamos los elementos del DOM
const textarea = document.querySelector('textarea');
const stats = document.querySelectorAll('.text-3xl');


// Asignamos nombres claros a los spans de los contadores
const charCount = stats[1]; // El primero después del título
const wordCount = stats[2];
const paragraphCount = stats[3];


textarea.addEventListener('input', () => {
  const text = textarea.value.trim();

  // 1. Contar Caracteres (incluyendo espacios)
  charCount.textContent = textarea.value.length;

  // 2. Contar Palabras
  // Filtramos espacios vacíos para evitar que cuente espacios de más como palabras
  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = words.length;


  // 3. Contar Párrafos
  // Un párrafo se define generalmente por un salto de línea (\n)
  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
  paragraphCount.textContent = paragraphs.length;
});