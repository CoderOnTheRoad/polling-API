const express= require("express");
const router=express.Router();
const questionController=require("../controllers/question_controller");
router.post("/create",questionController.createQuestion);
router.get("/:id",questionController.getQuestion);
module.exports=router;