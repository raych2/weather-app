import { processData, renderDisplay } from './display';

const errorMessage = document.querySelector('.error');

async function fetchWeatherData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=eca8bb460056c04ed47adc55ea4e1a64`,
    { mode: 'cors' }
  );
  if (response.status === 400 || response.status === 404) {
    errorMessage.innerText = `${location} not found`;
  } else {
    const weatherData = await response.json();
    const weatherObj = processData(weatherData);
    errorMessage.innerText = '';
    renderDisplay(weatherObj);
  }
}

export { fetchWeatherData };
