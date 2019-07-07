var express = require('express');
var app = express();
var port = process.env.PORT;
var morgan = require('morgan');

app.get('/', (req,res) => res.send('hello from the other side'))

app.listen(port || 8080, (req,res)=>
    console.log("listening on port" + 8080)
);