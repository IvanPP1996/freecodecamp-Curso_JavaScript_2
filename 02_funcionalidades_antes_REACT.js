// Funcionalidad 1 ------------------------------------------------------------------
// Template literals

/* let nombre = "Carlos";
let apellido = "Azustre"

console.log(`${nombre} ${apellido}`); */

// Funcionalidad 2 ------------------------------------------------------------------
// Acortadores de nombres

/* let nombre = "Carlos";
let edad = 36;
let red_social = "htttps://X.com/carlosazaustre";

const persona = {
    nombre,
    edad,
    red_social
};

console.log(persona); */

// Funcionalidad 3 ------------------------------------------------------------------
// Arrow functions (Funciones flechas)

/* const funcionFlecha = () => "Hola";

console.log(funcionFlecha()); */

// Funcionalidad 4 ------------------------------------------------------------------
// Destruturing (destructurar objetos)

/* const cuadrado = {
    x: 10,
    y: 10
};

function calcularArea({x, y}) {
    return x * y;
};

console.log(calcularArea(cuadrado)); */

// Funcionalidad 5 ------------------------------------------------------------------
// Parametros por defecto

/* function suma (a = 0, b = 0) {
    return a + b;
};

console.log(suma()); */

// Funcionalidad 6 ------------------------------------------------------------------
// Spread operator o parametros rest

/* const array = [1, 2, 3, 4, 5];
const array_1 = [6, 7, 8, 9, 10];

const nuevoArray = [...array, ...array_1];
console.log(JSON.stringify(nuevoArray));


const obj_1 = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e"
};
const obj_2 = {
    f: "f",
    g: "g",
    h: "h",
    i: "i",
    j: "j"
};

const obj_unido = {...obj_1,  ...obj_2};
console.log(obj_unido); */

// Funcionalidad 7 ------------------------------------------------------------------
// modulos 

/* import { suma, otraOperacion } from "./modulo_suma.js";
import  {resta} from "./modulo_resta.js";

function calcuadora () {
    return `${suma(5,3)} \n${resta(5,3)}`;
};

console.log(calcuadora()); */


// Funcionalidad 8 ------------------------------------------------------------------
// Operadores ternarios 

/* const coche = {
    marca: "tesla",
    modelo: "Cybertruck"
};

// Si la propiedad modelo no esta entonces pone la "X"
let modelo = coche.modelo ? coche["modelo"] : "X";
console.log(modelo); */

// Funcionalidad 9 ------------------------------------------------------------------
// promise y async await


/* function suma(a, b) {
    a = a ?? 0
    b = b ?? 0

    return a + b
};

console.log(suma(4, 4)); */
