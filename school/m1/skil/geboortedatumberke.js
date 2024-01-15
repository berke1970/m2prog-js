function leeftijd(jaar,maand,dag){

let now = new Date();
let birth = new Date(jaar, maand, dag);
let miliseconds = now-birth;
let geboortejaar= miliseconds/1000/60/60/24/365
return geboortejaar
}
let antwoord=leeftijd(2006,10,27);
console.log(antwoord)