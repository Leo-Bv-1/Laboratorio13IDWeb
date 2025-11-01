function tieneDuplicado (arr) {
    let sinDuplicados=new Set(arr);
    return arr.length !== sinDuplicados.size;
}
console.log(tieneDuplicado(["sol", "luna", "estrella", "planeta", "sol"]));