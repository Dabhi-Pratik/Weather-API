// Get form and listen for submit event
document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    try {

        // Get city name from input field
        const cityName = document.getElementById("input").value;

        // Fetch weather data from OpenWeather API
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=02007539d6696a40a5796f5433445425&units=metric`
        );

        // Convert response to JSON
        const data = await res.json();
        console.log(data);

        // If city is found successfully
        if (data.cod === 200) {
            // Create weather box
            const box = document.createElement("div");
            box.className = "weather-box";

            // Insert weather data
            box.innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].main}</p>
      `;
            // Add box to container
            container.appendChild(box);
        }
        // If city not found
        else {
            container.innerHTML = `<h1>City Not Found.......!</h1>`;

            throw new Error(`<h1>Failed to Fetching Data.......!</h1>`)
        }
    } catch (error) {
        // Handle errors
        console.log(error);
    }
});