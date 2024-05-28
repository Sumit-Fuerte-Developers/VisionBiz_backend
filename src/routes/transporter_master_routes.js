const express = require('express');
const Transporterrouter = express.Router();
const transporterController = require('../controllers/transporter_master_controller');
const verifyToken = require("../middleware/verifyToken");
// Route to create a new transportera
Transporterrouter.post('/create_transporters',verifyToken, transporterController.createTransporter);

// Get all transporters
Transporterrouter.get('/show_transporters',verifyToken, transporterController.getAllTransporters);

// Get a specific transporter by ID
Transporterrouter.get('/show_transporters/:id',verifyToken, transporterController.getTransporterById);

// Update a specific transporter by ID using PATCH
Transporterrouter.patch('/edit_transporters/:id',verifyToken, transporterController.updateTransporterById);

// Delete a specific transporter by ID
Transporterrouter.delete('/delete_transporters/:id',verifyToken, transporterController.deleteTransporterById);

module.exports = Transporterrouter;
