const express = require('express');
const tdsrouter = express.Router();
const tdsController = require('../controllers/tds_master_controller');
const verifyToken = require("../middleware/verifyToken");
// Create a new TDS entry
tdsrouter.post('/create_tds',verifyToken, tdsController.createTDS);

// Get all TDS entries
tdsrouter.get('/show_tds',verifyToken, tdsController.getAllTDS);

// Get a specific TDS entry by ID
tdsrouter.get('/show_tds/:id',verifyToken, tdsController.getTDSById);

// Update a specific TDS entry by ID
tdsrouter.patch('/edit_tds/:id',verifyToken, tdsController.updateTDSById);

// Delete a specific TDS entry by ID
tdsrouter.delete('/delete_tds/:id',verifyToken, tdsController.deleteTDSById);

module.exports = tdsrouter;
