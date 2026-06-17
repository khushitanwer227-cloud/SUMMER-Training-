const API_KEY = "195a09c78b565e7ff91e4c3bc88dfd68";

async function getWeatherData() {
  const city = document.getElementById("searchInput").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  try {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

    const data = await response.json();

    
    document.getElementById("nameText").innerText = data.name;
    document.getElementById("mainTemp").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("weatherstatus").innerText = data.weather[0].description;
    document.getElementById("humidityVal").innerText = data.main.humidity + "%";
    document.getElementById("windVal").innerText = data.wind.speed + " m/s";

    // 5- day forecast
    const forecastResponse = await fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}` );

    const forecastData = await forecastResponse.json();
    let cards = document.getElementById("forecastCards");
    cards.innerHTML = "";

    for (let i = 0; i < 40; i =i+8) {
      let item = forecastData.list[i];

      cards.innerHTML += `
        <div class="card">
          <h4>${new Date(item.dt_txt).toLocaleDateString("en-US", {
            weekday: "short"
          })}</h4>
          <p>${Math.round(item.main.temp)}°C</p>
          <p>${item.weather[0].main}</p>
        </div>
      `;
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
}