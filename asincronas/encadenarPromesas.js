function obtenerUsuario (id){
    return new Promise(resolve =>{
        setTimeout(()=> resolve({id, nombre:'Javi'}))
    }) 
};

function obtenerPedidos (usuario){
    return new Promise(resolve =>{
        setTimeout(()=> resolve(['Pedido1', 'Pedido2']))
    })
};

function obtenerDetalle (pedido){
    return new Promise (resolve =>{
        setTimeout(()=> resolve(`Detalles del pedido : ${pedido}`))
    })
}

obtenerUsuario(1)
    .then (usuario =>obtenerPedidos(usuario))
    .then(pedido => obtenerPedidos(pedido[0]))
    .then(detalle => console.log(detalle))
    .catch(err => console.log(err));