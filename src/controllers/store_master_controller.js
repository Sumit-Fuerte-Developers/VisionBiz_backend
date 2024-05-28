const StoreMaster = require('../models/store_master_modal');

const StoreMasterController = {

    // Create a new StoreMaster
    createStoreMaster: async (req, res) => {
        try {
            const newStoreMaster = new StoreMaster(req.body);
            await newStoreMaster.save();
            res.status(201).json({ message: 'Store created successfully', data: newStoreMaster });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all StoreMaster
    getAllStoreMaster: async (req, res) => {
        try {
            const storeMaster = await StoreMaster.find();
            res.status(200).json(storeMaster);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a StoreMaster by ID
    getStoreMasterById: async (req, res) => {
        try {
            const storeMaster = await StoreMaster.findById(req.params.id);
            if (!storeMaster) {
                return res.status(404).json({ error: 'Store not found' });
            }
            res.status(200).json(storeMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a StoreMaster by ID
    updateStoreMasterById: async (req, res) => {
        try {
            const updatedStoreMaster = await StoreMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedStoreMaster) {
                return res.status(404).json({ error: 'Store not found' });
            }
            res.status(200).json({ message: 'Store updated successfully', data: updatedStoreMaster });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a StoreMaster by ID
    deleteStoreMasterById: async (req, res) => {
        try {
            const deletedStoreMaster = await StoreMaster.findByIdAndDelete(req.params.id);
            if (!deletedStoreMaster) {
                return res.status(404).json({ error: 'Store not found' });
            }
            res.status(200).json({ message: 'Store deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = StoreMasterController;
