var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanstackapp' ,{ useNewUrlParser: true }, (err)=>{
    if(err){
        console.log("not connected to database");
    }
    else{
        console.log("Successfully Connected to Mongodb");
}}) 
app.get('/', (req,res) => res.send('hello from the other side'))

app.listen(port || 8080, (req,res)=>
    console.log("listening on port" + port)
);