const express = require('express');
const SalesPurchesrouter = express.Router();
const mongoose=require("mongoose");
const SalesPurchesController = require('../controllers/sales_purches_charges_setup_controller');
const verifyToken = require("../middleware/verifyToken");
// Route to create a new company
// Create a new SalesPurches document
SalesPurchesrouter.post('/add_sales-purches',verifyToken, SalesPurchesController.createSalesPurches);

// Get all SalesPurches documents
SalesPurchesrouter.get('/show_sales-purches',verifyToken, SalesPurchesController.getAllSalesPurches);

// Get a specific SalesPurches document by ID
SalesPurchesrouter.get('/show_sales-purches/:id',verifyToken, SalesPurchesController.getSalesPurchesById);

// Update a specific SalesPurches document by ID using PUT
//SalesPurchesrouter.put('/edit_sales-purches/:id', SalesPurchesController.updateSalesPurchesById);

// Update a specific SalesPurches document by ID using PATCH
SalesPurchesrouter.patch('/edit_sales-purches/:id',verifyToken, SalesPurchesController.updateSalesPurchesById);

// Delete a specific SalesPurches document by ID
SalesPurchesrouter.delete('/delete_sales-purches/:id',verifyToken, SalesPurchesController.deleteSalesPurchesById);

module.exports = SalesPurchesrouter;
