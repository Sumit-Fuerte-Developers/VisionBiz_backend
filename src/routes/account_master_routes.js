const express = require('express');
const AccountMasterRoute = express.Router();
const AccountMasterController = require('../controllers/account_master_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new account
AccountMasterRoute.post('/create_accounts', AccountMasterController.createAccount);
//AccountMasterRoute.post('/create_accounts/image', AccountMasterController.createSuperMasterWithImage);

// Get all accounts
AccountMasterRoute.get('/show_accounts', AccountMasterController.getAllAccounts);
AccountMasterRoute.get('/show_accountswithl', AccountMasterController.getPartyNamesWithFlagL);
AccountMasterRoute.get('/show_accountswithg', AccountMasterController.getPartyNamesWithFlagG);

// Get an account by ID
AccountMasterRoute.get('/show_accounts/:id', AccountMasterController.getAccountById);

// Update an account by ID
AccountMasterRoute.patch('/edit_accounts/:id', AccountMasterController.updateAccountById);

// Delete an account by ID
AccountMasterRoute.delete('/delete_accounts/:id', AccountMasterController.deleteAccountById);

module.exports = AccountMasterRoute;