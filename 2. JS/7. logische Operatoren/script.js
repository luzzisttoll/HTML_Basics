let random1 = Math.floor(Math.random() * (100 - 0 + 1) + 0);
let random2 = Math.floor(Math.random() * (100 - 0 + 1) + 0);

console.log(random1 + ", " + random2);

if(random1 < random2 && random1 < 50){
    console.log("Zahl 1 ist kleienr als Zahl 2 und Mini")
}
else if(random1 < 30 || random2 < 30){
    console.log("Eine der beiden ist kleienr als 30")
}
else if(random1 < 50 && random2 != 50){
    console.log("Erste Zahl klein, zweite kein 50iger")
}
else{
}