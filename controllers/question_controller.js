const Question=require("../models/Question");
const Option=require("../models/Option");
module.exports.createQuestion=async (req,res)=>{
    try{
        const title=  req.body.title;
        await Question.create({
            title:title,
        })
        console.log("question created title:"+title);
        res.status(201).json(title);

    }catch(err){
        res.status(400).json({ message: err.message });

    }
}

module.exports.createQuestion=async (req,res)=>{
    try{
        const title=  req.body.title;
        await Question.create({
            title:title,
        })
        console.log("question created title:"+title);
        res.status(201).json(title);

    }catch(err){
        res.status(400).json({ message: err.message });

    }
}

module.exports.getQuestion=async (req,res)=>{
    try{
        const id=  req.params.id;
        const question = await Question.findById(id);
        console.log("found the question title:"+question.title);
        res.status(201).json(question);

    }catch(err){
        res.status(400).json({ message: err.message });

    }
}

module.exports.deleteQuestion=async (req,res)=>{
    try{
        const id=  req.params.id;
        const question = await Question.findById(id);

        //delete options 
        for(let option of question.options){
            await Option.findByIdAndDelete(option);
        }
        await Question.findByIdAndDelete(id);
        console.log("Deleted the Question and the options:"+ question.title);
        res.status(201).json({message:"Deleted Successfuly !"});

    }catch(err){
        res.status(400).json({ message: err.message });

    }
}
