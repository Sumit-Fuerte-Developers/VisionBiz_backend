// controllers/salesmanMasterController.js

const SalesmanMaster = require('../models/salesman_master_model');

// Create a new salesman

const SalesmanController = {
createSalesman: async (req, res) => {
  try {
    const newSalesman = new SalesmanMaster(req.body);
    await newSalesman.save();
    res.status(201).json(newSalesman);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
},

// Get all salesmen
getAllSalesmen : async (req, res) => {
  try {
    const allSalesmen = await SalesmanMaster.find();
    res.json(allSalesmen);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Get a specific salesman by ID
getSalesmanById : async (req, res) => {
  try {
    const salesman = await SalesmanMaster.findById(req.params.id);
    if (!salesman) {
      return res.status(404).json({ message: 'Salesman not found' });
    }
    res.json(salesman);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Update a specific salesman by ID
updateSalesmanById : async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedSalesman = await SalesmanMaster.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedSalesman) {
      return res.status(404).json({ message: 'Salesman not found' });
    }

    res.json(updatedSalesman);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
},

// Delete a specific salesman by ID
deleteSalesmanById : async (req, res) => {
  try {
    const { id } = req.params;

    const salesman = await SalesmanMaster.findByIdAndDelete(id);

    if (!salesman) {
      return res.status(404).json({ message: 'Salesman not found' });
    }

    res.json({ message: 'Salesman deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting salesman', error: err.message });
  }
},
}
module.exports = SalesmanController;