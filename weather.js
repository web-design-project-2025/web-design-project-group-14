const weatherCodeToIcon = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  51: "🌦️",
  61: "🌧️",
  71: "🌨️",
  80: "🌧️",
  95: "⛈️",
};

async function getCurrentWeather(lat, lon) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&timezone=auto`
  );
  const data = await response.json();

  const now = new Date();
  const hourISO = now.toISOString().slice(0, 13);
  const index = data.hourly.time.findIndex((t) => t.startsWith(hourISO));
  const temp = data.hourly.temperature_2m[index];
  const code = data.hourly.weathercode[index];

  const weatherData = { temp, code, timestamp: Date.now() };
  localStorage.setItem("weatherData", JSON.stringify(weatherData));

  displayWeather(temp, code);
}
function displayWeather(temp, code) {
  document.getElementById("temperature").textContent = `${temp} °C`;
  document.getElementById("icon").textContent = weatherCodeToIcon[code] || "";
  document.getElementById("temperature").style.display = "block";
  document.getElementById("icon").style.display = "block";
  document.getElementById("recs").style.display = "block";
  document.getElementById("show-location").style.display = "none";

  // Food recommendation
  const recs = document.getElementById("recs");
  if (temp >= 0 && temp <= 5) {
    recs.innerHTML = "What a great time to cook <br> A Tomato soup!";
  } else if (temp <= 10) {
    recs.innerHTML = "What a great time to cook <br> A Carbonara!";
  } else if (temp <= 15) {
    recs.innerHTML = "What a great time to cook <br> A Lentil Stew!";
  } else if (temp <= 20) {
    recs.innerHTML = "What a great time to cook <br> A Shakshuka!";
  } else if (temp <= 25) {
    recs.innerHTML = "What a great time to cook <br> Chicken Teriyaki!";
  } else if (temp <= 30) {
    recs.innerHTML = "What a great time to cook <br> Chicken Wrap!";
  } else {
    recs.innerHTML = "What a great time to cook <br> Halloumi Bowl!";
  }
}

function geoFindMe() {
  const status = document.getElementById("status");
  const mapLink = document.getElementById("map-link");
  mapLink.href = "";
  mapLink.textContent = "";

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  status.textContent = "Locating…";

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${lat}/${lon}`;
      mapLink.textContent = `Latitude: ${lat} °, Longitude: ${lon} °`;

      await getCurrentWeather(lat, lon);
    },
    () => {
      status.textContent = "Unable to retrieve your location.";
    }
  );
}
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("weatherData");
  if (saved) {
    const { temp, code, timestamp } = JSON.parse(saved);

    const oneHour = 60 * 60 * 1000;
    if (Date.now() - timestamp < oneHour) {
      displayWeather(temp, code);
    } else {
      localStorage.removeItem("weatherData");
    }
  }
});

document.getElementById("find-me").addEventListener("click", geoFindMe);
