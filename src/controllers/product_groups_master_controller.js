const ProductGroupMaster = require('../models/product_groups_master_modal');

const ProductGroupMasterController = {
    // Create a new ProductGroupMaster
    createProductGroupMaster: async (req, res) => {
        try {
            const newProductGroupMaster = new ProductGroupMaster(req.body);
            await newProductGroupMaster.save();
            res.status(201).json({ message: 'Product Group Master created successfully', data: newProductGroupMaster });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all ProductGroupMasters
    getAllProductGroupMasters: async (req, res) => {
        try {
            const productGroupMasters = await ProductGroupMaster.find();
            res.status(200).json(productGroupMasters);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get a ProductGroupMaster by ID
    getProductGroupMasterById: async (req, res) => {
        try {
            const productGroupMaster = await ProductGroupMaster.findById(req.params.id);
            if (!productGroupMaster) {
                return res.status(404).json({ error: 'Product Group Master not found' });
            }
            res.status(200).json(productGroupMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update a ProductGroupMaster by ID
    updateProductGroupMasterById: async (req, res) => {
        try {
            const updatedProductGroupMaster = await ProductGroupMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedProductGroupMaster) {
                return res.status(404).json({ error: 'Product Group Master not found' });
            }
            res.status(200).json({ message: 'Product Group Master updated successfully', data: updatedProductGroupMaster });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete a ProductGroupMaster by ID
    deleteProductGroupMasterById: async (req, res) => {
        try {
            const deletedProductGroupMaster = await ProductGroupMaster.findByIdAndDelete(req.params.id);
            if (!deletedProductGroupMaster) {
                return res.status(404).json({ error: 'Product Group Master not found' });
            }
            res.status(200).json({ message: 'Product Group Master deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = ProductGroupMasterController;
