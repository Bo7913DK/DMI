//Bo

// Variabler og typer
let disasterTypes = ["ildstorm", "tornado", "meteorregn", "tsunami", "tropisk cyklon"];
let disasterLocations = ["Odense", "København", "Aarhus", "Aalborg", "Rønne"];
let alertMessage = "";

// operatorer
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Variablerne med funktionen der generere arrays
let randomTypeIndex = getRandomIndex(disasterTypes);
let randomLocationIndex = getRandomIndex(disasterLocations);

// Kontrolstruktur (if-else)
if (disasterTypes[randomTypeIndex] === "tsunami" || disasterTypes[randomTypeIndex] === "meteorregn") {
    alertMessage = "Advarsel! En " + disasterTypes[randomTypeIndex] + " rammer " + disasterLocations[randomLocationIndex] + "! Løb for dit liv!";
} else {
    alertMessage = "Der er en " + disasterTypes[randomTypeIndex] + " på vej mod " + disasterLocations[randomLocationIndex] + "!";
}

// HTML knap id
let alertButton = document.getElementById("alert-knap");

// Funktioner
function showAlert() {
    alert(alertMessage);
    location.reload();
}

// Variable Scope lokal
function lokalscope() {
    let localVar = "Test for en lokal variable";
    console.log(localVar);
}

// Events
alertButton.addEventListener("click", showAlert);



//Hamdi

// JavaScript for kommentarfunktionen
const commentInput = document.getElementById('comment-input');
const commentButton = document.getElementById('comment-button');
const commentList = document.getElementById('comment-list');

commentButton.addEventListener('click', () => {
  const commentText = commentInput.value.trim();
  if (commentText !== '') {
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);
    commentInput.value = '';
  }
});



//Normann

console.log("Lorte kører");

function searchButtonAlert() {
    var inputValue = document.getElementById("searchInput").value;
    if (inputValue === ""){
        alert("OBS! Søgefeltet er tomt!");

        console.log("Funktionen 'seachButtonAlert' blev kaldt.");
        }
}

function searchalert(event) {
    if (event.key === "Enter"){
    var inputValue = document.getElementById("searchInput").value;

    if (inputValue === ""){
    alert("OBS! Søgefeltet er tomt!");

    console.log("Funktionen 'searchalert' blev kaldt.");
    }
  }
}

function searchKeyUp(event) {
    var inputValue = document.getElementById("searchInput").value;
  
    if (event.key === "Enter") {
      // Kald søgefunktionen, når Enter-tasten trykkes
      searchButtonAlert();
    } else {
      // Kald funktionen til at vise dropdown-eksempler, når andre taster trykkes
      showSearchExamples(inputValue);
    }
    console.log("Funktionen 'searchKeyUp' blev kaldt");
}



var searchExamples = ["Aarhus", "Aalborg", "Amsterdam", "Berlin", "Brøndby", "Brønderslev", "Charlottenlund", "Christiansfeld"];

function showSearchExamples(inputValue) {
    // Fjern eksisterende indhold fra dropdown-menuen
    var searchDropdown = document.getElementById("searchDropdown");
    searchDropdown.innerHTML = "";
  
    // Filtrer byerne, der passer til søgeværdien
    var matchingCities = searchExamples.filter(function(city) {
      return city.toLowerCase().startsWith(inputValue.toLowerCase());
    });
  
    // Tilføj hver matchende by som en dropdown-indstilling
    matchingCities.forEach(function(city) {
      var option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      option.addEventListener("click", function() {
        // Når en dropdown-indstilling klikkes, udfyld søgebaren med byen
        document.getElementById("searchInput").value = city;
        // Fjern dropdown-menuen
        searchDropdown.innerHTML = "";
      });
      searchDropdown.appendChild(option);
    });
    // Vis dropdown-menuen
    searchDropdown.style.display = "block";

    console.log("Funktionen 'showSearchExamples' blev kaldt");
  }
  

  //Signe

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