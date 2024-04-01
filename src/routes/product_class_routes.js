const express = require('express');
const ProductClassRoute = express.Router();
const ProductClassController = require('../controllers/product_class_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new ProductClass
ProductClassRoute.post('/create_product_class', verifyToken, ProductClassController.createProductClass);

// Get all ProductClass
ProductClassRoute.get('/show_product_class', verifyToken, ProductClassController.getAllProductClasses);

// Get an ProductClass by ID
ProductClassRoute.get('/show_product_class/:id', verifyToken, ProductClassController.getProductClassById);

// Update an ProductClass by ID
ProductClassRoute.patch('/edit_product_class/:id', verifyToken, ProductClassController.updateProductClassById);

// Delete an ProductClass by ID
ProductClassRoute.delete('/delete_product_class/:id', verifyToken, ProductClassController.deleteProductClassById);

module.exports = ProductClassRoute;