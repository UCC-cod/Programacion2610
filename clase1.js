/*
Variables: let, var, const
-let: varieble de bloque, se puede reasignar
-var: variable global, se puede reasignar
-const: variable de bloque, no se puede reasignar

Nombre de variables:
- camelCase edadEstudiante
- descrptivas
- espacios
- no piede empezar con numero
- sensible a mayusculas
- no usar palabras reservadas

*/

console.log("Variables");
let contador = 0;
contador = contador + 1;
contador += 1;
//console.log(contador);

console.log("el contador es: ", contador);

//literales
let nombre = "Simon";
let edad = 18;
const mensaje = `me llamo ${nombre} y tengo ${edad} años`;
console.log(mensaje);

//diferencia entre let y var en ambito de bloque
if (true) {

    let x = "let-bloque";
    var y = "var-funcion";

    //console.log("Dentro del if: ");
    //console.log(x);
    //console.log(y);

}

//console.log("Fuera del if: ");
//console.log(x); //error
//console.log(y); //no error

/*
tipos de datos:
- primitivos: number, string, boolean, null, undefined, symbol
- referencia: object, array, function
- typeof - funcion para saber el tipo de dato
- NaN - not a number
*/ 

console.log("Tipos de datos:");

console.log(typeof 42); //number
console.log(typeof "hola"); //string
console.log(typeof true); //boolean
console.log(typeof null); //object (error de js)
console.log(typeof undefined); //undefined
console.log(typeof Symbol('id')); //symbol
console.log(typeof 10n); //bigint
console.log(typeof {a: 1}); //object
console.log(typeof [1, 2, 3]); //object (array)
console.log(typeof function() {}); //function

const operacion = "hola"*3;
console.log(operacion); //NaN
console.log(typeof operacion); //number

const suma = "hola" + 3;
console.log(suma); //concatenar
console.log(typeof suma); //string

//conversion de tipos

const numero = "123";
console.log(typeof numero); //string
console.log(typeof Number(numero)); //number

const binario = "true";
console.log(typeof binario); //string
console.log(typeof Boolean(binario)); //boolean

const texto = 456;
console.log(typeof texto); //number
console.log(typeof String(texto)); //string

//comparaciones y operadores logicos

console.log("Comparaciones y operadores logicos:");
/*
operadores aritmeticos: +, -, *, /, %, **
operadores de comparacion: ==, ===, !=, !==, >, <, >=, <=
operadores logicos: &&, ||, !
*/

// aritmeticos

console.log(5 + 3); //8
console.log(5 - 3); //2
console.log(5 * 3); //15
console.log(5 / 2); //2.5
console.log(5 % 2); //1
console.log(5 ** 2); //25
console.log(5 == '5'); //true
console.log(5 === '5'); //false
console.log(5 != '5'); //false
console.log(5 !== '5'); //true
console.log(5 > 3); //true
console.log(5 < 3); //false
console.log(5 >= 5); //true
console.log(5 <= 3); //false
console.log(true && false); //false
console.log(true || false); //true
console.log(!true); //false

//comparacion

let valor1 = 10;
let valor2 = '10';

console.log(valor1 == valor2); //true
console.log(valor1 === valor2); //false
console.log(valor1 != valor2); //false
console.log(valor1 !== valor2); //true
console.log(valor1 > valor2); //false
console.log(valor1 < valor2); //false
console.log(valor1 >= valor2); //true
console.log(valor1 <= valor2); //true

//logicos

const isAdmin = true;
const isTeacher = false;

console.log(isAdmin && isTeacher); //false
console.log(isAdmin || isTeacher); //true
console.log(!isAdmin); //false

//ternario

const nota = 3.5;
const estado = (nota >= 3.0) ? "Aprobado" : "Reprobado";
console.log("ternario: ", estado);

//funciones en js

console.log("Funciones:");

//declaracion y retorno

function sumar(x, y=0){ //se le puede agregar un valor por defecto
    return x + y;
}

let sum1 = sumar(5, 3); 
console.log("suma: ", sum1);

//---------------------------------------------

const restar = function(x, y){ //se le puede agregar un valor por defecto
    return x - y;
}

console.log("resta: ", restar(10, 4));

//---------------------------------------------

const multiplicar = (x, y) => x * y; //se le puede agregar un valor por defecto

console.log("multiplicacion: ", multiplicar(4, 6));

//---------------------------------------------

const saludar = nombre => `Hola, ${nombre}!`;

console.log(saludar("Simon"));