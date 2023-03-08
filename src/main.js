const Citizen = require('./citizen');

let citizen = new Citizen('001', 'Shorlo', 'SB', 'Planet');
let citizen2 = new Citizen('002', 'Remonides', 'ARV', 'Planet');

console.log(citizen.toString());
console.log(citizen2.toString());
console.log(citizen.getName());
console.log(citizen2.getName());
