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

app.post("/question",function(req,res){
    var newQuestion = {
        content:req.body.content,
        //author
    }
    Question.create(newQuestion,function(err, created){
        if(err){
            console.log(err);
        } else {
            //redirect to question page
            res.redirect("/question");
        }
    });
});

app.post("/question/like/:id",(req,res) => {
	 Question.findOne({
		 _id:req.params.id
	 })
	.then(question => {
		 question.likes=question.likes+1;
		 
		 
		
		 
		 question.save().then(question => {
			
			 res.redirect("/question");
		 })
	 });
	
});
	


app.post("/question/answer/:id", (req,res) => { 
	 Question.findOne({
		 _id:req.params.id
	 })
	.then(question => {
		 const newAnswer = {
			 answerBody : req.body.answerBody,
			 //answerUser : req.user.id
		 }
		 
		 question.answers.unshift(newAnswer);
		 
		 question.save().then(question => {
			
			 res.redirect("/question");
		 })
	 });
	
});

app.get("/question", function(req, res){
    Question.find({},function(err,allQuestions){
        if(err)
            console.log("error in database lookup");
        else
            res.render("questions/Index",{questions: allQuestions});
    });
});


app.listen(3010, "127.0.0.1", function (){
    console.log("it lives");
});
