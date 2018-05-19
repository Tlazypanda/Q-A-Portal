var mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    express = require("express"),
    Question = require("./models/question"),
    app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));

app.set("view engine","ejs");

mongoose.connect('mongodb://localhost/Q&AForum',function(){
    //prints 1 if connection made
    console.log(mongoose.connection.readyState);});

app.get("/",function(req,res){
    res.render("links");
});

app.get("/question/new",function(req,res){
    res.render("questions/new");
});

app.get("/question",function(req,res){
    res.send("Why, hello there!");
});


app.listen(3456, "127.0.0.1", function (){
    console.log("it lives");
});
