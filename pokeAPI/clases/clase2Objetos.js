//objeto
const curso = {
    nombre: "programacion",
    creditos: 4,
    docente: "Adriana",
    horario: {
        dia: "lunes",
        hora: 6
    },
    estudiantes: ["deysimar", "Maria", "juaN"],
    resumen() {
        return `${this.docente} tiene ${this.estudiantes.length} estudiantes`;
    },
    resumenHorario() {
        return `El curso es los ${this.horario.dia} a las ${this.horario.hora}`;
    }
};

console.log("Curso: ", curso.nombre, curso.horario.dia, curso.estudiantes[0]);
console.log(curso.estudiantes[0]);
const clave = "docente";
console.log("creditos: ", curso[clave]);
console.log("llamando la funcion: ", curso.resumenHorario());
console.log("ordenar descendente: ", curso.estudiantes.sort().reverse());

const numeros = [5, 7, 8, 10, 47, 15];
//ordenar de manera descendente
//funcion solo para numeros
console.log("ordenar: ", numeros.sort((a, b) => b - a));

const nombre = " deysimar morales arboleda"
//ordenar de manera alfabetica
console.log("Mayusculas: ", nombre.toUpperCase());
console.log("minusculas: ", nombre.toLowerCase());
 