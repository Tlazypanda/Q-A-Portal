var mongoose = require("mongoose");

var answerSchema = new mongoose.Schema({
    content: String,
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    question: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Question"
        }
    ]
}); 

module.exports = mongoose.model("Answer", answerSchema);