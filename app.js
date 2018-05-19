var mongoose = require("mongoose"),
    express = require("express"),
    app = express();

app.get("/question",function(req,res){
    res.send("Why, hello there!");
})

app.listen("2000",function(){
    console.log("it lives on " + ":2000");
});