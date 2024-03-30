const AccountMaster = require('../models/account_master_modal');

const AccountMasterController = {
    // Create a new account
    createAccount: async (req, res) => {
        try {
            const newAccount = new AccountMaster(req.body);
            await newAccount.save();
            res.status(201).json(newAccount);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get all accounts
    getAllAccounts: async (req, res) => {
        try {
            const accounts = await AccountMaster.find();
            res.status(200).json(accounts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Get an account by ID
    getAccountById: async (req, res) => {
        try {
            const account = await AccountMaster.findById(req.params.id);
            if (!account) {
                return res.status(404).json({ error: 'Account not found' });
            }
            res.status(200).json(account);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Update an account by ID
    updateAccountById: async (req, res) => {
        try {
            const updatedAccount = await AccountMaster.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedAccount) {
                return res.status(404).json({ error: 'Account not found' });
            }
            res.status(200).json(updatedAccount);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    // Delete an account by ID
    deleteAccountById: async (req, res) => {
        try {
            const deletedAccount = await AccountMaster.findByIdAndDelete(req.params.id);
            if (!deletedAccount) {
                return res.status(404).json({ error: 'Account not found' });
            }
            res.status(200).json({ message: 'Account deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

module.exports = AccountMasterController;