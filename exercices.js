
/*
// Exercice 1
let degCelsius = 22;

function convertToFahrenheit(degCelsius) {
    return degCelsius * (9/5) + 32;
}

console.log("degrès celsius: " + degCelsius);
console.log("degrès fahenheit: " + convertToFahrenheit(degCelsius));
*/

/*
// Exercice 2
let rectWidth = 10, rectHeight = 8;

function calculAireRect(width, height) {
    return width * height;
}

console.log("Aire : " + calculAireRect(rectWidth, rectHeight));
*/


// Exercice 3
let prenom = "Victor", nom = "Paris Lemperrière";

console.log(prenom + nom);

// Exercice 4
let montantHT = 3.5;
const tva = 0.2;
let montantTTC = montantHT * tva;

console.log("montant TTC: " + montantTTC);

// Exercice 5
console.log(((4 >= 6) || ("herbe" != "verte")) && !(((12*2) == 144) && true)); // true

// Exercice 6
let poids = 70, taille = 1.75;
let imc = poids / (taille * taille);
console.log(imc.toFixed(2));

// Exercice 7
const montantMin = 25;

let montantTotal = 35;

if (montantTotal >= montantMin) {
    console.log("Livraison gratuite");
} else {
    console.log("Frais de livraison: X euros");
}

// Exercice 8
let binaire = "01011";

console.log("Bin: " + binaire + " | Int : " + parseInt(binaire, 2));
