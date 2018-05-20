var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
    content: String,
    author:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
	
	date:{
		type:Date,
		default:Date.now()
	},
	likes:{
		type:Number,
		default:0
	},
    answers: [{
		
			answerBody:{
				type:String,
				required:true
			},
			answerDate:{
			type:Date,
		default:Date.now()
		},
		
		answerUser:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
		}
    ]
}); 

module.exports = mongoose.model("Question", questionSchema);