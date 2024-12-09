// URL de la API para obtener los primeros personajes Disney
const url = "https://api.disneyapi.dev/character?page=1&pageSize=500";

// Obtener el contenedor principal donde se colocarán los personajes de Disney
const container = document.getElementById('disney_container');

// Hacer la llamada inicial a la API
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
        // Verificar si los datos contienen la propiedad 'data' y si es un array
        if (Array.isArray(data.data)) {
            // Recorrer la lista de personajes obtenida
            data.data.forEach(dibujito => {
                // Crear un div para el personaje
                const disneyDiv = document.createElement('div');
                disneyDiv.classList.add('character-card');

                // Crear un enlace a la página web del personaje
                const disneyLink = document.createElement('a');
                disneyLink.href = dibujito.sourceUrl; // Usamos 'sourceUrl' para el enlace
                disneyLink.target = '_blank'; // Abrir en una nueva pestaña

                // Crear la imagen del personaje
                const disneyImg = document.createElement('img');
                disneyImg.src = dibujito.imageUrl; // Usamos 'imageUrl' para la imagen
                disneyImg.alt = dibujito.name; // Usamos el nombre del personaje como alt
                disneyImg.style.width = '100px'; // Ajustar el ancho de la imagen

                // Crear el nombre del personaje
                const disneyName = document.createElement('p');
                disneyName.textContent = dibujito.name; // Asignar el nombre del personaje

                // Añadir la imagen y el nombre dentro del enlace
                disneyLink.appendChild(disneyImg);
                disneyLink.appendChild(disneyName);

                // Insertar el enlace dentro del div
                disneyDiv.appendChild(disneyLink);

                // Insertar el div en el contenedor principal
                container.appendChild(disneyDiv);
            });
        } else {
            throw new Error("La respuesta no contiene una propiedad 'data' válida");
        }
    })
    .catch(error => {
        console.error("Error al procesar los datos JSON:", error);
    });
