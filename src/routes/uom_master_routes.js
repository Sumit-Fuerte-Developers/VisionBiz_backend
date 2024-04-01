const express = require('express');
const UOMMasterRoute = express.Router();
const UOMMasterController = require('../controllers/uom_master_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new UomMaster
UOMMasterRoute.post('/create_uom', verifyToken, UOMMasterController.createUOMMaster);

// Get all UomMaster
UOMMasterRoute.get('/show_uom', verifyToken, UOMMasterController.getAllUOMMasters);

// Get an UomMaster by ID
UOMMasterRoute.get('/show_uom/:id', verifyToken, UOMMasterController.getUOMMasterById);

// Update an UomMaster by ID
UOMMasterRoute.patch('/edit_uom/:id', verifyToken, UOMMasterController.updateUOMMasterById);

// Delete an UomMaster by ID
UOMMasterRoute.delete('/delete_uom/:id', verifyToken, UOMMasterController.deleteUOMMasterById);

module.exports = UOMMasterRoute;