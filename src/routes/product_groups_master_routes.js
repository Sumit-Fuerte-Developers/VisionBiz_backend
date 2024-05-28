const express = require('express');
const ProductGroupMasterRoute = express.Router();
const ProductGroupMasterController = require('../controllers/product_groups_master_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new StoreMaster
ProductGroupMasterRoute.post('/create_product_group', ProductGroupMasterController.createProductGroupMaster);

// Get all StoreMaster
ProductGroupMasterRoute.get('/show_product_group', verifyToken, ProductGroupMasterController.getAllProductGroupMasters);

// Get an StoreMaster by ID
ProductGroupMasterRoute.get('/show_product_group/:id', verifyToken, ProductGroupMasterController.getProductGroupMasterById);

// Update an StoreMaster by ID
ProductGroupMasterRoute.patch('/edit_product_group/:id', verifyToken, ProductGroupMasterController.updateProductGroupMasterById);

// Delete an StoreMaster by ID
ProductGroupMasterRoute.delete('/delete_product_group/:id', verifyToken, ProductGroupMasterController.deleteProductGroupMasterById);

module.exports = ProductGroupMasterRoute;