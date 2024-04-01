const express = require('express');
const HSNRoute = express.Router();
const hsnController = require('../controllers/hsn_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new HSN
HSNRoute.post('/create_hsn', verifyToken, hsnController.createHSN);

// Get all HSN
HSNRoute.get('/show_hsn', verifyToken, hsnController.getAllHSNs);

// Get an HSN by ID
HSNRoute.get('/show_hsn/:id', verifyToken, hsnController.getHSNById);

// Update an HSN by ID
HSNRoute.patch('/edit_hsn/:id', verifyToken, hsnController.updateHSNById);

// Delete an HSN by ID
HSNRoute.delete('/delete_hsn/:id', verifyToken, hsnController.deleteHSNById);

module.exports = HSNRoute;