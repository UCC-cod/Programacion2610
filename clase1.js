/*
variables: let, var, const
-let: variable de bloque - reasignar 
-const: constante de bloque - no reasignar 
-var: ambito de funcion - No 

Nombre de la variables 
-camelCase edadEstudiantes 
-descriptivas
-espacios 
-mop puede llevar numeros al inicio 
-sensibles a mayusculas 
-no usar caraceteres especiales 
-no usar palabras reservadas
-si el proyecto es en ingles, tiene que ser todo en ingles y tratar de usar comentarios 

*/

console.log("1. varibales");
let contador = 0;
//o
contador = contador + 1;
//1 
contador += 1;
//2
console.log("el contador es:", contador);

//literales
let nombre = "Juan";
edad = 30;
const mensaje = `hola me llamo ${nombre} y tengo ${edad} años`;
console.log(mensaje);
//direferencia entre led y var en ambito de bloque 
if (true) {
    let x = "let en bloque";
    var y = "var en funcion ";

    console .log ("dentro del bloque");

    console.log(x);
    console.log(y);
}
//let x = "por fuerea del if";
//console.log(x);
//console.log(y);

/* tipos de datos
-primitivos: number, boolean, null, undefined, symbol
-referencia: objetos, arrays, funciones
-typeof: para saber el tipo de dato
-dinamico:no es necesario definir el tipo de dato
-nah: not a number 
*/
console.log("2. tipos de datos");
console .log (typeof 42); //number
console .log (typeof "42"); //string
console .log (typeof true); //boolean
console .log (typeof undefined); //undefined
console .log (typeof null); //object
console .log (typeof Symbol(`id`)); //symbol
console .log (typeof 10n); //bigint
console .log (typeof {a: 1 })//object
console .log (typeof [1, 2, ]);//object
console .log (typeof function () {});//function|

const operacion =  "hola" * 3;
console .log (operacion);
console .log (typeof operacion); //number 
const suma ="5" + 3;
console .log (suma); //concatenar 
console .log (typeof suma); //string

//conversion 
const numero = "123";
console .log (typeof numero);
conmsole .log (Number (numero)); //number es una funcion 

const binario = "true";
console .log (typeof binario);
console .log (Boolean (binario)); //convierto a boolean

const numero2 = 123;
console .log (typeof string(numero2)); //convierto a string 

console .log ("3. operadores");
/*operadores aritmeticos
 + - * / % 
*/

console .log (2+3*4);//14
console .log ((2+3)*4);//20
console .log (10 % 3);//1
console .log (10%3);//1
console .log (2**5);//potencia 32 elevado a la 5 

//comparacion
let valor1 = 5;
let valor2 = "5";
console .log (valor1 == valor2); //true solo compara el valor
console .log (valor1 === valor2); //false compara valor y tipo de dato
console .log (valor1 != valor2); //True compracion escrita 
console .log (valor1 !== valor2); //false 

//operadores logicos && || !
const isAdmin = true;
const isTeacher = false;

console .log (isAdmin && isTeacher); //true operador OR
console .log (isAdmin || isTeacher); //false operador AND
console .log (!isAdmin); //false operador NOT

//ternario
const nota = 3.5;
const estado = nota >= 3.0 ? "Aprobado" : "Reprobado";
console .log ("ternario:",estado);

//funciones de javaScript
console .log ("4. funciones");
//declaracion y retorno de funciones 
function sumar (x,y){
    return x + y;
}
let sum1 = sumar (4,5);
console .log ("suma:", sum1);

// expresion de funcion 

const multiplicar = (x=1, y=1) => x * y;
console .log ("resultado arrow fuction multiplicar :", multiplicar (2,5));
const saludar = nombre => `hola ${nombre}`;
console .log (saludar ("Ana"));

