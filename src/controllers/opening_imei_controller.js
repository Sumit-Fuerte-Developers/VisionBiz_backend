const OpeningImei = require('../models/opening_imei_model');

const opningIMEIController = {
    createItem: async (req, res) => {
        try {
            const { itemName, opening, store } = req.body;
            const newItem = new OpeningImei({ itemName, opening, store });
            await newItem.save();
            res.status(201).json({ message: 'Imei created successfully', data: newItem });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAllItems: async (req, res) => {
        try {
            const items = await OpeningImei.find().populate('store');
            res.status(200).json({ data: items });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getItemById: async (req, res) => {
        try {
            const item = await OpeningImei.findById(req.params.id).populate('store');
            if (!item) {
                return res.status(404).json({ message: 'Imei not found' });
            }
            res.status(200).json({ data: item });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateItem: async (req, res) => {
        try {
            const { itemName, opening, store } = req.body;
            const updatedItem = await OpeningImei.findByIdAndUpdate(req.params.id, { itemName, opening, store }, { new: true }).populate('store');
            if (!updatedItem) {
                return res.status(404).json({ message: 'Imei not found' });
            }
            res.status(200).json({ message: 'Imei updated successfully', data: updatedItem });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteItem: async (req, res) => {
        try {
            const deletedItem = await OpeningImei.findByIdAndDelete(req.params.id);
            if (!deletedItem) {
                return res.status(404).json({ message: 'Imei not found' });
            }
            res.status(200).json({ message: 'Imei deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = opningIMEIController;
