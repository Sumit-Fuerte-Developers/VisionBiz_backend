const ProductClass = require('../models/product_class_modal');

const ProductClassController = {
    // Create a new ProductClass
    createProductClass: async (req, res) => {
        try {
            const newProductClass = new ProductClass(req.body);
            await newProductClass.save();
            res.status(201).json(newProductClass);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all ProductClasses
    getAllProductClasses: async (req, res) => {
        try {
            const productClasses = await ProductClass.find();
            res.status(200).json(productClasses);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a ProductClass by ID
    getProductClassById: async (req, res) => {
        try {
            const productClass = await ProductClass.findById(req.params.id);
            if (!productClass) {
                return res.status(404).json({ error: 'Product Class not found' });
            }
            res.status(200).json(productClass);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a ProductClass by ID
    updateProductClassById: async (req, res) => {
        try {
            const updatedProductClass = await ProductClass.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProductClass) {
                return res.status(404).json({ error: 'Product Class not found' });
            }
            res.status(200).json(updatedProductClass);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a ProductClass by ID
    deleteProductClassById: async (req, res) => {
        try {
            const deletedProductClass = await ProductClass.findByIdAndDelete(req.params.id);
            if (!deletedProductClass) {
                return res.status(404).json({ error: 'Product Class not found' });
            }
            res.status(200).json({ message: 'Product Class deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = ProductClassController;
