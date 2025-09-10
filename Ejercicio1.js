//array de productos que van a tener el nombre y el precio 
const productos = [
  { nombre: "camisa", precio: 20 },
  { nombre: "pantalones", precio: 35 },
  { nombre: "zapatos", precio: 50 }
]
//funcion flecha para calcular el precio con iva que es el 21%
//generar un template dinamico
const precioConIVA = prod => `${prod.nombre}: ${prod.precio}€ + IVA = ${prod.precio*1.21}€`;
const mensajes = productos.map(precioConIVA);
console.log(mensajes);
