//selecting html elements
// let page = document.querySelector('body');

//require request from node_modules
let request = require('request');

//request webpage body
//request accepts 2 params a url and a callback fn with params like error,response and body
request('http://www.google.com', function(error, response, body){
    if(error === null){
        // page.innerHTML = body;
        console.log('status code: '+response.statusCode);
        // alert('status code: '+response.statusCode);
    }else{
        // alert('error: '+error);
    }
});


/*learning point
nodejs is used in the backend. Building and consuming apis.
 It cannot run on the browser without the help of modules like browserify.
 eg. in the above code require() is not a module that can run on the broswer.
 Linking this code to a html will console an error at require().
*/