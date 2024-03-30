const PartyPurches = require('../models/party_purches_charge_constant_model'); // Import the PartyPurches model

const partyPurchesController = {
    // Controller function to create a new PartyPurches document
    createPartyPurches: async (req, res) => {
        try {
            const { partyname } = req.body;
            const newPartyPurches = new PartyPurches({ partyname });
            await newPartyPurches.save();
            res.status(201).json({ message: 'PartyPurches created successfully', data: newPartyPurches });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller function to get all PartyPurches documents
    getAllPartyPurches: async (req, res) => {
        try {
            const partyPurchesList = await PartyPurches.find();
            res.status(200).json({ data: partyPurchesList });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller function to get a specific PartyPurches document by ID
    getPartyPurchesById: async (req, res) => {
        try {
            const partyPurches = await PartyPurches.findById(req.params.id);
            if (!partyPurches) {
                return res.status(404).json({ message: 'PartyPurches not found' });
            }
            res.status(200).json({ data: partyPurches });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller function to update a specific PartyPurches document by ID
    updatePartyPurchesById: async (req, res) => {
        try {
            const updatedPartyPurches = await PartyPurches.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedPartyPurches) {
                return res.status(404).json({ message: 'PartyPurches not found' });
            }
            res.status(200).json({ message: 'PartyPurches updated successfully', data: updatedPartyPurches });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller function to delete a specific PartyPurches document by ID
    deletePartyPurchesById: async (req, res) => {
        try {
            const deletedPartyPurches = await PartyPurches.findByIdAndDelete(req.params.id);
            if (!deletedPartyPurches) {
                return res.status(404).json({ message: 'PartyPurches not found' });
            }
            res.status(200).json({ message: 'PartyPurches deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = partyPurchesController;
