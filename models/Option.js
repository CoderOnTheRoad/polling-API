const mongoose=require("mongoose");

const optionsSchema=mongoose.Schema({
    text:{
        type:String,
        required:true,
    },
    votes:{
        type:Number,
        default:0,
    },
    votingUrl:{
        type:String,
        required:true,
    },
    question:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Question",
        }
});

const Option= mongoose.model("Option",optionsSchema);
module.exports=Option;