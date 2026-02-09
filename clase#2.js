/* 
clase 2. sentencias de control
arrays, objetyos literales y metodos de ordenamiento
*/

/*
sentencias conocidas
if /else/ else if
switch
bucles: for while, do ...while

*/

console.log("sentencias de control");
// funcion para clasificar una nota

function clasificarNota(nota){
    if (typeof nota != "number" || nota < 0 || nota > 5) return "Manin, Esa nota no vale"
    if (nota>=4.5) return "excelente"
    if (nota >=4) return "buena"
    if (nota >=3) return "Aprobo"
    return "reprobado"
 
}

//console.log("valoracion: ", clasificarNota("-1"));

//switch: menu simple, switch sirve cuando hay muchas condiciones anidadas como if

function calcular(num1, num2, op){
     switch (op) {
        case  "+": return num1 + num2
        case "-": return num1 - num2
        case "*": return num1 * num2 
        case "/":  return num2 === 0 ? "error" : num1/num2
        default: return "operacion invalida"
            
      }

}

//console.log("Calculadora: ", calcular(5, 0, "/"));

//For recorre una lista

const numeros= [1,2,3,5,6,7,8,4];
let sumaNum = 0;
for(let i = 0; i < numeros.length; i++){
    sumaNum += numeros [i];
}

//for of
for(const i of numeros){
    sumaNum += i;
}

//console.log("suma del listado", sumaNum);

const estudiante= {
    nombre: "juan",
    edad: 19,
    programa: "ingenieria de software"
}

//for in
let clave =[];
for(const key in estudiante){
    clave.push(key);
}

//console.log("For in:", clave);

//while, do... while
let c = 0;
while(c<3 ) {c++};
let d = 0;
do {d++} while(d<3);

//arrays
console.log(Array);
const nums= [1,2,3,4,5,6,7,8,9,10]
const A = nums.slice(1,4);
console.log("slice ", A);

nums.push(20)
console.log("push: ", nums);
//elimnia el ultimo elemento del array
console.log("pop: ", nums.pop());
//eliminar el primer elemento del array
nums.shift();
console.log("shift: " , nums);
//agrega un elemento en la posicion 0
nums.unshift(50)
console.log("unshift: ", nums);


//splice
//posicion, numero de elementos que elimina, el numero que pone
const remover = nums.splice (2,1,0)
console.log(nums);

//includes 
//verifica si hay un elemento en la lista
console.log("include: ", nums.includes(100));

//indexOF
console.log("index Of: ", nums.indexOf(9));

//find: devuelve el primer elemento que cumpla con la condicion
console.log("find: ", nums.find(num => num < 5));

//map 
const fMap = nums.map(n => n*2);
console.log("Map: ", fMap);

//filter 
const pares = nums.filter(n=> n%2===0);
console.log("filter pares: ", pares);

//reduce 
const sumaNums = nums.reduce((acc, n) => acc + n, 0);
console.log("Reduce en nums: ", sumaNums);

//ForEach
let mulplicadosNums = []; 
nums.forEach(n => mulplicadosNums.push(n*2));
console.log("ForEach: ", mulplicadosNums);