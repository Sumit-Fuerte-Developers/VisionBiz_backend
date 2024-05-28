const UOMMaster = require('../models/uom_master_modal');

const UOMMasterController = {
    // Create a new UOMMaster
    createUOMMaster: async (req, res) => {
        try {
            const newUOMMaster = new UOMMaster(req.body);
            await newUOMMaster.save();
            res.status(201).json({ message: 'UOM Master created successfully', data: newUOMMaster });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all UOMMasters
    getAllUOMMasters: async (req, res) => {
        try {
            const uomMasters = await UOMMaster.find();
            res.status(200).json(uomMasters);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a UOMMaster by ID
    getUOMMasterById: async (req, res) => {
        try {
            const uomMaster = await UOMMaster.findById(req.params.id);
            if (!uomMaster) {
                return res.status(404).json({ error: 'UOM Master not found' });
            }
            res.status(200).json(uomMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a UOMMaster by ID
    updateUOMMasterById: async (req, res) => {
        try {
            const updatedUOMMaster = await UOMMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedUOMMaster) {
                return res.status(404).json({ error: 'UOM Master not found' });
            }
            res.status(200).json({ message: 'UOM Master updated successfully', data: updatedUOMMaster });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a UOMMaster by ID
    deleteUOMMasterById: async (req, res) => {
        try {
            const deletedUOMMaster = await UOMMaster.findByIdAndDelete(req.params.id);
            if (!deletedUOMMaster) {
                return res.status(404).json({ error: 'UOM Master not found' });
            }
            res.status(200).json({ message: 'UOM Master deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = UOMMasterController;
