require("dotenv").config();
const express= require("express");
const app=express();
const port = process.env.PORT||3000;
const db=require("./config/mongoose");

app.use(express.urlencoded({extended:false}));
app.use("/",require("./routes"));

app.listen(port,(err)=>{
    if(err){
        console.log("error in starting the app",err);
    };
    console.log("App is successfuly running on port",port);
});