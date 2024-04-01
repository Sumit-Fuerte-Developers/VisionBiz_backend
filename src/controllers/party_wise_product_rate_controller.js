const PartywiseProductRate = require('../models/party_wise_product_rate_model');

const PartyWIseProductsController = {
    // Create a new partywise product rate
    createPartywiseProductRate: async (req, res) => {
        try {
            const { fromParty, toParty, rate } = req.body;
            const newRate = new PartywiseProductRate({ fromParty, toParty, rate });
            const savedRate = await newRate.save();
            res.status(201).json(savedRate);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Get all partywise product rates
    getAllPartywiseProductRates: async (req, res) => {
        try {
            const rates = await PartywiseProductRate.find();
            res.status(200).json(rates);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Get a specific partywise product rate by ID
    getPartywiseProductRateById: async (req, res) => {
        try {
            const rate = await PartywiseProductRate.findById(req.params.id);
            if (!rate) {
                return res.status(404).json({ message: 'Partywise product rate not found' });
            }
            res.status(200).json(rate);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update a partywise product rate by ID
    updatePartywiseProductRateById: async (req, res) => {
        try {
            const rate = await PartywiseProductRate.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!rate) {
                return res.status(404).json({ message: 'Partywise product rate not found' });
            }
            res.status(200).json(rate);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a partywise product rate by ID
    deletePartywiseProductRateById: async (req, res) => {
        try {
            const rate = await PartywiseProductRate.findByIdAndDelete(req.params.id);
            if (!rate) {
                return res.status(404).json({ message: 'Partywise product rate not found' });
            }
            res.status(200).json({ message: 'Partywise product rate deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = PartyWIseProductsController;
