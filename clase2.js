/*
Clase 2. Sentencias de control
arrays, objetos literales
*/

/** if/ else if / else
 swit
bucles: for, while, do ... while
 */




console.log("sentencias de control");
//Función para clasificar una nota

function clasificarNota(nota){
    if(typeof nota != "number") return "Invalida"
    if(nota>=4.5) return "Excelente"
    if(nota>=4.0) return "Buena"
    if(nota>=3.0) return "Aprobado"
    return "Reprobado"

    
}

//console.log ("Valoración: ", clasificarNota(-1));

//switch: menú simple
function calcular(num1, num2, op) {
    switch (op) {
        case "+": num1 + num2;
        case "-": num1 - num2;
        case "*": num1 * num2;
        case "/": num2 === 0 ? "Error" : num1/num2;
        default: return "Operación inválida";
        
    }
    
}

//console.log("calculadora:" , calcular(4, 0, "/"));

//for
const numeros = [2, 5, 7, 6]
let sumaNum = 0;
for (let i = 0; i < numeros.length; i++) {
    sumaNum += numeros[i];
    
}

//for of 
for (const i of numero){
    sumaNum += i;
}

//console.log("Suma del listado" , sumaNum);

const estudiante = {
    nombre: "Santiago",
    edad: 18,
    programa:"Ingenieria de Software"

}

//for in 
let claves = [];
for (const key in estudiante){
    claves.push(key);

}

//console.log("for in:", claves);

//while, do... while
let c = 0;
while(c>3){c++}
let d = 0;
do {d++}while(d<3);

//Arrays
console.log("Arrays")
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const A = nums.Slice(1, 4);

nums.push(20);
console.log("push: ", nums );
//Elimina el ultimo elemento del array
console.log("Top: " , nums.pop())
//Elimina el primer elemento del array
nums.shift
console.log("shift:", nums);
//Agrega un elemento en la posición 0
nums.unshift(50);
console.log(nums);

//splice
const remover = nums.splice(2, 1, 0);
console.log(nums);

//Includes
//Verifica si hay un elemento en la lista
console.log("Include:", nums.includes(100));

//indexOf"
console.log("Index Of: " , nums.indexOf(9));

//find
console.log("Find: ", nums.find(num=> num <5));

//Map
const fMap = nums.map(n => n*2);
console.log("Map: ", fMap);

//Filter
const pares = nums.filter(n=> n%2===0);
console.log("filter pares: ", pares);

//Reduce
const sumaNums = nums.reduce((acc, n) => acc + n, 0);
console.log("Reduce en nums:", sumaNums);

//ForEch
let multiplicadosNums = [];
nums.forEach(n)