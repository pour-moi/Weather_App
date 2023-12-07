import "./style.css";
import { format, add } from "date-fns";
import { temp, apiKey, location, getWeatherIcon } from "./temp.js";
import sunnyIcon from "../weather_icons/sunny.svg";
import cloudyIcon from "../weather_icons/cloudy.svg";
import rainyIcon from "../weather_icons/Raining.svg";
import snowyIcon from "../weather_icons/cloud+snow.svg";
import windyIcon from "../weather_icons/Windy.svg";
import foggyIcon from "../weather_icons/cloudy.svg";
import hazyIcon from "../weather_icons/cloud+snow.svg";
import thunderstormIcon from "../weather_icons/Thunder.svg";
import partlyCloudyIcon from "../weather_icons/cloud_sunnny.svg";
import mostlySunnyIcon from "../weather_icons/sunny+cloud.svg";
import patchyRainPossibleIcon from "../weather_icons/rain+sunny.svg";
import locationicon from "../weather_icons/18545250741556274015.svg";

temp();
const weekContainer = document.querySelector(".date-container");
const nextDaysUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location()}&days=5`;

for (let i = 0; i < 5; i++) {
  let date = add(new Date(), { days: i });
  let weekDay = document.createElement("div");
  weekDay.textContent = format(date, "EEE");
  weekDay.classList.add("date");
  weekContainer.appendChild(weekDay);
}

async function getNextDaysWeather() {
  const response = await fetch(nextDaysUrl);
  const datas = await response.json();

  const forecast = datas.forecast.forecastday;
  const weathers = document.querySelector(".icon-container");

  forecast.forEach((day) => {
    let weatherDays = document.createElement("img");
    let iconsForWeekdays = getWeatherIcon(day.day.condition.text);
    weatherDays.src = iconsForWeekdays;
    weatherDays.classList.add("weathers");
    weathers.appendChild(weatherDays);
  });
}

getNextDaysWeather();
