const apiKey = "fe94effad13648a2a69224624230612";
const location = "Addis Ababa";
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

export async function temp() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const currentTemp = document.querySelector(".current-temprature");

    currentTemp.textContent = `${data.temp_current_c}`;
  } catch (error) {}
}
temp();
