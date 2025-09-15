const mechas = [
{ nombre: 'ZX-01', categoria: 'Retro', poder: 120, piloto: 'Akira' },
{ nombre: 'ByteBastion', categoria: 'Cyber', poder: 200, piloto: 'Maya' },
{ nombre: 'PixelRaptor', categoria: 'Retro', poder: 95, piloto: 'Leo' },
{ nombre: 'NullPointer', categoria: 'Buggy', poder: 75, piloto: 'Rita' }
];
console.log(mechas)
//1 copiar el array y añadir dos nuevos
const nuevosMechas = [
    { nombre:'Desctructor', categoria: 'Retro', poder: 220, piloto:'tamisha'  }, 
    { nombre:'Dragon', categoria: 'Cyber', poder: 125, piloto:'thalia'  }
];
const mechasCopia = [...mechas, ...nuevosMechas]
console.log(mechasCopia);
//2 Destructing
const{nombre: primeroNombre, categoria: primeraCategoria} = mechas[0]
console.log(`El primer mecha es ${primeroNombre} y su categoria es ${primeraCategoria}`)
//3 Filtrar por categoria
const filtrarPorCategoria =(array, categoria) =>
    array.filter(mecha =>mecha.categoria === categoria);
console.log("Filtrados por cyber:", filtrarPorCategoria(mechasCopia, "Retro"))
//4 Arrow function aumentar poder
const aumentarPoder = mecha => ({
    ...mecha,
    poder: Math.round(mecha.poder*1.15)
})

//5 crear arry de potenciados
const mechasPotenciados = mechasCopia.map(aumentarPoder)
console.log(mechasPotenciados)
//6 rest destructuring 
const[primer, segundo, tercero, ...resto] = mechasPotenciados;
const pilotos= [primer, segundo, tercero].map(p =>p.piloto)
const mensaje = `Los primeros pilotos son ${pilotos}`;
console.log(mensaje)
