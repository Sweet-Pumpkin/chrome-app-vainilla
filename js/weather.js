// 06. Weather
const API_KEY = "f2d6fe952dfc0e1f15f1dc1a3e89a47f";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather span:last-child");
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
      city.innerText = data.name; 
  });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);