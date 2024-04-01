const creditorsOpening = require('../models/creaditors_opening_model');

const creditorsOpeningController = {
    createOpening: async (req, res) => {
        try {
            const { partyName, opening } = req.body;
            const newOpening = new creditorsOpening({ partyName, opening });
            await newOpening.save();
            res.status(201).json({ message: 'Creditor opening created successfully', data: newOpening });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllOpenings: async (req, res) => {
        try {
            const openings = await creditorsOpening.find();
            res.status(200).json({ data: openings });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getOpeningById: async (req, res) => {
        try {
            const opening = await creditorsOpening.findById(req.params.id);
            if (!opening) {
                return res.status(404).json({ message: 'Creditor opening not found' });
            }
            res.status(200).json({ data: opening });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateOpening: async (req, res) => {
        try {
            const { partyName, opening } = req.body;
            const updatedOpening = await creditorsOpening.findByIdAndUpdate(req.params.id, { partyName, opening }, { new: true });
            if (!updatedOpening) {
                return res.status(404).json({ message: 'Creditor opening not found' });
            }
            res.status(200).json({ message: 'Creditor opening updated successfully', data: updatedOpening });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteOpening: async (req, res) => {
        try {
            const deletedOpening = await creditorsOpening.findByIdAndDelete(req.params.id);
            if (!deletedOpening) {
                return res.status(404).json({ message: 'Creditor opening not found' });
            }
            res.status(200).json({ message: 'Creditor opening deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = creditorsOpeningController;
