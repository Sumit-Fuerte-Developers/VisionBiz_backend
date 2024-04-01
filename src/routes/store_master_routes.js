const express = require('express');
const StoreMasterRoute = express.Router();
const StoreMasterController = require('../controllers/store_master_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new StoreMaster
StoreMasterRoute.post('/create_store', verifyToken, StoreMasterController.createStoreMaster);

// Get all StoreMaster
StoreMasterRoute.get('/show_store', verifyToken, StoreMasterController.getAllStoreMaster);

// Get an StoreMaster by ID
StoreMasterRoute.get('/show_store/:id', verifyToken, StoreMasterController.getStoreMasterById);

// Update an StoreMaster by ID
StoreMasterRoute.patch('/edit_store/:id', verifyToken, StoreMasterController.updateStoreMasterById);

// Delete an StoreMaster by ID
StoreMasterRoute.delete('/delete_store/:id', verifyToken, StoreMasterController.deleteStoreMasterById);

module.exports = StoreMasterRoute;