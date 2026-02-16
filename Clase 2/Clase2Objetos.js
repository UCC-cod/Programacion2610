// Objetos 

const curso = {
    nombre: "Programación",
    creditos: 4,
    docente: "Adriana",
    horario:{
        dia:"lunes",
        hora: 6 
    },
    estudiantes: ["Eilin", "Alexandra"],
    resumen(){
        return `${this.docente} tiene ${this.estudiantes.length} estudiantes`
    },

    resumenhorario (){
        return `El horario de la clase es : dia ${this.horario.dia} y hora ${this.horario.hora}`
    }
}

console.log("Curso: ", curso.nombre, curso.horario.dia);
console.log( curso.estudiantes[1]);
const clave = "docente";
console.log ("Creditos: ", curso [clave]);
console.log("Llamando la función :", curso.resumen());
console.log("Llamando la función :", curso.resumenhorario());
console.log( "Ordenar descendente :", curso.estudiantes.sort().reverse());

const numeros = [2,7,1,5,4,9]
//Ordenar de manera descendente 
// Función solo para números 
console.log( "Ordenar :", numeros.sort((a,b) => b-a));

const nombre = "eilin ALEXANDRA Carrillo QUINTERO";

console.log("Mayúsculas: ", nombre.toUpperCase());
console.log("MINÚSCULAS: ", nombre.toLowerCase());
