const Question=require("../models/Question");
const Option=require("../models/Option");

//route:- /options/:id/create
module.exports.createOption=async(req,res)=>{
    try{
            let questionId= req.params.id;
            console.log(questionId);
        //find the question
            let question=await Question.findById(questionId);
       
        if(question){
            //if question exists then create the option
                let option= await Option.create({
                    text:req.body.text,
                    question:questionId,
                });
                option.votingUrl="/options/"+option.id+"/add_vote";
                question.options.push(option);
                question.save();
                option.save();
                console.log("option created, text:"+option.text);
                return res.status(201).json(option);
        }
        return res.status(400).json({ message: "No Question found with the id"});

    }catch(err){
       return res.status(400).json({ message: err.message });
    }
    
    
}

//route:- /options/:id/delete
module.exports.deleteOption=async(req,res)=>{
    try{
            let optionId= req.params.id;
            //console.log(questionId);
        //find the option
            let option=await Option.findById(optionId);
       
        if(option){
            //if the option exists
            if(option.votes>0){
            //if there is no vote in the option you can delete the option
            //find the question with which option is attached to
                let questionId = option.question;
                let question = await Question.findById(questionId);
                let optionsArr=question.options;
            //from the options array of the question delete the id of the option
                let newOptionArr=optionsArr.filter((e)=>{
                    return e!=optionId;
                });
                question.options=newOptionArr;
                question.save();
            //finally delete the option
                await Option.findByIdAndDelete(optionId);
                console.log("option deleted, text:"+option.text);
                return res.status(201).json({message:"Option deleted successfuly"});
            }else{
                return res.status(400).json({ message: "Option Found but can't be deleted as it has votes"});
            }
        }
        return res.status(400).json({ message: "No option found with the id"});

    }catch(err){
       return res.status(400).json({ message: err.message });
    }
    
    
}

//route:- /options/:id/add_vote
module.exports.addVote=async(req,res)=>{
    try{
        let optionId= req.params.id;
        //console.log(questionId);
        //find the option 
            let option=await Option.findById(optionId);
            
            if(option){
                //if the option exists then increase the vote
                    option.votes=option.votes+1;
                    option.save();
                    console.log("vote added to option, text:"+option.text);
                    return res.status(201).json({message:"voted successfuly"});
            }
            return res.status(400).json({ message: "No option found with the id"});

    }catch(err){
       return res.status(400).json({ message: err.message });
    }
    
    
}