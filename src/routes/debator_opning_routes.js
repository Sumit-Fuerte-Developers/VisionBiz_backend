const express = require('express');
const DebatorOpningrouter = express.Router();
const DebatorOpningController = require('../controllers/debator_opening_controller');
const verifyToken = require("../middleware/verifyToken");
// Route to create a new DebtorOpening document
DebatorOpningrouter.post('/create_debtor-opening',verifyToken, DebatorOpningController.createDebtorOpening);

// Route to get all DebtorOpening documents
DebatorOpningrouter.get('/show_debtor-opening',verifyToken, DebatorOpningController.getAllDebtorOpenings);

// Route to get a specific DebtorOpening document by ID
DebatorOpningrouter.get('/show_debtor-opening/:id',verifyToken, DebatorOpningController.getDebtorOpeningById);

// Route to update a specific DebtorOpening document by ID
DebatorOpningrouter.patch('/edit_debtor-opening/:id',verifyToken, DebatorOpningController.updateDebtorOpeningById);

// Route to delete a specific DebtorOpening document by ID
DebatorOpningrouter.delete('/delate_debtor-opening/:id',verifyToken, DebatorOpningController.deleteDebtorOpeningById);

module.exports = DebatorOpningrouter;
