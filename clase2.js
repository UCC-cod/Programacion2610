/*
clase2.Sentencias de control
arrays.objetos literales
 */

console.log("sentencias de control");
//Funcion para clasificar una nota

function clasificarNota(nota){
    if(typeof nota !== "number" || nota < 0 || nota > 5 ){
       return "invalido";
    }

    if (nota >= 4.0) {
        return "buena";
    }

    if(nota >= 3.0){
        return "aprobado";
    }

    return "reprobado";
}

//console.log("valorancion  ", clasificarNota(-1));

//switch case
function calcular(num1,num2,operacion){
    switch (operacion) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 === 0 ? "Error: division por cero" : num1 / num2;
        default:
            "operacion invalida";
    }
}

/*console.log("calculadora",calcular(4,0,"/"));

const numeros=[2,5,7,6];
//for
for(let i=0; i < numeros.length; i++){

    sumaNum += numeros[i];
}
console.log("suma de listado",sumaNum);
*/
//for of

/*for (const n of numeros) {

    sumaNum += n;  
}
console.log("numero");

const persona = {
    nombre: "kala",
    edad: 10,
    programa: "Ing de software"
};
*/
/*let claves =[]
//for in
for (const key in persona) {

    claves.push(key); // solo almacena claves en el arreglo 
}

console.log("for in",claves);
*/
//while, do ...while
let c = 0;
while(c<3) {c++};

let d = 0;
do {d++;} while (d < 3);

//arrays
console.log("arrays");
const nums = [1, 2, 3, 4,5,6,7,8,9,10];

const A=nums.slice(1,4); // [2,3]  no incluye el indice final
console.log("Slice",A);
nums.push(11); //agrega al final del arreglo
console.log("Valor agregado",nums);
nums.pop(); //elimina el ultimo elemento del arreglo
console.log("Valor eliminado",nums);
nums.shift(); //elimina el primer elemento del arreglo
console.log("Valor eliminado",nums);
nums.unshift(0); //agrega al inicio del arreglo
console.log("Valor agregado al inicio",nums);

//splice
const remover= nums.splice(2,2,0); 
console.log(nums);

//includes
//verificar si un elemento existe en el arreglo
console.log("include",nums.includes(4));

//indexOf: me indica la posicion de un elemento en el arreglo, si no lo encuentra devuelve -1
console.log("indexOf",nums.indexOf(5));

//find:devuelve el primer elemento que cumpla con la condicion 
console.log("find" ,nums.find(num => num >5));

//map
const fMpas =nums.map(n => n * 2);
console.log("map",fMpas);

//filter 
const pares = nums.filter(n => n % 2 === 0);
console.log("filter",pares);

//reduce
const sumaNums = nums.reduce((acum, n) => acum + n, 0);
console.log("reduce",sumaNums);

//forEach
console.log("forEach");
nums.forEach(n => console.log(n));