var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose');
var User = require('./app/models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/meanstackapp' ,{ useNewUrlParser: true }, (err)=>{
    if(err){
        console.log("not connected to database " + err);
    }
    else{
        console.log("Successfully Connected to Mongodb");
}}) 
mongoose.set('useCreateIndex', true);
app.get('/', (req,res) => res.send('hello from the other side'))



// http://localhost:8080/users
app.post('/users',(req,res)=>{
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.save();
    res.send("user created");
})

app.listen(port, (req,res)=>
    console.log("listening on port " + port)
);