const NarrationMaster = require('../models/narration_master_modal');

const NarrationMasterController = {
    createNarrationMaster: async (req, res) => {
        try {
            const newNarrationMaster = new NarrationMaster(req.body);
            await newNarrationMaster.save();
            res.status(201).json(newNarrationMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: "Server error"});
        }
    },

    getAllNarrationMaster: async (req, res) => {
        try {
            const narrationMaster = await NarrationMaster.find();
            res.status(200).json(narrationMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server Error'});
        }
    },

    getNarrationMasterById: async (req, res) => {
        try {
            const narrationMaster = await NarrationMaster.findById(req.params.id);
            if (!narrationMaster) {
                return res.status(404).json({error: 'Bank Master not found'});
            }
            res.status(200).json(narrationMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server Error'});
        }
    },

    updateNarrationMasterById: async (req, res) => {
        try {
            const updateNarrationMaster = await NarrationMaster.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if (!updateNarrationMaster) {
                return res.status(404).json({error: 'Bank Master not found'});
            }
            res.status(200).json(updateNarrationMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    },

    deleteNarrationMasterById: async (req, res) => {
        try {
            const deleteNarrationMaster = await NarrationMaster.findByIdAndDelete(req.params.id);
            if (!deleteNarrationMaster) {
                return res.status(404).json({error: 'Bank Master not found'});
            }
            res.status(200).json({message: 'Bank Master deleted successfully'});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    }
};

module.exports = NarrationMasterController;