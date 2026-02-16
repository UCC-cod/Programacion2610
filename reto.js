/**
 * Reto 2: Gestor de estudiantes 
 * (ordenar por nombre de manera ascendente, aprobaron/no, agregar estudiantes)
 */

const estudiantes = [
  { id: 1, nombre: "Ana López", edad: 20, carrera: "Ingeniería", nota: 4, aprobado: true },
  { id: 2, nombre: "Luis Pérez", edad: 22, carrera: "Administración", nota: 4.5, aprobado: false },
  { id: 3, nombre: "María García", edad: 19, carrera: "Medicina", nota: 4.8, aprobado: true },
  { id: 4, nombre: "Carlos Ruiz", edad: 21, carrera: "Derecho", nota: 2.5, aprobado: true },
  { id: 5, nombre: "Sofía Torres", edad: 23, carrera: "Arquitectura", nota: 2, aprobado: false },
  { id: 6, nombre: "Diego Fernández", edad: 20, carrera: "Informática", nota: 3.2, aprobado: true },
  { id: 7, nombre: "Valentina Morales", edad: 18, carrera: "Psicología", nota: 2.8, aprobado: true },
  { id: 8, nombre: "Javier Núñez", edad: 24, carrera: "Economía", nota: 1, aprobado: false }
];

// Ordenar por nombre asc
const ordenarPorNombreAsc = (lista) =>
  [...lista].sort((a, b) =>
    a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase())
  );

// Estudiantes aprobados
const estudiantesAprobados = estudiantes.filter(e => e.aprobado);

// Estudiantes no aprobados
const estudiantesNoAprobados = estudiantes.filter(e => !e.aprobado);

// Agregar estudiante
const agregarEstudiante = (lista, nuevoEstudiante) => [
  ...lista,
  { ...nuevoEstudiante, nombre: nuevoEstudiante.nombre.toLowerCase() }
];

// Ejemplo
const nuevoEstudiante = {
  id: 9,
  nombre: "Laura Gómez",
  edad: 22,
  carrera: "Ingeniería de Software",
  nota: 4.2,
  aprobado: true
};

const estudiantesActualizados = agregarEstudiante(estudiantes, nuevoEstudiante);


console.log("Ordenados por nombre:", ordenarPorNombreAsc(estudiantes));
console.log("Aprobados:", estudiantesAprobados);
console.log("No aprobados:", estudiantesNoAprobados);
console.log("Lista actualizada:", estudiantesActualizados);
