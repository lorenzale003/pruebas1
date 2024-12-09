// Función para realizar el ejercicio
async function gatos_usa() {
    try {
        // Llamada a la API
        const response = await fetch("https://catfact.ninja/breeds");
        if (!response.ok) throw new Error("Error al obtener los datos de la API");
        
        const data = await response.json();
        const breeds = data.data; // Array con las razas de gatos
        
        // 1. Filtrar gatos de "United States"
        const usCats = breeds.filter(cat => cat.country === "United States");
        console.log("Gatos de United States:", usCats);

        // 2. Verificar si todos los gatos son de "United States"
        const allFromUS = usCats.every(cat => cat.country === "United States");
        console.log("¿Todos los gatos son de United States?:", allFromUS);

        // 3. Verificar si algún gato comienza con "A"
        const hasAName = usCats.some(cat => cat.breed[0].toUpperCase() === "A");
        console.log("¿Hay algún gato cuyo nombre comience con 'A'?:", hasAName);

        // 4. Crear un array con los gatos que cumplen la condición
        if (hasAName) {
            const catsWithA = usCats.filter(cat => cat.breed[0].toUpperCase() === "A");
            console.log("Gatos cuyos nombres comienzan con 'A':", catsWithA);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Llamar a la función
gatos_usa();
