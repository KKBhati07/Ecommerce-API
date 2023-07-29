//importing express
const express=require("express");
//setting the port 
const port=process.env.PORT||3000;
const app = express();

//importing database
const db = require("./config/mongoose");

//using decoder to read from POST requests
app.use(express.urlencoded({extended:true}));

//routing all requests to routes
app.use("/",require("./routes/index"));



//staring the express server
app.listen(port,(error)=>{
    if(error){
         console.log(`Error starting the server: ${error}`); 
         return;}
    console.log(`server running on port: ${port}`);

});