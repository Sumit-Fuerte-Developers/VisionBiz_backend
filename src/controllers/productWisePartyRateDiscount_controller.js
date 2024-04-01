const ProductWisepartyRateDiscount = require('../models/productWisepartyRateDiscount_model');

const productWisepartyRateDiscountController = {
    // Create a new product-wise party rate discount
    createProductWisepartyRateDiscount: async (req, res) => {
        try {
            const { Party } = req.body;
            const newDiscount = new ProductWisepartyRateDiscount({ Party });
            const savedDiscount = await newDiscount.save();
            res.status(201).json(savedDiscount);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    // Get all product-wise party rate discounts
    getAllProductWisepartyRateDiscounts: async (req, res) => {
        try {
            const discounts = await ProductWisepartyRateDiscount.find();
            res.status(200).json(discounts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Get a specific product-wise party rate discount by ID
    getProductWisepartyRateDiscountById: async (req, res) => {
        try {
            const discount = await ProductWisepartyRateDiscount.findById(req.params.id);
            if (!discount) {
                return res.status(404).json({ message: 'Product-wise party rate discount not found' });
            }
            res.status(200).json({message: 'Product-wise party rate discount added successfully',discount});
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    // Update a product-wise party rate discount by ID
  updateProductWisepartyRateDiscountById : async (req, res) => {
        try {
            const updatedDiscount = await ProductWisepartyRateDiscount.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedDiscount) {
                return res.status(404).json({ message: 'Product-wise party rate discount not found' });
            }
            res.status(200).json({ message: 'Product-wise party rate discount updated successfully', updatedDiscount });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
    

    // Delete a product-wise party rate discount by ID
    deleteProductWisepartyRateDiscountById: async (req, res) => {
        try {
            const discount = await ProductWisepartyRateDiscount.findByIdAndDelete(req.params.id);
            if (!discount) {
                return res.status(404).json({ message: 'Product-wise party rate discount not found' });
            }
            res.status(200).json({ message: 'Product-wise party rate discount deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};

module.exports = productWisepartyRateDiscountController;
