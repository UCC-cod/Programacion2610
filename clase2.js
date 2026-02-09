/*
clase2. Sentencias de control
arrays, objetos literales y metodos de ordenamiento
*/

/**
 * if / else if / else
 * switch
 * bucles: for, while, do ... while
 * 
 */

console.log("sentencias de control");
//Funcion para clasificar una nota

function clasificarNota(nota){
    if(typeof nota != "number" || nota < 0 || nota > 5) return "Invalida"
    if(nota>=4.5) return "Excelente"
    if(nota>=4.0) return "Buena"
    if(nota>=3.0) return "Aprobado"
    return "Reprobado"
}

//console.log("Valoracion: ", clasificarNota(1));

//Swicht: menu simple
function calcular(num1, num2, op){
    switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return (num2 === 0) ? "Error de division" : num1/num2;
        default: return "Operacion invalida";
        
    }
}

//console.log("calculadora", calcular(4, 0, "/"));

//For
const numeros = [2, 5, 7, 6];
let sumaNum = 0;
for (let i = 0; i < numeros.length; i++) {
    //sumaNum +=numeros[i];
}

// for of
for(const i of numeros){
    sumaNum += i;
}

//console.log("suma del listado:", sumaNum);

const estudiante = {
    nombre: "Tiven",
    edad:"20",
    programa: "Ingenieria de software"
}

// for in
let claves =[];
for (const key in estudiante){
    claves.push(key);
}

//console.log("for in: ", claves);

//while, do ... while
let c = 0;
while(c<3) {c++};
let d = 0
do {d++} while (d<3); 

//arrays
console.log("arrays");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const  A = nums.slice(1, 4);

nums.push(20);
console.log("push", nums);
//elimina el ultimo elemento de arrays 
console.log("pop: ", nums.pop());
//elimina el primer elemento de arrays
nums.shift();
console.log("shift: ", nums);
//agrega un elemento en la posicion 0
nums.unshift(50);
console.log(nums);

//splice 
//posicion, numero de elementos que elimina, el numero que  
const remover = nums.splice(2, 1, 0);
console.log(nums);

//includes 
//verifica si hay un elemento en la lista
console.log("include: ", nums.includes(100));

//indexOF": me indica la posicion del elemento 
console.log("index OF: ", nums.indexOf(9));

//find:
console.log("find: ", nums.find(num => num < 5));

//map
const fMap = nums.map(num => num*2);
console.log("map: ", fMap);

//fliter
const pares = nums.filter(num => num % 2 === 0);
console.log("filter pares: ", pares);

//reduce
const sumaNums = nums.reduce((acc, n) => acc + n, 0);
console.log("reduce en nums: ", sumaNums);

//ForEah
let multiplicadosNums = [];
nums.forEach(n => multiplicadosNums.push(n*2));
console.log(multiplicadosNums);
