//require express from node_modules
let express = require('express');
let app = express(); //assign var app to an invocation of express
//express has a method get with 2 params 
app.get('/greeting', function(req, res){
    res.send('Hello World');
});

app.listen(4000);
