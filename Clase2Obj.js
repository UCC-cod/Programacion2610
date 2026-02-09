//Objetos 

const curso = {
    nombre: "Programación",
    creditos : 4,
    docente : "Adriana",
    horario : {
        dia: "Lunes",
        hora: 6
    },
    estudiantes: ["Juan", "Karla", "Valery"],
    resumen(){
        return `${this.docente} tiene ${this.estudiantes.length} estudiantes`
    },
    resumenHorario(){
        return `El horario de la clase es: dia ${this.horario.dia} a las ${this.horario.hora} horas`
    }
};

console.log("Curso", curso.nombre, curso.horario.dia);
console.log(curso.estudiantes[1]);
const clave = "creditos"; 
console.log("Créditos", curso[clave]);
console.log("LLamando la funcion: ", curso.resumenHorario());
console.log("Ordenar descendente: ", curso.estudiantes.sort().reverse());

const numeros = [5, 7, 8, 0, 10, 47, 15];

//ordenar de manera descedente
//Funciona solo para numeros 
console.log("Ordenar: ", curso.estudiantes.sort((a, b) => b -a));


const nombre = "Valery Tribales";
console.log("Mayusculas", nombre.toUpperCase());
console.log("Minusculas", nombre.toLowerCase());



