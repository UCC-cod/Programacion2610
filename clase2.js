/* 
clase 2 . sentencias de control 
arrays , objetos literales y metodos de ordenamiento 
*/
/**
 * *if/ else if / else 
 * * switch 
 * * for 
 * * while / do.. while                         
 */

console.log("1. Sentencias de control");
// funcion para clasificar nota 
function clasificarNota(nota) {
    if (typeof nota !== "number") return "invalida";
    if (nota >= 4.5) return "Excelente";
    if (nota >= 4.0) return "Bueno";
    if (nota >= 3.0) return "Aceptable";
    return "Reprobado";
}
console.log("valoracion", clasificarNota(-1)); // Reprobado
// switch: menu simple 
function calcular(num1, num2, op){
    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) return "error division por cero";
            return num1 / num2;
        default:
            return "operacion invalida";
    }
}
console.log("calculadora", calcular(4,1,"/"));
 //for 
 const numeros = [1,2,3,4,5];
 let sumaNum = 0;
 for (let i = 0; i < numeros.length; i++) {
    sumaNum += numeros[i];
 }
 
 // for of 
 for (const i of numeros) {
    sumaNum += i;
    }
//console.log("suma del listado:", sumaNum);

const estudiante = {
    nombre: "deysimar",
    edad: 19,
    carrera: "Ingenieria de  software "
}
// for in : para objetos literales
let claves = [];
for (const key in estudiante) {
    claves.push(key);
}           

//console.log("for in :", claves );
//while,do...while

let c = 0;
while (c < 3) {
    c++;
let d = 0
do {d++} while (d < 3)
} 

//arrrays 
console.log("2. Arrays");
const nums = [1,2,3,4,5,6,7,8,9,10];
const A = nums .slice (1,4); // [2,3,4]
 nums.push(20);
 console.log("push", nums);
 // eliminar el ultimo elemento del array   
 console.log("pop: ", nums.pop()); //20
 //eliminar el primer elemento del array
    nums.shift();
    console.log("shift: ", nums);
//agrega un elemento al inicio del array
nums.unshift(50);
console.log(nums);



//splice
//el primer numero es la posicion , numero de elementos que elimina , el numero que se agrega en esa posicion
const remover = nums .splice(2,2,0); // elimina 3 elementos a partir del indice 2
console.log(nums);

//includes
//verifica si hay  un elemento  en la lista 
console.log("include: ", nums.includes(100)); 
 
//indexOf : devuelve el indice de la primera ocurrencia de un elemento en el array o -1 si no se encuentra
console.log("indexOf: ", nums.indexOf(9));

//find : devuelve el valor del primer elemento que cumple con la condicion dada por una funcion de prueba
console.log("find: ", nums.find(num => num > 5)); // devuelve el primer numero mayor a 5

//map: crea un nuevo array con los resultados de la llamada a la funcion proporcionada aplicada a cada elemento del array
const fMap = nums.map(n => n * 2);
console.log("map: ", fMap);

//filter : crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada
const pares = nums .filter(n => n % 2 === 0);
console.log("filter pares :",pares); 


//reduce
const sumaNums = nums.reduce((acum, n) => acum + n, 0);
console.log("reduce  en nums : ", sumaNums);


//ForEach : ejecuta una funcion proporcionada una vez por cada elemento del array
let multimplicadosNums = [];
nums.forEach(n => multimplicadosNums.push(n * 2));
console.log("multiplicados por 2: ", multimplicadosNums);

