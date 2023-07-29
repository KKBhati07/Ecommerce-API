//importing express
const express=require('express');
const router=express.Router();

//importing product controller
const productController=require("../../../controllers/api/v1/products_api");

//router to store product in the database
router.post("/create",productController.create);

//router to delete product from the database
router.delete("/delete/:id",productController.destroy);

//to fetch one product from the database
router.get("/:id",productController.fetchOne);

//router to fetch all the products from the database
router.get("",productController.fetchAll);

//to update the quantity of the product
//URL TO UPDATE THE QUANTITY
//  /api/v1/products/:id/update-quantity/?number=100
//  replace :id with the id of the product, 
//  100 with the desired quantity update (positive for increment, negative for decrement)
router.post("/:id/update-quantity",productController.update);

module.exports=router;
