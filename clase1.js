/*
Variables: let, var, const
- let: Variable de bloque - reasignar
- Const: Variable de bloque - no reasignable
- Var: Ambito de funcion - No

Nombre de las variables
- CamelCase edadEstudiantes
- descriptivas
- No espacios
- No numeros al inicio
- Sensibles a Mayusculas
- No usar caracteres especiales 
- No usar palabras reservadas

*/

console.log("Variables")

let contador = 0;
//0
contador = contador + 1;
//1
contador += 1;
//2
console.log("El contador es :", contador)

//Literales
let nombre = "Arturo";
let edad = 18;
const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años`
console.log(mensaje);

//Diferencia entre let y var en ambito de bloque
if(true){
    let x = "let-bloque";
    var y = "Var-funcion";
}  
    //console.log("Dentro del if");
    //console.log(x);
    //console.log(y);
/*
Tipos de datos
- Primitivos: numbre, string, boolean, null, undefined, bigint, symbol
- Referencia: Object (arrays, funciones)
- typeof - Funcion para saber el tipo de dato
-NaN : not a number
*/
console.log("2. Tipos de datos")

console.log(typeof 18); //number
console.log(typeof "18"); //String
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //objeto
console.log(typeof Symbol('id')); // symbol
console.log(typeof 10n); //bigint
console.log(typeof {a: 1}); //Objeto 
console.log(typeof [1, 2]); //Objeto
console.log(typeof function(){}); //Funcion

const operacion = "hola"*3;
console.log(operacion); //NaN
console.log(typeof operacion); //Number
const suma = "hola" + 3;
console.log(suma); //Concatenar
console.log(typeof suma); //String


//Conversion

const numero = "123";
console.log(typeof numero);
console.log(typeof Number(numero));

const binario = "true";
console.log(typeof binario);
console.log(typeof Boolean(binario)); //Convertir a boolean

const numero2 = 123;
console.log(typeof String(numero2)); //Convierto a String

console.log("3. Operadores");
/*
Operadores Aritmeticos
+ - * / %
*/

console.log(2+3*4); //14
console.log((2+3)*4); //20
console.log(10%3); //1
console.log(2**5); //potencia 2 elevado a la 5 = 32

//Comparacion
let valor1= 5;
let valor2= "5";

console.log(valor1==valor2); //True
console.log(valor1===valor2); // False comparacion estricta
console.log(valor1!==valor2); // True comparacion estricta
console.log(valor1!=valor2); //False

//Operadores Logicos
console.log("Operadores")
const isAdmin = true;
const isTeacher = false; 

console.log(isAdmin || isTeacher); //True operador or
console.log(isAdmin && isTeacher); //False operador and
console.log(isAdmin); //false operador not

//Ternario
const nota = 3.5;
const estado = nota >=3.0 ? "Aprobado" : "Reprobado";
console.log("Ternario:", estado);

//Funciones de Javascript

console.log("4. Funciones");

//Declaracion y retorno 

function sumar(x,y= 0){
    return x + y;
}

let sum1 = sumar(4, 5);
console.log(sum1);

//Expresion de funcion 
const restar = function(x,y){
    return x-y;
}

console.log("Resultado de restar", restar(4,3));

//Flecha - Retorno implicito
const multiplicar = (x,y) => x*y;

console.log("Resultado Arrow Function: ", multiplicar(2,5));

const saludar = nombre => `Hola ${nombre}`
console.log(saludar("Arturo"));