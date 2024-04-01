const express = require('express');
const MeasurementRoute = express.Router();
const MeasurementController = require('../controllers/measurement_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new Measurement
MeasurementRoute.post('/create_measurement', verifyToken, MeasurementController.createMeasurement);

// Get all Measurement
MeasurementRoute.get('/show_measurement', verifyToken, MeasurementController.getAllMeasurements);

// Get an Measurement by ID
MeasurementRoute.get('/show_measurement/:id', verifyToken, MeasurementController.getMeasurementById);

// Update an Measurement by ID
MeasurementRoute.patch('/edit_measurement/:id', verifyToken, MeasurementController.updateMeasurementById);

// Delete an Measurement by ID
MeasurementRoute.delete('/delete_measurement/:id', verifyToken, MeasurementController.deleteMeasurementById);

module.exports = MeasurementRoute;