const express = require('express');
const AccountMasterRoute = express.Router();
const AccountMasterController = require('../controllers/account_master_controller');
const verifyToken = require("../middleware/verifyToken");

// Create a new account
AccountMasterRoute.post('/create_accounts',verifyToken, AccountMasterController.createAccount);

// Get all accounts
AccountMasterRoute.get('/show_accounts',verifyToken, AccountMasterController.getAllAccounts);

// Get an account by ID
AccountMasterRoute.get('/show_accounts/:id',verifyToken, AccountMasterController.getAccountById);

// Update an account by ID
AccountMasterRoute.patch('/edit_accounts/:id',verifyToken, AccountMasterController.updateAccountById);

// Delete an account by ID
AccountMasterRoute.delete('/delete_accounts/:id',verifyToken, AccountMasterController.deleteAccountById);

module.exports = AccountMasterRoute;