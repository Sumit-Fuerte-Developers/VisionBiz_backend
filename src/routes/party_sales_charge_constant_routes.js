const express = require('express');
const partySalesrouter = express.Router();
const partySalesController = require('../controllers/party_sales_charge_constant_controller');
const verifyToken = require("../middleware/verifyToken");
// Route to create a new PartySales document
partySalesrouter.post('/create_party-sales',verifyToken, partySalesController.createPartySales);

// Route to get all PartySales documents
partySalesrouter.get('/show_party-sales',verifyToken, partySalesController.getAllPartySales);

// Route to get a specific PartySales document by ID
partySalesrouter.get('/party-sales/:id',verifyToken, partySalesController.getPartySalesById);

// Route to update a specific PartySales document by ID using PUT
partySalesrouter.patch('/edit_party-sales/:id',verifyToken, partySalesController.updatePartySalesById);

// Route to delete a specific PartySales document by ID
partySalesrouter.delete('/delete_party-sales/:id',verifyToken, partySalesController.deletePartySalesById);

module.exports = partySalesrouter;
