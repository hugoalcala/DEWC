async function consultarApi(){
  try{
    let respuesta = await fetch("https://rickandmortyapi.com/api/character");
    let datos = await respuesta.json();
    console.log(`El nombre del personaje es ${datos[0].name}`);
  } catch (error) {
    console.error("Error al consultar la API:", error);
  }
}


const nombres = () => nombre.map(cargarDatos());