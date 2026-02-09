//obejeto

const curso = {
    nombre: "Programacion",
    creditos:4,
    docente: "Adriana",
    horario: {
        dia:"lunes",
        hora: 6
    },
    estudiantes: ["juan", "karla", "valery"],
    resumen(){
        return `${this.docente} tiene ${this.estudiantes.length} estudiantes`
    },
    resumenHorario(){
        return `El horario de la clase es: dia ${this.horario.dia}`

    }
}



console.log("curso: ",curso.nombre, curso.horario.dia);
console.log(curso.estudiantes[0]);
const clave = "docente"
console.log("creditos: ", curso[clave]);
console.log("llamando la funcion: ", curso.resumenHorario());
console.log("odernar decendente: ", curso.estudiantes.sort().reverse());


const numeros = [5,7,8,0,10,47,15]
//ordenar de manera descendente
//solo para numeros 
console.log("ordenar: ", numeros.sort((a,b)=>b-a));


//poner todo en mayuscula

const nombre = "juan diego castrillon"
console.log("Mayusculas: ", nombre.toUpperCase());

//los pone en minusculas 
const nombre2 = "JUAN DIEGO CASTRILLON CASAS"
console.log("Mayusculas: ", nombre.toLowerCase());