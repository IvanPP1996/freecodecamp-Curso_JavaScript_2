// funciones ----------------------------------------------------

/* function saludar (nombre = "Carlos") {
    return `Hola mi nombre es ${nombre}`;
}

console.log(saludar("Javier"));
console.log(saludar()); */

// Clases ----------------------------------------------------

/* class Inventario {
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
console.log(libros.cantidad("Aprendiendo JS")); */

// Arrays y metodos -----------------------------------------

/* const post = [
    {
        id: 1,
        title: "Mi primer post",
        tags: ["JavaScript", "Webdevelopment"]
    },
    {
        id: 2,
        title: "Mi experiencia con REACT",
        image: "imagen 2",
        tags: ["JavaScript", "Webdevelopment", "React"]
    },
    {
        id: 3,
        title: "Por qué deje Angular",
        image: "imagen 3",
        tags: ["JavaScript", "Webdevelopment", "Angular"]
    }
];

//Buscar un elemento en el array con post devolviendo toas las carateristicas del objeto
console.log(post.find(post => post.title == "Por qué deje Angular"));

// Devuelve true o false si existe o no
console.log(post.some(post => post.id === 1)); // true
console.log(post.some(post => post.id === 7)); // false
console.log(post.some(post => post.tags.includes("React"))); // true
console.log(post.every(post => post.tags.includes("React"))); // devuelve false porque no todos tienen "React"
console.log(post.every(post => post.tags.includes("JavaScript"))); // devuelve true porque todos tienen "JavaScript"

// Para devolver un arreglo con los datos de la variable seleccionada del arreglo
console.log(post.map(post => post.title));
// Para devolver un arreglo con los objetos de la variable seleccionada del arreglo
console.log(JSON.stringify(post.filter(post => post.tags.includes("Angular"))));
console.log(JSON.stringify(post.filter(post => post.tags.includes("Angular"))));

// Para devolver un arreglo deacuerdo a la opción elegida con todos sus datos incluso si estan repetidos
console.log(JSON.stringify(
    post.reduce((alltags, post) => {
        return [...alltags, ...post.tags];
    }, [])
));

// Para devolver un arreglo deacuerdo a la opción elegida con todos sus datos y si estan repetidos no los tiene en cuenta
console.log(JSON.stringify(
    post.reduce((alltags, post) => {
        return  Array.from(new Set([...alltags, ...post.tags]));
    }, [])
)); */

// Objeto this --------------------------------------------

var obj = {
    foo: function () {return "foo"},
    bar: function () {
        document.addEventListener("click", Event => this.foo())
    }
};