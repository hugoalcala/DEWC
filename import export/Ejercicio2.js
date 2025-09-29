const ventas = [
    {id:1, precioCosto: 67},
    {id:2, precioCosto: 89},
    {id:3, precioCosto: 97},
    {id:4, precioCosto: 167},
    {id:5, precioCosto: 7},
]
//el iva es del 21%
// poner iva y quedarnos solo con ventas que superen 100 euros y devolver suma de todas las ventas por encima de los 100
const totalMayores100 = ventas
.map(venta => venta.precioCosto * 1.21)
.filter(venta => venta >100)
.reduce((acc, venta) => acc +venta, 0)

console.log(totalMayores100);

const tareas = [
    {texto:'estudiar', completada:true},
    {texto: 'correr marathon', completada:false}
];

const tareasCompletada = tareas
    .filter(tarea =>tarea.completada)
    .map(tarea => tarea.texto)
console.log(tareasCompletada);