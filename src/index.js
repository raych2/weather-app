import './style.css';
import { weatherDisplay } from './display';
import { fetchWeatherData } from './weather';

const form = document.querySelector('form');

fetchWeatherData('San Francisco');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchVal = document.getElementById('search').value;
  weatherDisplay.innerHTML = '';
  fetchWeatherData(searchVal);
  form.reset();
});
