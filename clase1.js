/*
variables : let, var, const
-let; variable de bloque - reasignar
-const; constante de bloque - no reasignar
-var; ambito de funcion - no

nombre de la variable
-camelcase edadestudiantes
}-descriptivas
-espacios
mop puede llevar numeros al Inicio 
-sensibles a mayusculas 
-no usar caracteres especiales 
-no usar palabras reservadas 
-si el proyecto es en ingles que sea todo en ingles y tratar de usar comentarios 

*/

console.log(variable);
let contador = 0;
//0
contador = contador +1;
//1
contador += 1;
//2
console.log ("el contador es ",contador)

//literales
let nombre = "juan"
edad = 30;
const mensaje = `hola me llamo ${nombre} y tengo ${edad} años`;
console.log(mensaje); 
// diferencia en tre led y var en ambito de bloque 
if (true){
    let x = "let en bloque";
    var y = "var en bloque";

    console.log(x);
    console.log(y);
}
//let = "por fuera del if"
//console.log(x);
//console.log(y);

/* tipos de datos 
-primitivos, number, null, underfined, symbol
-referencia, objetos, arrays, funciones
-typeof; para saber el tipo de dato
-dinamico; no es necesario definir el tipo de dato
-nah; not a number
*/
console.log("tipos de datos");
console . log(typeof 42); // number
console . log(typeof "42"); // string
console . log(typeof true); // boolean
console . log(typeof undefined); // undefined
console . log(typeof null); // object
console . log(typeof Symbol("id")); // symbol
console . log(typeof 10n); // bigint
console . log(typeof {a: 1}); // object
console . log(typeof [1, 2, ]); // object
console . log(typeof function() {}); // function

//conversion
const numero = "123";
console .log(typeof numero);
console .log (Number (numero)); //convierto en boolean 

const binario = "true";
console.log(typeof binario);
console . log (Boolean (binario)); //convierto boolean

const numero2 = 123;
console . log (typeof String(numero2)); //convierto en string

console .log ("3, operadores");

/*operadores aritmeticos
 + - * / %
*/


console . log (2+3*4); //14
console . log ((2+3)*4); //20
console . log (10 % 3); //1
console . log (10%3); //1
console . log (2**5);// potencia 32 elevado a la 5

//comparacion
let valor1 = 5;
let valor2 = "5";
console . log (valor1 == valor2); //true solo compara valor
console . log (valor1 === valor2); //false compara valor y tipo de dato
console . log (valor1 != valor2); // true comparacion escrita
console . log (valor1 !== valor2); // false

//operadores logicos && || !
const isAdmiN  = true;
const isTeacher = false;

console . log (isAdmiN && isteacher); // true operador OR
console . log (isAdmiN || isteacher); // false operador AND
console . log (!isAdmiN); // false operador NOT

//ternario
const nota = 3.5;
const estado = (nota >= 3.0) ? "aprobado" : "reprobado";
console . log ("tenario ", estado);
consol




