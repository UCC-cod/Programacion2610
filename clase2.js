/**
 Clase 2. Sentencias de control
 arrays, objetos literales 
 */

 /** if/ else if / else 
   switch
   bucles: for, while, do ... while 
  */

   console.log ("Sentencias de control");
   //Función para clasificar una nota 

   function ClasificarNota (nota){
    if (typeof nota != "number" || nota < 0 || nota > 5) return "Invalido"
    if(nota>=4.5) return "Excelente"
    if(nota>=4.0) return "Bueno"
    if(nota>=3.0) return "Aprovado"
    return"Reprobado"
   }

   //console.log("Valoración", ClasificarNota("-1")); //Invalido

   //Switch: menu simple 
    function calcular(num1, num2, op){
      switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": (num2 === 0) ? "Error" : num1 / num2;
        default: return "Operación invalida";
    }
  }

//console.log("Calculadora", calcular(4, 0, "+"));

//For
const numeros = [2, 5, 7, 6,];
let sumaNum = 0;
for (let i = 0; i < numeros.length; i++)
{
  sumaNum += numeros[i];
}
//console.log("Suma de los números:", sumaNum);

//for of
for (const i of numeros) {
  sumaNum += i;
} 

//console.log("Suma del listado ", sumaNum);

const estudiante = {
  nombre: "Valery",
  edad: 19,
  Programa: "Ingeniería de Software"
};

//for in 

let claves =[];
for (const key in estudiante) {
  claves.push(key);
}

//console.log("For in ", claves);

//while, do...while 
let c = 0;
while (c < 3) {c++};
let d = 0;
do {d++} while (d < 3);

//Arrays 
console.log("Arrays");
const nums = [1, 2, 3, 4];
const A = nums.slice(); 
console.log("Slice ",A); 

//Agrega un elemento al final del array
nums.push(20);
console.log("Push ", nums);

//Elimina el ultimo elemento del array
console.log("Pop ", nums.pop()); 

//Elimina el primer elemento del array
nums.shift();
console.log("Shift ", nums);

//Agrega un elemento en la posicion 0 del array
nums.unshift(0);
console.log(nums);

//Splice 
//Posición, cantidad de elementos a eliminar, elementos a agregar 
const remover = nums.splice(2, 2, 0);
console.log(nums);

//Includes 
//Verifica si hay un elemento en la lista 
console.log("Includes ", nums.includes(4)); //false

//indexOf : me indica la posición del elemento 
console.log("IndexOf ", nums.indexOf(9)); //0

//find: Trae el primer elemento que cumple una condición
console.log("Find ", nums.find(num => num > 1)); //

//Map
const FMap = nums.map(n => n * 2);
console.log("Map ", FMap);

//Filter: Trae los elementos que cumplen una condición
const pares = nums.filter(n => n%2===0);
console.log("Filter pares ", pares);

//Reduce 
const sumaNums = nums.reduce((acc, n) => acc + n, 0);
console.log("Reduce en nums", sumaNums);

//ForEach : Crea un nuevo array con el resultado de la función aplicada a cada elemento del array original
let multiplicadosNums = [];
nums.forEach(n => multiplicadosNums.push(n * 2));
console.log(multiplicadosNums);