// URL de la API para obtener los primeros Pokémon
const url = "https://pokeapi.co/api/v2/pokemon";

// Obtener el contenedor principal donde se colocarán los Pokémon
const container = document.getElementById('pokemon-container');

// Hacer la llamada inicial a la API
fetch(url)
    .then(response => {
        // Convertimos la respuesta a JSON
        response.json()
            .then(data => {



                // Recorrer la lista de Pokémon obtenida
                data.results.forEach(pokemon => {
                    // Para cada Pokémon, hacemos otra llamada a su URL para obtener más detalles
                    fetch(pokemon.url)
                        .then(response => response.json())
                        .then(pokemonData => {
                            // Crear un div para el Pokémon
                            const pokemonDiv = document.createElement('div');
                            pokemonDiv.classList.add('pokemon');

                            // Crear la imagen del Pokémon
                            const pokemonImg = document.createElement('img');
                            pokemonImg.src = pokemonData.sprites.front_default;
                            pokemonImg.alt = pokemon.name;

                            // Añadir un evento click para mostrar el nombre del Pokémon
                            pokemonDiv.addEventListener('click', () => {
                                alert(`¡Es ${pokemon.name}!`);
                            });

                            // Insertar la imagen dentro del div
                            pokemonDiv.appendChild(pokemonImg);

                            // Insertar el div en el contenedor principal
                            container.appendChild(pokemonDiv);
                        })

                        
                        .catch(error => {
                            console.error("Error al obtener los detalles del Pokémon:", error);
                        });
                });
            })
            .catch(error => {
                console.error("Error al procesar los datos JSON:", error);
            });
    })
    .catch(error => {
        console.error("Error al hacer el fetch inicial:", error);
    });
