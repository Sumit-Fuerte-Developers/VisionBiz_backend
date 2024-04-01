const ProductMaster = require('../models/product_master_modal');

const ProductMasterController = {
    // Create a new ProductMaster
    createProductMaster: async (req, res) => {
        try {
            const newProductMaster = new ProductMaster(req.body);
            await newProductMaster.save();
            res.status(201).json(newProductMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all ProductMasters
    getAllProductMasters: async (req, res) => {
        try {
            const productMasters = await ProductMaster.find();
            res.status(200).json(productMasters);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a ProductMaster by ID
    getProductMasterById: async (req, res) => {
        try {
            const productMaster = await ProductMaster.findById(req.params.id);
            if (!productMaster) {
                return res.status(404).json({ error: 'ProductMaster not found' });
            }
            res.status(200).json(productMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a ProductMaster by ID
    updateProductMasterById: async (req, res) => {
        try {
            const updatedProductMaster = await ProductMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProductMaster) {
                return res.status(404).json({ error: 'ProductMaster not found' });
            }
            res.status(200).json(updatedProductMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a ProductMaster by ID
    deleteProductMasterById: async (req, res) => {
        try {
            const deletedProductMaster = await ProductMaster.findByIdAndDelete(req.params.id);
            if (!deletedProductMaster) {
                return res.status(404).json({ error: 'ProductMaster not found' });
            }
            res.status(200).json({ message: 'ProductMaster deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = ProductMasterController;
