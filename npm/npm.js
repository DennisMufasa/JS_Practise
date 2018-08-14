//create an object that requires the package from node_modules
let cat = require("cat-me"); //requiring cat
let joke = require("knock-knock-jokes"); //requiring joke
let request = require("request"); //requiring request
let fakeData = require('faker'); //requiring faker
// console.log(cat());
// console.log(joke());

request("http://google.com", function(error, response, body){
    console.log('Error: ' , error);
    console.log('status code: ', response && response.statusCode);
    console.log("body: ",body);
})
