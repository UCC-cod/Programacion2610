// Mini visor de Pokémon usando PokéAPI

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('pokemonInput');
    const btn = document.getElementById('searchBtn');
    const info = document.getElementById('pokemonInfo');
    const errorMsg = document.getElementById('errorMsg');

    // Mostrar el último Pokémon consultado si existe
    const lastPokemon = localStorage.getItem('lastPokemon');
    if (lastPokemon) {
        fetchPokemon(lastPokemon);
    }

    btn.addEventListener('click', () => {
        const name = input.value.trim().toLowerCase();
        if (name) {
            fetchPokemon(name);
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            btn.click();
        }
    });

    function fetchPokemon(name) {
        errorMsg.textContent = '';
        info.innerHTML = '';
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => {
                if (!res.ok) throw new Error('Pokémon no encontrado');
                return res.json();
            })
            .then(data => {
                localStorage.setItem('lastPokemon', name);
                const img = data.sprites.front_default;
                const types = data.types.map(t => t.type.name).join(', ');
                const number = data.id;
                info.innerHTML = `
                    <img src="${img}" alt="${data.name}" class="pokemon-img">
                    <div><strong>#${number}</strong> ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</div>
                    <div>Tipo: ${types}</div>
                `;
            })
            .catch(err => {
                errorMsg.textContent = err.message;
            });
    }
});
