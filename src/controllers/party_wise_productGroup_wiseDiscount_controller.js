

const PartywiseProductGroupRateDiscount = require('../models/party_wise_productGroup_wiseDiscount_model');

const partywiseProductGroupRateDiscountController = {
    // Create a new partywise product group rate discount
    createPartywiseProductGroupRateDiscount: async (req, res) => {
        try {
            const { fromParty } = req.body;
            const newDiscount = new PartywiseProductGroupRateDiscount({ fromParty });
            const savedDiscount = await newDiscount.save();
            res.status(201).json(savedDiscount);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Get all partywise product group rate discounts
    getAllPartywiseProductGroupRateDiscounts: async (req, res) => {
        try {
            const discounts = await PartywiseProductGroupRateDiscount.find();
            res.status(200).json(discounts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Get a specific partywise product group rate discount by ID
    getPartywiseProductGroupRateDiscountById: async (req, res) => {
        try {
            const discount = await PartywiseProductGroupRateDiscount.findById(req.params.id);
            if (!discount) {
                return res.status(404).json({ message: 'Partywise product group rate discount not found' });
            }
            res.status(200).json(discount);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update a partywise product group rate discount by ID
    updatePartywiseProductGroupRateDiscountById: async (req, res) => {
        try {
            const discount = await PartywiseProductGroupRateDiscount.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!discount) {
                return res.status(404).json({ message: 'Partywise product group rate discount not found' });
            }
            res.status(200).json(discount);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Delete a partywise product group rate discount by ID
    deletePartywiseProductGroupRateDiscountById: async (req, res) => {
        try {
            const discount = await PartywiseProductGroupRateDiscount.findByIdAndDelete(req.params.id);
            if (!discount) {
                return res.status(404).json({ message: 'Partywise product group rate discount not found' });
            }
            res.status(200).json({ message: 'Partywise product group rate discount deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = partywiseProductGroupRateDiscountController;
