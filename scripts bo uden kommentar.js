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