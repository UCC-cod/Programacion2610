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
console.log("Suma de los números:", sumaNum);

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
//