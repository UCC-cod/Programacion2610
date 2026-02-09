/*

CLASE 2

sentencias de control 
arrays.objetos literales

*/
/**
 * if / else if / else
 * switch
 * for / while / do while
 * break / continue
 * arrays: push, pop, shift, unshift, indexOf, includes, length, slice, splice
 * objetos literales: propiedades, metodos, this
 */

//console.log("Sentencias de control:");
//funcion para clasificar una nota

function clasificarNota(nota) {
    if (typeof nota !== 'number' || nota < 0 || nota > 5) 
        return "invalida"

    if (nota >= 4.5)
        return "Excelente";

    if (nota >= 4.0)  
        return "Bueno";

    if (nota >= 3.0)
        return "Regular";

    return "Reprobado";
}

//console.log("valoracion: ", clasificarNota(3));

//switch: 
function calcular(num1, num2, op ) {
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return (num2 === 0) ? "error" : num1 / num2;
        default: return "operador no valido";
    }
}

//console.log("calculadora: ", calcular(4, 0, '+'));

//for:

const numeros = [2, 5, 7, 6];
let sumaNum = 0;
for(let i = 0; i < numeros.length; i++) {   //length es una propiedad de los arrays que devuelve su tamaño
    sumaNum += numeros[i];
}       

//for of:
for(const i of numeros) {
    sumaNum += i;
}

//console.log("suma: ", sumaNum);

const estudiante = {
    nombre: "simon",
    edad: 18,
    programa: "ingenieria de softwre"
}

//for in

let claves = [];
for(const key in estudiante){
    claves.push(key);
} 

//console.log("for in: ", claves);

//while, do...while:

let c = 0;
while(c < 3){c++};
let d = 0;
do {d++} while(d < 3);

//arrays:

//console.log("Arrays:");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const A = nums.slice(1, 4); //slice devuelve un nuevo array con los elementos desde el indice 0 hasta el indice 2 (sin incluirlo)
//console.log("slice: ", A);

nums.push(20); //agrega un elemento al final del array
//console.log("push: ", nums); //agrega un elemento al final del array
//console.log("pop: ", nums.pop()); //elimina el ultimo elemento del array y lo devuelve

nums.shift(); //elimina el primer elemento del array y lo devuelve
//console.log("shift: ", nums); 

nums.unshift(50); //agrega un elemento al inicio del array y devuelve la nueva longitud del array
//console.log("unshift: ", nums); 

const remover = nums.splice(2, 1, 0); //splice elimina 1 elemento a partir del indice 2 y lo reemplaza por 0, devuelve un array con el elemento eliminado
//console.log(nums); 

//console.log("includes: ", nums.includes(100)); //includes devuelve true si el elemento esta en el array, false si no esta

//console.log("indexOf: ", nums.indexOf(9)); //indexOf indica la posicion del elemento en el array, devuelve -1 si no esta

//console.log("find: ", nums.find(x => x > 5)); //find devuelve el primer elemento que cumple la condicion, undefined si no hay ninguno

//console.log("map: ", nums.map(x => x * 2)); //map devuelve un nuevo array con el resultado de aplicar la funcion a cada elemento del array original

//console.log("filter: ", nums.filter(x => x % 2 === 0)); //filter devuelve un nuevo array con los elementos que cumplen la condicion

//console.log("reduce: ", nums.reduce((acc, x) => acc + x, 0)); //reduce devuelve un unico valor que se obtiene al aplicar la funcion a un acumulador y a cada elemento del array, el segundo parametro es el valor inicial del acumulador

let multiplicadosNums = [];
nums.forEach(x => multiplicadosNums.push(x * 2)); //forEach ejecuta la funcion para cada elemento del array, no devuelve nada
//console.log("forEach: ", multiplicadosNums);

//objetos:

const curso = {
    nombre: "programacion",
    creditos: 4,
    docente: "adriana",
    horario: {
        dia: "lunes",
        hora: 6
    },
    estudiantes: ["simon", "maria", "juan"],
    resumen() {
        return `El curso de ${this.nombre} tiene ${this.creditos} creditos y es dictado por ${this.docente} con ${this.estudiantes.length} estudiantes inscritos.`;
    }
}

//console.log("curso: ", curso.nombre); //acceso a las propiedades de un objeto con notacion de punto
//console.log(curso.estudiantes[0]); //acceso a las propiedades de un objeto con notacion de corchetes, se puede usar para acceder a propiedades con nombres dinamicos o que no son validos como identificadores
const clave = "creditos"; //variable que contiene el nombre de la propiedad a acceder
//console.log('creditos: ',curso[clave]); //acceso dinamico a las propiedades de un objeto
//console.log("resumen: ", curso.resumen()); //acceso a los metodos de un objeto, this hace referencia al objeto actual
//console.log("ordenar", curso.estudiantes.sort()); //los metodos de los objetos pueden modificar el objeto original, sort ordena el array de estudiantes alfabeticamente

const NUMEROS = [5, 2, 9, 1, 5, 6];
//console.log("ordenar: ", NUMEROS.sort((a, b) => a - b)); //sort ordena el array de numeros de menor a mayor, se le pasa una funcion de comparacion que devuelve un numero negativo si a es menor que b, cero si son iguales, y un numero positivo si a es mayor que b

const nombres = ["sImon", "maria", "Juan"];
//console.log("mayusculas: ", nombres[0].toUpperCase()); //toUpperCase devuelve una nueva cadena con todos los caracteres en mayusculas
//console.log("minusculas: ", nombres[0].toLowerCase()); //toLowerCase devuelve una nueva cadena con todos los caracteres en minusculas






