const apiKey = "19582769ca78b06335633beaacf6b91b"; // Api key
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Api url

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorMessage = document.querySelector(".error");

async function cheackWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  //check if the Api return an Error ( City not found)
  if (data.cod === "404") {
    errorMessage.style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    errorMessage.style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }

  //update the weather details
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  //update the images for diffrent weather condition
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "asset/images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "asset/images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "asset/images/rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "asset/images/drizzle.png";
  } else if (data.wether[0].main === "Mist") {
    weatherIcon.src = "asset/images/mist.png";
  } else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "asset/images/snow.png";
  }
}

//Eventlistener for search button
searchBtn.addEventListener("click", function () {
  cheackWeather(searchBox.value);
  searchBox.value = ""; //clear the search input after the button is click
});
