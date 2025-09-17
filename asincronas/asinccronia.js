const resultado = ()=> console.log("Datos...")
const error = () => console.log("No se han podido cargar los datos")


new Promise ((resolve, reject) = reject())
.then((resultado))
.catch((error))
.finally(() => console.log("Proceso terminado"))                                        
