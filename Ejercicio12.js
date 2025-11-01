function contarLetras(texto) {
    let sinMayusculas=texto.toLowerCase();
    const conteo={};
    for (let letra of sinMayusculas) {
        if (letra !== " ") { 
            if (conteo[letra] === undefined) {
                conteo[letra] = 1;
            } else {
                conteo[letra] = conteo[letra] + 1;
            }
        }
    }
    return conteo;
}
console.log(contarLetras("auto")); 