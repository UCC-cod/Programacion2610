console.log ("sentencias de control");
//funcion para clasificar una nota

function clasificarNota(nota){
if (typeof nota != "number" || nota < 0 || nota > 5) return "nota invalida"

if (nota>=4.5)return "excelente"
if (nota>=4.0)return "Buena"
if (nota>=3.0)return "Aprobado"
return "reprobado"
}

//console.log("valoracion: ", clasificarNota("-1"));

//switch menu simple 
function calcular (num1, num2, op){
    switch (op){
        case "+" : return num1 + num2;
        case "-" : return num1 - num2;
        case "+" : return num1 * num2;
        case "/" : return (num2 === 0 ) ? "error de division" : num1/num2;
        default: return "operacion invalida";
    }

   


}

//console.log("calculadora: ", calcular(4, 0 "/"));


//for 
const number = [2, 5, 7, 6];
let sumaNum = 0;
//for indice condicion o incremento

for (let ! = 0; ! < number.length; i++){
sumaNum += number [i];

}

//for of

for (const i of number){
    sumaNum += i;


}

//console log ("suma del listado: ", sumaNum);

const estudiante = {
    nombre: "Adriana",
    edad: 38,
    programa: "ingenieria de software"
}

//for in 

let claves = [];

for (const key in estudiante){
    claves.push(key);
}

//console.log("for in: ", claves)

//while do y do while

let c = 0;

while (c<3) {c++};
let d = 0 ;
do {d++} while (d<3);

//arrays 

console.log ("Arrays");
const numbers = [1, 2, 3, 4];
const A = numbers.slice(1, 3);
console.log ("slice: ", A);

numbers.push(20);
console.log("push: ", numbers);
//elimina el ultimo elemnto del array 
console.log ("pop: ", numbers.pop());
//elimina el primer elemento del array
numbers.shift();
console.log ("shift]: ", numbers);
//Agrega un elemento en la posicion 0 
numbers.unshift(50);
console.log(nums);

//splice 
//posicion numeros de elementos que elimina 

const remover = numbers.splice(2, 1, 0);
console.log (numbers);

//includes 
//verifica si hay un alemento en la lista 
console.log("include: ", numbers.includes(100));

//indexOF: me indica la posicion del elemento
console.log ("index Of:", numbers.indexOf(9) );

// find: devuelve el primer elemento que cumple con la condicion

console.log("Find: ", numbers.find(num => num < 5 ));

//map mapea los numeros y los modifica

const fmap= numbers.map (n => n*2);
console.log ("Map: ", fmap);


//filter filtra los elementos del array

const pares = numbers.filter(n=> n %2===0 );
console.log ("filter pares: ", pares);

//reduce
const sumaNums= numbers.reduce((acc, n) => acc + n, 0 );
console.log ("reduce en nums: ", sumaNums  );

//forEach

let multiplicadosNums = [];
numbers.forEach(m==> multiplicadosNums={n*2})
console.log 
