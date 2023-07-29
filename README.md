# eCommerce API

This is an eCommerce API built using Node.js, Express, and MongoDB.

## Prerequisites

Make sure you have the following software installed on your local system:

- Node.js
- MongoDB

## Installation

1. Clone the repository to your local machine:
- git clone ------------------------

2. Move to the project directory

3. On your Command Prompt/powershell, run this command to install all your dependencies
- npm install

4. Configure the database:
- Make sure MongoDB is running on your local machine.
- Update the MongoDB connection in config/mongoose.js if necessary.

5. start the server:
- node index.js 

## Usage
- You can use an API testing tool like Postman to interact with the endpoints of the API.

- Here are the available endpoints:
1. Create a Product: POST /api/v1/products/create
Request body: { "name": "Product Name", "quantity": 10 }
2. Delete a Product: DELETE /api/v1/products/delete/:id
3. Fetch All Products: GET /api/v1/products
4. Update Product Quantity: POST /api/v1/products/:id/update-quantity/?number=100
Replace :id with the ID of the product you want to update.
Replace 100 with the desired quantity update (positive for increment, negative for decrement).

