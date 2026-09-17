// funciones ----------------------------------------------------

/* function saludar (nombre = "Carlos") {
    return `Hola mi nombre es ${nombre}`;
}

console.log(saludar("Javier"));
console.log(saludar()); */

// Clases ----------------------------------------------------

class Inventario {
    constructor (nom) {
        this.nombre = nom;
        this.articulos = [];
    };

    getNombre () {
        return this.nombre;
    };
    
    add (articulo, cantidad) {
        this.articulos[articulo] = cantidad;
    };
    
    cantidad (articulo) {
        return this.articulos[articulo];
    };
};

let libros = new Inventario('libros');
console.log(libros.getNombre());
libros.add("Aprendiendo JS", 5);
console.log(libros.cantidad("Aprendiendo JS"));

// Arrays y metodos -----------------------------------------

