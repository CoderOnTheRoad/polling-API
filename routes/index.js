
const express= require("express");
const router=express.Router();
const homeController=require("../controllers/home_controller")
router.get("/",homeController.home)

router.use("/options",require("./options"));
router.use("/questions",require("./questions"));
module.exports=router;
