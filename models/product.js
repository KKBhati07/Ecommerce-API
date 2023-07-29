const mongoose=require('mongoose');


//creating product Schema
const productSchema=new mongoose.Schema({
    name:{
        type:String,

        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},
//to keep track of dates on created and updated
{timestamps:true});

//creating model od the schema
const Product=mongoose.model('Product',productSchema);
module.exports=Product;