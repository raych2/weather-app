import './style.css';

const form = document.querySelector('form');
let weatherDescription;
let currentTemp;
let maxTemp;
let minTemp;
let feels;
let humidity;
let windSpeed;

async function fetchWeatherData(location) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=eca8bb460056c04ed47adc55ea4e1a64`, {mode: 'cors'});
        if(response.status === 400) {
            alert('Enter a city');
        } else if (response.status === 404) {
            alert('City not found');
        } else {
            const data = await response.json();
            console.log(data);
            weatherDescription = data.weather[0].description;
            currentTemp = data.main.temp;
            maxTemp = data.main.temp_max;
            minTemp = data.main.temp_min;
            feels = data.main.feels_like;
            humidity = data.main.humidity;
            windSpeed = data.wind.speed;
            console.log(weatherDescription, currentTemp, maxTemp, minTemp, feels, humidity, windSpeed);
        }
}

fetchWeatherData('San Francisco');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchVal = document.getElementById('search').value;
    fetchWeatherData(searchVal);
    form.reset();
})