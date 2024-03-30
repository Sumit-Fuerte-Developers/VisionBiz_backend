const TDSMaster = require('../models/tds_master_model');

const tdsController = {
    // Create a new TDS entry
    createTDS: async (req, res) => {
        try {
            const tdsEntry = new TDSMaster(req.body);
            await tdsEntry.save();
            res.status(201).json({ message: 'TDS entry created successfully', data: tdsEntry });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get all TDS entries
    getAllTDS: async (req, res) => {
        try {
            const allTDS = await TDSMaster.find();
            res.status(200).json({ data: allTDS });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get a specific TDS entry by ID
    getTDSById: async (req, res) => {
        try {
            const tdsEntry = await TDSMaster.findById(req.params.id);
            if (!tdsEntry) {
                return res.status(404).json({ message: 'TDS entry not found' });
            }
            res.status(200).json({ data: tdsEntry });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update a specific TDS entry by ID
    updateTDSById: async (req, res) => {
        try {
            const updatedTDS = await TDSMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedTDS) {
                return res.status(404).json({ message: 'TDS entry not found' });
            }
            res.status(200).json({ message: 'TDS entry updated successfully', data: updatedTDS });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete a specific TDS entry by ID
    deleteTDSById: async (req, res) => {
        try {
            const deletedTDS = await TDSMaster.findByIdAndDelete(req.params.id);
            if (!deletedTDS) {
                return res.status(404).json({ message: 'TDS entry not found' });
            }
            res.status(200).json({ message: 'TDS entry deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = tdsController;
