//importing express
const express=require('express');
const router=express.Router();

//routing to v1's index file
router.use("/v1",require("./v1/index"));


//exporting router
module.exports=router;