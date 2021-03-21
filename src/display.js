const weatherDisplay = document.querySelector('.container');

function processData(data) {
  const loc = data.name;
  const weatherDescription = data.weather[0].description;
  const currentTemp = Math.round(data.main.temp);
  const maxTemp = Math.round(data.main.temp_max);
  const minTemp = Math.round(data.main.temp_min);
  const feels = Math.round(data.main.feels_like);
  const humidity = Math.round(data.main.humidity);
  const windSpeed = Math.round(data.wind.speed);
  const content = {
    loc,
    weatherDescription,
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
  currentTempDisplay.innerText = `${obj.currentTemp}°`;
  maxTempDisplay.innerText = `H: ${obj.maxTemp}°`;
  minTempDisplay.innerText = `L: ${obj.minTemp}°`;
  feelsDisplay.innerText = `${obj.feels}°`;
  humidityDisplay.innerText = `${obj.humidity}%`;
  windDisplay.innerText = `${obj.windSpeed} mph`;
  let displayList = [
    cityName,
    descriptionDisplay,
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
}

export { processData, renderDisplay, weatherDisplay };
