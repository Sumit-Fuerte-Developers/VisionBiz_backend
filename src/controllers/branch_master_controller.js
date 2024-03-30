const BranchMaster = require('../models/branch_master_modal');

const BranchMasterController = {
    // Create a new BranchMaster document
    createBranchMaster: async (req, res) => {
        try {
            const branchMasterData = req.body;
            const newBranchMaster = new BranchMaster(branchMasterData);
            await newBranchMaster.save();
            res.status(201).json(newBranchMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all BranchMaster documents
    getAllBranchMasters: async (req, res) => {
        try {
            const branchMasters = await BranchMaster.find();
            res.status(200).json(branchMasters);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a single BranchMaster document by its ID
    getBranchMasterById: async (req, res) => {
        try {
            const { id } = req.params;
            const branchMaster = await BranchMaster.findById(id);
            if (!branchMaster) {
                return res.status(404).json({ error: 'BranchMaster not found' });
            }
            res.status(200).json(branchMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a BranchMaster document by its ID
    updateBranchMasterById: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedBranchMaster = await BranchMaster.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedBranchMaster) {
                return res.status(404).json({ error: 'BranchMaster not found' });
            }
            res.status(200).json(updatedBranchMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a BranchMaster document by its ID
    deleteBranchMasterById: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedBranchMaster = await BranchMaster.findByIdAndDelete(id);
            if (!deletedBranchMaster) {
                return res.status(404).json({ error: 'BranchMaster not found' });
            }
            res.status(200).json({ message: 'BranchMaster deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = BranchMasterController;
