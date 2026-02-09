/*
Variables: let, const y var
-let: variable de bloque -reasignar 
-const: variable de bloque -no reasignar
-var: variable global -reasignar

Nombre de variables:
- camelCase edadEstudiante
- descriptivas
- espacion 
- no iniciar con numeros
- sensibles a mayusculas 
- no utilizar palabras reservadas
- no utilizar caracteres especiales 

 */

console.log("variables");
let contador = 0;
contador=contador + 1;
contador += 1;
console.log(contador);

console.log("el contador es: ", contador);

//literales

let nombre = "Kala";
let edad = 5;
const mensaje =`Me llamo ${nombre} y tengo ${edad} años`;
console.log(mensaje);

//Diferencia entre let y var en ambitp de bloque 
if(true){

    let x = "let-bloque";
    var y = "var-global";

    console.log("dentro del if");
    console.log(x);
    console.log(y);
}

//console.log("fuera del if");
//console.log(x); //error
//console.log(y);
/*
Tipo de datos:
- primitivos: number, string, boolean, null, undefined, symbol
- refencia: object, array, function
- typeof
- NaN: not a number

*/

console.log("2.tipos de datos");

console.log(typeof 42); //number
console.log(typeof "42");//string
console.log(typeof true);//boolean
console.log(typeof null);//object (error en js)
console.log(typeof undefined);//undefined
console.log(typeof {nombre: "Kala"});//object
console.log(typeof [1,2,3]);//object
console.log(typeof Symbol('id'));//symbol
console.log(typeof 10n);//bigint
console.log(typeof {a: 1});//object
console.log(typeof function(){});//function

const oprts = "hola" * 3;
console.log(oprts); //NaN
console.log(typeof oprts); //number
const suma = "hola" + 3;//concatenacion
console.log(suma);//string

//Conversion de tipos
console.log("3.Conversion de tipos");

const num = "42";
console.log(typeof num);
console.log(typeof Number(num)); // number tipo de dato, Num,ber() funcion de conversion

const binario = "true"
console.log(typeof binario);
console.log(typeof Boolean(binario)); //boolean

const numero2 = 123;
console.log(typeof String(numero2));//conversion a string
 

console.log("3. Operadores");
//Aritmeticos + - * / % **
/*
Operadores aritmeticos
+,-,*,/,%,**
*/

console.log(5 + 3); //8
console.log((2+3)*4); //20
console.log(10 % 3); //1
console.log(2 ** 3); //8  //potencia 2**5 =32

//comparacion 
let valor1 = 10;
let valor2 = "10";

console.log(valor1 == valor2); //true  compara solo valor
console.log(valor1 === valor2); //false compara valor y tipo de dato
console.log(valor1 != valor2); //false
console.log(valor1 !== valor2); //true
console.log(valor1 > valor2); //false
console.log(valor1 < valor2);       
console.log(valor1 >= valor2); //true
console.log(valor1 <= valor2); //true

//Operadores logicos && || !
const isAdmin = true;
const isTeacher = false;

console.log(isAdmin && isTeacher); //false
console.log(isAdmin || isTeacher); //true
console.log(!isAdmin); //false  
console.log(!isTeacher); //true

//ternario 

const nota = 3.5 ;
const estado = nota >= 3.0 ? "Aprobado" : "Reprobado";
console.log("El estudiante esta: ", estado);

//Funciones en JavaScript
console.log("4. Funciones");

//declaracion y retorno

function sumar(x, y){
    return x + y;
}

let resultado = sumar(5, 3);
console.log("El resultado de la suma es: ", resultado);

//expresion de funcion
const restar = function(x=0, y=0){
    return x - y;
}

console.log("El resultado de la resta es: ", restar(10, 4));

//flecha - retorno implicito
const multiplicar = (x=1, y) => x * y;
const multiplicar2 = (x,y=1) => {
    x*y;
};
console.log("Resultado Arrow Function ", multiplicar(4, 6));

const saludar = nombre => `Hola, ${nombre}!`;
console.log(saludar("Kala"));

parseFloat("3.14"); //convierte string a numero decimal
parseInt("42"); //convierte string a numero entero
getElementById("cuenta"); //selecciona un elemento del DOM por su id
querySelector(".cuenta") // busca el primer elemento que tenga la clase cuenta.
querySelectorAll(".cuenta") //devuelve todos los elementos con esa clase (como una lista).