const weatherDisplay = document.querySelector('.container');
const button = document.querySelector('.unit-change');

function processData(data) {
  const loc = data.name;
  const weatherDescription = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;
  const currentTemp = Math.round(data.main.temp);
  const maxTemp = Math.round(data.main.temp_max);
  const minTemp = Math.round(data.main.temp_min);
  const feels = Math.round(data.main.feels_like);
  const humidity = Math.round(data.main.humidity);
  const windSpeed = Math.round(data.wind.speed);
  const content = {
    loc,
    weatherDescription,
    weatherIcon,
    currentTemp,
    maxTemp,
    minTemp,
    feels,
    humidity,
    windSpeed,
  };
  console.log(content);
  return content;
}

function renderDisplay(obj) {
  const weatherContent = document.createElement('div');
  const cityName = document.createElement('div');
  const iconDisplay = document.createElement('img');
  const descriptionDisplay = document.createElement('div');
  const currentTempDisplay = document.createElement('div');
  const maxTempDisplay = document.createElement('div');
  const minTempDisplay = document.createElement('div');
  const feelsDisplay = document.createElement('div');
  const humidityDisplay = document.createElement('div');
  const windDisplay = document.createElement('div');
  cityName.classList.add('location');
  descriptionDisplay.classList.add('weather-type');
  currentTempDisplay.classList.add('current');
  maxTempDisplay.classList.add('temp');
  minTempDisplay.classList.add('temp');
  feelsDisplay.classList.add('extra');
  humidityDisplay.classList.add('extra');
  windDisplay.classList.add('extra');
  cityName.innerText = obj.loc;
  descriptionDisplay.innerText = obj.weatherDescription;
  iconDisplay.src = `http://openweathermap.org/img/wn/${obj.weatherIcon}.png`;
  currentTempDisplay.innerText = `${obj.currentTemp}°`;
  maxTempDisplay.innerText = `H: ${obj.maxTemp}°`;
  minTempDisplay.innerText = `L: ${obj.minTemp}°`;
  feelsDisplay.innerText = `Feels like: ${obj.feels}°`;
  humidityDisplay.innerText = `Humidity: ${obj.humidity}%`;
  windDisplay.innerText = `Wind: ${obj.windSpeed} mph`;
  let displayList = [
    cityName,
    descriptionDisplay,
    iconDisplay,
    currentTempDisplay,
    maxTempDisplay,
    minTempDisplay,
    feelsDisplay,
    humidityDisplay,
    windDisplay,
  ];
  displayList.forEach((item) => {
    weatherContent.append(item);
  });
  weatherDisplay.append(weatherContent);

  function changeUnits(e) {
    if (e.target.value === 'C') {
      currentTempDisplay.innerText = `${switchToCelcius(obj.currentTemp)}°`;
      maxTempDisplay.innerText = `H: ${switchToCelcius(obj.maxTemp)}°`;
      minTempDisplay.innerText = `L: ${switchToCelcius(obj.minTemp)}°`;
      feelsDisplay.innerText = `Feels like: ${switchToCelcius(obj.feels)}°`;
      windDisplay.innerText = `Wind: ${switchToMetric(obj.windSpeed)} m/s`;
      e.target.value = 'F';
      e.target.innerText = '°F';
    } else {
      currentTempDisplay.innerText = `${obj.currentTemp}°`;
      maxTempDisplay.innerText = `H: ${obj.maxTemp}°`;
      minTempDisplay.innerText = `L: ${obj.minTemp}°`;
      feelsDisplay.innerText = `Feels like: ${obj.feels}°`;
      windDisplay.innerText = `Wind: ${obj.windSpeed} mph`;
      e.target.value = 'C';
      e.target.innerText = '°C';
    }
  }

  button.addEventListener('click', changeUnits);
}

function switchToCelcius(temp) {
  return Math.round((temp - 32) * (5 / 9));
}

function switchToMetric(speed) {
  return Math.round(speed / 2.237);
}

export { processData, renderDisplay, weatherDisplay };
