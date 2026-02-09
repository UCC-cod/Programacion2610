/*
Variable: let, var, const 
-let: variable de bloque - reasignar
- const: variable de bloque - no reasignable
- var: ambito de funcion - No 

Nombre de las variables
- camelCase edadEstudiante
- Descriptivas
- Espacios 
- No puede empezar con numeros
- Sensibles a mayusculas
- No usar caracteres especiales
- No usa palabras reservadas   

*/

console.log("1. variables");

let contador = 0;
//0
contador = contador + 1
//1
contador += 1;
//2
console.log("El contador es:", contador);

//Literales
let nombre = "adriana";
let edad = 38;
const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años`;
console.log(mensaje);

//Diferencia entre let y var en ambito de bloque 
if(true){
    let x = "let-bloque";
    var y = "var-funcion";

    console.log("Dentro del if");
    console.log(x);
    console.log(y);
}
//console.log("Por fuera del if");
//console.log(x);
//console.log(y);

/*
Tipos de datos 
- Primitivos: number, string, boolean, null, undefined, bigint, symbol 
- Referencia: Object(arrays, funciones)}
- typeof - funcion para saber el tipo de dato
- NaN : not a number
*/
console.log("2. Tipos de datos");

console.log(typeof 42); //number
console.log(typeof "42"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //objeto
console.log(typeof Symbol(`id`)); //symbol
console.log(typeof 10n); //bigint
console.log(typeof {a: 1}); //objeto
console.log(typeof [1, 2]); //objeto
console.log(typeof function (){}); //funcion

const operacion = "hola"*3;
console.log(operacion); //NaN
console.log(typeof operacion); //number
const suma = "hola" + 3;
console.log(suma); //concatenar
console.log(typeof suma); //string


// Conversion

const numero = "123";
console.log(typeof numero);
console.log(typeof Number(numero));// Number es una funcion

const binario = "true";
console.log(typeof binario);
console.log(typeof Boolean(binario));// Convierto a binario

const numero2 = 123;
console.log(typeof String(numero2));// Convierto a String

console.log("3. Operadores");
/*
Operadores Aritmeticos 
+ - * / %
*/
 
console.log(2+3*4);//14
console.log((2+3)*4);//20
console.log(10%3);//1
console.log(2**5);//potencia 2 elevado a la 5 = 32

//Comparacion
let valor1 = 5;
let valor2 = "5";

console.log(valor1==valor2);// true compara los valores 
console.log(valor1==valor2);// false comparacion estricta compara
console.log(valor1!==valor2);//true comparacion estricta 
console.log(valor1!=valor2);//false


// Operadores logicos
console.log("Operadores");
 
const isAdmin = true; 
const isTeacher = false;

console.log(isAdmin || isTeacher);//true operador or 
console.log(isAdmin && isTeacher);//false operador and
console.log(isAdmin);//false operador not 

//Ternario 
const nota = 3.5
const estado = nota >= 3.0 ? "Aprobado" : "Reprobado";
console.log("Ternario", estado);

//Funcion en Javascript

console.log("4.Funciones");

// Declaracion y retorno

function sumar(x,y){
    return x + y;
}

let sum1 = sumar(4);
console.log(sum1);

//Expresion de funcion 
const restar = function (x,y){
    return x-y;
}

console.log("Resultado de restar", restar(4, 3));

//Flecha - Retorno implicito 
const multiplicar = (x,y) => x*y;
const multiplicar2 = (x, y) => {
    x*y
}

console.log("Resultado de arrow fuction", multiplicar(2, 5));

const saludar = (nombre) => `Hola${nombre}`;
console.log(saludar("Tiven"));




























