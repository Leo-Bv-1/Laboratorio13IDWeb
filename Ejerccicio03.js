function doblarNumeros (arr) {
    let duplicado = [];
    for (let n of arr) {
        duplicado.push(n*2);
    }
    return duplicado;
}
console.log(doblarNumeros([1,2,3,4,5]));