const apiKey = "fe94effad13648a2a69224624230612";
const location = "Addis Ababa";
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

function getWeatherIcon(weatherCondition) {
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
  };

  return weatherIcons[weatherCondition];
}

export async function temp() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
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
