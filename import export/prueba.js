const numeros = [1,2,3,9,8,5]
//forma 1
/*for(let index = 0; index < numeros.length; index ++){
    const element = numeros[index];
    console.log(element);
}*/
//forma 2
const listaNumeros = numeros.map(n =>console.log(n));


const nombres = ["Ana", "Juan", "Pepe"]
const nombresMayusculas = nombres.map(nombres =>nombres.toUpperCase());

console.log(nombresMayusculas);

const estudiante = [
    {nombre: "Ana", nota: 7},
    {nombre: "Juan", nota: 4}
];
const notasActualizadas = estudiante.map(est => ({
    nombre: est.nombre,
    nota: est.nota + 1
}));
console.log(notasActualizadas);

const numeros1 = [1,3,7,12,28,7];
const pares = numeros1.filter(num => num%2 ===0);
console.log(pares);

//rango
const estudiantes = [
    {nombre:"Ana", edad:19},
    {nombre: "Juan", edad:13},
    {nombre: "Alberto", edad:67}

];
const mayores = estudiantes.filter(estu => estu.edad >=18);
console.log(mayores)

const trabajadores = [
    {nombre:"Ana", edad:19},
    {nombre: "Juan", edad:13},
    {nombre: "Alberto", edad:67}

];
const listaTrabajadores = trabajadores.filter(tra => tra.edad >=18 && tra.edad <=65);
console.log(listaTrabajadores)
