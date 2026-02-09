//OBJETOS 

const curso ={
nombre: "programacion",
creditos: 4,
docente: "Adrina",
horario: {
dia: "lunes",
hora: 6

},
estudiantes: [Juan, Mariana, Carlos],
resumen(){
    return ${this.docente} tiene ${this.estudiantes.length} estudiantes
}


}
console.log("curso: ", curso.nombre, curso.horario.dia);
console.log(curso.estudiantes[1]);
const clave = "creditos";
console.log("creditos: ", curso [clave]);