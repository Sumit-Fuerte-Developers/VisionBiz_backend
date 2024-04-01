const express = require('express');
const BankRecorouter = express.Router();
const bankReconciliationOpeningController = require('../controllers/bank_reco_controller');

// Routes for Bank Reconciliation Opening CRUD operations
BankRecorouter.post('/create_Bank_reco', bankReconciliationOpeningController.createOpening);
BankRecorouter.get('/show_Bank_reco', bankReconciliationOpeningController.getAllOpenings);
BankRecorouter.get('/show_Bank_reco/:id', bankReconciliationOpeningController.getOpeningById);
BankRecorouter.patch('/edit_Bank_reco/:id', bankReconciliationOpeningController.updateOpening);
BankRecorouter.delete('/delete_Bank_reco/:id', bankReconciliationOpeningController.deleteOpening);

module.exports = BankRecorouter;
