/**
 * Reto 2: Gestor de estudiantes 
 * (ordenar por nombre de manera ascendente, aprobaron/no, agregar estudiantes)
 * 
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

// Devuelve una nueva lista ordenada por `nombre` ascendente
function sortByNameAsc(list) {
  return [...list].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' }));
}

// Filtra los estudiantes que aprobaron
function filterApproved(list) {
  return list.filter(s => Boolean(s.aprobado));
}

// Agrega un estudiante al arreglo (mutación intencional) y devuelve el objeto agregado
function addStudent(list, student) {
  const maxId = list.reduce((m, s) => Math.max(m, s.id || 0), 0);
  const newStudent = Object.assign({ id: maxId + 1 }, student);
  list.push(newStudent);
  return newStudent;
}

// Demo / ejemplos de uso
console.log('Lista original (nombres):', estudiantes.map(s => s.nombre));

const ordenados = sortByNameAsc(estudiantes);
console.log('Ordenados por nombre (asc):', ordenados.map(s => s.nombre));

const aprobados = filterApproved(estudiantes);
console.log('Aprobados:', aprobados.map(s => `${s.nombre} (nota: ${s.nota})`));

console.log('Agregando un estudiante de ejemplo...');
addStudent(estudiantes, { nombre: 'Pedro Álvarez', edad: 20, carrera: 'Matemáticas', nota: 3.7, aprobado: true });
console.log('Después de agregar (nombres):', estudiantes.map(s => s.nombre));
console.log('Ordenados después de agregar:', sortByNameAsc(estudiantes).map(s => s.nombre));

// Exportar funciones si se quiere usar desde otros módulos (opcional)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { estudiantes, sortByNameAsc, filterApproved, addStudent };
}