const apiKey = "fe94effad13648a2a69224624230612";
const location = "Addis Ababa";
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

export async function temp() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const currentTemp = document.getElementById("currenttemp");
    const condition = document.querySelector(".condition");

    currentTemp.textContent = `${data.current.temp_c}°`;
    condition.textContent = `${data.current.condition.text}`;
  } catch (error) {}
}
temp();
