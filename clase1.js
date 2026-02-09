/*
Variables: let, var, const
- let: variable de bloque - reasignar
- const: variable de bloque -no reasignable
- var: ámbito de función - No

Nombre de las variables
- camelCase edadEstudiante
- descriptivas
- espacios
- no puede empezar con número
- sensibles a mayúsculas
- No usar carácteres especiales
- No usar palabras reservadas

*/

console.log("1. Variables");

let contador = 0;
// 0
contador = contador + 1;
// 1
contador += 1;
// 2
//console.log("El contador es: ", contador);

//Literales
let nombre = "Adriana";
let edad = 38;
const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años`;
//console.log(mensaje);

//Diferencia entre let y var en ámbito de bloque
if(true){
    let x = "let-bloque";
    var y = "var-función";

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
- Referencia: Object (arrays, funciones)
- typeof - función para saber el tipo de dato
- NaN : not a number
*/
console.log("2. Tipos de datos");

console.log(typeof 42); //number
console.log(typeof "42"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //objeto
console.log(typeof Symbol('id')); //symbol
console.log(typeof 10n); //bigint
console.log(typeof {a: 1}); //Objeto
console.log(typeof [1, 2]); //Objeto
console.log(typeof function (){}); //función

const operacion = "hola"*3; 
console.log(operacion); //NaN
console.log(typeof operacion); //Number
const suma = "hola" + 3;
console.log(suma); //Concatenar
console.log(typeof suma); //string


//Conversión

const numero = "123";
console.log(typeof numero);
console.log(typeof Number(numero)); //Number es una función

const binario = "true";
console.log(typeof binario);
console.log(typeof Boolean(binario)); //Convierto a boolean

const numero2 = 123;
console.log(typeof String(numero2)); //Convierto a String

console.log("3. Operadores");
/*
Operadores Aritméticos
+ - * / %
*/

console.log(2+3*4); //14
console.log((2+3)*4); //20
console.log(10%3); //1
console.log(2**5); //potencia 2 elevado a la 5 = 32

//Comparación
let valor1 = 5;
let valor2 = "5";

console.log(valor1==valor2); //true compara los valores
console.log(valor1===valor2); //false comparación estricta compara valores + tipo de dato
console.log(valor1!==valor2); //true comparación estricta
console.log(valor1!=valor2); //false


//Operadores lógicos
console.log("Operadores");

const isAdmin = true;
const isTeacher = false;

console.log(isAdmin || isTeacher); //true operador or
console.log(isAdmin && isTeacher); //false operador and
console.log(!isAdmin); //false operador not

//Ternario
const nota = 3.5;
const estado = nota >= 3.0 ? "Aprobado" : "Reprobado";
console.log("Ternario: ", estado);

//Funciones en Javascript

console.log("4. Funciones");

//declaración y retorno

function sumar(x, y){
    return x + y;
}

let sum1 = sumar(4);
console.log(sum1);

//Expresión de función
const restar = function(x=0, y=0){
    return x-y;
}

console.log("Resultado de restar ", restar(4, 3));

//Flecha - retorno implícito
const multiplicar = (x, y=1) => x*y;
const multiplicar2 = (x, y=1) => {
    x*y
};

console.log("Resultado Arrow Function: ", multiplicar(5));

const saludar = (nombre) => `Hola ${nombre}`
console.log(saludar("Adriana"));


























































