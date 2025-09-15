//FUNCION NORMAL
function saludar(nombre){
    return "hola amigo " + nombre;
}
console.log(saludar("Hugo"))

//FUNCION FLECHA

const saludarFlecha = nombre => "hola amigo " + nombre;
console.log(saludarFlecha("Juan"))
//Con mas de un parametro
const saludarFlecha2 = (nombre, grupo) => "hola amigo " + nombre + " somos el grupo de " + grupo;
console.log(saludarFlecha2("Juan", "DAW"))

//Map en flecha
const numeros = [1,2,3,4];
const numerosCuadrados = numeros.map(num => num*num);
console.log(numerosCuadrados);

//filtrar
const filtraPares = numeros.filter(nume => nume % 2 === 0);
console.log(filtraPares)

//con dos variables

const suma = function(a, b){
    return a+b;
}
console.log(suma(3,5));

//con dos variables en flecha

const sumaFlecha = (a, b) => a+b;

console.log(sumaFlecha(9,9))

//templates 
const name = "javi";
console.log(`vaya peñazo que esta contando ${name}`);
const num1 = 3;
const num2 = 7;
console.log (`la suma de ${num1} y ${num2} es ${num1 + num2}`);

const numbers = [1,2,3];
const dobles = numbers.map(n => `El doble de ${n} es ${n*2}`);
console.log(dobles);

const persona = {nombre : 'Javi', edad: 45}
console.log(persona.edad)
console.log(persona['nombre'])

const frutas = ['fresas', 'manzana','pera']
console.log(frutas[3]) //en esta no habria 
const nuevaFruta = [...frutas, 'platanos']
console.log(nuevaFruta[3])//en esta seria platanos 


const people =[{nombre: 'Javi', edad:23},
               {nombre: 'Maria', edad: 39}
            ];
const persona2 = {...people[1], ciudad: 'madrid'}
console.log(people[1].edad)
console.log(people[0].nombre)
console.log(persona2['ciudad'])

const fruta = ['kiwi', 'fresas', 'pera', 'sandia'];
const [primero, segundo,...resto] = fruta;
console.log(primero);
console.log(segundo);
console.log(resto);

const numer =[1,2];
const [a=10, b=21, c=30]=numer;
console.log(a);
console.log(b);
console.log(c);

const mascota = [{tipo: "perro", nombre: "Rex"}]
const {nombre: apodo} = mascota
console.log(apodo)

function componente([nombre, edad]){
    return <p>{nombre} tiene {edad} años</p>
}