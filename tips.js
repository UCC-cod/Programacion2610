const item1 = 250;
const item2 = 150;
const item3 = 75;
const tip = 0.1;

let subtotal = item1 + item2 + item3;
let tipmul = 1 + tip;

let total = (subtotal=1, tipmul=1) => `Subtotal: $${subtotal}, Propina: ${tip*100}%, Total: $${subtotal*tipmul}`;
console.log(total(subtotal, tipmul));
