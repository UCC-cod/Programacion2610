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

//ordenamos por nombre
const ordenadosPorNombre = [...estudiantes].sort((a, b) =>
  a.nombre.localeCompare(b.nombre)
);

console.log(ordenadosPorNombre);

//filtra estudiantes aprobados 
const aprobados = estudiantes.filter(est => est.aprobado === true);
console.log(aprobados);

//NO aprobados 
const noAprobados = estudiantes.filter(est => est.aprobado === false);
console.log(noAprobados);