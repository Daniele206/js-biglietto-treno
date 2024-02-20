const chilometers = prompt ('Quanti chilometri devi percorrere?');
console.log(chilometers);

const age = prompt ('Quanti anni hai?');
console.log(age);

const costPerKm = 0.21;

const fullCostTiket = chilometers * costPerKm;
console.log(fullCostTiket);

const discountTiketUnder18 = fullCostTiket * 20 / 100;
console.log(discountTiketUnder18);

const discountTiketOver65 = fullCostTiket * 40 / 100;
console.log(discountTiketOver65);

let finalCostTiket = fullCostTiket;

if(age < 18) finalCostTiket = fullCostTiket - discountTiketUnder18;

if(age > 65) finalCostTiket = fullCostTiket - discountTiketOver65;

console.log(finalCostTiket);

document.getElementById('biglietto').innerHTML = `
<p>Il costo del tuo biglietto é di: <strong>${finalCostTiket}&euro;</strong></p>
`