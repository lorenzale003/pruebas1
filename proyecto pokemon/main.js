// URL de la API
const url = "https://pokeapi.co/api/v2/pokemon/growlithe";

// Hacer la llamada a la API
fetch(url)
    .then(response => {
        // Cuando la respuesta es exitosa, procesamos los datos como JSON
        response.json()
            .then(data => {
                

            })
            .catch(error => {
                console.error("Error al hacer el json:", error);
            }); // Parsear la respuesta JSON
    }).catch(error => {
        console.error("Error al hacer el fetch:", error);
    });
