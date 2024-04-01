const Item = require('../models/item_modal');

const ItemController = {
    // Create a new Item
    createItem: async (req, res) => {
        try {
            const newItem = new Item(req.body);
            await newItem.save();
            res.status(201).json(newItem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all Items
    getAllItems: async (req, res) => {
        try {
            const items = await Item.find();
            res.status(200).json(items);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get an Item by ID
    getItemById: async (req, res) => {
        try {
            const item = await Item.findById(req.params.id);
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }
            res.status(200).json(item);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update an Item by ID
    updateItemById: async (req, res) => {
        try {
            const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedItem) {
                return res.status(404).json({ error: 'Item not found' });
            }
            res.status(200).json(updatedItem);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete an Item by ID
    deleteItemById: async (req, res) => {
        try {
            const deletedItem = await Item.findByIdAndDelete(req.params.id);
            if (!deletedItem) {
                return res.status(404).json({ error: 'Item not found' });
            }
            res.status(200).json({ message: 'Item deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = ItemController;
