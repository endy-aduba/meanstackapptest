var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var morgan = require('morgan');
var bodyParser = require('body-parser'); 
var mongoose = require('mongoose');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api',appRoutes);

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/meanstackapp' ,{ useNewUrlParser: true }, (err)=>{
    if(err){
        console.log("not connected to database " + err);
    }
    else{
        console.log("Successfully Connected to Mongodb");
}}) 

app.get('/', (req,res) => res.send('hello from the other side'))


app.listen(port, (req,res)=>
    console.log("listening on port " + port)
);