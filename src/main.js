const World = require('./world');
const Citizen = require('./citizen');

let world = new World('day', 'ground', 'blue', 10, 23, 75, 100, 899);
let citizen = new Citizen('001', 'Shorlo', 'SB', 'Planet');
let citizen2 = new Citizen('002', 'Remonides', 'ARV', 'Planet');

console.log(world.toString());
console.log(citizen.toString());
console.log(citizen2.toString());
console.log(citizen.getName());
console.log(citizen2.getName());
