const express = require('express');
const DespatchFormRoute = express.Router();
const DespatchFormController = require('../controllers/despatch_form_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new DespatchForm
DespatchFormRoute.post('/create_despatch',verifyToken, DespatchFormController.createDespatchForm);

// Get all DespatchForm
DespatchFormRoute.get('/show_despatch',verifyToken, DespatchFormController.getAllDespatchForms);

// Get an DespatchForm by ID
DespatchFormRoute.get('/show_despatch/:id',verifyToken, DespatchFormController.getDespatchFormById);

// Update an DespatchForm by ID
DespatchFormRoute.patch('/edit_despatch/:id',verifyToken, DespatchFormController.updateDespatchFormById);

// Delete an DespatchForm by ID
DespatchFormRoute.delete('/delete_despatch/:id',verifyToken, DespatchFormController.deleteDespatchFormById);

module.exports = DespatchFormRoute;