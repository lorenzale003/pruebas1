// URL de la API para obtener las naves espaciales de Star Wars
const url = "https://swapi.dev/api/starships/";

// Hacer la llamada a la API
fetch(url)
    .then(response => {
        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error("Error al obtener los datos de la API");
        }

        // Convertir la respuesta a JSON
        return response.json();
    })
    .then(data => {
        // Verificar si los datos contienen la propiedad 'results' y si es un array
        if (!data.results || !Array.isArray(data.results)) {
            throw new Error("Estructura de datos inesperada en la API");
        }

        // Filtrar las naves que tienen más de 100 pasajeros
        const filteredStarships = data.results.filter(starship => {
            // Convertir el valor de passengers a número (algunos valores pueden ser "unknown" o strings)
            const passengers = parseInt(starship.passengers.replace(/,/g, ''), 10);
            return !isNaN(passengers) && passengers > 100;
        });

        // Mapear para obtener un nuevo objeto con name y model
        const starshipsInfo = filteredStarships.map(starship => ({
            name: starship.name,
            model: starship.model
        }));
 
        // Imprimir el resultado en la consola
        console.log("Starships con más de 100 pasajeros:", starshipsInfo);
    })
    .catch(error => {
        console.error("Error al procesar los datos de la API:", error);
    });
