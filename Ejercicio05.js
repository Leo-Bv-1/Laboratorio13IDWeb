function reordenarPalabras (arr) {
    let palabras=arr.split(" ");
    for (let i=0;i<palabras.length;i++) {
        palabras[i]=palabras[i].toUpperCase();
    }
    for(let i=0;i<palabras.length-1;i++) {
        let min=i;
        for(let j=i+1;j<palabras.length;j++) {
            if (palabras[j] < palabras[min]) {
                min=j;
            }
        }
        if (min !== i) {
            let temp=palabras[i];
            palabras[i]=palabras[min];
            palabras[min]=temp;
        }
    }
    return palabras;
}
console.log(reordenarPalabras("sol luna estrella planeta"));