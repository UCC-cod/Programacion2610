async function obtenerPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=10`;

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error(`Error: ${respuesta.status}`);

        const data = await respuesta.json();

        // Recorrer los 10 pokemon
        for (const pokemon of data.results) {
            const respuestaPokemon = await fetch(pokemon.url);
            const dataPokemon = await respuestaPokemon.json();

            pintarPokemon(dataPokemon);

            console.log("Nombre Pokemon:", dataPokemon.name);
            console.log("URL Imagen:", dataPokemon.sprites.front_default);
        }

    } catch (error) {
        console.error("Hubo un error", error);
    }
}
obtenerPokemon();