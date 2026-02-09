//Objeto

const curso = {
    nombre: "Programacion",
    creditos: 4,
    docente: "Santiago",
    horario: {
        dia: "lunes",
        hora: 6
    },

    estudiantes: ["juan", "karla", "Valery"],
    resumen(){
        return `${this.docente} tiene ${this.estudiante.length} estudiantes`
    
    }
    resumenHorario(){
        return `el horario de la clase es: dia ${this.horario.dia}`
    }
    
}

console.log("Curso:", curso.nombre, curso.horario.dia);
console.log(curso.estudiante[1]);
const clave = "docente";
console.log("Creditos: ", curso[clave]);
console.log("Llamando la función: ", curso.resumenHorario());
console.log("Ordenar: ", curso.estudiantes.sort((a, b)=>b-a))
