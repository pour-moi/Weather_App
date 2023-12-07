export const apiKey = "fe94effad13648a2a69224624230612";
document
  .getElementById("city")
  .addEventListener("input", async function (event) {
    this.value = event.target.value;
    await temp();
  });
const locationElement = document.getElementById("city");

export function location() {
  return locationElement.value;
}

export function apiUrl() {
  return `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location()}`;
}

export function getWeatherIcon(weatherCondition) {
  const weatherIcons = {
    Sunny: "../weather_icons/sunny.svg",
    Cloudy: "../weather_icons/cloudy.svg",
    Rainy: "../weather_icons/Raining.svg",
    Snowy: "../weather_icons/cloud+snow.svg",
    Windy: "../weather_icons/Windy.svg",
    Foggy: "../weather_icons/cloudy.svg",
    Hazy: "../weather_icons/cloud+snow.svg",
    Thunderstorm: "../weather_icons/Thunder.svg",
    "Partly cloudy": "../weather_icons/cloud_sunnny.svg",
    "Mostly Sunny": "../weather_icons/sunny+cloud.svg",
    "Patchy rain possible": "../weather_icons/rain+sunny.svg",
  };

  return weatherIcons[weatherCondition];
}

export async function temp() {
  try {
    const response = await fetch(apiUrl());
    const data = await response.json();
    const currentTemp = document.getElementById("currenttemp");
    const condition = document.querySelector(".condition");
    const icons = document.querySelector(".cloud");
    const weatherAtmo = getWeatherIcon(data.current.condition.text);

    currentTemp.textContent = `${data.current.temp_c}°`;
    condition.textContent = `${data.current.condition.text}`;
    icons.src = weatherAtmo;
  } catch (error) {}
}
temp();
