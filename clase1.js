/*
Variables: let, var, const 
- let: variable de bloque - reasignar 
- Cosnt: Variable de bloque - No reasignable 
- Var :  Ambito de funcion - No 

Nombre de las variables 
- CamelCase edadEstudiantes
- descriptivas 
- No espacios 
- Sensibles a Mayusculas 
- No usa caracteres especiales 
- No usa palabras reservadas 

*/

console.log("Variables")

let contador = 0; 
contador = contador + 1;

console.log("El contatdor es:" , contador)

//Literales

let nombre = "Valery"; 
let edad  = 19;
const mensaje =  `Hola me llamo ${nombre} y tengo ${edad} años`;
console.log(mensaje); 

//Diferencia entre let y var en ambito de bloque 

if(true){
    let x = "let-bloque";
    var y = "var-función";

    console.log(x);
    console.log(y);
}

/*

Tipos de datos 
- Primitivos : number, string. boolean, null, undefined, biginit, symbol 
-Referencia: Object(Arrays, funciones)
-typeof - funcion para saber el tipo de dato 
-NaN : not a number 

*/
console.log("2 Tipos de datos");
console.log(typeof 42); //number
console.log(typeof "42"); //string 
console.log(typeof true);//boolean 
console.log(typeof undefined);//undefined
console.log(typeof null);//object
console.log(typeof Symbol ("id"));//symbol
console.log(typeof 10n);//bigint
console.log(typeof ({a: 1}));//object
console.log(typeof function(){}); //function 

const operacion = "hola"*3;
console.log(operacion); 
console.log(typeof operacion);
const suma = "hola" +3;
console.log(suma); //concatenacion 
console.log(typeof suma); //string

//Conversion 

const numero = "123";
console.log(typeof numero); //string
console.log(Number (numero)); //Number es una funcion 

const binario = "true"; 
console.log(typeof binario); //strin
console.log(typeof Boolean (binario)); // Convierte a bolean 

const numero2 = 123;
console.log(typeof String (numero2)); //Convierte a string

/*
Operados artiméticos 
+ , - , * , / , % ,
*/

console.log(2 +3*4); //14
console.log((2 +3)*4); //20
console.log(10 % 3); //1 
console.log(2**5); //32 potencia 

//Comparacion 

let valor1 = 5;
let valor2 = "5";

console.log(valor1 == valor2); //true 
console.log(valor1 === valor2); //false  comparacion estricta compara los valores + tipo de dato 


console.log(valor1 != valor2); //false comparacion sencilla 
console.log(valor1 !== valor2); //true  comparacion estricta 
 
//Operadores logicos 

const isAdmin = true;
const isTeacher = false;
console.log(isAdmin || isTeacher); //true operador or  
console.log(isAdmin && isTeacher); //false operador and 
console.log(!isAdmin); //false operador not 

//Ternario (if) 
const nota = 3.5;
const estado = nota >= 3.0 ? "Aprobado" : "Reprobado";
console.log("Ternario:", estado);   

//Funciones en JavaScript

console.log("4. Funciones");

// declaracion y retorno 
function sum1 (x , y=0){
    return x+y;
}

let sum1 = sumar(4 , 5);
console.log(sum1);

// Expresion de funcion 
const restar = function (x=0 , y=0){
    return x - y;
}

console.log("Resultado de restar ", restar (4, 3));

//Flecha - retorno implicito
const multiplicar = (x, y=1) => x * y;
const multiplicar2 = (x, y=1) => {
    x * y;
};
console.log("Resultado Arrow fuction: ", multiplicar (5));

const saludar = (nombre) => `Hola ${nombre}`;
console.log(saludar ("Valery")); 
 

