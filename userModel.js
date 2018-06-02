var mongoose=require('mongoose');
var user=mongoose.model('newUser',{
    email:{
        type:String,
        required:true
    },
    password:
    {
        type:String,
        required:true,
        minlength:8,
        maxlength:32
    },
    confirmPassword:{
        type:String,
        required:true,
        minlength:8,
        maxlength:32
    }
});
module.exports={
    user
};

