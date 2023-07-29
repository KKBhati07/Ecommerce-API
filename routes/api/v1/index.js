//importing express
const express=require('express');
const router=express.Router();

//routing to products file
router.use("/products",require("./products.js"));

//exporting router
module.exports=router;