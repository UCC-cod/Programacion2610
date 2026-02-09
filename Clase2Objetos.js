//objeto

const curso = {
    nombre: "Programacion",
    creditos: 4,
    docentes: "Adriana",
    horario: {
        dia: "Lunes",
        hora: 6
    },
    estudiantes: ["Tiven", "Maria", "Juan"],
    resumen() {
        return `${this.docentes} tiene ${this.estudiantes.length} estudiantes`;
    },
    resumenHorario() {
        return `El horario de la clase es ${this.horario.dia} a las ${this.horario.hora}`;
    }

}



console.log("Curso: ", curso.nombre, curso.horario.dia);
console.log(curso.estudiantes[1]);
const clave = "docentes";
console.log("Creditos: ", curso[clave]);
console.log("llamando la funcion: ",curso.resumenHorario());
console.log("ordenar descendente: ", curso.estudiantes.sort().reverse());



const numeros = [5, 7, 8, 0, 10 , 47, 15]
// ordenar de manera descendente 
// funciona solo para numeros 
console.log("Ordenar: ", numeros.sort((a, b) => b-a));

const nombre = "Tiven";

console.log("mayusculas: ", nombre.toUpperCase());
console.log("minusculas: ", nombre.toLowerCase());

