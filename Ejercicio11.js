const auto = {
    marca: "Volskwagen",
    modelo: "Gol",
    año: 2020,
    detalles() {
        console.log("Detalles del auto:\n"+
            "Marca: "+this.marca+
            "\nModelo: "+this.modelo+
            "\nAño: "+this.año);
    }
}
auto.detalles();