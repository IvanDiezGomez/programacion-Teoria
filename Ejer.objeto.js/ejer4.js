let alumnos = [
  { nombre: "Ivan Diez Gomez", nota: 10 },
  { nombre: "luciana Pereira", nota: 9 },
  { nombre: "florencia Garcia", nota: 8 }
];

let mejorAlumno = alumnos.reduce((max, alumno) => {
  return alumno.nota > max.nota ? alumno : max;
});

console.log(mejorAlumno.nombre);