
/**
 * Reto 2: Gestor de estudiantes 
 * (ordenar por nombre de manera ascendente, aprobaron/no, agregar estudiantes)
 */

const estudiantes = [
  {
    id: 1,
    nombre: "Ana López",
    edad: 20,
    carrera: "Ingeniería",
    nota: 4,
    aprobado: true
  },
  {
    id: 2,
    nombre: "Luis Pérez",
    edad: 22,
    carrera: "Administración",
    nota: 4.5,
    aprobado: false
  },
  {
    id: 3,
    nombre: "María García",
    edad: 19,
    carrera: "Medicina",
    nota: 4.8,
    aprobado: true
  },
  {
    id: 4,
    nombre: "Carlos Ruiz",
    edad: 21,
    carrera: "Derecho",
    nota: 2.5,
    aprobado: true
  },
  {
    id: 5,
    nombre: "Sofía Torres",
    edad: 23,
    carrera: "Arquitectura",
    nota: 2,
    aprobado: false
  },
  {
    id: 6,
    nombre: "Diego Fernández",
    edad: 20,
    carrera: "Informática",
    nota: 3.2,
    aprobado: true
  },
  {
    id: 7,
    nombre: "Valentina Morales",
    edad: 18,
    carrera: "Psicología",
    nota: 2.8,
    aprobado: true
  },
  {
    id: 8,
    nombre: "Javier Núñez",
    edad: 24,
    carrera: "Economía",
    nota: 1,
    aprobado: false
  }
];

function clasificarNota(nota){
    if(typeof nota != "number" || nota < 0 || nota > 5) return "Inválida"
    if(nota>=4.5) return "Excelente"
    if(nota>=4.0) return "Buena"
    if(nota>=3.0) return "Aprobado"
    return "Reprobado"
}


estudiantes.forEach(est => {
    est.clasificacion = clasificarNota(est.nota);
    est.aprobado = est.nota >= 3;
});

const nuevoEstudiante = {
  id: 9,
  nombre: "Camilita",
  edad: 21,
  carrera: "Diseño",
  nota: 4.2
};

estudiantes.push(nuevoEstudiante);


estudiantes.forEach(est => {
    est.clasificacion = clasificarNota(est.nota);
    est.aprobado = est.nota >= 3;
});


estudiantes.sort((a, b) => 
    a.nombre.localeCompare(b.nombre)
);

console.log(" Ordenados por nombre:");
console.log(estudiantes);


const aprobados = estudiantes.filter(est => est.aprobado);
console.log("Aprobados:");
console.log(aprobados);

const reprobados = estudiantes.filter(est => !est.aprobado);
console.log(" Reprobados:");
console.log(reprobados);