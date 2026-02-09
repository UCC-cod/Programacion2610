//Objeto

const curso = {
    nombre: "Programación",
    creditos: 4,
    docente: "Adriana",
    horario: {
        dia: "lunes",
        hora: 6
    },
    estudiantes: ["juan", "karla", "valerY", "andrés"],
    resumen(){
        return `${this.docente} tiene ${this.estudiantes.length} estudiantes`
    },
    resumenHorario(){
        return `El horario de la clase es: día ${this.horario.dia} y hora ${this.horario.hora}am`
    }
}

console.log("Curso: ", curso.nombre, curso.horario.dia);
console.log(curso.estudiantes[0]);
const clave = "docente";
console.log("Créditos: ", curso[clave]);
console.log("Llamando la función: ", curso.resumenHorario());
console.log("Ordenar descendente: ", curso.estudiantes.sort().reverse());


const numeros = [5, 7, 8, 0, 10, 47, 15]
//ordenar de manera descendente
//Funciona solo para números
console.log("Ordenar: ", numeros.sort((a, b)=>b-a));

const nombre = "adriana PAREDES salinas";

console.log("Mayúsculas: ", nombre.toUpperCase());
console.log("MINÚSCULAS: ", nombre.toLowerCase());








