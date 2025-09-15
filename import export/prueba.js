const numeros = [1,2,3,9,8,5]
//forma 1
/*for(let index = 0; index < numeros.length; index ++){
    const element = numeros[index];
    console.log(element);
}*/
//forma 2
const listaNumeros = numeros.map(n =>console.log(n));
