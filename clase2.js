/*
Clase 2 Sentencias de control
arrays, objetos literales 

 */

/*
if, else if, else
switch
bucles: for, while, do while
*/

console.log("sentencias de control");
// funcion para clasificar una nota

function clasificarNota(nota) {
    if (typeof nota !== 'number' || nota < 0 || nota > 5) return "Invalido";

    if (nota >= 4.5) {
        return "Excelente";
    } else if (nota >= 4.0) {
        return "Bueno";
    } else if (nota >= 3.0) {
        return "Aprobado";
    } else {
        return "Reprobado";
    }
}
 console.log("Valoracion", clasificarNota("a"));

 //Switch: Menu simple

 function calcular(num1, num2, opcion) {
    switch (opcion) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return (num2 !== 0) ? (num1 / num2) : "Error: División por cero";
        default: return "Opcion no valida";
    }
 }

 console.log("Calculadora: ", calcular(4, 0, "/"));

 //For 
 const numeros = [1, 2, 3, 4, 5];
 let sumaNum = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumaNum += numeros[i];
    }
 console.log("Suma del listado:", sumaNum);


 //While do while 
let contador = 0;
while (contador < 5) {contador++};
let contador2 = 0;
do {
    contador2++;
} while (contador2 < 5);

//array 
console.log("Arrays");
const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const A = numeritos.slice(1, 3);
console.log("slice" , A);

numeritos.push(20);
console.log("push: ", numeritos);
numeritos.pop("pop: ", numeritos.pop());
numeritos.shift
console.log("Shifts: ", numeritos);
numeritos.unshift(50);
console.log(numeritos);

//splice
//Posicion, cantidad a eliminar, elementos a agregar
const remover = numeritos.splice(2, 1, 0);
console.log(numeritos);

//Includes
console.log("Incluye: ?", numeritos.includes(100));

//indexOf
console.log("Index of: ?", numeritos.indexOf(9));

//find 
console.log("Find: ", numeritos.find(numeritos => numeritos < 5));

//Map
const fmap = numeritos.map(numeritos => numeritos * 2);
console.log("Map: ", fmap);

//Filter
//Pares
const ffilter = numeritos.filter(numeritos => numeritos % 2 === 0);
console.log("Filter: ", ffilter);




 