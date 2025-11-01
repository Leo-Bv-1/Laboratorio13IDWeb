function invertirMap (map) {
    const invertido =new Map();
    for (let [clave, valor] of map) {
        invertido.set(valor,clave);
    }
    return invertido;
}
let capitales = new Map([
 ["Perú", "Lima"],
 ["Chile", "Santiago"]
]);
invertirMap(capitales); 