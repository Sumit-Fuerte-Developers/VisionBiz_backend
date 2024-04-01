const TexCode = require('../models/tax_code_modal');

const texCodeController = {
    // Create a new TexCode
    createTexCode: async (req, res) => {
        try {
            const newTexCode = new TexCode(req.body);
            await newTexCode.save();
            res.status(201).json(newTexCode);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all TexCodes
    getAllTexCodes: async (req, res) => {
        try {
            const texCodes = await TexCode.find();
            res.status(200).json(texCodes);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a TexCode by ID
    getTexCodeById: async (req, res) => {
        try {
            const texCode = await TexCode.findById(req.params.id);
            if (!texCode) {
                return res.status(404).json({ error: 'TexCode not found' });
            }
            res.status(200).json(texCode);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a TexCode by ID
    updateTexCodeById: async (req, res) => {
        try {
            const updatedTexCode = await TexCode.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedTexCode) {
                return res.status(404).json({ error: 'TexCode not found' });
            }
            res.status(200).json(updatedTexCode);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a TexCode by ID
    deleteTexCodeById: async (req, res) => {
        try {
            const deletedTexCode = await TexCode.findByIdAndDelete(req.params.id);
            if (!deletedTexCode) {
                return res.status(404).json({ error: 'TexCode not found' });
            }
            res.status(200).json({ message: 'TexCode deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = texCodeController;
