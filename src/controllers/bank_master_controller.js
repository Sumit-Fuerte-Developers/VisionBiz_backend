const BankMaster = require('../models/bank_master_modal');

const BankMasterController = {
    createBankMaster: async (req, res) => {
        try {
            const newBankMaster = new BankMaster(req.body);
            await newBankMaster.save();
            res.status(201).json(newBankMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    },

    getAllBankMaster: async (req, res) => {
        try {
            const bankMaster = await BankMaster.find();
            res.status(200).json(bankMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    },

    getBankMasterById: async (req, res) => {
        try {
            const bankMaster = await BankMaster.findById(req.params.id);
            if (!bankMaster) {
                return res.status(404).json({error: 'Bank Master not found'});
            }
            res.status(200).json(bankMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server Error'});
        }
    },

    updateBankMasterById: async (req, res) => {
        try {
            const updateBankMaster = await BankMaster.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if (!updateBankMaster) {
                return res.status(404).json({error: 'Bank Master not found'});
            }
            res.status(200).json(updateBankMaster);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    },

    deleteBankMasterById: async (req, res) => {
        try {
            const deleteBankMaster = await BankMaster.findByIdAndDelete(req.params.id);
            if (!deleteBankMaster) {
                return res.status(404).json({error: 'Bank Master not found'});
            }
            res.status(200).json({message: 'Bank Master deleted successfully'});
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error'});
        }
    }
};

module.exports = BankMasterController;