import "./style.css";
import { format, add } from "date-fns";

const weekContainer = document.querySelector(".date-container");

for (let i = 0; i < 7; i++) {
  let date = add(new Date(), { days: i });
  let weekDay = document.createElement("div");
  weekDay.textContent = format(date, "EEE");
  weekDay.classList.add("date");
  weekContainer.appendChild(weekDay);
}
