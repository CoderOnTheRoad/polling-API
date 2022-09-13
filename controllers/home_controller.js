const Question=require("../models/Question");
module.exports.home=async (req,res)=>{
    try{
        const questions= await Question.find().populate("options");
        // console.log(questions);
        // console.log("question created title:"+title);
        res.status(201).json(questions);
    }catch(err){
        res.status(400).json({ message: err.message });
    }


}

