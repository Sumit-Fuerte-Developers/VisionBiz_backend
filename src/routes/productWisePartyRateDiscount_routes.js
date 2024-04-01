const express = require('express');
const ProductWisepartyRateDiscountrouter = express.Router();
const productWisepartyRateDiscountController = require('../controllers/productWisePartyRateDiscount_controller');
const verifyToken = require("../middleware/verifyToken");

// Route to create a new product-wise party rate discount
ProductWisepartyRateDiscountrouter.post('/create_productWisepartyRateDiscount',verifyToken, productWisepartyRateDiscountController.createProductWisepartyRateDiscount);

// Route to get all product-wise party rate discounts
ProductWisepartyRateDiscountrouter.get('/show_productWisepartyRateDiscount', verifyToken,productWisepartyRateDiscountController.getAllProductWisepartyRateDiscounts);

// Route to get a specific product-wise party rate discount by ID
ProductWisepartyRateDiscountrouter.get('/show_productWisepartyRateDiscount/:id', verifyToken,productWisepartyRateDiscountController.getProductWisepartyRateDiscountById);

// Route to update a product-wise party rate discount by ID
ProductWisepartyRateDiscountrouter.patch('/edit_productWisepartyRateDiscount/:id',verifyToken, productWisepartyRateDiscountController.updateProductWisepartyRateDiscountById);

// Route to delete a product-wise party rate discount by ID
ProductWisepartyRateDiscountrouter.delete('/delete_productWisepartyRateDiscount/:id',verifyToken, productWisepartyRateDiscountController.deleteProductWisepartyRateDiscountById);

module.exports = ProductWisepartyRateDiscountrouter;
