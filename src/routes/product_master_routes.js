const express = require('express');
const ProductMasterRoute = express.Router();
const ProductMasterController = require('../controllers/product_master_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new ProductMaster
ProductMasterRoute.post('/create_product_master', ProductMasterController.createProductMaster);

// Get all ProductMaster
ProductMasterRoute.get('/show_product_master', ProductMasterController.getAllProductMasters);

// Get an ProductMaster by ID
ProductMasterRoute.get('/show_product_master/:id', ProductMasterController.getProductMasterById);

// Update an ProductMaster by ID
ProductMasterRoute.patch('/edit_product_master/:id', ProductMasterController.updateProductMasterById);

// Delete an ProductMaster by ID
ProductMasterRoute.delete('/delete_product_master/:id',ProductMasterController.deleteProductMasterById);

module.exports = ProductMasterRoute;