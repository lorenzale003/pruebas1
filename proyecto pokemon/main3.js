const url = "https://pokeapi.co/api/v2/pokemon";

async function fetchPokemonData() {
    try {
        // Obtener la lista de Pokémon
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al obtener la lista de Pokémon: ${response.status}`);
        }
        const data = await response.json();
        const pokemonList = data.results;

        // Seleccionar el div principal
        const divPrincipal = document.getElementById('divPrincipal');
        divPrincipal.classList.add('ancho500');

        for (const pokemon of pokemonList) {
            const pokemonName = pokemon.name;
            const pokemonUrl = pokemon.url;

            try {
                // Obtener los detalles de cada Pokémon
                const pokemonResponse = await fetch(pokemonUrl);
                if (!pokemonResponse.ok) {
                    throw new Error(`Error al obtener datos del Pokémon ${pokemonName}: ${pokemonResponse.status}`);
                }
                const pokemonData = await pokemonResponse.json();
                const pokemonImage = pokemonData.sprites.front_default;

                if (pokemonImage) {
                    // Crear el div para la imagen
                    const divImg = document.createElement('div');
                    divImg.classList.add('ancho50');

                    // Crear la imagen
                    const img = document.createElement('img');
                    img.src = pokemonImage;
                    img.alt = pokemonName;
                    img.title = pokemonName;

                    // Añadir evento click
                    img.addEventListener('click', () => {
                        alert(`¡Es ${pokemonName.toUpperCase()}!`);
                    });

                    // Añadir imagen al div y div al contenedor principal
                    divImg.appendChild(img);
                    divPrincipal.appendChild(divImg);
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    } catch (error) {
        console.error(error.message);
    }
}

// Llamar a la función principal
fetchPokemonData();

7
 