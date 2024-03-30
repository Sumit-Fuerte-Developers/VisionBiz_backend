const PartySales = require('../models/party_sales_charge_constant_model');

const partySalesController = {
  createPartySales: async (req, res) => {
    try {
      const { partyname } = req.body;
      const newPartySales = new PartySales({ partyname });
      await newPartySales.save();
      res.status(201).json({ message: 'PartySales created successfully', data: newPartySales });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllPartySales: async (req, res) => {
    try {
      const partySalesList = await PartySales.find();
      res.status(200).json({ data: partySalesList });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPartySalesById: async (req, res) => {
    try {
      const partySales = await PartySales.findById(req.params.id);
      if (!partySales) {
        return res.status(404).json({ message: 'PartySales not found' });
      }
      res.status(200).json({ data: partySales });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePartySalesById: async (req, res) => {
    try {
      const { partyname } = req.body;
      const updatedPartySales = await PartySales.findByIdAndUpdate(req.params.id, { partyname }, { new: true });
      if (!updatedPartySales) {
        return res.status(404).json({ message: 'PartySales not found' });
      }
      res.status(200).json({ message: 'PartySales updated successfully', data: updatedPartySales });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletePartySalesById: async (req, res) => {
    try {
      const deletedPartySales = await PartySales.findByIdAndDelete(req.params.id);
      if (!deletedPartySales) {
        return res.status(404).json({ message: 'PartySales not found' });
      }
      res.status(200).json({ message: 'PartySales deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = partySalesController;
