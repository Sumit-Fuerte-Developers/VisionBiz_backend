const SubAccountMaster = require('../models/sub_account_master_modal');

const SubAccountMasterController = {
    // Create a new SubAccountMaster
    createSubAccountMaster: async (req, res) => {
        try {
            const newSubAccountMaster = new SubAccountMaster(req.body);
            await newSubAccountMaster.save();
            res.status(201).json(newSubAccountMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all SubAccountMasters
    getAllSubAccountMasters: async (req, res) => {
        try {
            const subAccountMasters = await SubAccountMaster.find();
            res.status(200).json(subAccountMasters);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a SubAccountMaster by ID
    getSubAccountMasterById: async (req, res) => {
        try {
            const subAccountMaster = await SubAccountMaster.findById(req.params.id);
            if (!subAccountMaster) {
                return res.status(404).json({ error: 'SubAccountMaster not found' });
            }
            res.status(200).json(subAccountMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a SubAccountMaster by ID
    updateSubAccountMasterById: async (req, res) => {
        try {
            const updatedSubAccountMaster = await SubAccountMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedSubAccountMaster) {
                return res.status(404).json({ error: 'SubAccountMaster not found' });
            }
            res.status(200).json(updatedSubAccountMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a SubAccountMaster by ID
    deleteSubAccountMasterById: async (req, res) => {
        try {
            const deletedSubAccountMaster = await SubAccountMaster.findByIdAndDelete(req.params.id);
            if (!deletedSubAccountMaster) {
                return res.status(404).json({ error: 'SubAccountMaster not found' });
            }
            res.status(200).json({ message: 'SubAccountMaster deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = SubAccountMasterController;
