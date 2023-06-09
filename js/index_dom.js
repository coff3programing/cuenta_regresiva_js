import countdown from "./dom/cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  countdown(
    "countdown",
    "Jun 09, 2023 11:47:00",
    "Happy birthday Miguel, it has been a year full of changes😁"
  );
});
