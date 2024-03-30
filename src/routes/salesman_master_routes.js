const express = require('express');
const Salesmanrouter = express.Router();
const mongoose=require("mongoose");
const SalesmanController = require('../controllers/salesman_master_controller');
const verifyToken = require("../middleware/verifyToken");
// Route to create a new company
Salesmanrouter.post('/add_salesmen',verifyToken, SalesmanController.createSalesman);

// Get all salesmen
Salesmanrouter.get('/show_salesmen',verifyToken, SalesmanController.getAllSalesmen);

// Get a specific salesman by ID
Salesmanrouter.get('/Show_salesmen/:id',verifyToken, SalesmanController.getSalesmanById);

// Update a specific salesman by ID using PATCH
Salesmanrouter.patch('/edit_salesmen/:id',verifyToken, SalesmanController.updateSalesmanById);

// Delete a specific salesman by ID
Salesmanrouter.delete('/delete_salesmen/:id',verifyToken, SalesmanController.deleteSalesmanById);
module.exports = Salesmanrouter;
