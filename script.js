function getWeather() {
    const locationInput = document.getElementById("locationInput");
    const weatherInfo = document.getElementById("weatherInfo");

    const location = locationInput.value;

    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = 'b7fee2ca47fa1f6e0d421696c9c12903';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then((data) => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;

            weatherInfo.innerHTML = `
                <p><strong>Weather:</strong> ${weatherDescription}</p>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Humidity:</strong> ${humidity}%</p>
            `;
        })
        .catch((error) => {
            console.error(error);
            weatherInfo.innerHTML = '<p>City not found. Please try again.</p>';
        });
}
