//importing Product Schema
const Product = require("../../../models/product.js");

//controller action to fetch all the products from the database
module.exports.fetchAll = async (req, res) => {
    try {
        const products = await Product.find({});
        if(products){

            return res.status(200).json({
                data: products,
                message: "Products listed successfully"
            });
        }
        return res.status(404).json({message: "Products not found"});

    } catch (error) {
        console.log("Error in listing", error);
        return res.status(500).json({
            message: "Unable to list products"
        });
    }
}

//to fetch a single product by the ID
module.exports.fetchOne=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        if(product){
            //if product found
            return res.status(200).json({
                data:product,
                message:"Product fetched successfully"
            })
            // if not
        }else{
            return res.status(404).json({
                message:"Product not found"
            })
        }
        //if something else goes wrong
    }catch(error){
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}


//controller action to add a product to the database
module.exports.create = async (req, res) => {
    
    try {
        const product = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });
        // if product created successfully
        if(product){
            return res.status(200).json({
                data: product,
                message: "Product successfully stored in the database "
            });
            
        }
        return res.status(400).json({message: "Product creation failed"});
        
        //if something else goes wrong
    } catch (error) {
        console.log("Error in storing", error);
        return res.status(500).json({
            message: "Unable to store product into the database"
        });
    }
}


//controller action to delete a product from the database
module.exports.destroy = async (req, res) => {
    try {
        const productDeleted = await Product.findByIdAndDelete(req.params.id);
        if(productDeleted){

            return res.status(200).json({
                data: productDeleted,
                message: "Product deleted successfully"
            });
        }
        return res.status(404).json({message: "Product cannot be deleted"});
        //if something else goes wrong
    } catch (error) {
        //to log the error
        console.log("Error in deleting", error);
        return res.status(500).json({
            message: "Unable to delete product"
        });
    }
}

//to update the quantity of the product
module.exports.update=async(req,res)=>{
    try{
        const number=parseInt(req.query.number);
        const product = await Product.findById(req.params.id);
    
        //if the product not found in the database
        if(!product){
            return res.status(404).json({
                message:"Product not found"
            });
        }
        //if found, updating the quantity of the product
        if(number>0) product.quantity=product.quantity+parseInt(number);
        else product.quantity=product.quantity-Math.abs(parseInt(number));

        // saving the product with updated quantity
        const productUpdated=await product.save();
        
        
        //if updated successfully
        return res.status(200).json({
            data:productUpdated,
            message:"Product quantity updated successfully"
        });

        //if something else goes wrong
    }catch(error){
        //to log the error
        console.log("Error in updating",error);
        //if there is some other error in updating the quantity
        return res.status(500).json({
            message:"Unable to update product"
        });
    }
}