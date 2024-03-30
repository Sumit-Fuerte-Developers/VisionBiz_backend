const SalesPurches = require('../models/sales_purches_charges_setup_model');

const SalesPurchesController = {
    // Create a new SalesPurches document
    createSalesPurches: async (req, res) => {
      try {
        const newSalesPurches = new SalesPurches(req.body);
        await newSalesPurches.save();
        res.status(201).json({ message: 'SalesPurches created successfully', data: newSalesPurches });
      } catch (error) {
        res.status(400).json({ message: 'Error creating SalesPurches', error: error.message });
      }
    },
  
    // Get all SalesPurches documents
    getAllSalesPurches: async (req, res) => {
      try {
        const allSalesPurches = await SalesPurches.find();
        res.json({ message: 'All SalesPurches data', data: allSalesPurches });
      } catch (error) {
        res.status(400).json({ message: 'Error finding SalesPurches', error: error.message });
      }
    },
  
    // Get a specific SalesPurches document by ID
    getSalesPurchesById: async (req, res) => {
      try {
        const { id } = req.params;
        const salesPurches = await SalesPurches.findById(id);
        if (!salesPurches) {
          return res.status(404).json({ message: 'SalesPurches not found' });
        }
        res.json({ message: 'SalesPurches found', data: salesPurches });
      } catch (error) {
        res.status(400).json({ message: 'Error finding SalesPurches', error: error.message });
      }
    },
  
    // Update a specific SalesPurches document by ID
    updateSalesPurchesById: async (req, res) => {
      try {
        const { id } = req.params;
        const updates = req.body;
        const updatedSalesPurches = await SalesPurches.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedSalesPurches) {
          return res.status(404).json({ message: 'SalesPurches not found' });
        }
        res.json({ message: 'SalesPurches updated successfully', data: updatedSalesPurches });
      } catch (error) {
        res.status(500).json({ message: 'Error updating SalesPurches', error: error.message });
      }
    },
  
    // Delete a specific SalesPurches document by ID
    deleteSalesPurchesById: async (req, res) => {
      try {
        const { id } = req.params;
        const deletedSalesPurches = await SalesPurches.findByIdAndDelete(id);
        if (!deletedSalesPurches) {
          return res.status(404).json({ message: 'SalesPurches not found' });
        }
        res.json({ message: 'SalesPurches deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Error deleting SalesPurches', error: error.message });
      }
    }
  };
  
  module.exports = SalesPurchesController;