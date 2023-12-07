import "./style.css";
const { format, add } = require("date-fns");
import { format, add } from "https://cdn.skypack.dev/date-fns";
import { temp, apiKey, location, getWeatherIcon } from "./temp.js";

temp();
const weekContainer = document.querySelector(".date-container");
const nextDaysUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location()}&days=5`;

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
