const Measurement = require('../models/measurement_modal');

const MeasurementController = {
    // Create a new Measurement
    createMeasurement: async (req, res) => {
        try {
            const newMeasurement = new Measurement(req.body);
            await newMeasurement.save();
            res.status(201).json(newMeasurement);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all Measurements
    getAllMeasurements: async (req, res) => {
        try {
            const measurements = await Measurement.find();
            res.status(200).json(measurements);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a Measurement by ID
    getMeasurementById: async (req, res) => {
        try {
            const measurement = await Measurement.findById(req.params.id);
            if (!measurement) {
                return res.status(404).json({ error: 'Measurement not found' });
            }
            res.status(200).json(measurement);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a Measurement by ID
    updateMeasurementById: async (req, res) => {
        try {
            const updatedMeasurement = await Measurement.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedMeasurement) {
                return res.status(404).json({ error: 'Measurement not found' });
            }
            res.status(200).json(updatedMeasurement);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a Measurement by ID
    deleteMeasurementById: async (req, res) => {
        try {
            const deletedMeasurement = await Measurement.findByIdAndDelete(req.params.id);
            if (!deletedMeasurement) {
                return res.status(404).json({ error: 'Measurement not found' });
            }
            res.status(200).json({ message: 'Measurement deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = MeasurementController;
