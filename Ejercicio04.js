function filtrarYTransformar (arr) {
    let sinNegativos = arr.filter(x => x>0);
    let suma=0;
    for ( n of sinNegativos) {
        suma+=n**2;
    }
    return suma;
}
console.log(filtrarYTransformar([-5,7,3,1,2,-8]));