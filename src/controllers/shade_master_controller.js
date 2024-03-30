const ShadeMaster = require('../models/shade_master_modal');

const ShadeMasterController = {

    // Create a new ShadeMaster
    createShadeMaster: async (req, res) => {
        try {
            const newShadeMaster = new ShadeMaster(req.body);
            await newShadeMaster.save();
            res.status(201).json(newShadeMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all ShadeMaster
    getAllShadeMaster: async (req, res) => {
        try {
            const shadeMaster = await ShadeMaster.find();
            res.status(200).json(shadeMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a ShadeMaster by ID
    getShadeMasterById: async (req, res) => {
        try {
            const shadeMaster = await ShadeMaster.findById(req.params.id);
            if (!shadeMaster) {
                return res.status(404).json({ error: 'DespatchForm not found' });
            }
            res.status(200).json(shadeMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a ShadeMaster by ID
    updateShadeMasterById: async (req, res) => {
        try {
            const updatedShadeMaster = await ShadeMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedShadeMaster) {
                return res.status(404).json({ error: 'Shade not found' });
            }
            res.status(200).json(updatedShadeMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a ShadeMaster by ID
    deleteShadeMasterById: async (req, res) => {
        try {
            const deletedShadeMaster = await ShadeMaster.findByIdAndDelete(req.params.id);
            if (!deletedShadeMaster) {
                return res.status(404).json({ error: 'Shade not found' });
            }
            res.status(200).json({ message: 'Shade deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = ShadeMasterController;
