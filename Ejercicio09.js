function contarPalabras(texto) {
    const palabras = texto.toLowerCase().split(" ");
    const contador =new Map();
    for (let palabra of palabras) {
        if (contador.has(palabra)) {
            contador.set(palabra, contador.get(palabra)+1);
        } else {
            contador.set(palabra,1);
        }
    }
    return contador;
}
console.log(contarPalabras("sol luna sol sol estrella luna"));