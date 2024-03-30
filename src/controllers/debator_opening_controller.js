const DebtorOpening = require("../models/debator_opening_model");

// Controller to create a new DebtorOpening document

const DebatorOpningController = {
  createDebtorOpening: async (req, res) => {
    try {
      const { partyName, opening } = req.body;
      const debtorOpening = new DebtorOpening({ partyName, opening });
      await debtorOpening.save();
      res
        .status(201)
        .json({
          message: "Debtor opening created successfully",
          data: debtorOpening,
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  // Controller to get all DebtorOpening documents
  getAllDebtorOpenings: async (req, res) => {
    try {
      const debtorOpenings = await DebtorOpening.find();
      res.status(200).json({ data: debtorOpenings });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Controller to get a specific DebtorOpening document by ID
  getDebtorOpeningById: async (req, res) => {
    try {
      const debtorOpening = await DebtorOpening.findById(req.params.id);
      if (!debtorOpening) {
        return res.status(404).json({ message: "Debtor opening not found" });
      }
      res.status(200).json({ data: debtorOpening });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Controller to update a specific DebtorOpening document by ID
  updateDebtorOpeningById: async (req, res) => {
    try {
      const { partyName, opening } = req.body;
      const updatedDebtorOpening = await DebtorOpening.findByIdAndUpdate(
        req.params.id,
        { partyName, opening },
        { new: true }
      );
      if (!updatedDebtorOpening) {
        return res.status(404).json({ message: "Debtor opening not found" });
      }
      res
        .status(200)
        .json({
          message: "Debtor opening updated successfully",
          data: updatedDebtorOpening,
        });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Controller to delete a specific DebtorOpening document by ID
  deleteDebtorOpeningById: async (req, res) => {
    try {
      const deletedDebtorOpening = await DebtorOpening.findByIdAndDelete(
        req.params.id
      );
      if (!deletedDebtorOpening) {
        return res.status(404).json({ message: "Debtor opening not found" });
      }
      res.status(200).json({ message: "Debtor opening deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = DebatorOpningController;
