let bananePricePerKilo = 2.14;
let applePricePerKilo = 3.43;
let GewichtBanane = 0.34;
let GewichtApfel = 0.22;

let anzahl1 = 1/GewichtBanane; 
let anzahl2 = 1 / GewichtApfel; 
let preis1 = bananePricePerKilo / anzahl1;
let preis2 = applePricePerKilo / anzahl2;

console.log("Anzahl Bananen / kg --> " + anzahl1 + "; Anzahl Äpfel / kg --> " + anzahl2 + ";")

console.log("Preis 1 Banane --> " + preis1 + "; Preis 1 Apfel --> " + preis2 + ";")