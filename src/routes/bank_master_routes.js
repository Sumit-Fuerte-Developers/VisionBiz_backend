const express = require('express');
const BankMasterRoute = express.Router();
const BankMasterController = require('../controllers/bank_master_controller');
const verifyToken = require('../middleware/verifyToken');

BankMasterRoute.post('/create_bankMaster', verifyToken, BankMasterController.createBankMaster);

BankMasterRoute.get('/show_bankMaster', verifyToken, BankMasterController.getAllBankMaster);

BankMasterRoute.get('/show_bankMaster/:id', verifyToken, BankMasterController.getBankMasterById);

BankMasterRoute.patch('/edit_bankMaster/:id', verifyToken, BankMasterController.updateBankMasterById);

BankMasterRoute.delete('/delete_bankMaster/:id', verifyToken, BankMasterController.deleteBankMasterById);

module.exports = BankMasterRoute;