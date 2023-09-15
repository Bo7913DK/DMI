// Arrays med vejroplysninger for forskellige byer
let copenhagenWeather = {
  cityName: "København",
  temperature: "18°C",
  description: "Delvist overskyet"
};

let osloWeather = {
  cityName: "Oslo",
  temperature: "15°C",
  description: "Regn"
};

let stockholmWeather = {
  cityName: "Stockholm",
  temperature: "20°C",
  description: "Klar himmel"
};

// Funktion til at opdatere vejroplysninger på siden
function updateWeather(city) {
  document.getElementById("cityName").textContent = city.cityName;
  document.getElementById("temperature").textContent = "Temperatur: " + city.temperature;
  document.getElementById("description").textContent = "Beskrivelse: " + city.description;
}

// Event listeners til knapperne
document.getElementById("copenhagenButton").addEventListener("click", function() {
  updateWeather(copenhagenWeather);
});

document.getElementById("osloButton").addEventListener("click", function() {
  updateWeather(osloWeather);
});

document.getElementById("stockholmButton").addEventListener("click", function() {
  updateWeather(stockholmWeather);
});

document.getElementById("customCityButton").addEventListener("click", function() {
  const customCityName = document.getElementById("customCityInput").value;
  // Kald en funktion til at opdatere vejret baseret på brugerens input
  updateWeatherBasedOnInput(customCityName);
});

document.getElementById("customCityInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const customCityName = document.getElementById("customCityInput").value;
    // Kald en funktion til at opdatere vejret baseret på brugerens input
    updateWeatherBasedOnInput(customCityName);
  }
});

function updateWeatherBasedOnInput(cityName) {
  // Opret en variabel til at gemme vejroplysninger
  let weatherData;

  // Søg efter vejroplysninger baseret på brugerens input (cityName)
  // Her bruger jeg en simpel if-else struktur, men du kan bruge en API til at hente data i virkeligheden.
  if (cityName === "København") {
    weatherData = copenhagenWeather;
  } else if (cityName === "Oslo") {
    weatherData = osloWeather;
  } else if (cityName === "Stockholm") {
    weatherData = stockholmWeather;
  } else {
    // Håndter en ukendt by
    weatherData = {
      cityName: "Kender ikke den by",
      temperature: "Også uvist",
      description: "Det er helt ukendt"
    };
  }

  // Opdater vejret på siden ved at kalde updateWeather(city)
  updateWeather(weatherData);
}