const numeros = [1,2,3,4]
const suma = numeros.reduce((acum, num)=> acum + num, 0);
console.log(suma);
const producto = numeros.reduce((acum, num)=> acum * num, 1);
console.log(producto);

const frutas = ['fresas', 'manzana', 'pera', 'fresas'];
const cuentaFrutas = frutas.reduce((acum, fruta)=> {
    acum[fruta] = (acum[fruta] || 0) +1;
    return acum
},{}
);
console.log(cuentaFrutas);

const numbers = [5,8,6,34,76,100];
const media = numbers.reduce((acum, number) => acum + number, 0) / numbers.length
console.log(media);
