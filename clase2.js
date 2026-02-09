/*
Clase 2. Sentencias de control
arrays, objetos literales y métodos de ordenamiento
*/

/**
 * if / else if/ else
 * switch
 * bucles: for, while, do ... while
 * 
 */

console.log("Sentencias de control");
//Función para clasificar una nota

function clasificarNota(nota){
    if(typeof nota != "number" || nota < 0 || nota > 5) return "Inválida"
    if(nota>=4.5) return "Excelente"
    if(nota>=4.0) return "Buena"
    if(nota>=3.0) return "Aprobado"
    return "Reprobado"
}

//console.log("Valoración: ", clasificarNota(-1));

//Switch: menú simple
function calcular(num1, num2, op){
    switch (op) {     
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return (num2 === 0) ? "Error de división" : num1/num2;
        default: return "Operación inválida";
    }
}

//console.log("Calculadora: ", calcular(4, 1, "/"));

//For
const numeros = [2, 5, 7, 6];
let sumaNum = 0;
//For índice, condición e incremento
for(let i = 0; i < numeros.length; i++){
    //sumaNum += numeros[i];
}

//for of
for(const i of numeros){
    sumaNum += i;
}

//console.log("Suma del listado: ", sumaNum);

const estudiante = {
    nombre: "Adriana",
    edad: 38,
    programa: "Ingeniería de Software"
}

//for in 
let claves = [];
for(const key in estudiante){
    claves.push(key);
}

//console.log("For in: ", claves);

//While, do...while
let c = 0;
while(c<3) {c++};
let d = 0;
do {d++} while(d<3);

//Arrays
console.log("Arrays");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const A = nums.slice(1, 4);

nums.push(20);
console.log("Push: ", nums);
//Elimina el último elemento del array
console.log("Pop: ", nums.pop());
//Eliminar el primer elemento del array
nums.shift();
console.log("Shift: ", nums);
//Agrega un elemento en la posición 0
nums.unshift(50);
console.log(nums);

//Splice
//Posición, número de elementos que elimina, el número que pone
const remover = nums.splice(2, 1, 0);
console.log(nums);

//Includes
//Verifica si hay un elemento en la lista
console.log("Include: ", nums.includes(100));

//indexOf: me indica la posición del elemento
console.log("Index Of: ", nums.indexOf(9));

//find:devuelve el primer elemento que cumple con la condición
console.log("Find: ", nums.find(num => num < 5));

//Map
const fMap = nums.map(n => n*2);
console.log("Map: ", fMap);

//Filter
const pares = nums.filter(n=> n%2===0);
console.log("Filter pares: ", pares);

//Reduce
const sumaNums = nums.reduce((acc, n) => acc + n, 0);
console.log("Reduce en nums: ", sumaNums);

//ForEach
let multiplicadosNums = [];
nums.forEach(n => multiplicadosNums.push(n*2));
console.log(multiplicadosNums);























