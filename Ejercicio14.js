function gestionarEmpleados(empleados) {
    const mapaAreas = new Map();
    for (let emp of empleados) {
        const { nombre, area, salario } = emp;
        if (!mapaAreas.has(area)) {
            mapaAreas.set(area, { empleados: [], totalSalario: 0 });
        }
        const datos = mapaAreas.get(area);
        datos.empleados.push(nombre);
        datos.totalSalario += salario;
    }
    const resultado = {};
    for (let [area, datos] of mapaAreas.entries()) {
        const promedio = datos.totalSalario / datos.empleados.length;
        resultado[area] = {
            empleados: datos.empleados,
            promedio: promedio
        };
    }
    return resultado;
}
const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];
console.log(gestionarEmpleados(listaEmpleados));
