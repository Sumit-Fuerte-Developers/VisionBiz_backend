const HSN = require('../models/hsn_modal');

const hsnController = {
    // Create a new HSN
    createHSN: async (req, res) => {
        try {
            const newHSN = new HSN(req.body);
            await newHSN.save();
            res.status(201).json(newHSN);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all HSNs
    getAllHSNs: async (req, res) => {
        try {
            const hsns = await HSN.find();
            res.status(200).json(hsns);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get an HSN by ID
    getHSNById: async (req, res) => {
        try {
            const hsn = await HSN.findById(req.params.id);
            if (!hsn) {
                return res.status(404).json({ error: 'HSN not found' });
            }
            res.status(200).json(hsn);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update an HSN by ID
    updateHSNById: async (req, res) => {
        try {
            const updatedHSN = await HSN.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedHSN) {
                return res.status(404).json({ error: 'HSN not found' });
            }
            res.status(200).json(updatedHSN);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete an HSN by ID
    deleteHSNById: async (req, res) => {
        try {
            const deletedHSN = await HSN.findByIdAndDelete(req.params.id);
            if (!deletedHSN) {
                return res.status(404).json({ error: 'HSN not found' });
            }
            res.status(200).json({ message: 'HSN deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = hsnController;
