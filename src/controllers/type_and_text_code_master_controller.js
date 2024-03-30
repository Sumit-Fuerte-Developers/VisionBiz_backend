const TypeTax = require('../models/type_and_text_code_master_model');

const TypeTaxController = {
    // Controller to create a new Tax document
    createTax: async (req, res) => {
        try {
            const tax = new TypeTax(req.body);
            await tax.save();
            res.status(201).json({ message: 'Tax created successfully', data: tax });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller to get all Tax documents
    getAllTaxes: async (req, res) => {
        try {
            const taxes = await TypeTax.find();
            res.status(200).json({ data: taxes });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller to get a specific Tax document by ID
    getTaxById: async (req, res) => {
        try {
            const tax = await TypeTax.findById(req.params.id);
            if (!tax) {
                return res.status(404).json({ message: 'Tax not found' });
            }
            res.status(200).json({ data: tax });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller to update a specific Tax document by ID
    updateTaxById: async (req, res) => {
        try {
            const tax = await TypeTax.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!tax) {
                return res.status(404).json({ message: 'Tax not found' });
            }
            res.status(200).json({ message: 'Tax updated successfully', data: tax });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Controller to delete a specific Tax document by ID
    deleteTaxById: async (req, res) => {
        try {
            const tax = await TypeTax.findByIdAndDelete(req.params.id);
            if (!tax) {
                return res.status(404).json({ message: 'Tax not found' });
            }
            res.status(200).json({ message: 'Tax deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = TypeTaxController;
