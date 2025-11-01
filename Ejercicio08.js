const listaCompras= new Map([
  ["pan", 1.50],
  ["leche", 4.00],
  ["queso", 16.50],
  ["huevos", 11.50],
  ["manzana", 0.75]
]);
let suma=0;
for (let precio of listaCompras.values()) {
    suma+=precio;
}
console.log("El  precio total de la lista es S/"+suma);