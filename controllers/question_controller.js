const Question=require("../models/Question");
const Option=require("../models/Option");

//route:- /questions/create  
module.exports.createQuestion=async (req,res)=>{
    try{
        const title=  req.body.title;
        await Question.create({
            title:title,
        })
        console.log("question created title:"+title);
        return res.status(201).json(title);

    }catch(err){
        return res.status(400).json({ message: err.message });

    }
}


//route:- /questions/:id  
module.exports.getQuestion=async (req,res)=>{
    try{
        const id=  req.params.id;
        const question = await Question.findById(id).populate("options");
        console.log("found the question title:"+question.title);
        return res.status(201).json(question);

    }catch(err){
        return res.status(400).json({ message: err.message });

    }
}
//route:- /questions/:id/delete
module.exports.deleteQuestion=async (req,res)=>{
    try{
        const id=  req.params.id;
        const question = await Question.findById(id);

        //delete options 
        for(let option of question.options){
            let foundOption=await Option.findById(option);
            if(foundOption.votes>0){
                return res.status(400).json({message:"Question cant be deleted as it's option Contains Votes"}); 
            }
        }
        for(let option of question.options){
            await Option.findByIdAndDelete(option);
        }
        await Question.findByIdAndDelete(id);
        console.log("Deleted the Question and the options:"+ question.title);
        return res.status(201).json({message:"Deleted Successfuly !"});

    }catch(err){
        return res.status(400).json({ message: err.message });

    }
}
