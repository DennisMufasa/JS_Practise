//faker generates fake data
let fakeData = require('faker'); //requirng faker library from node_modules

for(let i = 0; i < 5; i++){
    let randomName = fakeData.name.firstName(); //generating a random firstname
    let randomEmial = fakeData.internet.email(); //generating a random email
    let randomCity = fakeData.address.city(); // generating a random city

    console.log(`My name is ${randomName} and i hail from ${randomCity}. Reach me at ${randomEmial}.`);
}

let long = fakeData.address.longitude();
let lat = fakeData.address.latitude();
console.log(`I live at ${long}, ${lat}`);2

