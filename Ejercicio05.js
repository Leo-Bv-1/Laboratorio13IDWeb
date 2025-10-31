function reordenarPalabras (oracion) {
    let palabras=oracion.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].toUpperCase();
    }
    for (let i = 0; i < palabras.length - 1; i++) {
    let min = i; // índice de la palabra menor
    for (let j = i + 1; j < palabras.length; j++) {
      if (palabras[j] < palabras[min]) {
        min = j;
      }
    }
    // Intercambiar posiciones si es necesario
    if (min !== i) {
      let temp = palabras[i];
      palabras[i] = palabras[min];
      palabras[min] = temp;
    }
  }
}