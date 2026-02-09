//objeto 

const curso = {
    nombre: "Programación en JavaScript",
    creditos: 4,
    docente: "adriana",
    horario: {
        dia:"Lunes",
        hora:6
    },
    estudiantes: ["kala", "maria", "juan"],
    resumen(){
        return `${this.docente} tiene ${this.estudiantes.length} estudiantes inscritos.`;
    },
    resumenHorario(){
        return `El curso se dicta los ${this.horario.dia} a las ${this.horario.hora} horas.`;
    }
}

console.log("Curso: ",curso.nombre,curso.horario.dia);
console.log(curso.estudiantes[1]);
const clave ="creditos";
console.log(curso[clave]);

console.log("creditos:",curso[clave]);
console.log("llamando la funcion: ",curso.resumenHorario());
console.log("ordenar: ", curso.estudiantes.sort().reverse());

const numeros = [5, 2, 9, 1, 5, 6];
console.log("numeros ordenados: ", numeros.sort((a, b) => a - b)); // Ordenar de menor a mayor
console.log("numeros ordenados: ", numeros.sort((a, b) => b - a)); // Ordenar de mayor a menor

const nombre= "karla";
