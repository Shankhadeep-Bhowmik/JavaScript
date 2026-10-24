let placeInput = document.getElementById("placeInput");
let searchBtn = document.getElementById("searchBtn");
let placeName = document.getElementById("placeName");
let weatherEmoji = document.getElementById("weatherEmoji");
let temperature = document.getElementById("temperature");
let weatherCondition = document.getElementById("weatherCondition");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let currentDate = document.getElementById("currentDate");

placeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    let value = placeInput.value.trim();
    getLatLong(value);
    
  }
});
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = placeInput.value.trim();
  getLatLong(value);
  // getWeatherDetails();
});

function getLatLong(value) {
  if (value.trim() === "") {
    return alert("Enter the Place name!");
  }
  let res = fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=en&format=json`,
  );
  let data = res.json();
  let latitude = data.results[0].latitude;
  let longitude = data.results[0].longitude;
  console.log(data);
  getWeatherDetails(latitude, longitude);
  placeName.textContent = data.results[0].name;
}

async function getWeatherDetails(latitude, longitude) {
  let key = `650f642bd743babd02a6576aa7c324db`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  let iconCode = data.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  weatherEmoji.innerHTML = "";
  let img = document.createElement("img");
  img.src = iconUrl;
  weatherEmoji.appendChild(img);
  temperature.textContent = `${Math.floor(data.main.temp - 273.15)}°C`;
  const weatherMain = data.weather[0].main;
  let finalWeatherName = "";

  switch (weatherMain) {
    case "Clouds":
      finalWeatherName = "Cloudy";
      break;
    case "Clear":
      finalWeatherName = "Clear Sky";
      break;
    case "Rain":
      finalWeatherName = "Rainy";
      break;
    case "Drizzle":
      finalWeatherName = "Light Rain";
      break;
    case "Thunderstorm":
      finalWeatherName = "Thunderstorm";
      break;
    case "Snow":
      finalWeatherName = "Snowy";
      break;
    case "Mist":
    case "Smoke":
    case "Haze":
    case "Dust":
    case "Fog":
    case "Sand":
    case "Ash":
    case "Squall":
    case "Tornado":
      finalWeatherName = "Foggy / Misty"; // Groups atmospheric conditions together
      break;
    default:
      finalWeatherName = weatherMain;
  }
  weatherCondition.textContent = finalWeatherName;
  humidity.textContent = `Humidity:${data.main.humidity}`;
  windSpeed.textContent = `Wind Speed:${data.wind["speed"]}`;
  currentDate.textContent = getDate();
}

function getDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2,'0');
  const month = String(today.getMonth()+1).padStart(2,'0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}
