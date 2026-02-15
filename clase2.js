//Arrays, Objetos literales y metodos de ordenamiento

let clasifNota = (nota) => typeof nota != "number" || nota < 0 || nota > 5 ? "Nota invalida" :
nota>=4.5 ? "Excelente" : 
nota>=4.0 ? "Buena" : 
nota>=3.0 ? "Aprobado" : 
"Reprobado"
console.log(clasifNota(5));

const numeros = [2, 5, 7, 6];
let sumaNum = 0

for(const i of numeros){
    sumaNum += i
}

console.log(sumaNum)

const estudiante = {
    nombre: "Jhon",
    edad: 19,
    programa: "Ingenieria de Software"
}

let claves = []
for(const key in estudiante){
    claves.push(key)
}

console.log(claves);

//Arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const A = nums.slice(1, 4);

nums.push(20);
console.log("Push: ", nums);

console.log("Pop: ", nums.pop());

nums.shift();
console.log("Shift: ", nums);

nums.unshift(50);
console.log("Unshift: ", nums);

const remover = nums.splice(2,2,5,3)
console.log("Splice: ", nums)

console.log("Includes: ", nums.includes(100));

console.log("Index Of: ", nums.indexOf(5));

console.log("Find: ", nums.find(num => num < 5))

const fmap = nums.map(n => n*2)
console.log("Map: ", fmap);

const pares = nums.filter(n => n%2 === 0);
console.log("Filter: ", pares);

const sumaNums = nums.reduce((acc, n) => acc + n, 0);
console.log("Array actual: ", nums);
console.log("Reduce: ", sumaNums);

let multi = [];
nums.forEach(n => multi.push(n*2))
console.log("For Each: ", multi);

//Objecto

const curso = {
    nombre: "Programacion",
    creditos: 4,
    docente: "Adriana",
    horario: {
        dia: "Lunes",
        hora: 6
    },
    estudiantes: ["Jhon", "Karla", "Valery"],
    resumen(){
        return `${this.docente} tiene ${this.estudiantes.length} estudiantes`
    },
    resumenHorario(){
        return `El horario de la clase es: Dia ${this.horario.dia} y hora ${this.horario.hora}`
    }

}

console.log("Curso: ", curso.nombre, curso.horario.dia, curso.estudiantes[1]);
const clave = "docente";
console.log("Docente: ", curso[clave])

console.log("Resumen: ", curso.resumenHorario())

console.log(curso.estudiantes.sort().reverse())
  