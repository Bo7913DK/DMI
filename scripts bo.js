// Variabler og typer
let disasterTypes = ["ildstorm", "tornado", "meteorregn", "tsunami", "tropisk cyklon"];        // Array 1
let disasterLocations = ["Odense", "København", "Aarhus", "Aalborg", "Rønne"];                 // Array 2
let alertMessage = "";         //vi opretter en tom streng til senere brug

// operatorer
function getRandomIndex(array) {                            //Vi laver en funktion og kalder den "getRandomIndex" med array som input
    return Math.floor(Math.random() * array.length);         //math.random generer tilfældig værdi mellem 0 (inklusiv) til længden af arrayet (ekslusiv, normalt til 1, men her ganger vi med array.length som er 5) - dvs. her fra 0 til 4.999. math.floor runder så ned.
}

// Variablerne med funktionen der generere arrays
let randomTypeIndex = getRandomIndex(disasterTypes);                      //her laver vi en variable og giver den funktionen getRandomIndex og siger, at den skal tage fra de to arrays længere oppe.
let randomLocationIndex = getRandomIndex(disasterLocations);

// Kontrolstruktur (if-else)
if (disasterTypes[randomTypeIndex] === "tsunami" || disasterTypes[randomTypeIndex] === "meteorregn") {        //her siger vi, at disastertype skal være lige med enten tsunami eller meteorregn, altså bare at én skal være true.
    alertMessage = "Advarsel! En " + disasterTypes[randomTypeIndex] + " rammer " + disasterLocations[randomLocationIndex] + "! Løb for dit liv!";
} else {                                                                                                                                               //hvis ingen af ovenstående er true, så kommer denne else.
    alertMessage = "Der er en " + disasterTypes[randomTypeIndex] + " på vej mod " + disasterLocations[randomLocationIndex] + "!";
}

// HTML knap id
let alertButton = document.getElementById("alert-knap");           //knappen fra html gøres til en variable som vi nu i js kan manipulere

// Funktioner
function showAlert() {                      // En funktion hvor vi siger, at den skal lave en alert med indholdet fra alertMessage tidligere fra if-else delen
    alert(alertMessage);
    location.reload();                     // Genlæs siden for at vise en ny alert
}

// Variable Scope lokal
function lokalscope() {
    let localVar = "Test for en lokal variable";       //test på at lave en lokalvariable der skriver noget i console
    console.log(localVar);
}

// Events
alertButton.addEventListener("click", showAlert);    //her er et event hvor eventet udføres når der klikkes på knappen med id'et alertButton