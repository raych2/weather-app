import './style.css';
import { fetchWeatherData } from './weather';

const form = document.querySelector('form');

fetchWeatherData('San Francisco');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchVal = document.getElementById('search').value;
  fetchWeatherData(searchVal);
  form.reset();
});
