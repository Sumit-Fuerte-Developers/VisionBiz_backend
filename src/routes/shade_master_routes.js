const express = require('express');
const ShadeMasterRoute = express.Router();
const ShadeMasterController = require('../controllers/shade_master_controller');
const verifyToken = require("../middleware/verifyToken");
// Create a new ShadeMaster
ShadeMasterRoute.post('/create_shade',verifyToken, ShadeMasterController.createShadeMaster);

// Get all ShadeMaster
ShadeMasterRoute.get('/show_shade',verifyToken, ShadeMasterController.getAllShadeMaster);

// Get an ShadeMaster by ID
ShadeMasterRoute.get('/show_shade/:id',verifyToken, ShadeMasterController.getShadeMasterById);

// Update an ShadeMaster by ID
ShadeMasterRoute.patch('/edit_shade/:id',verifyToken, ShadeMasterController.updateShadeMasterById);

// Delete an ShadeMaster by ID
ShadeMasterRoute.delete('/delete_shade/:id',verifyToken, ShadeMasterController.deleteShadeMasterById);

module.exports = ShadeMasterRoute;