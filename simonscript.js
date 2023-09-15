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
  
