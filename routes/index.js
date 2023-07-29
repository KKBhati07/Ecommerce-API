//importing express
const express=require('express');
const router=express.Router();

//routing to api's index file
router.use("/api",require("./api/index"));


//exporting router
module.exports=router;