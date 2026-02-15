/**
 * Reto 2: Gestor de estudiantes 
 * (ordenar por nombre de manera ascendente, aprobaron/no, agregar estudiantes)
 * Crear 
 * 
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



// 1. Ordenar por nombre (ascendente)
function ordenarPorNombre(lista) {
  return lista.sort(function(a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    } else if (a.nombre < b.nombre) {
      return -1;
    } else {
      return 0;
    }
  });
}

console.log("Estudiantes ordenados por nombre:");
console.log(ordenarPorNombre(estudiantes));


// 2. Mostrar aprobados
function mostrarAprobados(lista) {
  const aprobados = lista.filter(function(est) {
    return est.aprobado === true;
  });

  console.log("Estudiantes aprobados:");
  console.log(aprobados);
}

mostrarAprobados(estudiantes);


// 3. Mostrar no aprobados
function mostrarNoAprobados(lista) {
  const noAprobados = lista.filter(function(est) {
    return est.aprobado === false;
  });

  console.log("Estudiantes no aprobados:");
  console.log(noAprobados);
}

mostrarNoAprobados(estudiantes);


// 4. Agregar estudiante
function agregarEstudiante(lista, nombre, edad, carrera, nota) {

  let nuevoId = lista.length + 1;

  let nuevoEstudiante = {
    id: nuevoId,
    nombre: nombre,
    edad: edad,
    carrera: carrera,
    nota: nota,
    aprobado: nota >= 3 ? true : false
  };

  lista.push(nuevoEstudiante);

  console.log("Estudiante agregado correctamente");
}

agregarEstudiante(estudiantes, "Eilin Carrillo", 19, "Ingenieria", 4.2);

console.log("Lista actualizada:");
console.log(estudiantes);
