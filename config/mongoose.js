//importing mongoose
const mongoose=require("mongoose");

//creating database
const mongoURI=process.env.MONGO_URI || "mongodb://127.0.0.1:/ecommerce_database"


mongoose.connect(mongoURI);
const db=mongoose.connection;
db.on("error",console.error.bind(console,"Error connecting to DB"));
db.once("open",()=>{
    console.log("Connected to database :: MongoDB");
});

//exporting database
module.exports=db;

