const express = require('express');
const TypeTaxrouter = express.Router();
const TypeTaxController = require('../controllers/type_and_text_code_master_controller');
const verifyToken = require("../middleware/verifyToken");
// Route to create a new Tax document
TypeTaxrouter.post('/create_type-tax',verifyToken, TypeTaxController.createTax);

// Route to get all Tax documents
TypeTaxrouter.get('/show_type-tax',verifyToken, TypeTaxController.getAllTaxes);

// Route to get a specific Tax document by ID
TypeTaxrouter.get('/show_type-tax/:id',verifyToken, TypeTaxController.getTaxById);

// Route to update a specific Tax document by ID
TypeTaxrouter.patch('/edit_type-tax/:id',verifyToken, TypeTaxController.updateTaxById);

// Route to delete a specific Tax document by ID
TypeTaxrouter.delete('/delete_type-tax/:id',verifyToken, TypeTaxController.deleteTaxById);

module.exports = TypeTaxrouter;