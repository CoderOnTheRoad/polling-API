const mongoose=require("mongoose");

const questionsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    options:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Option",
        }
    ]
});

const Question= mongoose.model("Question",questionsSchema);
module.exports=Question;