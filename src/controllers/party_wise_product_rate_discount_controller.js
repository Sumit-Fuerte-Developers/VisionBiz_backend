const PartywiseProductRateDiscount = require('../models/party_wise_product_rate_discount_model');

const partyWiseProductController = {
    // Create a new partywise product rate discount
    createPartywiseProductRateDiscount: async (req, res) => {
        try {
            const { fromParty } = req.body;
            const newDiscount = new PartywiseProductRateDiscount({ fromParty });
            const savedDiscount = await newDiscount.save();
            res.status(201).json(savedDiscount);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Get all partywise product rate discounts
    getAllPartywiseProductRateDiscounts: async (req, res) => {
        try {
            const discounts = await PartywiseProductRateDiscount.find();
            res.status(200).json(discounts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Get a specific partywise product rate discount by ID
    getPartywiseProductRateDiscountById: async (req, res) => {
        try {
            const discount = await PartywiseProductRateDiscount.findById(req.params.id);
            if (!discount) {
                return res.status(404).json({ message: 'Partywise product rate discount not found' });
            }
            res.status(200).json(discount);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update a partywise product rate discount by ID
    updatePartywiseProductRateDiscountById: async (req, res) => {
        try {
            const discount = await PartywiseProductRateDiscount.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!discount) {
                return res.status(404).json({ message: 'Partywise product rate discount not found' });
            }
            res.status(200).json(discount);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a partywise product rate discount by ID
    deletePartywiseProductRateDiscountById: async (req, res) => {
        try {
            const discount = await PartywiseProductRateDiscount.findByIdAndDelete(req.params.id);
            if (!discount) {
                return res.status(404).json({ message: 'Partywise product rate discount not found' });
            }
            res.status(200).json({ message: 'Partywise product rate discount deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = partyWiseProductController;
