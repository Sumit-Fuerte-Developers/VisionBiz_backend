const express = require('express');
const partyPurchesrouter = express.Router();
const partyPurchesController = require('../controllers/party_purches_charge_constant_controller');
const verifyToken = require("../middleware/verifyToken");
// Route to create a new PartyPurches document
partyPurchesrouter.post('/create_party-purches',verifyToken, partyPurchesController.createPartyPurches);

// Route to get all PartyPurches documents
partyPurchesrouter.get('/show_party-purches',verifyToken, partyPurchesController.getAllPartyPurches);

// Route to get a specific PartyPurches document by ID
partyPurchesrouter.get('/show_party-purches/:id',verifyToken, partyPurchesController.getPartyPurchesById);

// Route to update a specific PartyPurches document by ID using PUT
partyPurchesrouter.patch('/edit_party-purches/:id',verifyToken, partyPurchesController.updatePartyPurchesById);

// Route to delete a specific PartyPurches document by ID
partyPurchesrouter.delete('/delete_party-purches/:id',verifyToken, partyPurchesController.deletePartyPurchesById);

module.exports = partyPurchesrouter;
