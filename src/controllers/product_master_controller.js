const ProductMaster = require('../models/product_master_modal');
const ProdGroupMaster =require('../models/product_groups_master_modal');
const ProdClassMaster =require('../models/product_class_modal')
const ProductMasterController = {
    // Create a new ProductMaster
    createProductMaster: async (req, res) => {
        try {
            const { ProdClassCode, ProdGroupCode, ...rest } = req.body;
    
            let prodGroup = null;
            let prodClass = null;
    
            // Fetch the ProdGroupMaster and ProdClassMaster using ObjectId if provided
            if (ProdGroupCode) {
                prodGroup = await ProdGroupMaster.findById(ProdGroupCode);
                if (!prodGroup) {
                    return res.status(400).send({ error: 'Invalid ProdGroupCode ObjectId' });
                }
            }
    
            if (ProdClassCode) {
                prodClass = await ProdClassMaster.findById(ProdClassCode);
                if (!prodClass) {
                    return res.status(400).send({ error: 'Invalid ProdClassCode ObjectId' });
                }
            }
    
            // Extract the necessary fields, including ProdGroupCode and ProdClassCode if available
            const productData = {
                ...rest,
                ProdGroupCode: prodGroup ? prodGroup.ProdGroupCode : null,
                ProdGroupName: prodGroup ? prodGroup.ProdGroupName : null,
                ProdClassCode: prodClass ? prodClass.ProdClassCode : null,
                ProdClassName: prodClass ? prodClass.ProdClassName : null
            };
    
            const product = new ProductMaster(productData);
    
            await product.save();
            res.status(201).send(product);
        } catch (error) {
            res.status(400).send(error);
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
            res.status(200).json({ message: 'ProductMaster updated successfully', data: updatedProductMaster });
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
            res.status(200).json({ message: 'ProductMaster deleted successfully', });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = ProductMasterController;
