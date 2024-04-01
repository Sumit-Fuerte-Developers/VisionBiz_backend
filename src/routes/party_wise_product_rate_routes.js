const express = require('express');
const PartyWiseProductrouter = express.Router();
const partywiseProductRateController = require('../controllers/party_wise_product_rate_controller');
const verifyToken = require("../middleware/verifyToken");
// Create a new partywise product rate
PartyWiseProductrouter.post('/add_partywiseProductRate',verifyToken, partywiseProductRateController.createPartywiseProductRate);

// Get all partywise product rates
PartyWiseProductrouter.get('/show_partywiseProductRate',verifyToken, partywiseProductRateController.getAllPartywiseProductRates);

// Get a specific partywise product rate by IDartyWiseProductrouter.get('/partywiseProductRate',verifyToken, partywiseProductRateController.getAllPartywiseProductRates);
PartyWiseProductrouter.get('/show_partywiseProductRate/:id',verifyToken, partywiseProductRateController.getPartywiseProductRateById);

// Update a partywise product rate by ID
PartyWiseProductrouter.patch('/edit_partywiseProductRate/:id', verifyToken,partywiseProductRateController.updatePartywiseProductRateById);

// Delete a partywise product rate by ID
PartyWiseProductrouter.delete('/delete_partywiseProductRate/:id',verifyToken, partywiseProductRateController.deletePartywiseProductRateById);

module.exports = PartyWiseProductrouter;
