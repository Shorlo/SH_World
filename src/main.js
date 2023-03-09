const World = require('./world');
const Citizen = require('./citizen');

let world = new World();
let citizen = new Citizen('001', 'Shorlo', 'SB', 'Planet');
let citizen2 = new Citizen('002', 'Remonides', 'ARV', 'Planet');

world.setSky('celestian');
world.setLand('ground');
world.setSea('blue');
world.setWind(9);
world.setTemperature(23);
world.setHumidity(67);
world.setSize(20, 45);
world.setPressure(12);


console.log(world.toString());
console.log(citizen.toString());
console.log(citizen2.toString());
console.log(citizen.getName());
console.log(citizen2.getName());
