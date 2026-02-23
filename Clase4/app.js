//Peticiones

async function obtenerPokemon(nombre) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`

    try {

        //Petición GET con Fetch
        const respuesta = await fetch(url);
        //console.log("Respuesta", respuesta);

        //Manejando el error
        if(!respuesta.ok) throw new Error(`Error: ${respuesta.status}`)
        
        //Manejo los datos de la respuesta
        const data = await respuesta.json();

        //Probar los datos
        console.log("Respuesta", data);
        console.log("Nombre del pokemon: ", data.name);
        console.log("URL imagen: ", data.sprites.front_default);        

    } catch (error) {
        //Con el catch manejo los errores
        console.error("Hubo un error al consular la API: ", error.message)
    }
    
}

obtenerPokemon("dito");