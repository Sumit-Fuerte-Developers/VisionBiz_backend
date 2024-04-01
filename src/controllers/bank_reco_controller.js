const BankRecoOpening = require('../models/bank_reco_model');

const bankReconciliationOpeningController = {
    createOpening: async (req, res) => {
        try {
            const { bankName, opening } = req.body;
            const newOpening = new BankRecoOpening({ bankName, opening });
            await newOpening.save();
            res.status(201).json({ message: 'Bank reconciliation opening created successfully', data: newOpening });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllOpenings: async (req, res) => {
        try {
            const openings = await BankRecoOpening.find();
            res.status(200).json({ data: openings });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getOpeningById: async (req, res) => {
        try {
            const opening = await BankRecoOpening.findById(req.params.id);
            if (!opening) {
                return res.status(404).json({ message: 'Bank reconciliation opening not found' });
            }
            res.status(200).json({ data: opening });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateOpening: async (req, res) => {
        try {
            const { bankName, opening } = req.body;
            const updatedOpening = await BankRecoOpening.findByIdAndUpdate(req.params.id, { bankName, opening }, { new: true });
            if (!updatedOpening) {
                return res.status(404).json({ message: 'Bank reconciliation opening not found' });
            }
            res.status(200).json({ message: 'Bank reconciliation opening updated successfully', data: updatedOpening });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteOpening: async (req, res) => {
        try {
            const deletedOpening = await BankRecoOpening.findByIdAndDelete(req.params.id);
            if (!deletedOpening) {
                return res.status(404).json({ message: 'Bank reconciliation opening not found' });
            }
            res.status(200).json({ message: 'Bank reconciliation opening deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = bankReconciliationOpeningController;
