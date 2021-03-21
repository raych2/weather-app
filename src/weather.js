import { processData, renderDisplay } from './display';

async function fetchWeatherData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=eca8bb460056c04ed47adc55ea4e1a64`,
    { mode: 'cors' }
  );
  if (response.status === 400) {
    alert('Enter a city');
  } else if (response.status === 404) {
    alert('City not found');
  } else {
    const weatherData = await response.json();
    const weatherObj = processData(weatherData);
    renderDisplay(weatherObj);
  }
}

export { fetchWeatherData };
