/*
variables: let, var, const
-let : VARIABLE DE BLOQUE - REASIGNAR 
- const: variable de bloque - NO REASIGNABLE - INMUTABLE
- var: ambito de funcion - No recomendada - REASIGNABLE

Nombre de las variables:
-camelCase edadEstudiante
-descriptivas 
- no tener espacios
- no iniciar con numeros
- sensibles a mayusculas
- no usar caracteres especiales
- palabras reservadas


*/

console.log("1. variable");

let contador = 0;
contador = contador + 1;
contador += 2;


console.log("el contador es:  ", contador);

//literales
let nombre = "juan";
let edad = 20;
const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años`;
console.log(mensaje);

//Diferencia entre let y var en ambito de bloque

if(true){
    let x = "let-bloque";
    var y = "var-funcion";
    
    console.log("dentro del if");
    
    console.log(x)
    console.log(y);
    

}

//console.log("pol fuera del if");
//console.log(y);
//console.log(x); 

/*
Tipos de datos 
-primitivos: number, string, boolean, null, undefined, symbol
- Referencia: objetos (arrays, funciones)
-funcion typeof:funcion para saver el tipo de datos
-NaN: not number 
*/

console.log("2. tipos de datos");

console.log(typeof 42); // number
console.log(typeof "42"); // string
console.log(typeof true); // boolean
console.log(typeof undefined);// undefined
console.log(typeof null);// object
console.log(typeof Symbol('id')); // symbol
console.log(typeof 10n);//bigint 
console.log(typeof [1,2]); // object
console.log(typeof function(){}); // function


const operacion = "hola"*3 
console.log(operacion); // NaN
console.log(typeof operacion); // number
const suma = "hola" + 5;
console.log(suma); // cibcatebar
console.log(typeof suma); // string

//conversion 

const numero = "123";
console.log(typeof numero);
console.log(typeof Number(numero));//NUMBER ES UNA FUNCION 

const binario="true"; 
console.log(typeof binario);
console.log(typeof Boolean(binario)); //convierte a boolean

const numero2 = 123;
console.log(typeof numero2); // number


console.log("3. operadores");

/*
operadores aritmeticos 
+ - * / % **
*/

console.log(2+3*4); //14
console.log((2+3)*4); //20
console.log(10%3); //1
console.log(2**5); //potencia de 2 elevado al a 5 32


// comparacion 
let valor1 = 5;
let valor2 = "5";

console.log(valor1==valor2);//true
console.log(valor1===valor2);//false
console.log(valor1!==valor2);//true
console.log(valor1!=valor2);//false

//operadores logicos
console.log("4. operadores logicos");
const isAdmin = true;
const isTeacher = false;

console.log(isAdmin||isTeacher); //true operador or
console.log(isAdmin&&isTeacher); //false opreador and
console.log(!isAdmin); //false operador not

//ternario
const nota =3.5;
const estado = nota >= 3.0 ? "aprobado" : "reprobado";
console.log( "TERNARIO: ", estado);


//funcion en Javascript

console.log("5. funciones");

//deaclaracion y retorno

function sumar(x,y=0){
    return x + y;
}


let sum1 = sumar(4,5);
console.log(sum1);

//expresion de funcion 
const restar = function (x,y){
    return x - y;
}

console.log("resultado de resta:", restar(4,2));

//flecha - retorno implicito
const multiplicar = (x,y) => x * y;
console.log("resultado arrow function:", multiplicar(3,4));

